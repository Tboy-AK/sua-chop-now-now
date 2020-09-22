const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db');

// External Dependencies
dotenv.config({
    path: './config/config.env'
})

// Connect to database
connectDB();

const root = require('./route/rootRoute')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

// Load Routers
app.use('/', root)



const SERVER = app.listen(PORT, () => {
    console.log(`Server running on ${process.env.NODE_ENV} mode on ${process.env.HOST}:${PORT} .`)
})
// Handles Mongo Connection Error
process.on('unhandledRejection', (error, promise) => {
    console.log(`${error.message}`);
    SERVER.close(() => {
        process.exit(1)
    })
})