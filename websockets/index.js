const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

var rooms = 0;

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  console.log(socket.id);
  console.log('a user connected');

  socket.on('createGame', function(data){
    socket.join('room-' + ++rooms);
    socket.emit('newGame', {name: data.name, room: 'room-'+rooms});
  });

  socket.on('joinGame', function(data){
    var room = io.nsps['/'].adapter.rooms[data.room];
    if( room && room.length == 1){
      socket.join(data.room);
      socket.broadcast.to(data.room).emit('player1', {});
      socket.emit('player2', {name: data.name, room: data.room })
    }
    else {
      socket.emit('err', {message: 'Sorry, The room is full!'});
    }
  });

  socket.on('playTurn', function(data){
    socket.broadcast.to(data.room).emit('turnPlayed', {
      tile: data.tile,
      room: data.room
    });
  });

  socket.on('gameEnded', function(data){
    socket.broadcast.to(data.room).emit('gameEnd', data);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
