import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
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
    component: AboutView,
    beforeEnter:(to, from)=>{
      return false
    }
    // meta: { requiresAuth: true } 
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  { path: '/logout', 
    name: 'Logout', 
    component: LogoutView }, 

]

const router = createRouter({
  history: createWebHistory(),
  routes
})


//to: which navigation to, and from is where does it come from
router.beforeEach((to, from, next) => {
  if (!store.state.isAuthenticated && to.name !== 'Login') {
    return ({name: 'Login'});
  } else {
    next();
  }
});

export default router