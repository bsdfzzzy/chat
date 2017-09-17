const Koa = require('koa')

const app = module.exports = new Koa()

const hello = (ctx, next) => {
  ctx.body = 'hello'
}

app.use(hello)

app.listen(8001)