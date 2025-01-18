<template>
    <div class="flex flex-col items-center bg-gray-100 h-screen">
        <!-- profile section -->
        <div class="border-gray-500 border-2 rounded-full h-48 w-48 p-0.5 mt-10">
            <div class="rounded-full bg-inherit border-2 border-gray-500 w-full h-full">
                <img src="./assets/profile.png" class="rounded-full w-full h-full object-contain"/>
            </div>
        </div>

        <!-- list section -->
        <div class="flex flex-col items-center mt-10">
            <p 
                :class="{'bg-purple-500 text-white rounded-lg': selectedItem === 'Home'}" 
                class="w-60 p-2 cursor-pointer text-center text-xl font-bold font-raleway"
                @click="selectItem('Home')"
            >
                Home
            </p>
            <p 
                :class="{'bg-purple-500 text-white rounded-lg': selectedItem === 'Sympy3DPolygon_Module'}" 
                class="w-60 p-2 cursor-pointer text-center text-md font-bold font-raleway"
                @click="selectItem('Sympy3DPolygon_Module')"
            >
                Sympy 3DPolygon Module
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { useRouter } from 'vue-router'; // Add this line

const selectedItem = ref('Home');
const emit = defineEmits(['itemSelected']);
const router = useRouter(); // Add this line

const selectItem = (item: string) => {
    selectedItem.value = item;
    emit('itemSelected', item);
    router.push({ name: item }); // Add this line
};
</script>

<style scoped>
</style>
