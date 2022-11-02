const express = require('express');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const app = express();

const port = process.env.BLOCKLET_PORT || process.env.PORT || 3030;

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Blocklet app listening on port ${port}`);
});
