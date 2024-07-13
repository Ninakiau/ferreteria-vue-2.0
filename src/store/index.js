import { createStore } from 'vuex'
import router from '../router'
import  usuario  from '../db/login.json'
import  productos  from '../db/productos.json'
import home  from '../db/home.json'
import registro  from '../db/registroreq.json'
import successRegister  from '../db/registroresp.json'

export default createStore({
  //Definimos los estados iniciales de la ferreteria
  state: {
    usuario: usuario.usuario, //Lista de ususarios extraida de db/usuarios.json
    isAuthenticated: false, //Estado de autentificación del usuario
    authError: null, //Error de autentificación 
    productos: productos.productos, //Lista de productos extraida de db/productos.json,
    home: home.paginaHome, //Información requerida en la vista home,
    registro, //Información requerida en la vista de registro,
    successRegister, //Información requerida en la vista de exito de registro
  },
  getters: {
     //Definimos los getters para poder acceder a los estados 
     isAuthenticated: state => state.isAuthenticated, //Obtenemos el estado de autentificación true or false
     authError: state => state.authError, //Obtenemos el error de autentificación
     productos: state => state.productos, //Obtenemos el estado de la lista de productos
     inventario: state => state.home.inventario, //Obtenemos la información del inventario
     proveedores: state => state.home.proveedores, //Obtenemos la información de los proveedores
     promociones: state => state.home.promociones, //Obtenemos la información de las promociones
     redesSociales: state => state.home.redes_sociales, //Obtenemos la información de las redes sociales
     direccion: state => state.home.direccion,
     telefonos: state => state.home.telefonos,
     registro: state => state.registro, //Obtenemos la información de la vista de registro
     successRegister: state => state.successRegister, //Obtenemos la información de la vista de exito de registro,
  },
  mutations: {
    //Mutaciones que nos permiten modificar los el estado 
    //Seteamos el estado de autentificación, pasamos el state y el nuevo estado
    SET_AUTH(state, status){
      state.isAuthenticated= status //Establecemos el estado de autentificación
    },

    //Seteamos el error de autentificación, pasando el state y el nuevo error
    SET_AUTH_ERROR(state, error){ 
      state.authError = error //Establecemos el error de autentificación
    },

    //Seteamos un el nuevo estado de la lista productos, pasamos el state y la nueva lista de productos
  },
  actions: {
     //Acciones para ejecutar lógica asíncrona y llamar mutaciones
     //Login de usuario, le pasamos el state y los datos del usuario
     login({ commit, state }, { email, password }) {
      const user = state.usuario;

      if (user.nombre_usuario === email && user.contrasena === password) {
        commit('SET_AUTH', true);
        commit('SET_AUTH_ERROR', null);
        router.push('/products');
      } else {
        commit('SET_AUTH_ERROR', 'Usuario o contraseña incorrectos');
        commit('SET_AUTH', false);
      }
    },

    //Logout de usuario, simplemente seteamos el estado de autentificación en falso
    logout({commit}){
    commit('SET_AUTH', false) //Establecemos el estado de autentificación en falso, desautorizando al usuario
    },
  },
  modules: {
  }
})
