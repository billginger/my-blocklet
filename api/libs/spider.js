const cheerio = require('cheerio');
const request = require('./request');

const spider = async (url) => {
  const response = await request(url);
  if (!response.data) {
    return 'Request Failed';
  }
  const $ = cheerio.load(response.data);
  let array = [];
  $('div[id=paywall_mask]>table>tbody>tr').each((i, elem) => {
    array.push({
      txHash: $('td', elem)?.eq(1)?.text()?.trim(),
      blockNumber: $('td', elem)?.eq(3)?.text()?.trim(),
      time: $('td', elem)?.eq(4)?.text()?.trim(),
      from: $('td', elem)?.eq(6)?.text()?.trim(),
      to: $('td', elem)?.eq(8)?.text()?.trim(),
      value: $('td', elem)?.eq(9)?.text()?.trim(),
      txFee: $('td', elem)?.eq(10)?.text()?.trim(),
    });
  });
  return array;
};

module.exports = spider;
