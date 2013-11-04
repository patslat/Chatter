fs = require 'fs'

class Router
  @route : (req, res) ->
    url = req.url.slice(1, req.url.length)
    url = 'public/index.html' if req.url == '/'

    fs.readFile url, (err, data) ->
      if err
        console.log "ERROR ", err
        res.writeHead 404,
          "Content-Type": "text/plain"
        res.write "Error: Page not found."
        res.end()
      else
        res.writeHead 200,
          "Content-Type": "text/html"
          res.end data

module.exports = Router
