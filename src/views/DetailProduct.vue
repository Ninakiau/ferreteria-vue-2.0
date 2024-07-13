<template>
    <div>
        <button><router-link to="/products">Regresar a la lista de Productos</router-link></button>
        <div>
            <h1>Detalle Producto</h1>
            <div>
                <h3>{{ product.tipo }}</h3>
                <h3>{{ product.nombre }}</h3>
                <p>{{ product.descripcion }}</p>
                <p>{{ product.precio }}</p>
                <p>{{ product.stock }}</p>
            </div>
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
