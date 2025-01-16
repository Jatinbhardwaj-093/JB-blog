<script lang="ts" setup>
import { ref } from 'vue';
import BlogPost from './BlogPost.vue';
import NavigatePanel from './NavigatePanel.vue';
import Minimap from './Minimap.vue';
import Detail from './Detail.vue';
import Sympy3DPolygon_Module from './Blogs/Sympy3DPolygon_Module.vue';

const selectedComponent = ref('Home');

const handleItemSelected = (item: string) => {
  selectedComponent.value = item;
};
</script>

<template>
  <div id="app">
    <div class="flex">
      <div class="w-[20vw] h-[100vh] sticky top-0">
        <NavigatePanel @itemSelected="handleItemSelected" />
      </div>
      <div class="main-content w-[60vw] border-r border-l border-slate-500 bg-grid-pattern">
        <component :is="selectedComponent === 'Home' ? Detail : selectedComponent === 'Sympy3DPolygon_Module' ? Sympy3DPolygon_Module : BlogPost" />
      </div>
      <div class="w-[20vw] h-[100vh] sticky top-0">
        <Minimap />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-grid-pattern {
    background-image: linear-gradient(to right, rgba(224, 224, 224, 0.4) 1px, transparent 1px), 
                      linear-gradient(to bottom, rgba(224, 224, 224, 0.4) 1px, transparent 1px);
    background-size: 10px 10px; /* Make the grid boxes smaller */
}
</style>

