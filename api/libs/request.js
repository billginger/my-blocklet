const axios = require('axios');
const sleep = require('./sleep');

const request = async (url) => {
  const timeout = 5000;
  let retryTimes = 1;
  const retryDelay = 3000;
  let response = {};
  while (true) {
    try {
      response = await axios.get(url, {
        timeout,
      });
      break;
    } catch (error) {
      if (retryTimes > 0) {
        retryTimes--;
        await sleep(retryDelay);
      } else {
        break;
      }
    }
  }
  return response;
};

module.exports = request;
