<template>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="text-center">
        <h2>You have been logged out.</h2>
        <p>Redirecting to the login page...</p>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  export default {
    setup() {
      const router = useRouter()
  
      onMounted(() => {
        localStorage.removeItem('isAuthenticated')
        router.push('/login')
      })
    }
  }
  </script>
  
  <style scoped>
  .container {
    height: 100vh;
  }
  
  .text-center {
    max-width: 400px;
    margin: 0 auto;
  }
  </style>
  