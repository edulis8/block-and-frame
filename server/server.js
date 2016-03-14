'use strict';

const express = require('express');
const app = express();

require('./config/middleware.js')(app, express);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});

module.exports = app;
