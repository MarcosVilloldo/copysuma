const express = require('express');
const router = express.Router();
const modulosModel = require('../models/modulos-model');

router.get('/', async (req, res) => {
    try {
        let data = await modulosModel.find({});
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

router.post('/agregar', async (req, res) => {
    try {
        await modulosModel.insertMany({
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            tipo: req.body.tipo,
            portada: req.body.portada
        })
        res.send(res);
    } catch (error) {
        res.send(error);
    }
});

router.post('/modificar', async (req, res) => {
    try {
        await modulosModel.updateOne(
            { _id: req.body._id },
            {
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                tipo: req.body.tipo,
                portada: req.body.portada
            }
        );
        res.send(res);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;