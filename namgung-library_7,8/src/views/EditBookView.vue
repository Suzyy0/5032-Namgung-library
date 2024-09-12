<template>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="card p-4">
        <h1 class="text-center mb-4">Edit Book</h1>
        <form @submit.prevent="updateBook">
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
        <button type="submit" class="btn btn-primary w-100">Update Book</button>
        <button type="button" @click="deleteBook" class="btn btn-danger w-100 mt-3">Delete Book</button>
        <BookList />
        </form>
      </div>
    </div>
</template>
    
  
<script setup>
import { ref } from "vue";
import { collection, query, where, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import db from "../firebase/init.js";
import BookList from "../components/BookList.vue";

const isbn = ref(null);
const name = ref('');

// update
const updateBook = async () => {
  try {
    if (!isbn.value || !name.value) {
      alert("Please provide both ISBN and New Name");
      return;
    }

    const isbnNumber = Number(isbn.value);
    if (isNaN(isbnNumber)) {
      alert("ISBN must be a valid number");
      return;
    }

    // debugging
    console.log("ISBN:", isbnNumber);
    console.log("UPDATED Name:", name.value);

    const booksRef = collection(db, "books");
    const q = query(booksRef, where("isbn", "==", isbnNumber));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      alert("No book found with the provided ISBN");
      return;
    }

    querySnapshot.forEach(async (docSnap) => {
      const bookRef = doc(db, "books", docSnap.id);
      await updateDoc(bookRef, { name: name.value });
      alert(`Book with ISBN: ${isbnNumber} updated with new name: ${name.value}`);
    });
  } catch (error) {
    console.error("Error updating book name:", error);
    alert("Failed to update book name");
  }
};

// delete
const deleteBook = async () => {
  try {
    if (!isbn.value || !name.value) {
      alert("Please provide both ISBN and Name");
      return;
    }

    const isbnNumber = Number(isbn.value);
    if (isNaN(isbnNumber)) {
      alert("ISBN must be a valid number");
      return;
    }

    // debugging
    console.log("ISBN:", isbnNumber);
    console.log("Name:", name.value);

    const booksRef = collection(db, "books");
    const q = query(booksRef, where("isbn", "==", isbnNumber), where("name", "==", name.value));
    const querySnapshot = await getDocs(q);

    console.log("Query RESULT!:", querySnapshot);

    if (querySnapshot.empty) {
      alert("No book found with the provided ISBN and Name");
      return;
    }

    querySnapshot.forEach(async (docSnap) => {
      console.log(`Deleting document with ID: ${docSnap.id}`); // debugging
      const bookRef = doc(db, "books", docSnap.id);
      await deleteDoc(bookRef);
      alert(`Book with ISBN: ${isbnNumber} and Name: ${name.value} deleted successfully!`);
    });
  } catch (error) {
    console.error("Error deleting book:", error);
    alert("Failed to delete book");
  }
};
</script>