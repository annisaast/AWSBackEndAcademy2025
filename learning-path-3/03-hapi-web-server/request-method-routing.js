const Hapi = require('@hapi/hapi');
const routes = require('./hapi-routes-path');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 5000,
    host: '0.0.0.0'
  });

  server.route(routes);
  
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();