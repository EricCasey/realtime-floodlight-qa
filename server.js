const express = require('express');

const socketIo = require('socket.io');

const app = express();

const ioProm = require('express-socket.io');

const server = ioProm.init(app);

app.set('port', process.env.PORT || 3001);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/pixel', (req, res) => {
  // http://localhost:3001/api/pixel/?campaign=BioGaia&tag=BuyNow
  const campaign = req.query.campaign;
  const tag = req.query.tag;
  const body = `${campaign} ${tag}`;
  console.log(body)
  res.status(200).send(body);
});

app.get('/api/feedSub', (req, res) => {
  console.log("connecting to feed!")
  res.status(200).send("feed yo");
});


app.listen(app.get('port'), () => {
  console.log(`Find the API server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
