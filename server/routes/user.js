const express = require('express');
const router = express.Router();


//import controllers
const { read } = require('../controllers/user')


//routes
router.get('./users', read)


module.exports = router;