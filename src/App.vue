<script lang="ts" setup>
import { ref } from 'vue';
import BlogPost from './components/BlogPost.vue';
import NavigatePanel from './components/NavigatePanel.vue';
import Minimap from './components/Minimap.vue';

interface Post {
  id: number;
  title: string;
  content: string;
}

const posts = ref<Post[]>([
  { id: 1, title: 'First Post', content: 'This is the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the second post.' },
]);
</script>

<template>
  <div id="app">
    <div class="flex">
      <div class="w-[20vw] h-[100vh] sticky top-0">
        <NavigatePanel />
      </div>
      <div class="main-content w-[60vw] border-r border-l border-slate-500">
        <h1 class="text-2xl font-bold">My Blog</h1>
        <BlogPost
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :content="post.content"
        />
      </div>
      <div class="w-[20vw] h-[100vh] sticky top-0">
        <Minimap />
      </div>
    </div>
  </div>
</template>

