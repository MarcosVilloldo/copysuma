const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.end('CopySUMA')
})

app.listen('9000', () => {
    console.log('Servidor arranco')
})