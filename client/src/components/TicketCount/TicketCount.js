import React, { Component } from 'react'
import './TicketCount.css'

class TicketCount extends Component {
  render() {
    return (
      <div className="ticket-count">
        <span className="label">All</span>
        <span className="val">{this.props.counts.all}</span>
        <span className="label">Open</span>
        <span className="val">{this.props.counts.open}</span>
      </div>
    )
  }
}

export default TicketCount
