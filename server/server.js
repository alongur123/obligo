const bodyParser = require('body-parser');
const {applyRoute} = require('./api/user/user.router');
const {applySocketMethods} = require('./lib/socket');

var app = require('express')();
app.use(bodyParser.urlencoded({
    extended: true
}));

applyRoute(app)

var http = require('http').createServer(app);
var io = require('socket.io')(http);

applySocketMethods(io);

http.listen(3000, () => {
  console.log('listening on *:3000');
});