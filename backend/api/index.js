const { send } = require('micro');
const { createServer } = require('http');
const app = require('./app');

const server = createServer(app);

module.exports = (req, res) => {
  if (req.url === '/_health') {
    send(res, 200, 'OK');
    return;
  }
  
  server(req, res);
};
