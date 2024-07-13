<template>
    <div class="product-card">
      <h2>{{ product.nombre }}</h2>
      <p> {{ product.tipo }}</p>
      <!-- Otros detalles que desees mostrar en la lista de productos -->
    </div>
</template>
<script>
export default {
  props: {
    product: Object
  }
};
</script>