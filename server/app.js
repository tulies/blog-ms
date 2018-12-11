const Koa = require('koa')
const onerror = require('koa-onerror')

const app = new Koa()

// error handler
onerror(app)

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3000

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})
