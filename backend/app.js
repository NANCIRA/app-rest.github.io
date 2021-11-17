const express = require('express')
const app = express()
const messageRoutes = require('./messages')
const cors = require('cors')
const PORT = 5001

app.use(cors())
app.use(express.json())
app.use('/message', messageRoutes)

app.get('/', (req, res) => {
    res.send({
     message: 'mi aplicacion'   
    })
})



app.listen(5001, () => {
    console.log(`El servidor esta corriendo en el puerto: ${PORT}`)
})