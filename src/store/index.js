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
    registro: registro, //Información requerida en la vista de registro,
    registroErrors: [],
    successRegister: null,
    productDetails: null  // Estado para almacenar los detalles del producto seleccionado
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
     registroErrors: state => state.registroErrors, //Obtenemos los errores de registro
     successRegister: state => state.successRegister, //Obtenemos el estado de registro exitoso
     getProductDetails: state => (id) => {
      return state.productDetails; //Obtenemos los detalles del producto seleccionado
    }
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
    // Mutación para actualizar los detalles del producto
    SET_PRODUCT_DETAILS(state, product) {
      state.productDetails = product;
    },

    // Mutación para establecer los errores de registro
    SET_REGISTRO_ERRORS(state, errors) {
      state.registroErrors = errors;
    },

    // Mutación para limpiar los errores de registro y que no se muestren una vez que se hayan resuelto
    CLEAR_REGISTRO_ERRORS(state) {
      state.registroErrors = [];
    },

    // Mutación para establecer el estado de registro exitoso
    SET_SUCCESS_REGISTER(state, success) {
      state.successRegister = success;
    },

    
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
    // Acción para cargar los detalles del producto por su ID
    async fetchProductDetails({ commit, state }, id) {
      try {
        //Buscamos el producto por su ID, que se pasa como parámetro a través de la url
        const product = state.productos.find(product => product.id == id);
        
        //si el producto es encontrado, lo seteamos en el estado
        if (product) {
          commit('SET_PRODUCT_DETAILS', product);
        } else {
          console.error('Producto no encontrado para el id:', id);
        }
      } catch (error) {
        console.error('Error al obtener los detalles del producto:', error);
  o
      }
    },
    async register({ commit }, payload) {
      try {
        //arrey con los errores de registro
        let errors = [];
  
        // Validaciones
        if (!payload.telefono.match(/^\d{10}$/)) {
          errors.push("Formato de teléfono inválido (debe tener 10 dígitos)");
        }
        if (payload.contrasena !== payload.repetirContrasena) {
          errors.push("Las contraseñas no coinciden");
        }
  
        if (errors.length > 0) {
          commit('SET_REGISTRO_ERRORS', errors);
        } else {
          // Llamada al servicio de registro de usuario si la respuesta es exitosa
          const response = {
            data: {
              respuestaRegistro: {
                status: 'success',
                mensaje: 'Usuario registrado exitosamente en Ferretería Vue 2.0.'
              }
            }
          };
          // Seteamos el estado de registro exitoso
          commit('SET_SUCCESS_REGISTER', response.data.respuestaRegistro);
          // Limpiamos el registro de errores
          commit('CLEAR_REGISTRO_ERRORS');
          // Redirigimos a la vista de éxito
          router.push('/success');
        }
      } catch (error) {
        // Manejo del error de la llamada al servicio
        commit('SET_REGISTRO_ERRORS', ['Error al registrar el usuario']);
      }
    }
  },
  modules: {
  }
})
