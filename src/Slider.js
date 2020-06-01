/** @jsx jsx */
import React, { useState, useEffect, useRef } from 'react'
import { css, jsx } from '@emotion/core'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'
import './imgslider.css'
import SliderCaptions from './SliderCaptions'
import Thumpnail from './SliderThump'
import 'react-bootstrap';

/**
 * @function Slider
 */
const Slider = props => {
  const getWidth = () => window.innerWidth

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })

  const { translate, transition, activeIndex } = state

  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    })
  } 
  let changeonClick=(index)=>{
    console.log('index',index);
    console.log('active index',activeIndex + 1);
    return setState({
      ...state,
      translate: index * getWidth(),
      activeIndex: index
    })
  }
  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * getWidth(),
        activeIndex: props.slides.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    })
  }
  const text = [{
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
  }]

  return (
    <div className="container">
      <div className="main col-lg-12" style={{backgroundColor:'#222c33',paddingLeft: 0}}>
        <div className="col-lg-10 col-md-10" css={SliderCSS}>
            <SliderContent
                  css={image}
                  translate={translate}
                  transition={transition}
                  width={getWidth() * props.slides.length}
                >
                  {props.slides.map((slide, i) => (
                    <Slide className="thumpnails" key={slide + i} content={slide} />
                  ))}
                  {/* <iframe src='https://www.youtube.com/watch?v=IUN664s7N-c'
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    title='video'
            /> */}
                </SliderContent>
                {/* <Arrow direction="left" handleClick={prevSlide} isChangeable={activeIndex === 0 ? true : false}/>
                <Arrow direction="right" handleClick={nextSlide} isChangeable={activeIndex===props.slides.length-1?true:false}/>*/}
                {props.slides[activeIndex].type === "img" &&<SliderCaptions _Text={text} width={getWidth()}/>}
                <Arrow direction="left" handleClick={prevSlide} />
                <Arrow direction="right" handleClick={nextSlide} />               
                
                <Dots slides={props.slides} activeIndex={activeIndex} />
        </div>
        <div className="col-lg-2 col-md-2 hidden-sm-down sm-thum" css={Thump}>
          {props.slides.map((content, i) => (
            <div key={i} onClick={()=>changeonClick(i)} style={{margin:"10px 0px"}}>
                <img className="thumpnails" style={{width:"100%", height: '100px', opacity: activeIndex === i ? '1' : '0.5'}} src={content.type === 'img' ? content.url : content.thump} />
            </div>
          ))} 
        </div>
      </div>
    </div>
  )
}

const Thump = css`
position: absolute;
top: 0;
right: 0px;
display: grid;
height: 80vh;
overflow: overlay;
`
const image = css`
// width: 100%;
// display: inline;
`

const SliderCSS = css`
  position: relative;
  height: 80vh;
  overflow: hidden;
  right:20%;
  left:0;
  background-color: #282c34;
  padding-right : 0;
  padding-left : 0;
`

export default Slider