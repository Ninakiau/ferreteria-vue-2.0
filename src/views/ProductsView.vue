<template>
    <div>
        <button><router-link to="/home">Regresar al Home</router-link></button>
        <div>
            <h1>Listado de productos</h1>
            <div v-for="(product, index) in productos" :key="product.id">
                <router-link :to="'/products/' + product.id">
                    <ProductCard :productType="product.tipo" :productName="product.nombre" :product="product" />
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import ProductCard from '../components/ProductCard.vue'; 
export default {
  components: {
    ProductCard
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters(['productos'])
  }
};
</script>