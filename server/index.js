const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 7799;
const dist = path.join(__dirname, '/../dist/');

const app = express();

app.use(bodyParser.json());
app.use(express.static(dist));

app.listen(PORT, () => console.log('this ya server listenin on', PORT));
