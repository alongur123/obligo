const express = require('express');
const bodyParser = require('body-parser');


var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(bodyParser.urlencoded({
    extended: true
}));
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

http.listen(3000, () => {
  console.log('listening on *:3000');
});