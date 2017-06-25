import React, { Component } from 'react'
import Client from './Client'
import Grid from './components/Grid/Grid'
import './App.css'

const STATES = ['open', 'pending', 'hold']

class App extends Component {
  constructor() {
    super()

    this.reload = this.reload.bind(this)
    this.ticketGetter = this.ticketGetter.bind(this)
    this.handleRowUpdate = this.handleRowUpdate.bind(this)

    this.state = {
      tickets: [],
      loading: false
    }
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    Client.getTickets(data => {
      console.log(data)
      this.setState({
        tickets: this.sortTickets(data.tickets),
        loading: false
      })
    })
  }

  reload() {
    this.setState({
      loading: true
    })
    Client.reloadTickets(data => {
      this.setState({
        tickets: this.sortTickets(data.tickets),
        loading: false
      })
    })
  }

  sortTickets(tickets) {
    tickets.sort((a, b) => {
      const aStatusLoc = STATES.indexOf(a.status)
      const bStatusLoc = STATES.indexOf(b.status)
      if (aStatusLoc < bStatusLoc) {
        return -1
      } else if (bStatusLoc < aStatusLoc) {
        return 1
      }
      if (a.priority < b.priority) {
        return -1
      } else if (a.priority > b.priority) {
        return 1
      }
      return a.id < b.id ? -1 : 1
    })

    return tickets
  }

  ticketGetter(i) {
    return this.state.tickets[i]
  }

  handleRowUpdate({ rowIdx, updated }) {
    const tickets = this.state.tickets.slice()
    Object.assign(tickets[rowIdx], updated)
    this.setState({
      tickets
    })
    Client.saveTickets(tickets)
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <span className="header-col">
            <img
              src="zendesk_buddha.png"
              alt="zendesk buddha"
              width="50"
              height="50"
            />
          </span>
          <span className="header-col">
            Zendesk Ticket Manager
          </span>
        </div>

        <div className="App-content">
          <div id="reload-area">
            {this.state.loading
              ? <div>Loading...</div>
              : <button onClick={this.reload}>Refresh</button>}
          </div>
          <Grid
            ticketGetter={this.ticketGetter}
            ticketCount={this.state.tickets.length}
            handleRowUpdate={this.handleRowUpdate}
          />
        </div>
      </div>
    )
  }
}

export default App
