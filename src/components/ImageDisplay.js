import React, { Component } from 'react';


class ImageDisplay extends Component {
  render(){
    let items = this.props.photos
    let images= items.map((item)=>{
      return(
        <img src={item.img_src} alt="">
      )
    })
    return(
      <div>
      {images}
      </div>
    )
  }
}


export default ImageDisplay
