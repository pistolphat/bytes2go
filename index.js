const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || '3000';

// Simple GET Http Request to root path, replies with a string
app.get('/', (req, res) => {
  res.status(200).send('Bytes2Go Ready');
});

// Setup to listen on specify port
app.listen(port, () => {
  console.log(`Listening to requests on localhost:${port}`);
});
