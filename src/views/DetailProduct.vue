<template>
    <div>
      <button><router-link to="/products">Regresar a la lista de Productos</router-link></button>
      <div>
        <h1>Detalle Producto</h1>
        <div v-if="product">
          <h3>{{ product.tipo }}</h3>
          <h3>{{ product.nombre }}</h3>
          <p>{{ product.descripcion }}</p>
          <p>{{ product.precio }}</p>
          <p>{{ product.stock }}</p>
        </div>
        <div v-else>
          <p>Cargando detalles del producto...</p>
        </div>
      </div>
    </div>
  </template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    id:{
      type: String,
      required: true
    },

  },
  computed: {
    ...mapGetters(['getProductDetails']),
    product() {
      const product = this.getProductDetails(this.id);
      console.log('Computed product:', product); // Log para verificar el producto obtenido
      return product;
    }
  },
  created() {
    console.log('Component created with id:', this.id); // Log para verificar la creación del componente
    this.fetchProductDetails(this.id);
  },
  methods: {
    ...mapActions(['fetchProductDetails']),

  },

};
</script>