import React, {Component} from 'react';
import { css } from '@emotion/core';
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
    {_Text.map((item,key)=><div style={{fontSize:item.size}} key={key}>{item.txt}</div>)}
    </div>
    <span className="event" >COVID-19</span>
  </div>
)
export default SliderCaptions