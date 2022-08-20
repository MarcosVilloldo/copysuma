const express = require('express');
const router = express.Router();
const usuarioModel = require('../models/usuarios-model');

router.get('/', function (req, res, next) {
    res.render('login', { title: 'CopySUMA' });
});

router.post('/', async (req, res, next) => {
    try {
        let data = await usuarioModel.find({ user: req.body.user, password: req.body.password });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;