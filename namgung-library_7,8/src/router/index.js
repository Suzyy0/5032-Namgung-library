import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
// import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'

import store from '../store/store'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
    // beforeEnter:(to, from)=>{
    //   return false
    // }
    // meta: { requiresAuth: true } 
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: LoginView
  // },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/FireSignin',
    name: 'FireSignin',
    component: FirebaseSigninView
  },
  { path: '/logout', 
    name: 'Logout', 
    component: LogoutView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router