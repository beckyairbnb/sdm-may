import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import styled from 'styled-components'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: "top",
      type: "light",
      effect: "float",
      condition: false
    };
  }

  changePlace(place) {
    this.setState({
      place: place
    });
  }

  changeType(type) {
    this.setState({
      type: type
    });
  }

  changeEffect(effect) {
    this.setState({
      effect: effect
    });
  }

  _onClick() {
    this.setState({
      condition: true
    });
  }

  render() {
    const { place, type, effect } = this.state;
    return (
      <>
          <ToolTipContainer>
            <ToolTipAnchor
              data-for="main"
              data-tip={this.props.content}
              data-iscapture="true"
            >
              {this.props.title}
            </ToolTipAnchor>
            <ReactTooltip
              data-class="mytooltip"
              className="mytooltip"
              id="mytooltip"
              place={place}
              type={type}
              effect={effect}
              multiline={true}
          />
          </ToolTipContainer>
         
      </>
    )
  }
}
const ToolTipContainer = styled.div`
background-color:#ffffff !important;
width:25px !important;
height:25px !important;
`
const ToolTipAnchor = styled.div`
background-color:#143059;
color:#ffffff;
width:25px;
height:25px;
text-align:center;
line-height:28px;
-webkit-border-radius: 50%;
-moz-border-radius: 50%;
border-radius: 50%;
`