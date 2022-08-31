const express = require('express');
const router = express.Router();
const preparadosModel = require('../models/preparados-model');

router.get('/', async (req, res) => {
    try {
        let data = await preparadosModel.find({}).sort({ finalizado: false, fechaEntrega: 1 });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

router.post('/agregar', async (req, res) => {
    try {
        await preparadosModel.insertMany({
            cliente: req.body.cliente,
            pedido: req.body.pedido,
            celular: req.body.celular,
            importe: req.body.importe,
            finalizado: false,
            fechaPedido: req.body.fechaPedido,
            fechaEntrega: req.body.fechaEntrega,
            fechaBaja: null
        })
        res.send(res);
    } catch (error) {
        res.send(error);
    }
});

router.post('/finalizar', async (req, res) => {
    try {
        await preparadosModel.updateOne(
            { _id: req.body._id },
            {
                finalizado: req.body.finalizado,
                fechaBaja: req.body.fechaBaja
            }
        );
        res.send(res);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;