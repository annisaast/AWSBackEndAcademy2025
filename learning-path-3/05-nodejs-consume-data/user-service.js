const http = require('http');
const url = require('url');

const users = ['Aras', 'Arsy', 'Dimas', 'Ivan', 'Rafy', 'Gilang'];
const MISSING = 4;

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  let id = pathname.match(/^\/(\d+)$/);
  
  if (!id) {
   res.statusCode = 400;
   return void res.end();
  }

  id = Number(id[1]);

  if (id === MISSING) {
   res.statusCode = 404;
   return void res.end();
  }

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify({
   id,
   name: users[id % users.length],
  }));
});

server.listen(process.env.PORT || 0, () => {
  const { port } = server.address();
  console.log(`User service listening on localhost on port: ${port}`);
});
