// Generated by CoffeeScript 1.6.3
(function() {
  var chat_server, fs, http, io, mime, path, router, server;

  http = require('http');

  fs = require('fs');

  path = require('path');

  mime = require('mime');

  router = require('./router.js');

  chat_server = require('./chat_server.js');

  server = http.createServer(function(req, res) {
    return router.route(req, res);
  });

  server.listen(8080);

  io = chat_server.createChat(server);

  chat_server.openSocket(io);

}).call(this);
