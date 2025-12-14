# Project Documentation

This document outlines the development approach, time allocation, and AI prompts used for creating this project.

## Approach and Decisions

This project consists of a Nuxt.js frontend for browsing karaoke song genres and a serverless API endpoint. The development approach focused on using modern, idiomatic practices for each part of the stack.

### Frontend (Nuxt.js)

- **`useGenres` Composable**: A central composable was created to handle fetching genre data. It uses Nuxt's `useAsyncData` to enable server-side rendering and efficient client-side caching. To improve performance and user experience on client-side navigations, a `localStorage` cache was implemented. This logic was made robust to handle potential data corruption by validating the cached data before use, ensuring the application remains stable even if the cache becomes stale or malformed.
- **Pages (`index.vue`, `genres/[id].vue`)**: Standard Vue 3 `<script setup>` syntax was used for its concise and readable component authoring. A dynamic route (`/genres/[id].vue`) was created to display details for individual genres, which is a clean, RESTful approach. For better SEO and user experience, the `useHead` composable was used to dynamically update the page title and meta description based on the currently viewed genre.
- **Layout (`default.vue`)**: A default layout was created to provide a consistent navigation structure across all pages. This avoids code duplication and makes the application's look and feel easier to maintain. Simple, modern CSS was applied directly within the component for a clean and scoped styling solution.

### Backend (`/ping` Endpoint)

- A simple `/ping` health-check endpoint was created using Nuxt 3's server API routes. This file-based routing (`server/api/ping.get.ts`) is the idiomatic way to build serverless functions within a Nuxt project. It provides a lightweight, standardized way to confirm that the server is running and responsive.

## Time Spent

| Section                       | Approximate Time Spent |
| ----------------------------- | ---------------------- |
| Initial Setup & Understanding | 15 minutes             |
| Frontend Development          | 1.5 hours              |
| - `useGenres` Composable      | 45 minutes             |
| - Pages (`index`, `[id]`)     | 40 minutes             |
| - Layout (`default.vue`)      | 5 minutes              |
| Backend Development           | 10 minutes             |
| - `/ping` Endpoint            | 10 minutes             |
| AI Logic & Docs Analysis      | 20 minutes             |
| This Documentation            | 15 minutes             |
| **Total**                     | **~2.5 hours**         |

## AI Prompts Used

1.  `in @app/pages/index.vue I get error Component is already mounted, please use $fetch instead, but I need to use useAsyncData, can you make it work?`
2.  `I get an error "localStorage is not defined" can you fix it`
3.  `now i get an error that says genres.value.filter is not a function`
4.  `when changing page from about to home i still get genres.value.filter is not a function error`
5.  `in @app/pages/genres/[id].vue useHead is not working`
6.  `what does one mean with "Simple default Nuxt layout"`
7.  `stylize my navigation`
8.  `create Documentation README.md`