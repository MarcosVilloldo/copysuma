const express = require('express');
const multer = require('multer');
const router = express.Router();
const modulosModel = require('../models/modulos-model');

const storage = multer.diskStorage({
    destination: 'C:/Users/Administrator/Desktop/uploads/',
    filename: (req, file, cb) => { cb("", req.body.id + ".pdf") }
})

const upload = multer({ storage: storage })

router.get('/', async (req, res) => {
    try {
        let data = await modulosModel.find({});
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let data = await modulosModel.find({ _id: req.params.id });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

router.post('/agregar', async (req, res) => {
    try {
        let data = await modulosModel.insertMany({
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            tipo: req.body.tipo,
            portada: req.body.portada
        })
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

router.post('/guardarPDF', upload.single('archivo'), async (req, res) => {
    try {
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