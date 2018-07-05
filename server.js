
const HTTP = require('http');

const PRORY = require('./src/proxy')


const server = HTTP.createServer((req, res) => {
	PRORY(req, res)
});

server.listen(8080, 'localhost', () => {
  console.log('Server running at ');
});
