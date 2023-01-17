var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function(err, data) {
        res.write(data);
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write('Hello World!');

  res.end(txt);
  return res.end();

    })
}).listen(8080);
