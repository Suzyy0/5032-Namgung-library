<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <!-- Show Logout if authenticated, otherwise show Login -->
        <li class="nav-item">
          <router-link v-if="isAuthenticated" to="/logout" class="nav-link" active-class="active">Logout</router-link>
          <router-link v-else to="/login" class="nav-link" active-class="active">Login</router-link>
          <!-- <router-link to="/login" class="nav-link" active-class="active">Login</router-link> -->
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const isAuthenticated = ref(localStorage.getItem('isAuthenticated') === 'true')

    onMounted(() => {
      // Re-check authentication status on component mount
      isAuthenticated.value = localStorage.getItem('isAuthenticated') === 'true'
    })

    return {
      isAuthenticated
    }
  }
}
</script>


<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
