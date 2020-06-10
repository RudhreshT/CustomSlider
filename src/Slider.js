/** @jsx jsx */
import React, { Component, useState, useEffect, useRef } from 'react'
import { css, jsx } from '@emotion/core'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import './SliderCaptions';
import Dots from './Dots'
import './App.css'
import $ from "jquery";
// import SliderCaptions from './SliderCaptions'
// import Thumpnail from './SliderThump'

/**
 * @function Slider
 */

// window.onload = (e.currentTarget.innerWidth) => console.log(e)
// window.onresize = (e.currentTarget.innerWidth) => console.log(e)

//const getWidth = () => window.innerWidth;
let getWidth = () => Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
let getheight = () => Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

const Slider = props => {
  
  // const firstSlide = slides[0]
  // const secondSlide = slides[1]
  // const lastSlide = slides[slides.length - 1]

  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
    // _slides: [lastSlide, firstSlide, secondSlide]
  })

  const { activeSlide, translate, transition } = state
  
  const autoPlayRef = useRef()
  //const transitionRef = useRef()
  const resizeRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
    // transitionRef.current = smoothTransition
    resizeRef.current = handleResize
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const smooth = e => {
      if (e.target.className.includes('SliderContent')) {
        //transitionRef.current()
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

  // const smoothTransition = () => {
  //   let _slides = []
  //   if (activeSlide === slides.length - 1)
  //     _slides = [slides[slides.length - 2], lastSlide, firstSlide]
  //   else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
  //   else _slides = slides.slice(activeSlide - 1, activeSlide + 2)

  //   setState({
  //     ...state,
  //     _slides,
  //     transition: 0,
  //     translate: getWidth()
  //   })
  //}

  const refs = props.slides.reduce((acc, value,i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const nextSlide = () => {
    hidebefore(activeSlide);
    if (timer === null) {
      if (activeSlide === props.slides.length - 1) {
        return setState({
          ...state,
          translate: 0,
          activeSlide: 0
        })
      }
      setState({
        ...state,
        activeSlide: activeSlide + 1,
        translate: (activeSlide + 1) * getWidth()
      })
    }
    if (timer === null) {
      timer = "time";
      setTimeout(() => timer = null, 1000)
    }
  }

  const prevSlide = () => {
    showbefore(activeSlide)
    if (timer === null) {
      if (activeSlide === 0) {
        return setState({
          ...state,
          translate: (props.slides.length - 1) * getWidth(),
          activeSlide: props.slides.length - 1
        })
      }
      setState({
        ...state,
        activeSlide: activeSlide - 1,
        translate: (activeSlide - 1) * getWidth()
      })
    }
    if (timer === null) {
      timer = "time";
      setTimeout(() => timer = null, 1000)
    }
  }

  let hidebefore=(key)=>{
    if(props.slides.length === key+1){
      scrollthumb(0)
    }
    else{
      scrollthumb(key+1)
    }
  }

  let showbefore=(key)=>{
    // scrollthumb(key)
    if(key === 0){
      scrollthumb(props.slides.length -1 )
    }
    else{
      scrollthumb(key)
    }
  }

  let changeonClick=(key)=>{
    if(props.slides.length === key+1){
      scrollthumb(key)
    }
    else{
      scrollthumb(key)
    }
    // console.log("3",key)
    return setState({
      ...state,
      translate: key * getWidth(),
      activeSlide: key
    })
  }

  

  let thumponClick = () => {
    if (document.getElementById("thump").style.display === 'none') {
      document.getElementById("thump").style.display = 'block';
      document.getElementById("slidercontainer").className = 'col-lg-10';
    }
    else {
      document.getElementById("thump").style.display = 'none'
      document.getElementById("slidercontainer").className = 'col-lg-12';
    }
  }

  const scrollthumb = (id) =>{
        //console.log(id);
        refs[id].current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: "nearest"
        });}
        

  return (
    <div>
      <div className=" main col-lg-12" style={{ backgroundColor: '#222c33', paddingLeft: 0, paddingRight: 0 }}>
        <div id="slidercontainer" className="col-lg-12">
          <div className="custom-control custom-switch" id="colapsebutton">
            <input type="checkbox" className="custom-control-input" onClick={() => thumponClick()} id="customSwitches" />
            <label className="custom-control-label" htmlFor="customSwitches"></label>
          </div>
          <SliderContent
            translate={translate}
            transition={transition}
            width={getWidth() * props.slides.length}
          >
            {props.slides.map((_slide, i) => (
              <Slide id="caption" key={_slide + i} content={_slide} forcaptionstyle='yes'/>
            ))}

          </SliderContent>
          <Arrow direction="left" handleClick={prevSlide} />
          <Arrow direction="right" handleClick={nextSlide} />

        </div>
        {/* <div  className="col-lg-2 col-md-2 hidden-sm-down"  > */}
        <div id="thump" className="col-lg-2 col-md-2 hidden-sm-down sm-thum" style={{ display: 'none',scrollBehavior: 'smooth'}} css={Thump}>
          <div id ="thump_group" >
          {props.slides.map((content, i) => (
                <div id={"each-"+i} ref={refs[i]} className="js-flickity thump_slider" key={i} onClick={() => changeonClick(i)} style={{ margin: "10px 0px" }}>
                  <img alt='' style={{ width: "100%", height: '100px', opacity: activeSlide === i ? '1' : '0.5' }} src={content.type === 'img' ? content.url : content.thump} />
                </div>
          ))}
          </div>
        </div>
        {/* </div> */}
      </div>
      {/* <Dots slides={slides} activeIndex={activeSlide} /> */}
    </div>
  )
}

Slider.defaultProps = {
  slides: [],
  autoPlay: null
}

const Thump = css`
position: absolute;
top: 0;
right: 0px;
display: grid;
height: 80vh;
overflow: auto;
scroll-top: 0
scroll-behavior: smooth;
scrollbar-width: none; 
-ms-overflow-style: none;
`


let timer = null;
export default Slider