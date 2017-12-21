import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import constants from '../redux/constants/index'
import { DataTable, TableHeader } from 'react-mdl'
import { Link } from 'react-router'

class StoriesDataTable extends Component {

    static propTypes = {
        stories: PropTypes.object.isRequired
    }

    render() {
        const { stories: { stories, isLoading, error } } = this.props;
        return (
        <div>
            {(!isLoading && !error) ? 
                <DataTable
                    sortable
                    shadow={0}
                    rows={stories}
                    rowKeyColumn="id"
                >
                    <TableHeader name="title" tooltip="Story title">Title</TableHeader>
                    <TableHeader name="id" tooltip="Show info" cellFormatter={id => <Link to={`${id}`}>Info</Link>}>Link</TableHeader>
                </DataTable> : <div>Loading...</div>
            }
            {error && <h1 style={{color: 'red'}}>{error.response.statusText}</h1>}
        </div>
    )
  }
}

const mapStateToProps = state => ({
    stories: state.storiesReducer
})

const mapDispatchToProps = dispatch => ({
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(StoriesDataTable);