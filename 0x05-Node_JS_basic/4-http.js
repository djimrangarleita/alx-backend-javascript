const http = require('http');

const PORT = 1245;
const HOSTNAME = 'localhost';

const app = http.createServer((_, res) => {
  res.end('Hello Holberton School!');
});

app.listen(PORT, HOSTNAME);

module.exports = app;
