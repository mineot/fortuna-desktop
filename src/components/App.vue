<template>
  <h1>💖 Hello World!</h1>
  <div>Welcome to your Electron application.</div>
  <div>With Vue</div>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <span>&nbsp;</span>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
console.log('👋 This message is being logged by "App.vue", included via Vite');
</script>
