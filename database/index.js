const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/purepoetry', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', e => console.error('mongoose connection error', e));

db.once('open', () => console.log('mongoose connected'));

module.exports = db;
