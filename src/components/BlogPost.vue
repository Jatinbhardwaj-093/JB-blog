<template>
  <div class="blog-post">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlogPost',
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.blog-post {
  margin-bottom: 20px;
}
</style>