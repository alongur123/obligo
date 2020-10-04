const faker = require('faker')

function applySocketMethods(io){
    io.on('connection', (socket) => {
        socket.emit('getName', faker.name.findName())
        socket.on("sendMessage", message => {            
            io.emit("gotMessage", message);
          });
      });
}

module.exports = {
    applySocketMethods
}