<template>
  <div class="genre-page">
    <h1>{{ genre.name }}</h1>
    <p>ID: {{ genre.id }}</p>
    <p>Created: {{ genre.created }}</p>
    <p>Updated: {{ genre.updated }}</p>
    <div v-if="genre.imagebank">
    <h2>Image Bank</h2>
    <p>Title: {{ genre.imagebank.title }}</p>
    </div>
    <nuxt-link to="/">Back to genres</nuxt-link>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';
  defineProps<{
    genre: {
      id: number;
      name: string;
      created: string;
      updated: string;
      imagebank?: {
        title: string;
      };
    };
  }>();
</script>

<style scoped>
.genre-page {
  padding: 20px;
}
</style>
