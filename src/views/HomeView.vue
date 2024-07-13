<template>
    <div>
        <h1>Informacion general</h1>
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Costo Actual</th>
                    <th>Niveles de Stock</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(costo, producto) in inventario.costo_actual" :key="producto">
                    <td>{{ producto }}</td>
                    <td>{{ costo }}</td>
                    <td>{{ inventario.niveles_stock[producto] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>
        <h1>Proveedores</h1>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="proveedor in proveedores" :key="proveedor.nombre">
                    <td>{{ proveedor.nombre }}</td>
                    <td>{{ proveedor.contacto }}</td>
                    <td>{{ proveedor.telefono }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>
        <h1>Promociones Activas</h1>
        <div v-for="promocion in promociones" :key="promocion.nombre" class="card">
      <h2>{{ promocion.nombre }}</h2>
      <p>{{ promocion.descripcion }}</p>
      <p><strong>Fecha de Inicio:</strong> {{ promocion.fecha_inicio }}</p>
      <p><strong>Fecha de Fin:</strong> {{ promocion.fecha_fin }}</p>
    </div>
    </div>
    <div>
        <h1>Listado de Productos</h1>
        <button><router-link to="/products">VER LISTADO DE PRODUCTOS</router-link></button>
    </div>
    <div>
        <div>
            <h5>Redes Sociales</h5>
            <div>
                <a :href="redesSociales.facebook" target="_blank">Facebook</a>
                
                <a :href="redesSociales.instagram" target="_blank">Instagram</a>
                <a :href="redesSociales.twitter" target="_blank">Twitter</a>
            </div>
        </div>
        <div>
            <h5>Contacto</h5>
            <div>
                <p> {{ direccion }}</p>
                <ul>
        <li v-for="telefono in telefonos" :key="telefono">{{ telefono }}</li>
      </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {

        };
    }, computed: {
        ...mapGetters(['inventario', 'proveedores', 'promociones', 'redesSociales', 'direccion', 'telefonos']),
    }
}
</script>