import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Slider from 'react-rangeslider'
import { Helmet } from "react-helmet";

import 'react-rangeslider/lib/index.css'
import ToolTip from '../components/ToolTip'; 
import CalculatorInput from '../components/CalculatorInput';
import imgFavicon from "../assets/favicon.png";

const Calculator = () => {

    const [ websiteTraffic, setWebsiteTraffic] = useState(0)
    const [ totalInvestment, setTotalInvestment] = useState(0)
    const [ totalRevenue, setTotalRevenue] = useState(0)

    const [ numberOfLeads, setNumberOfLeads] = useState(0)
    const [ numberOfSales, setNumberOfSales] = useState(0)

    const [ roiTotal, setRoiTotal] = useState(0)

    const [ avgMonthlyVolume, setAvgMonthlyVolume] = useState(100)
    const [ avgMonthlyVolumeError, setAvgMonthlyVolumeError] = useState(false)

    const [ clickRate, setClickRate] = useState(10)
    const [ clickRateError, setClickRateError] = useState(false)

    const [ conversionRate, setConversionRate] = useState(10)
    const [ conversionRateError, setConversionRateError] = useState(false)

    const [ leadconversionRate, setLeadconversionRate] = useState(50)
    const [ leadconversionRateError, setLeadconversionRateError] = useState(false)

    const [ lifetimeCustomerValue, setLifetimeCustomerValue] = useState(1500)
    const [ lifetimeCustomerValueError, setLifetimeCustomerValueError] = useState(false)

    const [ contentCreationCost, setContentCreationCost] = useState(1000)
    const [ contentCreationCostError, setContentCreationCostError] = useState(false)

    const [ contentPromotionCost, setContentPromotionCost] = useState(700)
    const [ contentPromotionCostError, setContentPromotionCostError] = useState(false)

    useEffect(
        () => {
            calculateWebsiteTraffic()
        },
        [
            websiteTraffic,
            totalInvestment,
            totalRevenue,
            avgMonthlyVolume,
            numberOfLeads,
            numberOfSales,
            clickRate,
            conversionRate,
            leadconversionRate,
            contentCreationCost,
            contentPromotionCost,
            roiTotal
        ]
      )

    const calculateWebsiteTraffic = () => {
        const websiteTraffic_temp = Math.round(avgMonthlyVolume * (clickRate/100))
        const totalInvestment_temp = Math.round(contentCreationCost + contentPromotionCost)
        const numberOfLeads_temp = parseFloat(websiteTraffic_temp * (conversionRate/100))
        const numberOfSales_temp = parseFloat(numberOfLeads_temp * (leadconversionRate/100))
        const totalRevenue_temp = Math.round( lifetimeCustomerValue * numberOfSales_temp)
        
        
        
        setWebsiteTraffic(websiteTraffic_temp)        
        setTotalInvestment(totalInvestment_temp)
        setNumberOfLeads(numberOfLeads_temp)
        setNumberOfSales(numberOfSales_temp)
        setTotalRevenue(totalRevenue_temp)
        if(totalRevenue_temp!==0 && totalInvestment_temp!==0){
            console.log('Total Revew', totalRevenue_temp)
            console.log('Total invest', totalInvestment_temp)
            console.log('Total Revew', (totalInvestment_temp * 100))
            console.log('Total invest', (totalRevenue_temp - totalInvestment_temp))
            setRoiTotal(parseFloat((((totalRevenue_temp - totalInvestment_temp)/totalInvestment_temp))*100).toFixed(4))
        }
        console.log('Rio Total', roiTotal)
    }
    const handleAvgMonthlyVolumeChange = (value) => {
        setAvgMonthlyVolume(value)      
    }
    const handleClickRateChange = (value) => {
        setClickRate(value)   
    }
    const handleConversionRateChange = (value) => {
        setConversionRate(value)
    }
    const handleLeadconversionRateChange = (value) => {
        setLeadconversionRate(value)
    }
    const handleLifetimeCustomerValueChange = (value) => {
        setLifetimeCustomerValue(value)
    }

    const handleContentCreationCostChange = (value) => {
        setContentCreationCost(value)
    }

    const handleContentPromotionCostChange = (value) => {
        setContentPromotionCost(value)
    }
    const CheckMaxMin = (e, min, max, setState, setStateError)=>{
        if (e.target.value<min){
            setStateError(true)
            setState(e.target.value)
        } else if (e.target.value>max){
            setState(max)
            setStateError(true)
        } else {
            setStateError(false)
            setState(e.target.value)
        }
    }
return(
    <>
    <Helmet>
          <link rel="icon" type="image/png" href={imgFavicon} />
          <script>
          {`
            (function(e,a){
              var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol;
              t=e.createElement("script");t.type="text/javascript";
              t.charset="utf-8";t.async=!0;t.defer=!0;
              t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t);
              })(document,"157096");
          `}
        </script>
    </Helmet>
<Wrapper>    
    <PageTitle>
        <Container>
            <h1>Social ROI Calculator</h1>
            <p>Do a little math. Impress your boss.</p>
        </Container>
    </PageTitle>
<Fullwidth>
    <Container>
     <H2heading>Calculate your traffic</H2heading>
        <GridItem>
            <Grid>
                <CalculatorInput
                    Heading="Avg. monthly search volume"
                    TooltipContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    min={100}
                    max={250000}
                    SliderStep={100}
                    CheckMaxMin={CheckMaxMin}
                    fieldName="avgMonthlyVolume"
                    fieldValue={avgMonthlyVolume}
                    setState={setAvgMonthlyVolume}
                    setStateError = {setAvgMonthlyVolumeError}
                    fieldError = {avgMonthlyVolumeError}
                    onChange={handleAvgMonthlyVolumeChange}
                    
                /> 
            </Grid>
            <Grid>
                <CalculatorInput
                    Heading="Click through rate"
                    TooltipContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    min={0}
                    max={100}
                    SliderStep={5}
                    CheckMaxMin={CheckMaxMin}
                    fieldName="clickRate"
                    fieldValue={clickRate}
                    setState={setClickRate}
                    setStateError = {setClickRateError}
                    fieldError = {clickRateError}
                    onChange={handleClickRateChange}
                    Symbol="%"
                /> 
            </Grid>
            <Grid>
                <BlockHeader>
                <H3heading>Website traffic</H3heading>   
                </BlockHeader>
                <InputWrap>
                <InputText disabled = {true} value={websiteTraffic !==0 && websiteTraffic}/>
                </InputWrap>           
                
            </Grid>
        </GridItem>
    </Container>
</Fullwidth>

<Fullwidth>
    <Container>
    <Invest>
        <H2heading>Calculate your return</H2heading>
            <GridItem>
                <Grid>
                    <CalculatorInput
                        Heading="Website conversion rate to lead"
                        TooltipContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        min={0}
                        max={100}
                        SliderStep={5}
                        CheckMaxMin={CheckMaxMin}
                        fieldName="conversionRate"
                        fieldValue={conversionRate}
                        setState={setConversionRate}
                        setStateError = {setConversionRateError}
                        fieldError = {conversionRateError}
                        onChange={handleConversionRateChange}
                        Symbol="%"
                    /> 
                </Grid>
                <Grid>
                    <CalculatorInput
                        Heading="Lead conversion rate to sale"
                        TooltipContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        min={0}
                        max={100}
                        SliderStep={5}
                        CheckMaxMin={CheckMaxMin}
                        fieldName="leadconversionRate"
                        fieldValue={leadconversionRate}
                        setState={setLeadconversionRate}
                        setStateError = {setLeadconversionRateError}
                        fieldError = {leadconversionRateError}
                        onChange={handleLeadconversionRateChange}
                        Symbol="%"
                    /> 
                </Grid>
                <Grid>
                    <CalculatorInput
                        Heading="Lifetime customer value"
                        TooltipContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        min={0}
                        max={5000}
                        SliderStep={100}
                        CheckMaxMin={CheckMaxMin}
                        fieldName="lifetimeCustomerValue"
                        fieldValue={lifetimeCustomerValue}
                        setState={setLifetimeCustomerValue}
                        setStateError = {setLifetimeCustomerValueError}
                        fieldError = {lifetimeCustomerValueError}
                        onChange={handleLifetimeCustomerValueChange}
                    /> 
                </Grid>            
             </GridItem>
             </Invest>
    </Container>
</Fullwidth>

<Fullwidth>
    <Container>
    <Invest>
        <H2heading>Calculate your investment</H2heading>
            <GridItem>
                <Grid>
                    <CalculatorInput
                        Heading="Content creation costs"
                        TooltipContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        min={0}
                        max={1000}
                        SliderStep={20}
                        CheckMaxMin={CheckMaxMin}
                        fieldName="contentCreationCost"
                        fieldValue={contentCreationCost}
                        setState={setContentCreationCost}
                        setStateError = {setContentCreationCostError}
                        fieldError = {contentCreationCostError}
                        onChange={handleContentCreationCostChange}
                    /> 
                </Grid>
                <Grid>
                    <CalculatorInput
                        Heading="Content promotion costs"
                        TooltipContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        min={0}
                        max={1000}
                        SliderStep={20}
                        CheckMaxMin={CheckMaxMin}
                        fieldName="contentPromotionCost"
                        fieldValue={contentPromotionCost}
                        setState={setContentPromotionCost}
                        setStateError = {setContentPromotionCostError}
                        fieldError = {contentPromotionCostError}
                        onChange={handleContentPromotionCostChange}
                    /> 
                </Grid>
                <Grid>
                    <BlockHeader>
                    <H3heading>Total investment</H3heading> 
                    </BlockHeader>
                    <InputWrap>
                        <InputText disabled = {true} value={totalInvestment !==0 && totalInvestment}/>
                    </InputWrap>   
                </Grid>                          
             </GridItem>
             </Invest>
    </Container>
</Fullwidth>
</Wrapper>



    <ResultBox>
        <ReturnTop>
        <Container>
            <h2>Your return on investment<br/><span>(Total revenue - Total investment)/Total investment</span></h2>
            <Total>
                <div>
                    <DivInner><span>Total revenue</span> <span>{totalRevenue!==0 && totalRevenue}</span></DivInner>
                    <DivInner><span>Total investment</span> <span>{totalInvestment !==0 && totalInvestment}</span></DivInner>
                </div>
                <div><Fresult>{roiTotal !==0 && roiTotal}</Fresult></div>
            </Total>
            </Container>
        </ReturnTop>
        <ReturnBotBg> 
        <Container>
        <ReturnBot>
            <div>Number of leads <span>{numberOfLeads !==0 && numberOfLeads}</span></div>
            <div>Number of sales <span>{numberOfSales !==0 && numberOfSales}</span></div>        
        </ReturnBot>
        </Container>
        </ReturnBotBg> 
    </ResultBox>

</>


    )
}
export default Calculator;

const BlockHeader = styled.div`
width:100%;
display: flex;
flex-flow: row nowrap;
place-content: stretch space-between;
margin-bottom:4px;
`

const Fresult = styled.div`
font-size:2.4vw;
font-weight:700;
line-height: 1.2;
@media (max-width: 768px) {
    font-size:22px;
  }
`
const RFirst = styled.div`
display: flex;
flex-flow: row nowrap;
place-content: stretch space-between;
width: 100%;
padding:20px;
border-radius: 4px;
border: 1px solid #ccc;
font-size: 50px;
height: 70px;
& > span{
    color:#1d293f;
    font-weight: 600;
    font-size: 50px;
    overflow:hidden;    
    border:2px solid red;
    @media (max-width: 768px) {
        font-size:40px;
      }
}
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
    border:5px solid #56c0de;
    background-color:#2e9fbf;
}
`
const H2heading = styled.h2`
font-size:1.8vw;
line-height: 1.2;
color:#1d293f;
margin:0.1vw 0px 1.5vw;
padding:0.1vw 0px;
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
const Wrapper = styled.div`
width:100%;
float:left;
padding-bottom:20px;
@media (max-width: 991px) {
padding-bottom:30px;
}
`;

const PageTitle = styled.div`
background:#143059; text-align:center;
padding:2% 0; margin-bottom:4%;
width:100%;
float:left;
@media (max-width: 768px) {
    padding:5% 0;
}
 & h1{
     color:#fff; font-size:3.5vw; padding:0.2% 0; margin:0px;
        @media (max-width: 768px) {
            font-size:24px;
        }
    }
 & p{
     color:#fff; margin:0; font-size:1.75vw;  padding:0.2% 0; margin:0px;
     @media (max-width: 768px) {
        font-size:17px;
    }
    }
 }
`;
const Container = styled.div`
  max-width: 1140px;
  margin: auto;
  padding:0 15px;
`;
const Fullwidth = styled.div`
  width: 100%;
  float:left;
  margin-bottom:30px;
`;
const GridItem = styled.div`
display: grid;
grid-gap: 1.5rem;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Grid = styled.div`
 padding:0 0px;
 position:relative;
`;
const Invest = styled.div`

`;
const ResultBox = styled.div`
width:100%;
float:left;
box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 18px 3px;
// position:fixed;
bottom:0;
color:#ffffff;
& > h2{
    color:#fffffff;
}
@media (max-width: 992px) {
position:inherit;
}
`;
const ReturnTop = styled.div`
  width: 100%;float:left;padding:25px 0px;background-color: rgb(47, 107, 154);
  h2{
      color:#ffffff;
      margin:0px;
      line-height:1;
  }
  h2 span{
      font-size:1.4rem;
  }
  `;
  const Total = styled.div`
    -moz-box-pack: justify;
    justify-content: space-between;
    display: flex;
    margin-top:30px;
    
  `;
 const DivInner = styled.div`
    width:100%;
    -moz-box-pack: justify;
    justify-content: space-between;
    display: flex;
    span{
        padding:5px 10px 5px 0px;
    }
 `
  const ReturnBot = styled.div`
 width: 100%;float:left;
 -moz-box-pack: justify; color:#fff;
justify-content: space-between;
display: flex;
color:#ffffff;
  `;
  const ReturnBotBg = styled.div`
 width: 100%;float:left;background-color: rgb(67, 89, 122); padding:20px 0;
 `;

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
`