const express = require('express')
// const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const app = express();


//import routes
const authRoutes = require('./routes/auth');

//app middlewares
app.use(morgan('dev'));
// app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

//use cors()
app.use(cors())


//middleware
app.use('/api', authRoutes)


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`API is running on port ${port}`)
});