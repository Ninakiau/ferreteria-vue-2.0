<template>
  <div class="col-md-12 col-lg-12">
    <Banner />
    <button><router-link to="/products">Regresar a la lista de Productos</router-link></button>
    <h1>Detalle Producto</h1>
    <div class="card">
      <div v-if="product" class="card">
        <div class="card-header">
          <h5>{{ product.tipo }}</h5>
        </div>
        <div class="card-body text-start">
          <h5>{{ product.nombre }}</h5>
          <p>{{ product.descripcion }}</p>
          <div class="d-flex justify-content-between">
            <p>Precio: {{ product.precio }}</p>
            <p> Stock: {{ product.stock }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Cargando detalles del producto...</p>
      </div>
    </div>
    <FooterVue />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import FooterVue from '@/components/FooterVue.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    id: {
      type: String,
      required: true
    },

  },
  components: {
    Banner,
    FooterVue
  },
  computed: {
    ...mapGetters(['getProductDetails']),

    // Obtener el producto a travez del id pasado por la url
    product() {
      const product = this.getProductDetails(this.id);
      return product;
    }
  },
  created() {
    //Una vez creado el componente, llamar a la accion que llama a la API que nos devolverá los detalles del producto
    this.fetchProductDetails(this.id);
  },
  methods: {
    ...mapActions(['fetchProductDetails']),

  },

};
</script>