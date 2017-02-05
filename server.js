const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/tickets', (req, res) => {
  res.json({
    tickets: [
      { id: 180, state: 'open', title: 'some title', tags: 'custom db, rules', priority: 'p5', next: 'do this' },
      { id: 190, state: 'pending', title: 'another title', priority: 'p2', next: 'do that' },
      { id: 185, state: 'pending', title: 'another title', priority: 'p2', next: 'do thatx' },
      { id: 200, state: 'open', title: 'another title', priority: 'p4', next: 'do those' },
    ]
  });
});

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}...`);
});