<template>
    <div class="col-md-12 col-sm- mx-sm-1">
      <Banner />
      <div class="container-home text-start">
        <h5>Informacion general</h5>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Costo Actual</th>
              <th>Niveles de Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(costo, producto) in inventario.costo_actual" :key="producto">
              <td class="text-wrap">{{ producto }}</td>
              <td class="text-wrap">{{ costo }}</td>
              <td class="text-wrap">{{ inventario.niveles_stock[producto] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container-home text-start">
        <h5>Proveedores</h5>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="proveedor in proveedores" :key="proveedor.nombre">
              <td class="text-wrap">{{ proveedor.nombre }}</td>
              <td class="text-wrap">{{ proveedor.contacto }}</td>
              <td class="text-wrap">{{ proveedor.telefono }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container-home d-flex flex-column text-start">
        <h5>Promociones Activas</h5>
        <div class="d-flex gap-2">
          <div v-for="promocion in promociones" :key="promocion.nombre" class="card d-flex justify-content-center text-center">
            <div class="card-header">
              <p>{{ promocion.nombre }}</p>
            </div>
            <div class="card-body d-flex flex-column text-start">
              <p>{{ promocion.descripcion }}</p>
              <p><strong>Fecha de Inicio:</strong> {{ promocion.fecha_inicio }}</p>
              <p><strong>Fecha de Fin:</strong> {{ promocion.fecha_fin }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-productos">
        <h1>Listado de Productos</h1>
        <button class="btn btn-primary">
          <router-link to="/products" class="text-white text-decoration-none">VER LISTADO DE PRODUCTOS</router-link>
        </button>
      </div>
      <FooterVue />
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  import Banner from '../components/Banner.vue';
  import FooterVue from '@/components/FooterVue.vue';
  
  export default {
    components: {
      Banner,
      FooterVue
    },
    computed: {
        //traemos los getters con la informacion de la home store
      ...mapGetters(['inventario', 'proveedores', 'promociones', 'redesSociales', 'direccion', 'telefonos']),
    }
  }
  </script>
  
  <style>
  .container-home {
    border: solid;
    border-width: 1px;
    border-color: rgb(88, 87, 87);
    border-radius: 1rem;
    margin: .5rem;
    padding: 1rem;
  }
  .container-productos {
    background-color: rgb(202, 202, 202);
    margin: 1rem;
    padding: 1rem;
    height: 25vh;
  }
  router-link {
    text-decoration: none;
    color: aliceblue;
  }
  .table td, .table th {
    white-space: normal; /* Permite el ajuste del texto */
    word-wrap: break-word; /* Ajusta el texto dentro de las celdas */
    max-width: .0rem; /* Ajusta este valor según tus necesidades */
  }
  td, th{
    word-wrap: break-word;
  }
  </style>
  