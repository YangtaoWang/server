const http = require('http')

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('ich liebe dich, mein Schaetzchen!')
}).listen(3000)

console.log('server running on http://39.105.111.73:8081')