const express = require('express');
const router = express.Router();
const pedidosModel = require('../models/pedidos-model');

router.get('/', async (req, res, next) => {
    try {
        let data = await pedidosModel.find({});
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;