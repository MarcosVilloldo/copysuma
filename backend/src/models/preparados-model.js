const mongoose = require('mongoose');

const schema = mongoose.Schema({
    cliente: { type: String },
    pedido: { type: String },
    celular: { type: String },
    importe: { type: Number },
    finalizado: { type: Boolean },
    fechaPedido: { type: Date },
    fechaEntrega: { type: Date }
});

module.exports = mongoose.model('preparados', schema );