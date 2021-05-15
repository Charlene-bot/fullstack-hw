const express = require('express');
const app = express();
const http = require('http').Server(app); 
const port = process.env.PORT || 3000; 
const io = require('socket.io')(http)

app.get('/', (req, res) => {
    res.send(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    /*console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });*/
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    }); 
});

http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});