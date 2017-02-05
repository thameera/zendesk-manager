import React, { Component } from 'react';
import Client from './Client';
import Grid from './components/Grid/Grid';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.ticketGetter = this.ticketGetter.bind(this);
    this.handleRowUpdate = this.handleRowUpdate.bind(this);

    this.state = {
      tickets: []
    };
  }

  componentDidMount() {
    Client.getTickets(data => {
      console.log(data);
      this.setState({
        tickets: data.tickets
      })
    });
  }

  ticketGetter(i) {
    return this.state.tickets[i];
  }

  handleRowUpdate({ rowIdx, updated }) {
    const tickets = this.state.tickets.slice();
    Object.assign(tickets[rowIdx], updated);
    this.setState({
      tickets
    });
    Client.saveTickets(tickets);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zendesk Ticket Manager</h2>
        </div>
        <div className="App-content">
          <Grid
            ticketGetter={this.ticketGetter}
            ticketCount={this.state.tickets.length}
            handleRowUpdate={this.handleRowUpdate}
          />
        </div>
      </div>
    );
  }
}

export default App;
