import React, { Component } from 'react';
import Client from './Client';
import Grid from './components/Grid/Grid';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.ticketGetter = this.ticketGetter.bind(this);

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
          />
        </div>
      </div>
    );
  }
}

export default App;
