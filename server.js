require('dotenv-safe').load();

const express = require('express');
const tickets = require('./lib/tickets');

const app = express();

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/tickets', (req, res) => {
  const data = tickets.load();
  res.json(data);
});

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}...`);
});