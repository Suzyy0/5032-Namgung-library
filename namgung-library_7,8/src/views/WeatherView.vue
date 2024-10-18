<template>
  <div class="container">
      <div class="header">
          <h1>Weather App</h1>
          <div class="search-bar">
              <input
                  type="text"
                  v-model="city"
                  placeholder="Enter city name"
                  class="search-input"
              />
              <button @click="searchByCity" class="search-button">Search</button>
          </div>
      </div>

      <!-- Display Weather Info -->
      <main v-if="weatherData">
          <h2>
              {{ weatherData.name }}, {{ weatherData.sys.country }}
          </h2>
          <div>
              <img :src="iconUrl" alt="Weather Icon" />
              <p>{{ temperature }} °C</p>
          </div>
          <span>{{ weatherData.weather[0].description }}</span>
      </main>

      <div v-if="error" class="error-message">
          <p>{{ error }}</p>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "WeatherView",
  data() {
      return {
          city: "",
          weatherData: null,
          error: "",
      };
  },
  computed: {
      temperature() {
          return this.weatherData
              ? Math.floor(this.weatherData.main.temp)
              : null;
      },
      iconUrl() {
          return this.weatherData
              ? `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`
              : null;
      },
  },
  methods: {
      // Fetch weather data based on city name
      async searchByCity() {
          if (!this.city) {
              this.error = "Please enter a city name.";
              return;
          }

          // Use the Cloudflare Worker URL as a proxy
          const url = `https://fit5032-suji.snam0007.workers.dev/?city=${this.city}`;

          try {
              const response = await axios.get(url);
              this.weatherData = response.data;
              this.error = "";
          } catch (error) {
              console.error("Error fetching weather data:", error);
              this.error = "City not found or failed to fetch data. Please try again.";
          }
      },

      // Fetch weather data based on the user's current location (optional)
      async fetchCurrentLocationWeather() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(async (position) => {
                  const { latitude, longitude } = position.coords;
                  const url = `https://fit5032-suji.snam0007.workers.dev/?lat=${latitude}&lon=${longitude}`;

                  try {
                      const response = await axios.get(url);
                      this.weatherData = response.data;
                      this.error = "";
                  } catch (error) {
                      console.error("Error fetching location-based weather data:", error);
                      this.error = "Failed to fetch weather data for your location.";
                  }
              });
          } else {
              this.error = "Geolocation is not supported by your browser.";
          }
      },
  },
  mounted() {
      // Optionally fetch weather data based on current location when the page loads
      this.fetchCurrentLocationWeather();
  },
};
</script>

<style scoped>
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

img {
  margin-top: 10px;
  width: 100px;
}

.error-message {
  color: red;
  margin-top: 20px;
}
</style>
