import { renderToString } from 'vue/server-renderer'
import { createApp } from './main'

export function render(url: string) {
  return new Promise(async (resolve) => {
    const { app, router } = createApp()

    // passing SSR context object which will be available via useSSRContext()
    // @vitejs/plugin-vue injects code into a component's setup() that registers
    // itself on ctx.modules. After the render, ctx.modules would contain all the
    // components that have been instantiated during this render call.
    
    router.push(url)

    router.isReady().then(async () => {
      const ctx = {}
      const html = await renderToString(app, ctx)

      console.log('anu 2', html)

      resolve({html})
    })
  })
}
