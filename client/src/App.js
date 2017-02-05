import React, { Component } from 'react';
import logo from './logo.svg';
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
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
