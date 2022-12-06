import { createSSRApp, createApp as createClientApp } from 'vue'
import router from './router'
import App from './App.vue'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.

const isServer = typeof window === 'undefined'

export function createApp() {
  const app = isServer ? createSSRApp(App) : createClientApp(App)

  app.use(router)

  return { app, router }
}
