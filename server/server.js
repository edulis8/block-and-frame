const path = require('path');
const express = require('express');
const server = express();

// Check if .env exist and use environment variables
try {
  require('node-env-file')(path.join(__dirname, '../.env'));
} catch (e) {
  console.log(e);
}

require('./config/middleware.js')(server, express);

server.set('port', (process.env.PORT || 8080));

module.exports = server;
