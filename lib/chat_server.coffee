app = require 'http'
io = require 'socket.io'
fs = require 'fs'

class Socket
  @createChat : (app) ->
    io.listen(app)

  @openSocket : (chat) ->
    chat.sockets.on 'connection', (socket) ->
      chat.sockets.emit 'message', text: 'Someone has joined the chatroom'
      socket.on 'message', (data) ->
        chat.sockets.emit 'echo', text: data

module.exports = Socket
