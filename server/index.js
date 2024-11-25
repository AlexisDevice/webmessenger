import express from "express";
import { Server } from "socket.io";
import { createServer } from 'node:http';

const port = 3000;

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    socket.on('chat-message', (msg) => {
        io.emit('new-message', { id: socket.id, text: msg});
    })
})

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/client/index.html');
});


server.listen(port, () => {
    console.log('Server live: ' + port);
});
