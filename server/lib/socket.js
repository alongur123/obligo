const faker = require('faker');
const redis = require('redis');

// create redis client for subscribe and publish
let sub = redis.createClient({host: 'redis'});
let pub = redis.createClient({host: 'redis'});
let chatList = redis.createClient({host: 'redis'});
// let sub = redis.createClient();
// let pub = redis.createClient();
// let chatList = redis.createClient();

// subscribe to chat
sub.subscribe('chat');

function applySocketMethods(io){
    io.on('connection', (socket) => {

        // send fake name to client
        socket.emit('getName', faker.name.findName());

        // send history on connection.
        chatList.lrange('messages',0, 10, (err, reply) => {
            socket.emit('getHistory', reply)
        })

        // send message when get from publish
        sub.on('message', function(action ,message) {
            socket.emit("gotMessage", message);
        });

        // publish message when someone send a message
        socket.on("sendMessage", message => {     
            let reply = JSON.stringify({
                action: 'message',
                userName: message.userName,
                text: message.text,
                date: Date.now()
            });

            // add to history 
            chatList.lpush('messages', reply);
            
            // publish message
            pub.publish('chat', reply);
          });
      });
}

module.exports = {
    applySocketMethods
}