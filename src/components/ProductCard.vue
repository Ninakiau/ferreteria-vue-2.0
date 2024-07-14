<template>
  <div class="product-card card">
    <div class="card-header">
      <h5>{{ product.nombre }}</h5>
    </div>
    <div class="card-body">
      <p> {{ product.tipo }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: Object
  }
};
</script>