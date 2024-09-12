<template>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
        <div class="card p-4" style="width: 100%; max-width: 400px;">
            <h2 class="text-center mb-4">Sign In</h2>
            <form @submit.prevent="signin">
                <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" id="email" v-model="email" class="form-control" required />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password:</label>
                    <input type="password" id="password" v-model="password" class="form-control" required />
                </div>
                <button type="submit" class="btn btn-primary w-100">Sign In</button>
                <p v-if="error" class="text-danger text-center mt-3">{{ error }}</p>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore"; 
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const error = ref(null);
const router = useRouter();
const auth = getAuth();
const db = getFirestore();  //create Firestore instance

const signin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      const userDocRef = doc(db, "users", user.uid); 
      return getDoc(userDocRef);
    })
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        console.log("Signed in as:", userData.usertype);  //print usertype
      }
      router.push("/");
    })
    .catch((err) => {
      error.value = "Sign in failed: " + err.message;
    });
};
</script>
