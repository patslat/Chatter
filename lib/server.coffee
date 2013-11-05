http = require 'http'
fs = require 'fs'
path = require 'path'
mime = require 'mime'
router = require './router.js'
chat_server = require './chat_server.js'

server = http.createServer (req, res) ->
  router.route(req, res)

server.listen 8080

#set up socket
io = chat_server.createChat(server)
chat_server.openSocket(io)
