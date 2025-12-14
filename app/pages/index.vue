<template>
  <div class="genres-page">
    <h1>Genres</h1>
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search genres..."
      class="search-input"
    />
    <div v-if="error" class="error">{{ error }}</div>
    <div v-else-if="filteredGenres.length === 0" class="no-results">
      No genres found.
    </div>
    <div class="genres-grid">
      <div
        v-for="genre in filteredGenres"
        :key="genre.id"
        class="genre-item"
      >
        <router-link :to="`/genres/${genre.id}`">{{ genre.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, useGenres } from '#imports';

interface Genre {
  id: number;
  name: string;
}

const genres = ref<Genre[]>([]);
const searchQuery = ref<string>('');
const error = ref<string | null>(null);

const filteredGenres = computed(() =>
  genres.value.filter((genre) =>
    genre.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

onMounted(async () => {
  try {
    // Replace with your API call or data fetching logic
    const response = useGenres();
    if (response.error.value) {
      throw new Error(response.error.value.message || 'Failed to fetch genres');
    }
    genres.value = response.data.value || [];
  } catch (err) {
    error.value = (err as Error).message;
  }
});
</script>

<style scoped>
.genres-page {
  padding: 20px;
}
.search-input {
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}
.error {
  color: red;
  margin-bottom: 20px;
}
.no-results {
  color: gray;
  margin-top: 20px;
}
.genres-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
}
.genre-item {
  padding: 10px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  text-align: center;
  border-radius: 5px;
}
.genre-item a {
  text-decoration: none;
  color: #333;
}
.genre-item a:hover {
  text-decoration: underline;
}
</style>