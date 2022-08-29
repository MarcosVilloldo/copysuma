const express = require('express');
const router = express.Router();
const usuarioModel = require('../models/usuarios-model');

router.get('/', function (req, res) {
    res.render('login', { title: 'CopySUMA' });
});

router.post('/', async (req, res) => {
    try {
        let data = await usuarioModel.find({ user: req.body.user, password: req.body.password });
        if (data) { req.session.usuario = data[0].user; }
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;