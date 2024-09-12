<template>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="card p-4" style="width: 100%; max-width: 400px;">
        <h2 class="text-center mb-4">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="username" class="form-label">Username:</label>
            <input type="text" id="username" v-model="username" class="form-control" required/>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password:</label>
            <input type="password" id="password" v-model="password" class="form-control" required/>
          </div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
          <p v-if="error" class="text-danger text-center mt-3">{{ error }}</p>
        </form>
      </div>
    </div>
</template>

<script>
  // import { ref } from 'vue'
  // import { useRouter } from 'vue-router'
  import { mapActions } from 'vuex';
  
  // export default {
  //   setup() {
  //     const username = ref('')
  //     const password = ref('')
  //     const error = ref(null)
  //     const router = useRouter()
  
  //     // hardcoded username and password!!
  //     const handleLogin = () => {
  //       if (username.value === 'suji' && password.value === '1234') {
  //         localStorage.setItem('isAuthenticated', 'true')
  //         router.push('/about')
  //       } else {
  //         error.value = 'Invalid credentials'
  //       }
  //     }
  
  //     return {
  //       username,
  //       password,
  //       error,
  //       handleLogin
  //     }
  //   }
  // }

    export default{
      data(){
        return{
          username: '',
          password: '',
        };
      },
      methods: {
        ...mapActions(['login']),
        handleLogin(){
          const user = {username: this.username, password: this.password};
          this.login(user);
          this.$router.push({name: 'Home'});
        },
      },
    };
  </script>
  