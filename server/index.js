const Koa = require('koa')

const app = new Koa()
const router = require('koa-router')()
const homeRouter = require('./home')

router
  .get('/', (ctx, next) => {
    ctx.body = 'hello'
  })

app.use(router.routes())
app.use(homeRouter.routes())
// app.use(homeRouter.allowedMethods())

module.exports = app.listen(8001)