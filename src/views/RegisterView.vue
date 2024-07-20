<template>
  <img src="../assets/img/logo.png" alt="" width="150px">
  <div class="register-form col-md-12 col-lg-12 ">
    <div class="container d-flex-column justify-content-center text-start">
      <p>Registro</p>
      <hr>
      <form @submit.prevent="handleRegister" class="form d-flex flex-column align-items-center">
        <div class="form-group d-flex flex-column text-start align-items-center">
          <label>Email:</label>
          <input v-model="email" type="email" required />
        </div>
        <div class="form-group d-flex flex-column text-start align-items-center">
          <label>Teléfono:</label>
          <input v-model="telefono" type="text" required />
        </div>
        <div class="form-group d-flex flex-column text-start align-items-center">
          <label>Contraseña:</label>
          <input v-model="contrasena" type="password" required />
        </div>
        <div class="form-group d-flex flex-column text-start align-items-center">
          <label>Repetir Contraseña:</label>
          <input v-model="repetirContrasena" type="password" required />
        </div>
        <div v-if="registroErrors.length">
          <ul>
            <li v-for="error in registroErrors" :key="error">{{ error }}</li>
          </ul>
        </div>
        <button type="submit" class="register-button btn btn-primary m-4 w-50">Registrarme</button>
      </form>
    </div>


    <button @click="goToLogin">Regresar al login</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      email: '',
      telefono: '',
      contrasena: '',
      repetirContrasena: ''
    };
  },
  computed: {
    //Mapear getter de registro de errores de vuex al comeponente
    ...mapGetters(['registroErrors'])
  },
  methods: {
    ...mapActions(['register']),

    //Funcion para redirigir al login
    goToLogin() {
      this.$router.push('/login');
    },
    //Funcion para registrar un ususario
    handleRegister() {
      //llamar a los datos del formulario
      const payload = {
        email: this.email,
        telefono: this.telefono,
        contrasena: this.contrasena,
        repetirContrasena: this.repetirContrasena
      };
      //llamar a la accion de registro
      this.register(payload).then(() => {
        if (!this.registroErrors.length) {
          //redirigir a la página de registro exitoso
          this.$router.push('/success');
        }
      });
    }
  }
};
</script>

<style>
.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65vh;
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(88, 87, 87);
  margin: 2rem;
}

input {
  width: 90%;
}

label {
  align-self: start;
}
</style>