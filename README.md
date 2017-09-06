# choo-scroll-to-top

scrolls to the top of the browser window on navigation. does nothing when server
rendering.

## usage

```js
const choo = require('choo')
const scrollToTop = require('choo-scroll-to-top')

const app = choo()
app.use(scrollToTop)

app.mount('body')
```

## License

[MIT](https://tldrlegal.com/license/mit-license)
