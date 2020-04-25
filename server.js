const express = require('express')
const server = express()

server.get('/', (req, res) => {
  res.send('<h1>Olá mundo</h1>')
})

server.listen(3000, () => {
  console.log('Server On')
})