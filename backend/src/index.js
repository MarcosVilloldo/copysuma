const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.disable('x-powered-by');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.end('CopySUMA')
})

app.listen('9000', () => {
    console.log('Servidor arranco')
})