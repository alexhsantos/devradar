const express = require('express');
const mongose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongose.connect('mongodb+srv://ahsantos:0000@cluster0-qjlyd.mongodb.net/devradar?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
})
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);