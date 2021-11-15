const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bookController=require('./controller/bookController');
require('dotenv').config()


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/library',require('./Ruote/server'));

mongoose.connect(`mongodb+srv://${process.env.DB_URL}/myFirstDatabase?retryWrites=true&w=majority`,{ useNewUrlParser: true })


// mongoose.connect('mongodb+srv://sahrj:Omri@sahr2@cluster0.rlcnq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => {
// console.log('Connected to DB');
// });
//mongodb+srv://sahrj:Omri@sahr2@cluster0.rlcnq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.listen(process.env.PORT||5001);