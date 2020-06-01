import React, {Component} from 'react';
import './App.css'
import Slider from './Slider';
import 'react-bootstrap';


const images = [
  {url : 'https://www.youtube.com/embed/8zxj-6smeVA',thump:'https://appsamurai.com/wp-content/uploads/2016/11/app-store-video.jpg' ,type : 'video',caption : ''},
  {url : 'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Full-HD-Images.jpg', type : 'img',caption : [{
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
  {url : 'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Full-HD-Images-Free-Download-620x349.jpg',  type : 'img'},
  {url : 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Full-hd-nature-wallpapers-1080p-620x349.jpg', type : 'img'},
  {url : 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',  type : 'img'},
  {url : 'https://www.pixelstalk.net/wp-content/uploads/2016/07/full-hd-wallpapers-1080p-nature-free-download-9-620x349.jpg',  type : 'img'},
  {url : 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Pictures-1080p-Full-HD-Download-620x349.jpg',  type : 'img'},
  {url : 'https://www.pixelstalk.net/wp-content/uploads/2016/07/City-under-construction-1080p-full-hd-wallpaper-620x349.jpg',  type : 'img'},
  {url : 'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',  type : 'img'},
  {url : 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',  type : 'img'},
  {url : 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Download-1080p-Full-HD-Images-620x349.jpg',  type : 'img'}
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
