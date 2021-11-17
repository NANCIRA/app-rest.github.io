const express = require('express')
const app = express()
const messageRoutes = require('./messages')
const PORT = 5000
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/message', messageRoutes)

app.get('/', (req, res) => {
  res.send({
    message: 'mi aplicacion'
  })
})

app.listen(5000, () => {
  console.log(`El servidor esta corriendo en el puerto: ${PORT}`)
})