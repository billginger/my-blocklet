const { expect } = require('chai');
const spider = require('../api/libs/spider');

describe('Spider', function () {
  const url = 'https://etherscan.io/txs?a=0xeb2a81e229b68c1c22b6683275c00945f9872d90';
  it('should return an array data', async function () {
    const data = await spider(url);
    expect(data).to.be.an('array');
    expect(data[0]).to.have.property('txHash');
  });
});
