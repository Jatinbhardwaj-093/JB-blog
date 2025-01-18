<script lang="ts" setup>
import { ref } from 'vue';
import NavigatePanel from './NavigatePanel.vue';

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
      <div class="flex-1">
        <router-view />
      </div>
    </div>
  </div>
</template>