<script setup>
import { defineProps } from 'vue';
const props = defineProps(['movie'])
</script>
<template>
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-5">
        <div class="flex justify-center pt-8">
            <img class="" :src="movie.poster" />
        </div>
        <div class="py-5 px-10">

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ movie.title }}
            </h5>

            <span class="mr-4 text-white">{{ movie.year }}</span>
            <span class="text-white">{{ movie.runtime }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>