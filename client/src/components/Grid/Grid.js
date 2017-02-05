import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';

const columns = [
  { key: 'id', name: 'ID', width: 80 },
  { key: 'status', name: 'Status', width: 120 },
  { key: 'subject', name: 'Subject' },
  { key: 'priority', name: 'Priority' },
  { key: 'tags', name: 'Tags', editable: true },
  { key: 'next', name: 'Next', editable: true },
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
          onRowUpdated={this.props.handleRowUpdate}
        />
      </div>
    );
  }
}

export default Grid;