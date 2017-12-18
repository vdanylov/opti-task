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

  renderIframe = url => {
    return {__html: `<iframe src=${url} width="100%" height="550px"></iframe>`};
  }

  render() {
    
    const { 
      story: { url, by, title, type}, 
      closeShowInfo 
    } = this.props;

    const { openDialog } = this.state;

    return (
      <div>
        <Dialog open={openDialog} style={{width: "80%", height: "80%"}}>
          <DialogContent>
            <div dangerouslySetInnerHTML={this.renderIframe(url)} />
          </DialogContent>
          <DialogActions>
            <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
        <div>
          <h2><b>Additional story info</b></h2>
          <p><b>Autor:</b> {by}</p>
          <p><b>Title:</b> {title}</p>
          <p><b>Title:</b> {type}</p>
          <Button colored onClick={this.handleOpenDialog}>Read</Button>
          <Button colored onClick={closeShowInfo}>Close</Button>        
        </div>
      </div>
    )
  }
}
