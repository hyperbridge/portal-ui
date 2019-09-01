# Hyper UI

✅ SSR with Nuxt compatability
✅ Well designed & scoped CSS
✅ Well defined props & events
✅ Robust collection of UI elements


## Getting Started

```bash
npm install @ericmuyser/hyper-ui
// or
yarn add @ericmuyser/hyper-ui
```

Import components like so...

```js
export default {
    components: {
        Header: () => import('@ericmuyser/hyper-ui').then(m => m.Header),
        Popup: () => import('@ericmuyser/hyper-ui').then(m => m.Popup)
    }
}
```

Full styleguide of examples: https://github.com/hyperbridge/blockhub/blob/develop/tools/styleguide/stories/index.stories.js
