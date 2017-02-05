import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';

const columns = [
  { key: 'id', name: 'ID', width: 80 },
  { key: 'status', name: 'Status', width: 120 },
  { key: 'subject', name: 'Subject' },
  { key: 'priority', name: 'Priority' },
  { key: 'tags', name: 'Tags' },
  { key: 'next', name: 'Next' },
]

class Grid extends Component {
  render() {
    return (
      <div>
        <ReactDataGrid
          enableCellSelect={true}
          columns={columns}
          rowGetter={this.props.ticketGetter}
          rowsCount={this.props.ticketCount}
        />
      </div>
    );
  }
}

export default Grid;