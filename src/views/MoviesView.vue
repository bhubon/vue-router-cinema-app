<script setup>
import { reactive, ref, onMounted } from 'vue';
import MovieCard from "../components/MovieCard.vue";


let movieLists = reactive([]);
let isLoading = ref(true);

onMounted(() => {
    fetch("https://raw.githubusercontent.com/faisal2410/ostad_router/main/database/db.json")
        .then(response => response.json())
        .then(apiMovies => {
            movieLists = apiMovies.movies
            console.log(movieLists)
            isLoading.value = false
        }).catch(error => {
            console.error("Eroor Fetching", error)
            isLoading.value = false
        })
})
</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>
    <div v-else class="grid grid-cols-3 gap-4 container mx-auto">
        <MovieCard
        v-for="movie in movieLists"
        :key="movie.id"
        :movie="movie"
        />
    </div>
</template>



<style lang="scss" scoped></style>