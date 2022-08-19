const mongoose = require('mongoose');

require('dotenv').config();

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

const conn = mongoose.createConnection(process.env.MONGO_HOST, { dbName: process.env.MONGO_DB_NAME });

conn.on('error', err => {
    console.log('Error', err);
    return process.exit();
})

conn.on('connected', () => console.log('Conectado a mongo'));

module.exports = conn;