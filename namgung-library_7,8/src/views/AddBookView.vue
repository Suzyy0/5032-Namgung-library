<template>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
        <div class="card p-4" >
            <h1 class="text-center mb-4">Add Book</h1>
            <form @submit.prevent="addBook">
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="isbn" class="form-label">ISBN:</label>
                        <input type="text" id="isbn" v-model="isbn" class="form-control" required />
                    </div>
                    <div class="col-md-6">
                        <label for="name" class="form-label">Name:</label>
                        <input type="text" id="name" v-model="name" class="form-control" required />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary w-100">Add Book</button>
                <BookList />
            </form>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue";
import db from "../firebase/init.js";
import { collection, addDoc } from "firebase/firestore"; 
import BookList from "../components/BookList.vue";

const isbn = ref('');
const name = ref('');

const addBook = async () => {
    try {
        const isbnNumber = Number(isbn.value); 
        if (isNaN(isbnNumber)) { 
            alert('ISBN must be a valid number');
            return;
        }

        await addDoc(collection(db, 'books'), {
            isbn: isbnNumber,
            name: name.value
        });

        isbn.value = '';
        name.value = '';
        alert('Book added successfully!');
    } catch (error) {
        console.error('Error adding book: ', error);
    }
};
</script>

<script>
export default {
  components: {
    BookList, 
  },
};
</script>