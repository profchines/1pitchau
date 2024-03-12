const path = require('path')
// import path from 'path'

const jsonServer = require('json-server')

// import jsonServer from 'json-server'

const server = jsonServer.create()

const router = jsonServer.router(
  path.join(__dirname, 'db.json')
)

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.listen(3001, () => {
  console.log('JSON Server Iniciou com Sucesso')
})

