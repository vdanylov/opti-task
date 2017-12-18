import React, { Component } from 'react'

export default class StoryInfoComponent extends Component {

  render() {
    
    const { 
      story, 
      closeShowInfo 
    } = this.props;

    return (
      <div>
        <h2>Additional story info</h2>
        <p><b>Autor:</b> {story.by}</p>
        <p><b>Title:</b> {story.title}</p>
        <p><b>Title:</b> {story.type}</p>        
      </div>
    )
  }
}
