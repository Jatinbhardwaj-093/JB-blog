<template>
    <div class="flex flex-col items-center">
        <!-- profile section -->
        <div class="border-gray-500 border-2 rounded-full h-48 w-48 p-0.5 mt-10">
            <div class="rounded-full bg-inherit border-2 border-gray-500 w-full h-full">
                <img src="../assets/profile.png" class="rounded-full w-full h-full object-contain"/>
            </div>
        </div>

        <!-- list section -->
        <div class="flex flex-col items-center mt-10">
            <p 
                :class="{'bg-purple-500 text-white rounded-lg': selectedItem === 'Home'}" 
                class="w-60 p-2 cursor-pointer text-center text-xl font-bold italic"
                @click="selectItem('Home')"
            >
                Home
            </p>
            <p 
                :class="{'bg-purple-500 text-white rounded-lg': selectedItem === 'Blog'}" 
                class="w-60 p-2 cursor-pointer text-center text-xl font-bold italic"
                @click="selectItem('Blog')"
            >
                Blog
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const selectedItem = ref('Home');

const selectItem = (item: string) => {
    selectedItem.value = item;
};
</script>
