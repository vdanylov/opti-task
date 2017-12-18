import React, { Component } from 'react'
import constants from '../redux/constants/index'
import { connect } from 'react-redux'
import StoriesDataTable from './StoriesDataTable'
import StoryInfoComponent from './StoryInfoComponent'

class StoriesContainer extends Component {

    state = {
        showInfo: false,
        storyId: null
    }

    componentDidMount = () => this.props.dispatch({ type: constants.GET_STORIES})
    
    showMoreInfo = (storyId,e) => {
        e.preventDefault();
        this.setState((state, props) => ({ 
            showInfo: true,
            storyId
        }));
    }

    closeShowInfo = () => this.setState({ showInfo: false});

    render() {
        const { stories: { isLoading, stories, error } } = this.props;
        const { storyId, showInfo } = this.state;
        const story = stories.find(story => story.id === storyId);

        return (
        <div>
            {!isLoading ?
                <div>
                    {!showInfo &&
                        <StoriesDataTable 
                            stories={stories}
                            showMoreInfo={this.showMoreInfo}
                        />                    
                    }
                    {(showInfo && story) && 
                        <StoryInfoComponent 
                            story={story} 
                            closeShowInfo={this.closeShowInfo}                        
                        />}
                </div> : <div>Loading...</div>
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