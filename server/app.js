require('dotenv').config();
const express = require('express');
const db = require('./database/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

app.use('/', (req, res) => {
    res.status(200).json({'Message': 'Welcome to the ToDo API!'})
})

module.exports = app;