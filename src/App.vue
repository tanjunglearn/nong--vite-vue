<script setup lang="ts">
import LayoutAreaVue from './layouts/layout-area/LayoutArea.vue'
import LayoutNotFound from './layouts/layout-not-found/LayoutNotFound.vue'
import { useSSRContext } from 'vue'

if (import.meta.env.SSR) {
  const ctx = useSSRContext()

  ctx.head = [
    `<title>NONG</title>`,
    '<meta name="description" content="Free Web tutorials">',
    '<meta name="keywords" content="HTML, CSS, JavaScript">',
    '<meta name="author" content="John Doe">'
  ]
}
</script>

<template>
  <LayoutAreaVue v-if="$route.meta.layout === 'area'">
    <router-view />
  </LayoutAreaVue>
  <LayoutNotFound v-else-if="$route.meta.layout === 'not-found'">
    <router-view />
  </LayoutNotFound>
</template>
