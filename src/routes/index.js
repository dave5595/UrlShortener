const ping = require('./ping');
const urls = require('./urls');

module.exports = [].concat(ping, urls, {
  method: 'GET',
  path: '/',
  handler: (request, response) => {
    response('hello');
  },
});