/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Dot = ({ active }) => (
  <span
    css={css`
      padding: 7px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
      background: ${active ? 'black' : 'white'};
      border: 1px solid #000;
      border-radius: 50%;
    `}
  />
)

const Dots = ({ slides, activeIndex }) => (
  <div
    css={css`
      position: absolute;
      margin-top: 10px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    
    {slides.map((slide, i) => (
      <Dot key={i} active={activeIndex === i} />
    ))}
  </div>
)

export default Dots