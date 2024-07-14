<template>
    <div>
      <h2>Confirmación de Registro</h2>
      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>
      <router-link to="/login">Ir al inicio de sesión</router-link>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['successRegister']),
      successMessage() {
        return this.successRegister ? this.successRegister.mensaje : '';
      }
    }
  };
  </script>
  
  <style scoped>
  .success-message {
    color: green;
    font-weight: bold;
  }
  </style>
  