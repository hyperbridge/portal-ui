# Portal UI

✅ SSR with Nuxt compatability
✅ Well designed & scoped CSS
✅ Well defined props & events
✅ Robust collection of UI elements

## Getting Started

```bash
npm install @hyperbridge/portal-ui
// or
yarn add @hyperbridge/portal-ui
```

Import components like so...

```js
export default {
  components: {
    Header: () => import("@hyperbridge/portal-ui").then((m) => m.Header),
    Popup: () => import("@hyperbridge/portal-ui").then((m) => m.Popup),
  },
};
```

Full styleguide of examples: https://github.com/hyperbridge/blockhub/blob/develop/tools/styleguide/stories/index.stories.js
