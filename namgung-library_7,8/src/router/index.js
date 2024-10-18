import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AddBookView from '../views/AddBookView.vue'
import EditBookView from '../views/EditBookView.vue'
// import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import GetBookCountView from '../views/GetBookCountView.vue'
import store from '../store/store'; 
import WeatherView from '../views/WeatherView.vue'
import CountBookAPI from '../views/CountBookAPI.vue'
import GetAllBookAPI from '../views/GetAllBookAPI.vue'

const routes = [
  {
    path: '/GetAllBookAPI',
    name: 'GetAllBookAPI',
    component: GetAllBookAPI
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  },
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/editbook',
    name: 'EditBook',
    component: EditBookView
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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router