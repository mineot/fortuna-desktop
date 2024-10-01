<template>
  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

onMounted(() =>
  window.api.on('navigate', (event, route) => {
    router.push(route);
  }),
);
</script>
