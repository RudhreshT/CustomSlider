/** @jsx jsx */
// import React from 'react'
import {jsx } from '@emotion/core'
import SliderCaptions from './SliderCaptions'

// let setWidth = (_event) => {

//   if (typeof _event === 'object'){
//     console.log(_event)
//   }
// }

const Slide = ({ content }) => (
  <div style={{width: '100%',height: '100%',position: 'relative'}}>
  {content.type === "img" ?
    <img width="100" height="100" className="slider-image" src={content.url} alt=""/>
  :
  <div className='video' style={{width:window.width}}>
    <div className="embed-responsive embed-responsive-16by9" style={{position: 'unset'}}>
        <iframe title='youtube' width="555" height="480" src={content.url} frameBorder="0"></iframe>
    </div>
  </div>
}
<SliderCaptions _Text={typeof content.caption === 'object' ? content.caption : [] }/>
{/* {content.caption&& <div style={{width:(getWidth() / 4)}}> <SliderCaptions _Text={content.caption} width={getWidth()}/></div>} */}
</div>
)

export default Slide