<template>
  <div class="">
    <div class="mt-4">
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const blog = ref({
  title: 'First Post',
  content: 'This is the first post.'
});
</script>