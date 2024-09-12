<template>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
        <div class="card p-4" style="width: 100%; max-width: 400px;">
            <h2 class="text-center mb-4">Create an Account</h2>
            <form @submit.prevent="register">
                <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="text" id="email" v-model="email" class="form-control" required />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password:</label>
                    <input type="text" id="password" v-model="password" class="form-control" required />
                </div>
                <div class="mb-3">
                    <label for="usertype" class="form-label">User Type:</label>
                    <select class="form-select" id="usertype" v-model="usertype" required>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary w-100">Register</button>
                <p v-if="error" class="text-danger text-center mt-3">{{ error }}</p>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Firebase Firestore init
const db = getFirestore();

const email = ref("");
const password = ref("");
const usertype = ref("user");
const error = ref(null);

const router = useRouter();
const auth = getAuth();

const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;

            // Store usertype in Firestore
            return setDoc(doc(db, "users", user.uid), {
                email: email.value,
                usertype: usertype.value
            });
        })
        .then(() => {
            console.log("User successfully registered and usertype saved!");
            router.push("FireSignin");
        })
        .catch((err) => {
            error.value = "Registration failed: " + err.message;
        });
};
</script>
