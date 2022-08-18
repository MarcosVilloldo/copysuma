const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index');
const dotenv = require('dotenv').config();

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

const conn = mongoose.createConnection(process.env.MONGO_HOST, { dbName: process.env.MONGO_DB_NAME })

conn.on('error', err => {
    console.log('Error', err);
    return process.exit();
})

conn.on('connected', () => console.log('Conectado a mongo'))

module.exports = app;