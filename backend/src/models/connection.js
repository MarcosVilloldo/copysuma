const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

mongoose
    .connect(process.env.HOST_PROD, {
        dbName: process.env.DB_NAME_PROD,
        auth: { username: process.env.USERNAME_PROD, password: process.env.PASSWORD_PROD },
        retryWrites: true,
        w: 'majority'
    })
    .then(() => {
        const app = express()

        app.listen(5000, () => {
            console.log("sever has started!");
        })
    })