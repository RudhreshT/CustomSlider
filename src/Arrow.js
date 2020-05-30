/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const arrow = [
  require('./images/left.png'),
  require('./images/right.png'),
];

const Arrow = ({ direction, handleClick,isChangeable=true }) => (
  <div
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 50px;
      width: 50px;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);
        &:focus {
          outline: 0;
        }
      }
    `}
  >
    {direction === 'right' ? <img onClick={!isChangeable && handleClick} style={{width:'100%',height:'100%',opacity: !isChangeable ? direction ==="right" ? 1:0.6 : 0.6}} src={arrow[1]} /> : <img onClick={!isChangeable && handleClick} style={{width:'100%',height:'100%',opacity: !isChangeable ? direction ==="left" ? 1:0.6 : 0.6}} src={arrow[0]} />}
  </div>
)

export default Arrow