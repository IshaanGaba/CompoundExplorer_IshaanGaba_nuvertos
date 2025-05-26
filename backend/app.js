const express = require('express');
const cors    = require('cors');
const bodyParser = require('body-parser');
const compoundRoutes = require('./routes/compoundRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/compounds', compoundRoutes);

module.exports = app;
