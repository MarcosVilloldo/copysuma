const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.disable('x-powered-by');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('home')
})

app.listen('9000', () => {
    console.log('Servidor arranco')
})