// Generated by CoffeeScript 1.6.3
(function() {
  var Router, fs;

  fs = require('fs');

  Router = (function() {
    function Router() {}

    Router.route = function(req, res) {
      var url;
      url = req.url.slice(1, req.url.length);
      if (req.url === '/') {
        url = 'public/index.html';
      }
      return fs.readFile(url, function(err, data) {
        if (err) {
          console.log("ERROR ", err);
          res.writeHead(404, {
            "Content-Type": "text/plain"
          });
          res.write("Error: Page not found.");
          return res.end();
        } else {
          return res.writeHead(200, {
            "Content-Type": "text/html"
          }, res.end(data));
        }
      });
    };

    return Router;

  })();

  module.exports = Router;

}).call(this);
