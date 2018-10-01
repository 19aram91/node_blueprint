const express = require('express');
const app = express();

app.use('/', require('./index'));
app.use('/users', require('./users'));

module.exports = app;