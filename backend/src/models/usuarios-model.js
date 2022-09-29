const mongoose = require('mongoose');

const schema = mongoose.Schema({
    user: { type: String },
    password: { type: String },
    nivelPermiso: {type: Number}
});

module.exports = mongoose.model('usuarios', schema );