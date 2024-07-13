<template>
    <div>
        <h1>Iniciar Sesión</h1>
    </div>
    <div class="container">
        <form @submit.prevent="submitLogin" class="form">
            <div class="form-group">
                <label for="email">Usuario</label>
                <input type="email" name="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="password" name="password" id="password" v-model="password" required>
            </div>
            <button type="submit" class="login-button" >Ingresar</button>
        </form>
        <div v-if="authError" class="error">{{ authError }}</div>
    </div>
    <router-link to="/register">Registrarse</router-link>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
// import router from '../router'; 

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
        this.$router.push('/products');
      } catch (error) {
        console.error('Error durante el inicio de sesión:', error);
        // this.$router.push('/login');
      }
    }
    }
}
</script>