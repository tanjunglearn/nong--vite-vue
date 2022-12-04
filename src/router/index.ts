import { createRouter, createMemoryHistory } from "vue-router"
import Hello from "../components/HelloWorld.vue"
import NotFound from "../components/NotFound.vue"

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]
})

export default router