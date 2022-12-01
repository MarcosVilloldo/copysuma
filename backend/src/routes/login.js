const express = require('express');
const md5 = require('md5');
const router = express.Router();
const usuarioModel = require('../models/usuarios-model');

router.get('/', function (req, res) {
    res.render('login', { title: 'CopySUMA' });
});

router.post('/', async (req, res) => {
    try {
        let data = await usuarioModel.find({ user: req.body.user, password: md5(req.body.password) });
        if (data.length === 1) {
            req.session.usuario = data[0].user
            req.session.nivelPermiso = data[0].nivelPermiso
        } else {
            req.session.usuario = undefined
        };

        res.send(req.session);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;