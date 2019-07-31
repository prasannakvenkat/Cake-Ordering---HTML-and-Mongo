var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('pricing.html');
  file.pipe(response);

}).listen(4000);

console.log('listening on port 4000...');