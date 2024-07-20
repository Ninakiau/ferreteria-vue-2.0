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
        <div class="d-flex flex-column justify-content-space-evenly gap-1">
            <h5>Contacto</h5>
            <div class="d-flex flex-wrap justify-content-center flex-column align-items-center">
                <p class="direccion"> {{ direccion }}</p>
                <ul class="d-flex gap-2 flex-wrap justify-content-center align-items-center">
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
.direccion{
    word-wrap: break-word;
}
p{
font-size: .8rem;
word-wrap: break-word;
}
</style>