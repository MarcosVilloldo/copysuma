const mongoose = require('mongoose');

const schema = mongoose.Schema({
    titulo: { type: String },
    descripcion: { type: String },
    tipo: { type: String },
    portada: { type: String }
});

module.exports = mongoose.model('modulos', schema );