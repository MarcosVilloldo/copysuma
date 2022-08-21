const express = require('express');
const router = express.Router();
const pedidosModel = require('../models/pedidos-model');

router.get('/', async (req, res) => {
    try {
        let data = await pedidosModel.find({});
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

router.post('/agregar', async (req, res) => {
    try {
        await pedidosModel.insertMany({
            cliente: req.body.cliente,
            pedido: req.body.pedido,
            celular: req.body.celular,
            importe: req.body.importe,
            finalizado: req.body.finalizado,
            fechaPedido: req.body.fechaPedido,
            fechaEntrega: req.body.fechaEntrega
        })
        res.send(res);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;