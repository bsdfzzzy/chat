const Router = require('koa-router')
const home = module.exports = new Router({
  prefix: '/home'
})

home
  .get('/', (ctx, next) => {
    ctx.body = 'hello, this is home'
  })
