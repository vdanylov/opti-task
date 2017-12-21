import React, { Component } from 'react'
import { Button, Dialog, DialogContent, DialogActions } from 'react-mdl'
import { connect } from 'react-redux'

class StoryInfoComponent extends Component {

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

  renderDialog = (openDialog, url) => {
    return (
      openDialog &&
        <Dialog open={openDialog} style={{width: "80%", height: "80%"}}>
          <DialogContent>
            <div dangerouslySetInnerHTML={this.renderIframe(url)} />
          </DialogContent>
          <DialogActions>
            <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
    )
  }

  render() {
    
    const story = this.props.stories.find(item => item.id == this.props.params.id) 
    const { openDialog } = this.state;
    const { router } = this.props;
    
    return (
      <div>
        {story &&
          <div>
            {this.renderDialog(openDialog, story.url)}
            <h2><b>Additional story info</b></h2>
            <p><b>Autor:</b> {story.by}</p>
            <p><b>Title:</b> {story.title}</p>
            <p><b>Title:</b> {story.type}</p>
            <Button colored onClick={this.handleOpenDialog}>Read</Button>
            <Button colored onClick={() => {router.push('/table')}}>Close</Button>
            </div>
        }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  stories: state.storiesReducer.stories
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(StoryInfoComponent);