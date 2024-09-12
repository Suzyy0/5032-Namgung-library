// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store';

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)
app.use(store)
// app.component('DataTable', DataTable)
// app.component('Column', Column)
app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc9e1ncVXa1kJAMsRvFqhf05ewFxmyvww",
  authDomain: "week7-suji.firebaseapp.com",
  projectId: "week7-suji",
  storageBucket: "week7-suji.appspot.com",
  messagingSenderId: "551574924780",
  appId: "1:551574924780:web:9076d0d5f35c7203b2e4c9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firestore and export it
const db = getFirestore()
export default db

