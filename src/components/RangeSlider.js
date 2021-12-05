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
         {/* <Value>{value}</Value> */}
        <Slider
          min={this.props.min}
          max={this.props.max}
          // value={value}
          // onChangeStart={this.handleChangeStart}
          // onChange={this.handleChange}
          // onChangeComplete={this.handleChangeComplete}
          tooltip={false}
        />
       <Number>
          <div>{this.props.min}</div>
          <div>{this.props.max}K</div>

       </Number>
      </div>
    )
  }
}

export default RangeSlider;




const Number = styled.div`

width: 100%;
display: flex;
flex-flow: row nowrap;

place-content: stretch space-between;

align-items: stretch;

`;