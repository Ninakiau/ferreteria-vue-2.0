<template>
    <img src="../assets/img/logo.png" alt="" width="150px">
    <div class="login-form col-md-12 col-lg-12">
        <div class="container d-flex-column justify-content-center text-start" >
            <div class="d-flex text-start">
                <p>Login</p>
            </div>
            <hr>
            <form @submit.prevent="submitLogin" class="form">
                <div class="form-group d-flex flex-column text-start align-items-center">
                    <label for="email">Usuario</label>
                    <input type="email" name="email" id="email" v-model="email" required>
                </div>
                <div class="form-group d-flex flex-column text-start 
                align-items-center">
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" id="password" v-model="password" required>
                    <button type="submit" class="login-button btn btn-primary my-2 w-50">Login</button>
                </div>  
            </form>
            <div v-if="authError" class="error">{{ authError }}</div>
            <br>
            <router-link to="/register">Registrarse</router-link>
            <hr>
        </div>
        
        <hr>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import router from '../router'; 

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    computed: {
        //Mapear getter de vuez al componente
        ...mapGetters(['authError']),
    },

    methods: {
        //Mapear acciones de vuex al componente
        ...mapActions(['login']),
        async submitLogin() {
            try {
                // Llamar a la accion de inicio de sesión de vuex
                await this.login({ email: this.email, password: this.password });
                // Redirigir después de iniciar sesión
                this.$router.push('/');
            } catch (error) {
                console.error('Error durante el inicio de sesión:', error);
                this.$router.push('/login');
            }
        }
    }
}
</script>
<style>
.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 65vh;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(88, 87, 87);
    margin: 2rem;
    width: 100;
}
input{
    width: 100%;
}
label{
    align-self: start;
}
</style>