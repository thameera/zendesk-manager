import React, { Component } from 'react'
import ReactDataGrid from 'react-data-grid'
import './Grid.css'
import { CONFIG } from '../../config'

const IDFormatter = ({ value }) => {
  return (
    <a
      href={`https://${CONFIG.ZD_TENANT}.zendesk.com/agent/tickets/${value}`}
      target="blank"
    >
      {value}
    </a>
  )
}

const StatusFormatter = ({ value }) => {
  return (
    <div className={`status status-${value}`}>
      {value}
    </div>
  )
}

const columns = [
  { key: 'id', name: 'ID', width: 70, locked: true, formatter: IDFormatter },
  { key: 'status', name: 'Status', width: 100, formatter: StatusFormatter },
  { key: 'priority', name: 'Priority', width: 80 },
  { key: 'subject', name: 'Subject', width: 250 },
  { key: 'tags', name: 'Tags', editable: true, width: 200 },
  { key: 'next', name: 'Next', editable: true, cellClass: 'left' }
]

class Grid extends Component {
  render() {
    return (
      <div className="grid">
        <ReactDataGrid
          enableCellSelect={true}
          columns={columns}
          rowGetter={this.props.ticketGetter}
          rowsCount={this.props.ticketCount}
          onRowUpdated={this.props.handleRowUpdate}
          minHeight={550}
        />
      </div>
    )
  }
}

export default Grid
