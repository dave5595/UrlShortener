const Hapi = require('hapi');
const routes = require('./routes');
const Good = require('good');

const server = new Hapi.Server({
});
server.connection({ port: 8080, host: 'ec2-54-179-186-164.ap-southeast-1.compute.amazonaws.com' });
server.route(routes);

server.register({
  register: Good,
  options: {
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          response: '*',
          log: '*',
        }],
      }, {
        module: 'good-console',
      }, 'stdout'],
    },
  },
}, (err) => {
  if (err) {
    throw err;
  }
});

if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log(`Server running at: ${server.info.uri}`); // eslint-disable-line no-console
  });
}

module.exports = server;