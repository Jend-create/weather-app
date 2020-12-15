const express = require('express')
const mongoose = require('mongoose') 
const config = require('./helpers/config')

const authRoutes = require('./routes/auth')


// Mongoose Connection


const app = express()


// Usage of middlewares
app.use(express.json())

app.use(authRoutes)




app.listen(config.PORT, ()=> {
    console.log(`Server started on PORT: ${config.PORT}`)
})