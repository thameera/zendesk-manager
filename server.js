require('dotenv-safe').load()

const express = require('express')
const bodyParser = require('body-parser')

const tickets = require('./lib/tickets')

const app = express()

app.set('port', process.env.SERVER_PORT || 3031)

app.use(bodyParser.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.get('/tickets', (req, res) => {
  const shouldReload = req.query.refresh === '1'
  tickets.load(shouldReload).then(data => {
    res.json(data)
  })
})

app.post('/tickets', (req, res) => {
  tickets.save(req.body.tickets)
  res.end()
})

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}...`)
})
