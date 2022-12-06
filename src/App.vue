<script setup lang="ts">
import LayoutAreaVue from './layouts/layout-area/LayoutArea.vue'
import LayoutNotFound from './layouts/layout-not-found/LayoutNotFound.vue'
</script>

<template>
  <LayoutAreaVue v-if="$route.meta.layout === 'area'">
    <router-view />
  </LayoutAreaVue>
  <LayoutNotFound v-else-if="$route.meta.layout === 'not-found'">
    <router-view />
  </LayoutNotFound>
</template>
