const bodyParser = require('body-parser');
const {applySocketMethods} = require('./lib/socket');
const {config} = require('./config');

var app = require('express')();
app.use(bodyParser.urlencoded({
    extended: true
}));

// create server
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// apply socket methods
applySocketMethods(io);

// run server
http.listen(config.port, () => {
  console.log(`listening on *:${config.port}`);
});