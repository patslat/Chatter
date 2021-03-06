// Generated by CoffeeScript 1.6.3
(function() {
  var Socket, app, fs, io;

  app = require('http');

  io = require('socket.io');

  fs = require('fs');

  Socket = (function() {
    function Socket() {}

    Socket.createChat = function(app) {
      return io.listen(app);
    };

    Socket.openSocket = function(chat) {
      return chat.sockets.on('connection', function(socket) {
        chat.sockets.emit('message', {
          text: 'Someone has joined the chatroom'
        });
        return socket.on('message', function(data) {
          return chat.sockets.emit('echo', {
            text: data
          });
        });
      });
    };

    return Socket;

  })();

  module.exports = Socket;

}).call(this);
