const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/Eliteware_DB', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (err) => {
    console.log("err", err);
})
db.once('open', () => {
    console.log('Database connected Successfully');
})

const userController = require('./routes/userRoute');

app.use(bodyParser.json());

app.use(`/api/user`,userController);

app.listen(8000, () => {
    console.log("Server Is Ready !!");
})