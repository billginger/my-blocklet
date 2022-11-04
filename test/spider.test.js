const { expect } = require('chai');
const spider = require('../api/libs/spider');

describe('Spider', function () {
  const url = 'https://etherscan.io/txs?a=0xeb2a81e229b68c1c22b6683275c00945f9872d90';

  it('Request with the address parameter', async function () {
    const data = await spider(url);
    expect(data).to.be.an('array');
  });
  
  it('Request with the page parameter', async function () {
    const data = await spider(url + '?p=2');
    expect(data).to.be.an('array');
  });
  
  it('Request with the over limit page parameter', async function () {
    const data = await spider(url + '?p=999');
    expect(data).to.be.an('array');
  });
  
  it('Request with the ps parameter', async function () {
    const data = await spider(url + '?ps=10');
    expect(data).to.be.an('array');
  });
  
  it('Request with the over limit ps parameter', async function () {
    const data = await spider(url + '?ps=999');
    expect(data).to.be.an('array');
  });
});
