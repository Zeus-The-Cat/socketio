import express from 'express';
import { createServer } from 'node:http';
// import { fileURLToPath } from 'node:url';
// import { dirname, join } from 'node:path';
import { Server } from 'socket.io';
const app = express();

const server = createServer(app);
const io = new Server(server,{
  cors:{
    origin:'http://localhost:4200'
  }
});

// const __dirname = dirname(fileURLToPath(import.meta.url));

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'));
// });
var LastMessage = 'No Previous Messages'
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    socket.emit("last message",LastMessage)
    LastMessage = msg;
  });
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
}); 