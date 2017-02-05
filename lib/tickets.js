'use strict';

const storage = require('./storage');
const zendesk = require('./zendesk');

const load = () => {
  const storedTickets = storage.load();
  zendesk.fetch()
    .then(zdtickets => {
      console.log(`Fetched # of tickets: ${zdtickets.length}`);
    });
  return {
    tickets: storedTickets
  };
};

const save = (tickets) => {
  return storage.save(tickets);
};

module.exports = {
  load,
  save
};