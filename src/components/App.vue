<template>
  <div class="layout">
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const { ipcRenderer } = window.require('electron');
const router = useRouter();

onMounted(() => {
  ipcRenderer.on('navigate', (event, path) => {
    router.push(path);
  });
});
</script>
