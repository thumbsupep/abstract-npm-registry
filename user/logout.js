'use strict';

const nit = require('../lib/nit')('DELETE /-/user/token/:token');

/**
 * Test coverage for logging out
 * See: "npm help logout", npm-registry-client
 * https://github.com/npm/npm-registry-client/blob/master/lib/logout.js#L15-L19
 */
module.exports.found = nit.skip(':api with a token that exists', function (opts) {
  return function () {
    throw new Error('Not implemented.');
  };
});

module.exports.notFound = nit.skip(':api with a token that does not exist', function (opts) {
  return function () {
    throw new Error('Not implemented.');
  };
});
