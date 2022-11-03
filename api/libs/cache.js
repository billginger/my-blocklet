const LRU = require('lru-cache');

const options = {
  max: 500,
  ttl: 1000 * 60 * 5,
};

const cache = new LRU(options);

module.exports = cache;
