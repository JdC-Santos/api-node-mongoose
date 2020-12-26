const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const mongoose = require('./db');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set( 'mongoose' , mongoose );

consign()
    .include('controllers')
    .include('models')
    .into(app);

module.exports = () => {
    return app;
}