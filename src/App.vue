<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="text-3xl text-center text-green-700 bg-red-100 font-bold py-4">
    <RouterLink class="mr-[30px] hover:text-blue-400 transition-all " to="/">Home</RouterLink>
    <RouterLink class="mr-[30px] hover:text-blue-400 transition-all " to="/about">About</RouterLink>
    <RouterLink class="mr-[30px] hover:text-blue-400 transition-all " to="/movies">Movies</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped></style>
