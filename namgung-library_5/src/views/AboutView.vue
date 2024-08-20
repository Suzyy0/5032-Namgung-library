<template>
  <div class="about">
    <h1>About Our Library</h1>
    <p>Welcome to our digital library! We're dedicated to providing a vast collection of books and resources to our community.</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  beforeRouteEnter(to, from, next) {
    // This guard is called before the route is confirmed.
    // Since the component instance is not available, check authentication.
    if (localStorage.getItem('isAuthenticated') === 'true') {
      next(); // Proceed to route
    } else {
      next('/login'); // Redirect to login
    }
  },
  beforeRouteUpdate(to, from, next) {
    // Called when the route changes but the same component instance is reused.
    next();
  }
};
</script>
  
<style>
.about {
  padding: 20px;
}
</style>