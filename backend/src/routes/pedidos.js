const express = require('express');
const router = express.Router();
const pedidosModel = require('../models/pedidos-model');
const preparadosModel = require('../models/preparados-model');

router.get('/', async (req, res) => {
    try {
        let data = await pedidosModel.find({}).sort({fechaEntrega:1});
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

router.post('/modificar', async (req, res) => {
    try {
        await pedidosModel.updateOne(
            { _id: req.body._id },
            {
                cliente: req.body.cliente,
                pedido: req.body.pedido,
                celular: req.body.celular,
                importe: req.body.importe,
                finalizado: req.body.finalizado,
                fechaPedido: req.body.fechaPedido,
                fechaEntrega: req.body.fechaEntrega
            }
        );
        res.send(res);
    } catch (error) {
        res.send(error);
    }
});


router.post('/preparar', async (req, res) => {
    try {
        await pedidosModel.updateOne(
            { _id: req.body._id },
            {
                finalizado: req.body.finalizado,
                fechaBaja: req.body.fechaBaja
            }
        );
        await preparadosModel.insertMany({
            cliente: req.body.cliente,
            pedido: req.body.pedido,
            celular: req.body.celular,
            importe: req.body.importe,
            finalizado: false,
            fechaPedido: req.body.fechaPedido,
            fechaEntrega: req.body.fechaEntrega,
            fechaBaja: null
        });
        res.send(res);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;