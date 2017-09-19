import React, { Component } from 'react';

 class ImageDisplay extends Component {
  render() {
    let array = this.props.images;
    let photos = array.map( (photo, index) => {
      return (
        <div key={index}>
          <img src={photo.img_src} alt='img'></img>
        </div>
      )
    });
    return (
      <div>
        {photos}
      </div>
    );
  }
}

export default ImageDisplay
