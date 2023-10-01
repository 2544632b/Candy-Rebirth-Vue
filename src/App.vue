<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <RouterView />
</template>

<style>
  #nprogress .bar {
    background: #5f9ea0 !important;
  }

  #nprogress .spinner-icon {
    border-top-color: #5f9ea0 !important;
    border-left-color: #5f9ea0 !important;
  }

  #nprogress .peg {
    box-shadow: 0 0 10px #5f9ea0, 0 0 5px #5f9ea0 !important;
  }
</style>