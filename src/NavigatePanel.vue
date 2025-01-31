<template>
    <div class="flex flex-col items-center bg-gray-100 h-screen">
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
                Sympy diffgeom Module
            </p>
        </div>

        <!-- social media section -->
        <div class="flex flex-row items-center mt-10 mb-5 space-x-4">
            <a href="https://www.linkedin.com/in/jatin-bhardwaj-b5962921a/" rel="noopener noreferrer" target="_blank" aria-label="LinkedIn" class="hover:text-green-400">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.5c.878-1.314 2.356-2.5 4-2.5 2.485 0 4.5 2.015 4.5 4.5v6.5z"/>
                </svg>
            </a>
            <a href="https://github.com/Jatinbhardwaj-093" rel="noopener noreferrer" target="_blank" aria-label="GitHub" class="hover:text-green-400">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.435.375.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.577 4.765-1.587 8.2-6.084 8.2-11.387 0-6.627-5.373-12-12-12z"/>
                </svg>
            </a>
            <a href="https://x.com/Jatin0932" rel="noopener noreferrer" target="_blank" aria-label="Twitter" class="hover:text-green-400">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </a>
            <a href="https://jatinbhardwaj-093.github.io/JB-Portfolio/" rel="noopener noreferrer" target="_blank" aria-label="Portfolio" class="hover:text-green-400">
                <svg class="w-6 h-6" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                </svg>
            </a>
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
