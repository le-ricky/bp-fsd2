const express = require('express');

const router = express.Router();


//import from controllers
const { createUser } = require('../controllers/auth')

router.get('/createUser', createUser);

module.exports = router;