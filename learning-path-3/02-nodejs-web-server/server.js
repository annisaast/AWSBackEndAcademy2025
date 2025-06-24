const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.statusCode = 200;
  response.end('<h1>Halo HTTP Server!</h1>');
};

const server = http.createServer(requestListener);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});

/* Kode Program untuk Lokal
const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
*/