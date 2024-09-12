<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="card p-4" style="width: 100%; max-width: 400px;">
          <h2 class="text-center mb-4">You are signed in as:</h2>
          <p>{{ user ? user.email : 'No user signed in' }}</p>
          <button @click="logout" class="btn btn-primary w-100">Log Out</button>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const auth = getAuth();
const user = ref(auth.currentUser);  // current user
const router = useRouter();

const logout = () => {
  signOut(auth).then(() => {
      console.log("User signed out:", user.value.email);
      user.value = null;
      router.push("/FireSignin");
  }).catch((error) => {
      console.error("Sign out error:", error);
  });
};

onMounted(() => {
  console.log("Current user:", user.value ? user.value.email : "No user signed in");
});
</script>
