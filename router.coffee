class Router
  @route : (req, res) ->
    console.log "routing" + pathname
    req.pathname = '/public/index.html' if req.pathname == '/'

    fs.readFile req.pathname, (err, data) ->
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
