const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const router = {
    index: require('./routes/index'),
    login: require('./routes/login'),
    pedidos: require('./routes/pedidos'),
    preparados: require('./routes/preparados')
}

const app = express();

require('./models/connection');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.disable('x-powered-by');

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router.index);
app.use('/login', router.login);
app.use('/pedidos', router.pedidos);
app.use('/preparados', router.preparados);

module.exports = app;