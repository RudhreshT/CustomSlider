/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import SliderCaptions from './SliderCaptions'

const getWidth = () => window.innerWidth

const Slide = ({ content }) => (
  <div style={{width: '100%',height: '100%',position: 'relative'}}>
  {content.type === "img" ?
  <div
    css={css`
      height: 100%;
      background-image: url(${content.url});
      background-size: cover;
      opacity: 0.5;
      background-repeat: no-repeat;
      background-position: center;
    `}
  >
  </div>
  :
  <div class='video' style={{width:window.width}}>
    <div className="embed-responsive embed-responsive-16by9" style={{position: 'unset'}}>
        <iframe title='youtube' width="555" height="480" src={content.url} frameBorder="0"></iframe>
    </div>
  </div>
}
{/* {content.caption&& <div style={{width:(getWidth() / 4)}}> <SliderCaptions _Text={content.caption} width={getWidth()}/></div>} */}
</div>
)

export default Slide