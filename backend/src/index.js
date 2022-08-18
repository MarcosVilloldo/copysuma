const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const host = 'mongodb://127.0.0.1:27017/copysuma'
const indexRouter = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.disable('x-powered-by');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

const conn = mongoose.createConnection(host)

conn.on('error', err => {
    console.log('Error', err);
    return process.exit();
})

conn.on('connected', () => console.log('Conectado a mongo'))

module.exports = app;