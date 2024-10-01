<template>
  <div class="page">
    <div class="title">File</div>
    <div class="content">File Content</div>
  </div>
</template>

<script setup lang="ts">
const storage = (window as any).storage;
console.log(storage);
</script>
