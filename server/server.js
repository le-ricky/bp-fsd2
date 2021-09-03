const express = require('express')

const app = express()

app.get('/api/regrister', (req, res) => {
    res.json({
        data: 'you hit regrister endpoint Nice!'
    })
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`API is running on port ${port}`)
});