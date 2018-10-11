const Hapi = require('hapi');
const routes = require('./routes');
const Good = require('good');

const server = new Hapi.Server({
});
server.connection({ port: 8080, host: '0.0.0.0' });
server.route(routes);

if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log(`Server running at: ${server.info.uri}`); // eslint-disable-line no-console
  });
}

module.exports = server;