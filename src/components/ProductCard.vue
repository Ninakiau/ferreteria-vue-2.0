<template>
    <div class="product-card">
      <h2>{{ productName }}</h2>
      <p> {{ productType }}</p>
      <!-- Otros detalles que desees mostrar en la lista de productos -->
    </div>
</template>
<script>
export default {
  props: {
    productType: String,
    productName: String,
    product: Object
  }
};
</script>