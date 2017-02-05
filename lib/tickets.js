'use strict';

const storage = require('./storage');

const load = () => {
  return {
    tickets: storage.load()
  };
};

const save = (tickets) => {
  return storage.save(tickets);
};

module.exports = {
  load,
  save
};