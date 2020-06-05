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
  require('./images/slider11.jpg'),
  require('./images/video.mp4'),
];



const images = [
  // {url : slider[10],thump:'https://appsamurai.com/wp-content/uploads/2016/11/app-store-video.jpg' ,type : 'video',caption : ''},
  {url : slider[0], type : 'img',caption : [{
    txt:"EVENT - Apr 20, 2020 at 1:00 PM UEDT",
    css:"small"
  },
  {
    txt:"Changes in the Psychology of Design: Rethinking Space",
    css:"high"
  },
  {
    txt:"Our attitudes toward space, both virtual and physical, are changing as we continue to live through the COVID-19 pandemic",
    css:"medium"
  },
  {
    txt:"COVID -19",
    css:"event"
  }]},
  {url : slider[1],  type : 'img',caption : [{
    txt:"EVENT - Apr 20, 2020 at 1:00 PM UEDT",
    css:"small"
  },
  {
    txt:"GPRO Fundamentals of Building Green",
    css:"high"
  },
  {
    txt:"In this GPRO Fundamentals of Building Green online course, you will learn how to see buildings differently and discover strategies to make them efficient, healthy and resilient.",
    css:"medium"
  },
  {
    txt:"ONLINE",
    css:"event"
  }]},
  {url : slider[2], type : 'img',caption : [{
    txt:"EVENT - Jun 01, 2020 at 1:00 PM UEDT",
    css:"small"
  },
  {
    txt:"2020 Water Conservation Showcase",
    css:"high"
  },
  {
    txt:"LEED v4.1 is the newest update to the LEED rating systems. The rating system is designed to be accessible, user-friendly and responsive to market feedback on LEED v4.",
    css:"medium"
  },
  {
    txt:"Conference",
    css:"event"
  }]},
  {url : slider[3],  type : 'img',caption : [{
    txt:"EVENT - Jan 16, 2020 at 8:00 PM UEDT",
    css:"small"
  },
  {
    txt:"LEED v4.1 Ask the Experts: Healthcare, 8 AM",
    css:"high"
  },
  {
    txt:"LEED v4.1 is the newest update to the LEED rating systems. The rating system is designed to be accessible, user-friendly and responsive to market feedback on LEED v4.",
    css:"medium"
  },
  {
    txt:"Meeting",
    css:"event"
  }]},
  {url : slider[4],  type : 'img',caption : [{
    txt:"EVENT - Dec 10, 2020 at 1:00 PM UEDT",
    css:"small"
  },
  {
    txt:"Fountain Creek Spring Cleanup",
    css:"high"
  },
  {
    txt:"USGBC has adopted a section of Fountain Creek and we need your help! Please join us as we do our part in keeping our waterways clean during our Spring Creek Cleanup event.",
    css:"medium"
  },
  {
    txt:"Volunteer Event",
    css:"event"
  }]},
  {url : slider[5],  type : 'img',caption : [{
    txt:"EVENT - Apr 20, 2020 at 1:00 PM UEDT",
    css:"small"
  },
  {
    txt:"GoGreen Conference Seattle",
    css:"high"
  },
  {
    txt:"The GoGreen Conference Seattle, taking place on Sept. 8, 2020, empowers business decision makers with sustainability strategies",
    css:"medium"
  },
  {
    txt:"Conference",
    css:"event"
  }]},
  {url : slider[6],  type : 'img',caption : [{
    txt:"EVENT - Sep 23, 2020 at 8:20 PM UEDT",
    css:"small"
  },
  {
    txt:"LEED for Homes Virtual Green Rater Training",
    css:"high"
  },
  {
    txt:"With over 2 million LEED® for Homes™ registered spaces worldwide, LEED is the international rating system to ensure residential buildings are better.",
    css:"medium"
  },
  {
    txt:"Online",
    css:"event"
  }]},
  {url : slider[7],  type : 'img',caption : [{
    txt:"EVENT - Mar 30, 2021 at 1:00 PM IST",
    css:"small"
  },
  {
    txt:"sustainABLE: IEQ - Now What?",
    css:"high"
  },
  {
    txt:"sustainABLE: USGBC West North Central's new regional forum exploring green building and sustainability in relationship to current events",
    css:"medium"
  },
  {
    txt:"Online",
    css:"event"
  }]},
  {url : slider[8],  type : 'img',caption : [{
    txt:"EVENT - Oct 07, 2020 at 3:30 PM UEDT",
    css:"small"
  },
  {
    txt:"USGBC Healthy Economy Forum",
    css:"high"
  },
  {
    txt:"This is USGBC’s new strategy intended to leverage the USGBC community to support buildings and communities in a post-pandemic world.",
    css:"medium"
  },
  {
    txt:"Online",
    css:"event"
  }]},
  {url : slider[9],  type : 'img',caption : [{
    txt:"EVENT - Feb 28, 2020 at 1:00 PM UEDT",
    css:"small"
  },
  {
    txt:"Building Lasting Change in Toronto",
    css:"high"
  },
  {
    txt:"The coming decade calls for urgent and sustained action to achieve Canada’s climate change commitments. This goal requires accelerating and scaling up our collective impact across the entire building sector.",
    css:"medium"
  },
  {
    txt:"Conference",
    css:"event"
  }]}
]

export default class App extends Component  {
  render(){
  return (
    <div className="App">
      <div style={{marginTop:"50px"}} id="product_slider">
          <Slider slides={images} autoPlay={5}/>
      </div>
    </div>
  );
  }
}
