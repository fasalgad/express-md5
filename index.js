var md5 = require('md5');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hello')
})


app.get('/:word', (req, res) => {
    res.send(md5(req.params.word))
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})