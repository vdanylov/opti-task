import React, { Component } from 'react'
import { connect } from 'react-redux'
import StoriesDataTable from './StoriesDataTable'
import StoryInfoComponent from './StoryInfoComponent'
import constants from '../redux/constants/index'

class StoriesContainer extends Component {

    // closeShowInfo = () => this.setState({ showInfo: false});

    componentDidMount = () => this.props.dispatch({ type: constants.GET_STORIES})


    render() {
        const { stories: { isLoading, error }, children } = this.props;

        return <div>{(!isLoading && !error) ? children : <div>Loading...</div> }</div>;
    }
}

const mapStateToProps = state => ({
    stories: state.storiesReducer
})

const mapDispatchToProps = dispatch => ({
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(StoriesContainer);