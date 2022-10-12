var md5 = require('md5');

const express = require('express')
const app = express()

// Listen on a specific host via the HOST environment variable
let host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello')
})


app.get('/:word', (req, res) => {
    res.send(md5(req.params.word))
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})