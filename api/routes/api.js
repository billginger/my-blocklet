const express = require('express');
const spider = require('../libs/spider');
const cache = require('../libs/cache');

const router = express.Router();

router.get('/txs', async (req, res) => {
  const { a, p = 1 } = req.query;
  if (!a || isNaN(p)) {
    res.sendStatus(400);
    return;
  }
  const url = `https://etherscan.io/txs?a=${a}&p=${p}`;
  const cacheData = cache.get(url);
  if (cacheData) {
    res.json(cacheData);
    return;
  }
  const data = await spider(url);
  if (!data) {
    res.sendStatus(500);
    return;
  }
  cache.set(url, data);
  res.json(data);
});

module.exports = router;
