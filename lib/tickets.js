'use strict';

const _ = require('lodash');

const storage = require('./storage');
const zendesk = require('./zendesk');

const openStatuses = ['open', 'pending', 'hold'];

const mergeTickets = (stored, fetched) => {
  const final = [];

  fetched.forEach(ft => {

    if (!_.includes(openStatuses, ft.status)) { // closed ticket
      return;
    }

    let ticket = _.find(stored, { id: ft.id });
    if (ticket) { // Existing ticket in storage
      ticket.status = ft.status;
      ticket.updated_at = ft.updated_at;
    } else { // New new ticket
      ticket = {
        id: ft.id,
        status: ft.status,
        updated_at: ft.updated_at,
        subject: ft.subject,
        priority: _.find(ft.custom_fields, { id: 32956928 }).value,
        tags: '',
        next: ''
      };
    }
    final.push(ticket);

  }); // /fetched.forEach

  return final;
};

const load = () => {
  const storedTickets = storage.load();

  return zendesk.fetch()
    .then(zdtickets => {
      console.log(`Fetched # of tickets: ${zdtickets.length}`);
      const finalTickets = mergeTickets(storedTickets, zdtickets);
      storage.save(finalTickets);
      return {
        tickets: finalTickets
      };
    });
};

const save = (tickets) => {
  return storage.save(tickets);
};

module.exports = {
  load,
  save
};