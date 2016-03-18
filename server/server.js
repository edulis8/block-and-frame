const express = require('express');
const server = express();

require('./config/middleware.js')(server, express);

server.set('port', (process.env.PORT || 8080));

module.exports = server;
