const express = require('express');
const mongose = require('mongoose');
const routes = require('./routes');

const app = express();

mongose.connect('mongodb+srv://ahsantos:0000@cluster0-qjlyd.mongodb.net/devradar?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
})
app.use(express.json());
app.use(routes);

app.listen(3000);