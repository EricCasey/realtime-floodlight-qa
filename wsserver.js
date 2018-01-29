const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);
// Pass a http.Server instance to the listen method
let io = require('socket.io').listen(server);

let last = 'empty';
let lastLast = 'empty';
// The server should start listening
server.listen(3002);
// Register the index route of your app that returns the HTML file
app.get('/', (req, res) => {
  console.log('Homepage');
  res.sendFile(`${__dirname}/index.html`);
});

app.use('/static', express.static('node_modules'));

// Handle connection
io.on('connection', (socket) => {
  console.log('Connected succesfully to the socket ...');

  setInterval(() => {
    if(last === lastLast) {
      //console.log("duplicate")
    } else {
      socket.emit('pixelLoad', last);
      lastLast = " "
    }
  }, 1000);

  setInterval(() => {
    socket.emit('pixelLoad', 'BioGaia.PageView.' + new Date());
  }, 10000);

  setInterval(() => {
    socket.emit('pixelLoad', 'BioGaia.Conversion.' + new Date());
  }, 20000);

  setInterval(() => {
    socket.emit('pixelLoad', 'Greenhawk.PageView.' + new Date());
  }, 15000);
});

app.get('/api/pixel', (req, res) => {
  // http://localhost:3002/api/pixel/?campaign=BioGaia&tag=BuyNow
  const campaign = req.query.campaign;
  const tag = req.query.tag;
  const body = `${campaign}.${tag}`;
  //console.log('PIXEL LOAD: ' + body)
  let now = new Date()
  last = body + "." + now;
  res.status(200).send(body);
});

console.log(`Find the WebSocket server at: http://localhost:3002/`);
