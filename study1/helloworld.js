const koa = require('koa')
const convert = require('koa-convert')
const app = new koa()
// const loggerGenerator = require('./middleware/logger-generator')
// app.use(convert(loggerGenerator()))
const loggerAsync = require('./middleware/logger-async')
app.use(loggerAsync())
app.use((ctx) => {
  ctx.body = 'hello world'
})

app.listen(3000)
console.log('starting at port 3000')