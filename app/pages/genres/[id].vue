<template>
  <div v-if="pending">Loading genre...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <Genre v-else-if="genre"
    :genre="genre"
  />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAsyncData, useHead, computed } from '#imports'

interface SingaGenre {
  id: number;
  resource_id: string;
  name: string;
  created: string;
  updated: string;
  imagebank: {
    id: number;
    title: string;
    images: string;
  };
}

const route = useRoute()
const id = route.params.id

const { data: genre, pending, error } = await useAsyncData<SingaGenre>(
  `genre-${id}`,
  () => $fetch(`https://api.singa.com/v1.4/genres/${id}/`)
)

useHead(computed(() => genre.value ? {
  title: genre.value.name,
  meta: [
    { name: 'description', content: `Details about the genre ${genre.value.name}` }
  ]
} : {
  title: 'Genre Details',
  meta: [
    { name: 'description', content: 'Details of the selected genre' }
  ]
}))
</script>