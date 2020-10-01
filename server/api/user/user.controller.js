function sendMessage(req,res) {
    const {message} = req.params;
     res.json({message});
}

module.exports = {
    sendMessage
}