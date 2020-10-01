const {sendMessage} = require('./user.controller');

function applyRoute(app){
    app.get('/', sendMessage);
    return(app);
}

module.exports = {
    applyRoute
}