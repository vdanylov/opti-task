import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DataTable, TableHeader, Button } from 'react-mdl'

export default class StoriesDataTable extends Component {

    static propTypes = {
        stories: PropTypes.array.isRequired
    }

  render() {
    const { stories, showMoreInfo } = this.props;
    return (
      <div>
        <DataTable
            sortable
            shadow={0}
            rows={stories}
            rowKeyColumn="id"
        >
            <TableHeader name="title" tooltip="Story title">Title</TableHeader>
            <TableHeader name="id" tooltip="Show info" cellFormatter={id => <Button colored mini='true' onClick={showMoreInfo.bind(this, id)}>Info</Button>}>Link</TableHeader>
        </DataTable>    
    </div>
    )
  }
}