require('dotenv').config();

const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.json({ msg: 'Hello World' });
});



module.exports = app;