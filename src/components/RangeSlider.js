import React, { Component } from 'react'
import styled from "styled-components";
import Slider from 'react-rangeslider'

import 'react-rangeslider/lib/index.css'


class RangeSlider extends Component {
  
  
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 100
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

  render () {
    const { value } = this.state
    
    return (
      <div className='slider'>
         <Value>{value}</Value>
        <Slider
          min={100}
          max={250000}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
          tooltip={false}
        />
       <Number>
          <div>100</div>
          <div>250K</div>

       </Number>
      </div>
    )
  }
}

export default RangeSlider;


const Value = styled.div`
z-index: 0;
position: relative;
width: 100%;
padding:10px;
border-radius: 4px;
border: 1px solid #ccc;
font-size:35px;line-height: 40px;
font-weight: 700;
`;

const Number = styled.div`

width: 100%;
display: flex;
flex-flow: row nowrap;

place-content: stretch space-between;

align-items: stretch;

`;