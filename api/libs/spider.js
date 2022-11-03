const cheerio = require('cheerio');
const request = require('./request');

const spider = async (url) => {
  const response = await request(url);
  if (!response.data) {
    return;
  }
  const $ = cheerio.load(response.data);
  const array = [];
  const getText = (elem, index) => $('td', elem)?.eq(index)?.text()?.trim();
  $('div[id=paywall_mask]>table>tbody>tr').each((i, elem) => {
    if (getText(elem, 1)?.length) {
      array.push({
        txHash: getText(elem, 1),
        blockNumber: getText(elem, 3),
        time: getText(elem, 4),
        from: getText(elem, 6),
        to: getText(elem, 8),
        value: getText(elem, 9),
        txFee: getText(elem, 10),
      });
    }
  });
  return array;
};

module.exports = spider;
