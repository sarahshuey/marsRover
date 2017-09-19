import React, { Component } from 'react';
import GetImageButton from '../components/GetImageButton'
import ImageDisplay from '../components/ImageDisplay'
import API_KEY from './apiKey'


class GetImageForm extends Component {
constructor(props){
  super(props)
this.fetchroverimage=this.fetchroverimage.bind(this)
this.handleRover=this.handleRover.bind(this)
this.handleSol=this.handleSol.bind(this)
this.handleCamera=this.handleCamera.bind(this)

  this.state = {
  rover: "Curiosity",
  camera: "FHAZ",
  images: [],
  sol: "",
}
}
handleRover(e) {
this.setState({rover: e.target.value});
}
handleSol(e) {
this.setState({sol: e.target.value});
}
handleCamera(e) {
this.setState({camera: e.target.value});
}

fetchroverimage() {
  console.log('hello');
  this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
  let cam = this.state.camera;
  let rove = this.state.rover;
  let num = this.state.sol;
  let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
  fetch(imageUrl)
  .then(r => r.json())
  .then(data => {
    console.log(data.photos);
    this.setState({images: data.photos});
  });
}


render(){
return(
  <div>
  <form>
<label htmlFor="rover">Rover</label>
<select onChange={this.handleRover} id="rover">
  <option value="Curiosity">Curiosity</option>
  <option value="Opportunity">Opportunity</option>
  <option value="Spirit">Spirt</option>
</select>
<label htmlFor="camera">Camera Type</label>
<select onChange={this.handleCamera} id="rover">
  <option value="fhaz">FHAZ (Front Hazard)</option>
  <option value="rhaz">RHAZ (Rear Hazard)</option>
  <option value="navcam">NAVCAM (Navigation Cam)</option>
</select>
<label htmlFor="sol">Martian Sol: 1000-2000</label>
<input type="number" onChange={this.handleSol} max="2000" min="1000"/>
</form>
<GetImageButton click={this.fetchroverimage}/>
<ImageDisplay  images={this.state.images}/>
</div>
)}
}


export default GetImageForm
