const mongoose = require('mongoose');

const schema = mongoose.Schema({
    user: { type: String },
    password: { type: String }
});

module.exports = mongoose.model('usuarios', schema );