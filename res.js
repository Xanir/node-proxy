
const HTTP = require('http');

const server = HTTP.createServer((req, res) => {
	console.log('request - recieved');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  var d = ''
  req.on('data', function(c) {
		d += c
  })
  req.on('end', function() {
		//res.end(d);
		console.log(d)
  })
	console.log('request - closed');
});

server.listen(8060, 'localhost', () => {
  console.log('Server running at ');
});
