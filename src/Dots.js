/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Dot = ({ active }) => (
  <span
    css={css`
      padding: 10px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
      background: ${active ? 'black' : 'white'};
    `}
  />
)

const Dots = ({ slides, activeIndex }) => (
  <div
    css={css`
      position: absolute;
      bottom: 0;
      top: 0;
      right: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    {slides.map((slide, i) => (
      <Dot style={{width: '200px', height: '120px', backgroundSize: 'cover', backgroundImage: 'url("https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")'}} key={slide} active={activeIndex === i}/>
    ))}
      <div style={{width: '200px'}}>
        <div style={{width: '200px', height: '120px', backgroundSize: 'cover', backgroundImage: 'url("https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")'}}></div>
        <div style={{width: '200px', height: '120px', backgroundSize: 'cover', backgroundImage: 'url("https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")'}}></div>
        <div style={{width: '200px', height: '120px', backgroundSize: 'cover', backgroundImage: 'url("https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")'}}></div>
        <div style={{width: '200px', height: '120px', backgroundSize: 'cover', backgroundImage: 'url("https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")'}}></div>
      </div>
     
  </div>
)

export default Dots