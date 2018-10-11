const createUrlLib = require('../lib/createUrl');
const Models = require('../models');

module.exports = [{
  method: 'POST',
  path: '/shorten',
  handler: (request, response) => {
    const longUrl = request.payload.url;
    createUrlLib.createShortUrlAndInsert(longUrl)
      .then((result) => {
        response(result);
      });
  },
}, {
  method: 'GET',
  path: '/longUrl',
  handler: (request, response) => {
    const shortUrl = request.query.code;
    Models.urls.getLongUrl(shortUrl).then((result) => {
      if (result !== null) {
        response({ originalUrl: result.originalUrl });
      } else {
        response({ originalUrl: 'Not found' });
      }
    });
  },
}];