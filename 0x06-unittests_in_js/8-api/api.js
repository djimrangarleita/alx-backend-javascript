const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Welcome to the payment system');
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

exports.module = app;
