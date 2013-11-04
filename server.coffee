http = require 'http'
fs = require 'fs'
path = require 'path'
mime = require 'mime'

server = http.createServer (req, res) ->
  res.writeHead 200,
    'Content-Type': 'text/plain'
  res.end('Hello World\n');

server.listen 8080
