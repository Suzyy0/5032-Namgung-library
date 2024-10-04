<template>
    <div class="container">
      <div class="header">
        <h1>WEATHER APP</h1> 
        <div class="search-bar">
          <input
            type="text" 
            v-model="city"
            placeholder="Enter city name" 
            class="search-input"
          />
          <button @click="searchByCity" class="search-button">
            Search
          </button>
        </div>
      </div>
      <div v-if="weatherData" class="weather-info">
        <h2>Weather in {{ weatherData.name }}</h2>
        <p>Temperature: {{ weatherData.main.temp }}°C</p>
        <p>Condition: {{ weatherData.weather[0].description }}</p>
      </div>
      <div v-if="error" class="error-message">
        <p>{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import axios from "axios";
  
  const city = ref('');
  const weatherData = ref(null);
  const error = ref('');
  
  // Method to fetch weather data by city
  const searchByCity = async () => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  
    if (!city.value) {
      error.value = "Please enter a city name!";
      return;
    }
  
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apiKey}`
    );
      weatherData.value = response.data;
      error.value = '';
    } catch (err) {
      console.error(err);
      error.value = "City not found. Please try again.";
    }
  };
  </script>
  
  <style>
  .container {
    text-align: center;
  }
  
  .search-bar {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  
  .search-input {
    padding: 10px;
    width: 300px;
    margin-right: 10px;
  }
  
  .search-button {
    padding: 10px 20px;
  }
  
  .weather-info {
    margin-top: 20px;
  }
  
  .error-message {
    color: red;
    margin-top: 20px;
  }
  </style>
  