<script setup lang="ts">
import LayoutHeader from './LayoutHeader.vue';
</script>

<template>
  <LayoutHeader></LayoutHeader>
  <aside>SIDEBAR</aside>
  <main>
    <slot />
  </main>
</template>
