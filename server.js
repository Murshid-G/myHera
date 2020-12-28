
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config()
const indexRouter = require('./routes/index');

app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/myFusion';
const connect = mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000)