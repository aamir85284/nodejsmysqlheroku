const express = require('express')
const productApi = require('./api/productapi')

const app = express()
app.use(express.json())
productApi(app)

app.listen(3001, ()=>{
    console.log("SERVER STARTED")
})