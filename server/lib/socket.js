const faker = require('faker');
const redis = require('redis');

// create redis client for subscribe and publish
// let sub = redis.createClient({host: 'redis'});
// let pub = redis.createClient({host: 'redis'});
let sub = redis.createClient();
let pub = redis.createClient();

// subscribe to chat
sub.subscribe('chat');

function applySocketMethods(io){
    io.on('connection', (socket) => {

        // send fake name to client
        socket.emit('getName', faker.name.findName());

        // send message when get from publish
        sub.on('message', function(action ,message) {
            socket.emit("gotMessage", message);
        });

        // publish message when someone send a message
        socket.on("sendMessage", message => {     
            let reply = JSON.stringify({
                action: 'message',
                userName: message.userName,
                text: message.text 
            });
            
            // publish message
            pub.publish('chat', reply);
          });
      });
}

module.exports = {
    applySocketMethods
}