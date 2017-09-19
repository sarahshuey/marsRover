import React, { Component } from 'react';

class GetImageButton extends Component {
  render() {
    return (
      <button onClick={this.props.click}>Submit</button>
    );
  }
}

export default GetImageButton
