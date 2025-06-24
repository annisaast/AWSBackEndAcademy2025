const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 5000,
    host: '0.0.0.0'
  });
  /*Kode Program untuk Lokal
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });*/
  
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();