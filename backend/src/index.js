const express = require('express');
const mongose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongose.connect('mongodb+srv://ahsantos:0000@cluster0-qjlyd.mongodb.net/devradar?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
})
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);