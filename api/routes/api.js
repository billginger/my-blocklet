const express = require('express');
const spider = require('../libs/spider');
const router = express.Router();

router.get('/txs', async (req, res) => {
  const a = req.query['a'];
  const p = req.query['p'] || 1;
  if (!a) {
    res.send('Bad Parameter');
  } else {
    const url = `https://etherscan.io/txs?a=${a}&p=${p}`;
    const data = await spider(url);
    res.send(data);
  }
});

module.exports = router;
