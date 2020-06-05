/** @jsx jsx */
// import React, { useReducer } from 'react'
import { css, jsx } from '@emotion/core'

const SliderContent = props => (
  <div
    css={css`
      transform: translateX(-${props.translate}px);
      -webkit-transform: translateX(-${props.translate}px);
      -ms-transform: translateX(-${props.translate}px);
      -moz-transform: translateX(-${props.translate}px);
      -o-transform: translateX(-${props.translate}px);
      transition: transform ease-out ${props.transition}s;
      height: 100%;
      width: ${props.width}px;
      display: flex;
    `}
  >
    {props.children}
  </div>
)

export default SliderContent