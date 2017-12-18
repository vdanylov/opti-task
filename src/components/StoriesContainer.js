import React, { Component } from 'react'
import constants from '../redux/constants/index'
import { connect } from 'react-redux'
import StoriesDataTable from './StoriesDataTable'

class StoriesContainer extends Component {

    componentDidMount = () => this.props.dispatch({ type: constants.GET_STORIES})
    
    closeShowInfo = () => this.setState({ showInfo: false});

    render() {
        const { stories: { isLoading, stories, error } } = this.props;

        return (
        <div>
            {!isLoading ?
                <StoriesDataTable 
                    stories={stories}
                    showMoreInfo={this.showMoreInfo}
                /> : <div>Loading...</div>
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(StoriesContainer);