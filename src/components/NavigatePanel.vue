<template>
    <div class=" flex flex-col items-center">
        <div class="border-black border-2 rounded-full h-40 w-40 p-2 mt-10">
            <div class="rounded-full bg-inherit border-2 border-black w-full h-full"></div>
        </div>
        <ul class="mt-10">
            <li>Home</li>
            <!-- Add list items for each blog here -->
            <li v-for="blog in blogs" :key="blog.id">{{ blog.title }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: [
                // Add your blog data here
                { id: 1, title: 'Blog 1' },
                { id: 2, title: 'Blog 2' },
                // ...
            ],
        };
    },
};
</script>

