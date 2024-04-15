const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.set('port', process.env.PORT || 3005);
app.use(cors());
app.use('/api', router);
app.use(express.json());

module.exports = app;