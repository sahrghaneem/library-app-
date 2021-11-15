const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bookController=require('../controller/bookController');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/library',require('../Ruote/server'));



mongoose.connect(process.env.DB_URL, {useNewUrlParser: true}, () => {
console.log('Connected to DB');
});

app.listen(5001);