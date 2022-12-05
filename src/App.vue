<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'

const route = useRoute()

// onMounted(() => {console.log('anu', route.fullPath)})
</script>

<template>
  <div>
    <router-view />
  </div>
</template>
