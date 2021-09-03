const express = require('express');

const router = express.Router();

router.get('/regrister', (req, res) => {
    res.json({
        data: 'you hit regrister middleware'
    });
});

module.exports = router;