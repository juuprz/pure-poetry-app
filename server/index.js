const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 7799;
const dist = path.join(__dirname, '/../dist/');

const app = express();
const db = require('../database/index');
require('../server/config/seed');

const { postPoem } = require('../database/controllers/poems');

app.use(bodyParser.json());
app.use(express.static(dist));


app.post('/api/post', postPoem);

app.listen(PORT, () => console.log('this ya server listenin on', PORT));
