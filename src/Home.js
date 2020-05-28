import React, {Component} from 'react';
import './App.css'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from './Slider';


const images = [
  'https://www.youtube.com/watch?v=4YQ4svkETS0',
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
]


export default class App extends Component  { 
  render(){

  return (
    <div className="App">
      <div style={{marginTop:"30px"}} id="product_slider">
          <Slider slides={images} />
      </div>

    </div>
  );
  }
}
