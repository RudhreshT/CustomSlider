import React, {Component} from 'react';
import { css, jsx } from '@emotion/core'
var defiltStyle={
  position: 'absolute',
  left: '0px',
  top:'30%',
  bottom:'0px',
  right:'0px',
  color:'#ffff',
  paddingLeft:'10px',
  paddingRight:'10px',
  paddingTop:'30px',
  textAlign:'center',
}



const SliderCaptions = ({ _Text ,width}) => (
    <div className="caption">
    <div className="text-container">
    {_Text.map((item,key)=><div style={item.css === 'small' ? small : item.css === 'medium' ? medium : item.css === 'high' && high } key={key}>{item.txt}</div>)}
    </div>
    <span className="event" >COVID-19</span>
  </div>
)

const small = {fontSize: '1em'}


const high = {
justifyContent: 'center',
maxWidth: '70%',
fontSize: '3rem',
margin: '0.5rem auto',
lineHeight: '3rem'}

const medium = {
maxWidth: '60%',
fontSize: '1rem',
textAlign: 'center',
margin: '.5rem auto',
opacity: 1,
lineHeight: '1.4rem'}

export default SliderCaptions