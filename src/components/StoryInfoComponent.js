import React, { Component } from 'react'
import { Button, Dialog, DialogContent, DialogActions } from 'react-mdl'

export default class StoryInfoComponent extends Component {

  state = {
    openDialog: false
  }

  handleOpenDialog = () => {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog = () => {
    this.setState({
      openDialog: false
    });
  }

  render() {
    
    const { 
      story, 
      closeShowInfo 
    } = this.props;

    const { openDialog } = this.state;

    return (
      <div>
        <Dialog open={openDialog}>
          <DialogContent>
            lorem50
          </DialogContent>
          <DialogActions>          
            <Button 
              type='button' 
              onClick={this.handleCloseDialog}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <h2>Additional story info</h2>
        <p><b>Autor:</b> {story.by}</p>
        <p><b>Title:</b> {story.title}</p>
        <p><b>Title:</b> {story.type}</p>
        <Button colored onClick={this.handleOpenDialog}>Read</Button>
        <Button colored onClick={closeShowInfo}>Close</Button>
      </div>
    )
  }
}
