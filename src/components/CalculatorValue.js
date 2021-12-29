import React from 'react'
import styled from "styled-components";
import Slider from 'react-rangeslider'

import 'react-rangeslider/lib/index.css'
import ToolTip from './ToolTip'; 

const CalculatorValue = ({
    Heading,
    TooltipContent,
    value
}) => { 
return(
    <>
    <BlockHeader>
       <H3heading>{Heading}</H3heading>
       {TooltipContent && <ToolTip title="?" content={TooltipContent}/>}
    </BlockHeader>
    <InputWrap>
        <InputText disabled = {true} value={value !==0 && value}/>
    </InputWrap> 
    </>
)
}

export default CalculatorValue;
const BlockHeader = styled.div`
width:100%;
display: flex;
flex-flow: row nowrap;
place-content: stretch space-between;
margin-bottom:4px;
`

const Number = styled.div`
width: 100%;
display: flex;
flex-flow: row nowrap;
place-content: stretch space-between;
align-items: stretch;
div{
    font-size:1.25vw;
    color:#7c8087 !important;
    @media (max-width: 768px) {
        font-size:15px;
    }    
}
`;
const SliderContainer = styled.div`
width:100%;
.rangeslider-horizontal .rangeslider__fill{
    border:none;
    background-color:#2f6b9a !important;
}
`
const InputErrorMsg = styled.div`
	background-color: rgb(255, 255, 255);
    width:100%;
	color: rgb(230, 0, 0);
	font-size: 14px;
	text-align: center;
	border: 1px solid rgb(230, 0, 0);
	border-radius: 3px;
	display: block;
	opacity: 1;
	z-index: 99;
	animation: initial;
	position: absolute;
	top: calc(100% + 4px);
	padding: 7.5px;
    &::after {
        content:"";
        position: absolute;
        left: calc(50% - 10px);
        top: -12px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 11px 11px 11px;
        border-color: transparent transparent #ff0000 transparent;
        z-index:9998;
    }
    &:before{
        content:"";
        position: absolute;
        left: calc(50% - 9px);
        top: -10px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent #ffffff transparent;
        z-index:9999;
      }  
`
const InputWrap = styled.div`
width:100%;
position:relative;
margin:10px 0px 20px ;
`

const InputText = styled.input`
z-index: 0;
position: relative;
width: 100%;
padding:20px;
border-radius: 6px;
border: 1px solid #ccc;
font-size: 50px;
line-height: 1.1;
height: 70px;
font-weight: 600; color:#222;
@media (max-width: 768px) {
    font-size:40px;
  }
`;
const H2heading = styled.h2`
font-size:1.8vw;
line-height: 1.2;
margin:0.1vw 0px 1.5vw;
padding:0.1vw 0px;
color:#1d293f;
@media (max-width: 768px) {
    font-size:21px;
    margin-bottom:12px;
  }
`
const H3heading = styled.h3`
font-size:1.25vw;
line-height: 1.1;
margin:0.1vw 0px;
padding:0.1vw 0px;
min-height:30px;
color:#1d293f;
@media (max-width: 768px) {
    font-size:17px;
  }
`