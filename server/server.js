const express = require('express')
const mongoose = require('mongoose');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const app = express();


//mongoDB
mongoose.connect(process.env.DATABASE_CLOUD, { useNewUrlParser: true,  useUnifiedTopology: true })
.then( () => console.log('DB connected'))
.catch( err => console.log(err))


//import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

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
app.use('/api', userRoutes)


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`API is running on port ${port}`)
});