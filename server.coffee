http = require 'http'
fs = require 'fs'
path = require 'path'
mime = require 'mime'
router = require './router.js'
console.log router

server = http.createServer (req, res) ->
  router.route(req, res)
server.listen 8080
