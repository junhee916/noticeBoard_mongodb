require('dotenv').config()
const express = require('express')
const app = express()

const userRouter = require('./router/user')
const boardRouter = require('./router/board')
const commendRouter = require('./router/commend')

// connected mongodb 
const connectDB = require('./config/database')
connectDB()

// connected router
app.use('/user', userRouter)
app.use('/board', boardRouter)
app.use('/commend', commendRouter)

const PORT = process.env.PORT || 7000

app.listen(PORT, console.log("connected server..."))