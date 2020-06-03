import React, {Component} from 'react';
import './App.css'
import Slider from './Slider';
import 'react-bootstrap';

const slider = [
  require('./images/slider1.jpg'),
  require('./images/slider2.jpg'),
  require('./images/slider3.jpg'),
  require('./images/slider4.jpg'),
  require('./images/slider5.jpg'),
  require('./images/slider6.jpg'),
  require('./images/slider7.jpg'),
  require('./images/slider8.jpg'),
  require('./images/slider9.jpg'),
  require('./images/slider10.jpg'),
  require('./images/video.mp4'),
];

const images = [
  // {url : slider[10],thump:'https://appsamurai.com/wp-content/uploads/2016/11/app-store-video.jpg' ,type : 'video',caption : ''},
  {url : slider[0], type : 'img',caption : [{
    txt:"EVENT - Apr 20, 2020 at 1:00 PM UEDT",
    size:"1.3em"
  },
  {
    txt:"Changes in the Psychology of Design: Rethinking Space",
    size:"1.5em"
  },
  {
    txt:"Our attitudes toward space, both virtual and physical, are changing as we continue to live through the COVID-19 pandemic",
    size:"1.1em"
  }]},
  {url : 'https://www.usgbc.org/sites/default/files/hero/2020-03/usgbc_34863186-edited.jpg',  type : 'img'},
  {url : slider[2], type : 'img'},
  {url : slider[3],  type : 'img'},
  {url : slider[4],  type : 'img'},
  {url : slider[5],  type : 'img'},
  {url : slider[6],  type : 'img'},
  {url : slider[7],  type : 'img'},
  {url : slider[8],  type : 'img'},
  {url : slider[9],  type : 'img'}
]


export default class App extends Component  {
  render(){
  return (
    <div className="App">
      <div style={{marginTop:"30px"}} id="product_slider">
          <Slider slides={images} autoPlay={50}/>
      </div>
    </div>
  );
  }
}
