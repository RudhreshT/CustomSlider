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
  const { slides } = props

  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide]
  })

  const { activeSlide, translate, _slides, transition } = state

  const autoPlayRef = useRef()
  const transitionRef = useRef()
  const resizeRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
    transitionRef.current = smoothTransition
    resizeRef.current = handleResize
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }
    
    const smooth = e => {
      if (e.target.className.includes('SliderContent')) {
        transitionRef.current()
      }
    }

    const resize = () => {
      resizeRef.current()
    }

    const interval = setInterval(play, props.autoPlay * 1000)
    const transitionEnd = window.addEventListener('transitionend', smooth)
    const onResize = window.addEventListener('resize', resize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('transitionend', transitionEnd)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 })
  }, [transition])

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 })
  }

  const smoothTransition = () => {
    let _slides = []
    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide]
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2)
  
    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth()
    })
  }

  const nextSlide = () => 
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
    })
  
  let changeonClick=(index)=>{
    console.log(index === activeSlide ? activeSlide : index)
    console.log(activeSlide)
    return setState({
      ...state,
      translate: index * getWidth(),
      activeSlide: index
    })
  }

  const prevSlide = () =>
  setState({
    ...state,
    translate: 0,
    activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
  })

  let thumponClick=()=>{
    if(document.getElementById("thump").style.display === 'none'){
      document.getElementById("thump").style.display = 'block';
      console.log(document.getElementById("slidercontainer").className)
      document.getElementById("slidercontainer").className = 'col-lg-10';
    }
    else{
      document.getElementById("thump").style.display = 'none'
      document.getElementById("slidercontainer").className = 'col-lg-12';
    }
  }

  return (
    <div>
      <div>
      {/* <button id="colapsebutton" className="btn btn-light">Collapse Thumbnail</button>   */}
          <div className="custom-control custom-switch" id="colapsebutton">
          <input type="checkbox" className="custom-control-input" onClick={()=>thumponClick()} id="customSwitches"/>
          <label className="custom-control-label" htmlFor="customSwitches">Collapse Thumbnail</label>
          </div>
      </div>
      <div className="main col-lg-12" style={{backgroundColor:'#222c33',paddingLeft: 0,paddingRight: 0}}>
        <div id="slidercontainer" className="col-lg-12" >
            <SliderContent
                  css={image}
                  translate={translate}
                  transition={transition}
                  width={getWidth() * _slides.length}
                >
                  {_slides.map((_slide, i) => (
                    <Slide key={_slide + i} content={_slide} />
                  ))}
                  {/* <iframe src='https://www.youtube.com/watch?v=IUN664s7N-c'
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    title='video'
                  /> */}
                </SliderContent>
                {/* {props.slides[activeSlide].type === "img" &&<SliderCaptions _Text={text} width={getWidth()}/>} */}
                
                <Arrow direction="left" handleClick={prevSlide} />
                <Arrow direction="right" handleClick={nextSlide} />       
                        
        </div>
        <div id="thump" style={{display:'none'}} className="col-lg-2 col-md-2 hidden-sm-down sm-thum" css={Thump}>
          {props.slides.map((content, i) => (
            <div key={i} onClick={()=>changeonClick(i)} style={{margin:"10px 0px"}}>
                <img className="thumpnails" style={{width:"100%", height: '100px', opacity: activeSlide === i ? '1' : '0.5'}} src={content.type === 'img' ? content.url : content.thump} />
            </div>
          ))} 
        </div>
      </div>
      <Dots slides={slides} activeIndex={activeSlide} />
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