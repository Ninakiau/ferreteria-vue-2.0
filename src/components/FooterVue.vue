<template>
     <div class="container-home d-flex justify-content-around align-items-start">
        <div>
            <h5>Redes Sociales</h5>
            <div class="d-flex gap-2 justify-content-center">
                <a :href="redesSociales.facebook" target="_blank"><i class="fa-brands fa-facebook"></i></a>

                <a :href="redesSociales.instagram" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a :href="redesSociales.twitter" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            </div>
        </div>
        <div>
            <h5>Contacto</h5>
            <div>
                <p c> {{ direccion }}</p>
                <ul class="d-flex gap-2">
                    <li v-for="telefono in telefonos" :key="telefono" class="list-unstyled ">{{ telefono }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    name: 'FooterVue',

    computed: {
        ...mapGetters(['redesSociales', 'direccion', 'telefonos'])
    }
}
</script>
<style>
a,i{
    text-decoration: none;
    color: black;
    

}
</style>