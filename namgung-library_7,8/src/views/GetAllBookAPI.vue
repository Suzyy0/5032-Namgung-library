<template>
    <div class="container">
      <h1>All Books</h1>
      <pre>{{ jsondata }}</pre>
      <div v-if="error" class="error-message">
        <p>{{ error }}</p>
      </div>
    </div>
</template>
  
<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        jsondata: null,
        error: null,
      };
    },
    mounted() {
      this.getAllBooks();
    },
    methods: {
      async getAllBooks() {
        try {
          // Call the backend API to get all book data
          const response = await axios.get('https://getallbooks-3pt4coqmfq-uc.a.run.app');
          this.jsondata = JSON.stringify(response.data, null, 2);
          this.error = null;
        } catch (error) {
          console.error('Error fetching book data:', error);
          this.error = 'Error fetching book data. Please try again.';
        }
      },
    },
  };
</script>
  
<style scoped>
  .container {
    text-align: center;
    margin-top: 20px;
  }
  
  pre {
    background-color: #f4f4f4;
    padding: 10px;
    border-radius: 5px;
    text-align: left;
  }
  
  .error-message {
    color: red;
    margin-top: 20px;
  }
  </style>
  