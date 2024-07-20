import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import Register from '../views/RegisterView.vue'
import DetailProducs from '@/views/DetailProduct.vue'
import SuccesRegisterView from '@/views/SuccesRegisterView.vue'
import ProductsView from '@/views/ProductsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{ requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component : Register
  },
  {
    path: '/products',
    name: 'products',
    component : ProductsView,
    meta:{ requiresAuth: true }
  },
  {
    path: '/products/:id',
    name: 'detailProduct',
    component : DetailProducs,
    meta:{ requiresAuth: true },
    props: true //Permite pasar props como parámetros a la ruta
  },
  {
    path: '/success',
    name: 'success',
    component: SuccesRegisterView,
    meta:{ requiresAuth: false }
  },
  {
    path: '/:catchAll(.*)',  // Ruta de que permite manejar un 404
    name: 'notFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  // Verifica si la ruta a la que se está navegando requiere autenticación
  if (to.meta.requiresAuth) {
    // Verifica si el usuario está autenticado usando Vuex store
    if (!store.getters.isAuthenticated) {
      // Si no está autenticado, redirige al login
      next({ name: 'login' });
    } else {
      // Si está autenticado, permite la navegación
      next();
    }
  } else {
    // Si la ruta no requiere autenticación, permite la navegación
    next();
  }
});

export default router
