/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Thump = ({ active }) => (
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

const Thumpnail = ({ slides, activeIndex,content }) => (
    <div>

        {/*<div style={{width: '200px'}}>
          <div style={{width: '200px', height: '120px', backgroundSize: 'cover', backgroundImage: 'url("https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")'}}></div>
          <div style={{width: '200px', height: '120px', backgroundSize: 'cover', backgroundImage: 'url("https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")'}}></div>
          <div style={{width: '200px', height: '120px', backgroundSize: 'cover', backgroundImage: 'url("https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")'}}></div>
          <div style={{width: '200px', height: '120px', backgroundSize: 'cover', backgroundImage: 'url("https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")'}}></div>
        </div> */}  
        {/* {props.slides.map((content, i) => (
            <div key={i} onClick={()=>changeonClick(i)} style={{margin:"10px 0px"}}>
                <img className="thumpnails" style={{width:"100%", height: '100px', opacity: '0.5'}} src={content} />
            </div>
          ))}   */}
    </div>
)

export default Thumpnail