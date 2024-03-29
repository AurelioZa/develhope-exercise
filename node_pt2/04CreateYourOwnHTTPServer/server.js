require('dotenv').config();

const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.json({ msg: 'Hello World' });
});

app.listen(process.env.PORT, () => console.log('server running'));

module.exports = app;