var fs=require('fs');
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  var file=fs.createReadStream('pricing.html');
  file.pipe(response);
}).listen(8080);

console.log("listening at port 8080");
