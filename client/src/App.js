import React, { Component } from 'react';
import Client from './Client';
import './App.css';

class App extends Component {
  constructor() {
    super();

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

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zendesk Ticket Manager</h2>
        </div>
        <p className="App-intro">
          Tickets will go here
        </p>
      </div>
    );
  }
}

export default App;
