/** @jsx jsx */
import React, { Component, useState, useEffect, useRef } from 'react'
import { css, jsx } from '@emotion/core'
import SliderContent from './SliderContent'
import useHover from './UseHover'
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


let getWidth = () => Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

const Slider = props => {
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
    // _slides: [lastSlide, firstSlide, secondSlide]
  })

  var [hoverRef, isHovered] = useHover();

  const { activeSlide, translate, transition } = state
  const autoPlayRef = useRef()
  const resizeRef = useRef()

  var interval=null;

   useEffect(() => {
    autoPlayRef.current = nextSlide
    resizeRef.current = handleResize
  })

  useEffect(() => {
    var play = () => {
      autoPlayRef.current()
    }
    const smooth = e => {
      if (e.target.className.includes('SliderContent')) {
      }
    }
    const resize = () => {
      resizeRef.current()
    }
    interval = setInterval(play,props.autoPlay*1000)
    const transitionEnd = window.addEventListener('transitionend', smooth)
    const onResize = window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('transitionend', transitionEnd)
      window.addEventListener('resize', onResize);
    }
  }, [])

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 })
  }, [transition])

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 })
  }

  const refs = props.slides.reduce((acc, value, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const nextSlide = () => {
    if(isHovered){
      return
    }
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

  let hidebefore = (key) => {
    if (props.slides.length === key + 1) {
      scrollthumb(0)
    }
    else {
      scrollthumb(key + 1)
    }
  }

  let showbefore = (key) => {
    if (key === 0) {
      scrollthumb(props.slides.length - 1)
    }
    else {
      scrollthumb(key)
    }
  }

  let changeonClick = (key) => {
    if (props.slides.length === key + 1) {
      scrollthumb(key)
    }
    else {
      scrollthumb(key)
    }
    return setState({
      ...state,
      autoPlayRef,
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

  const scrollthumb = (id) => {
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: "nearest"
    });
  }

  return (
    <div>
      <div className="main col-lg-12" style={{height:props.height+'vh'}}>
        <div id="slidercontainer"  className="col-lg-12" >
        {props.slides.length > 1 ?
          <div className="custom-control custom-switch" id="colapsebutton">
            <input type="checkbox" className="custom-control-input" onClick={() => thumponClick()} id="customSwitches" />
            <label className="custom-control-label" htmlFor="customSwitches"></label>
          </div> : null }
          <div ref={hoverRef} style={{height:'100%'}}>
          <SliderContent
            translate={translate}
            transition={transition}
            width={getWidth() * props.slides.length}
          >
            {props.slides.map((_slide, i) => (
              <Slide key={_slide + i} content={_slide} height={props.height} />
            ))}
          </SliderContent></div>
          {props.slides.length > 1 ?
          <div>
              <Arrow direction="left" handleClick={prevSlide} />
              <Arrow direction="right" handleClick={nextSlide} />
          </div>
          : null }
        </div>
        <div id="thump" className="col-lg-2 col-md-2 hidden-sm-down sm-thum" style={{display: 'none', scrollBehavior: 'smooth',height: '100%' }} >
          <div id="thump_group">
            {props.slides.map((content, i) => (
              <div id={"each-" + i} ref={refs[i]} className="js-flickity thump_slider" key={i} onClick={() => changeonClick(i)} style={{ margin: "10px 0px" }}>
                <img alt='' style={{ width: "100%", height: '100px', opacity: activeSlide === i ? '1' : '0.5' }} src={content.type === 'img' ? content.url : content.thump} />
              </div>
            ))}
          </div>
        </div>
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
height:{props.height}
position: absolute;
top: 0;
right: 0px;
display: grid;
overflow: auto;
scroll-top: 0
scroll-behavior: smooth;
scrollbar-width: none; 
-ms-overflow-style: none;
`


let timer = null;
export default Slider