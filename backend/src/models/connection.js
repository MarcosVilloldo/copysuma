const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

mongoose
    .connect(process.env.MONGO_HOST, { dbName: process.env.MONGO_DB_NAME, useNewUrlParser: true })
    .then(() => {
        const app = express()

        app.listen(5000, () => {
            console.log("sever has started!");
        })
    })