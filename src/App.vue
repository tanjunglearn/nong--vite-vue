<script setup lang="ts">
import Seo from './Seo.vue'
import LayoutAreaVue from './layouts/layout-area/LayoutArea.vue'
import LayoutNotFound from './layouts/layout-not-found/LayoutNotFound.vue'
import { useSSRContext } from 'vue'

// make sure to only call it during SSR
// https://vitejs.dev/guide/ssr.html#conditional-logic
if (import.meta.env.SSR) {
  const ctx = useSSRContext()
  // ...attach properties to the context

  ctx.teleports = {
    'head': `<title>anu</title>`
  }
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
