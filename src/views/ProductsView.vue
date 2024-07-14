<template>
  <div class="col-md-12 col-lg-12">
    <Banner />
    <div>
      <button><router-link to="/home">Regresar al Home</router-link></button>
      <div class="container">
        <h1>Listado de productos</h1>
        <div class="row">
          <div v-for="product in productos" :key="product.id" class="col- sm-12 col-md-4 col-lg-4 p-1" >
            <router-link :to="'/products/' + product.id" class="text-white text-decoration-none">
              <ProductCard :product="product" />
            </router-link>
          </div>
        </div>
      </div>
      <FooterVue />
    </div>
  </div>

</template>
<script>
import { mapGetters } from 'vuex';
import ProductCard from '../components/ProductCard.vue';
import Banner from '../components/Banner.vue';
import FooterVue from '@/components/FooterVue.vue';
export default {
  components: {
    ProductCard,
    Banner,
    FooterVue
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