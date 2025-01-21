<template>
    <div class="flex flex-col items-center bg-green-100 h-screen">
        <!-- profile section -->
        <div class="border-green-500 border-2 rounded-full h-48 w-48 p-0.5 mt-10">
            <div class="rounded-full bg-inherit border-2 border-green-500 w-full h-full">
                <img src="./assets/profile.png" class="rounded-full w-full h-full object-contain"/>
            </div>
        </div>

        <!-- list section -->
        <div class="flex flex-col items-center mt-10 flex-grow">
            <p 
                :class="{'bg-green-500 text-white rounded-lg': selectedItem === 'Home'}" 
                class="w-60 p-2 cursor-pointer text-center text-xl font-bold font-raleway"
                @click="selectItem('Home')"
            >
                Home
            </p>
            <p 
                :class="{'bg-green-500 text-white rounded-lg': selectedItem === 'SympyDiffGeom_Module'}" 
                class="w-60 p-2 cursor-pointer text-center text-md font-bold font-raleway"
                @click="selectItem('SympyDiffGeom_Module')"
            >
                Sympy Diff Geom Module
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref} from 'vue';
import { useRouter } from 'vue-router'; 

const selectedItem = ref('Home');
const emit = defineEmits(['itemSelected']);
const router = useRouter(); 

const selectItem = (item: string) => {
    selectedItem.value = item;
    emit('itemSelected', item);
    router.push({ name: item }); 
};
</script>
