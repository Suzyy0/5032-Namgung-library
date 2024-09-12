<template>
  <div class="container">
    <h1 class="text-center mb-4 mt-5">Book List</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ISBN</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.isbn }}</td>
          <td>{{ book.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'; 
import db from '../firebase/init.js'
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';

export default {
  setup() {
    const books = ref([]);

    const fetchBooks = async () => {
      try {
        const q = query(
          collection(db, 'books'),
          where('isbn', '>=', 1000),
          where('isbn', '<', 2000),
          orderBy('isbn', 'asc'),
          limit(5)
        );
        const querySnapshot = await getDocs(q);
        const booksArray = [];

        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });

        books.value = booksArray;
      } catch (error) {
        console.error('Error fetching books: ', error);
      }
    };

    onMounted(() => {
      fetchBooks();
    });

    return {
      books
    };
  }
};
</script>

