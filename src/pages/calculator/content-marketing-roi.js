import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Link } from "gatsby";
import Slider from 'react-rangeslider'
import { Helmet } from "react-helmet";

import 'react-rangeslider/lib/index.css'
import ToolTip from '../../components/ToolTip'; 
import PageWrapper from "../../components/PageWrapper";
import CalculatorInput from '../../components/CalculatorInput';
import CalculatorValue from '../../components/CalculatorValue';
import imgFavicon from "../../assets/favicon.png";
import logoWhite from "../../assets/images/logo-white.png";

const Calculator = () => {
    const dollarSign = '$'
    const [ avgMonthlyVolume, setAvgMonthlyVolume] = useState(100)
    const [ avgMonthlyVolumeError, setAvgMonthlyVolumeError] = useState(false)

    const [ clickRate, setClickRate] = useState(10)
    const [ clickRateError, setClickRateError] = useState(false)

    

    const [ selectMonths, setSelectMonths] = useState(12)     

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

    const [ websiteTraffic, setWebsiteTraffic] = useState(Math.round(parseInt(avgMonthlyVolume) * (parseInt(clickRate)/100)))
    const [ totalInvestment, setTotalInvestment] = useState(Math.round(parseInt(contentCreationCost) + parseInt(contentPromotionCost)))

    const [ numberOfLeads, setNumberOfLeads] = useState(parseFloat(parseFloat(websiteTraffic) * (parseFloat(conversionRate)/100)))
    const [ numberOfSales, setNumberOfSales] = useState(parseFloat(parseFloat(numberOfLeads) * (parseFloat(leadconversionRate)/100)))

    const [ totalRevenue, setTotalRevenue] = useState(Math.round(parseFloat(lifetimeCustomerValue) * parseFloat(numberOfSales)))   

    const [ roiTotal, setRoiTotal] = useState(parseFloat((((parseFloat(totalRevenue) - parseFloat(totalInvestment))/parseFloat(totalInvestment)))*100).toFixed(4))

    useEffect(
        () => {
            // console.log('Avg. monthly search volume',avgMonthlyVolume)
            // console.log('Click-through rate',clickRate)
            // console.log('Estimated website traffic',websiteTraffic)
            // console.log('Landing page conversion rate %',conversionRate)
            // console.log('Lead conversion rate to sale %',leadconversionRate)
            // console.log('Lifetime customer value $',lifetimeCustomerValue)
            // console.log('Content creation costs $',contentCreationCost)
            // console.log('Content promotion costs $',contentPromotionCost)
            // console.log('numberOfLeads',numberOfLeads)
            // console.log('numberOfSales',numberOfSales)
            // console.log('Total investment',totalInvestment)
            // console.log('Total Revenu',totalRevenue)
            // console.log('roiTotal',roiTotal)
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
            lifetimeCustomerValue,
            leadconversionRate,
            contentCreationCost,
            contentPromotionCost,
            roiTotal
        ]
      )
    const formatNumber = (num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }
    const calculateWebsiteTraffic = () => {
        //console.log('Click Rate', clickRate)
        const websiteTraffic_temp = parseInt(clickRate) < 1 ? 0 : Math.round(parseInt(avgMonthlyVolume) * (parseInt(clickRate)/100))
        //console.log('Click Rate', websiteTraffic_temp)
        const totalInvestment_temp = Math.round(parseInt(contentCreationCost) + parseInt(contentPromotionCost))
        const numberOfLeads_temp = parseFloat(parseInt(websiteTraffic_temp) * (parseInt(conversionRate)/100))
        //console.log('Lead conversion rate',leadconversionRate)
        //console.log('Lead conversion rate %',parseFloat(leadconversionRate)/100)
        //console.log('Number of Leads',numberOfLeads_temp)
        const numberOfSales_temp = parseFloat(parseFloat(numberOfLeads_temp) * (parseFloat(leadconversionRate)/100))
        const totalRevenue_temp = Math.round(parseFloat(lifetimeCustomerValue) * parseFloat(numberOfSales_temp))        
        
        setWebsiteTraffic(websiteTraffic_temp)        
        setTotalInvestment(totalInvestment_temp)
        setNumberOfLeads(numberOfLeads_temp)
        setNumberOfSales(numberOfSales_temp)
        setTotalRevenue(totalRevenue_temp)
        if(totalRevenue_temp!==0 && totalInvestment_temp!==0){
            //console.log('Total Revew', totalRevenue_temp)
            //console.log('Total invest', totalInvestment_temp)
            //console.log('Total Revew', (totalInvestment_temp * 100))
            //console.log('Total invest', (totalRevenue_temp - totalInvestment_temp))
            setRoiTotal(parseFloat((((parseInt(totalRevenue_temp) - parseInt(totalInvestment_temp))/parseInt(totalInvestment_temp)))*100).toFixed(4))
        }
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
          <title>Content marketing ROI calculator</title>
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
    <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/get-a-quote/1/"}>
              View Pricing
            </a>
            </>
          ),
          footerStyle: "style2",
        }}
      >
<Wrapper>   
<ContainerMain>
    <PageTitle>
        <Container>
            <h1>Content marketing ROI calculator</h1>
        </Container>
    </PageTitle>
<Fullwidth>
    <Container>
     <H2heading>Calculate your website traffic</H2heading>
        <GridItem>
            <Grid>
                <CalculatorInput
                    Heading="Avg. monthly search volume"
                    TooltipContent = 'Just enter the average monthly search volume for the keywords your content targets. For example, a blog post targeting the keyword "content ROI" might have an average of 20,000 monthly searches.'
                    min={100}
                    max={50000}
                    SliderStep={50}
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
                    Heading="Click-through rate %"
                    TooltipContent = "This is your estimated click-through rate (CTR) from the keyword to the published content. CTR is the number of clicks a blog post receives divided by the number of times said post is seen by the target audience.  An example: Clicks divided by (/) impressions equals (=) CTR. Hence, if you've had 10 clicks and 100 impressions, your CTR would be 10%."
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
                <CalculatorValue
                    Heading="Estimated website traffic"
                    TooltipContent = "This is the estimated traffic to your website. It's based on the average monthly search volume and the expected click-through rate."
                    value={websiteTraffic}                    
                />                 
            </Grid>
        </GridItem>
    </Container>
</Fullwidth>

<Fullwidth>
    <Container>
    <Invest>
        <H2heading>Calculate your sales</H2heading>
            <GridItem>
                <Grid>
                    <CalculatorInput
                        Heading="Landing page conversion rate %"
                        TooltipContent = "Calculate your conversion rate by dividing the number of emails collected by the number of page views to the chosen landing page. After, multiply the conversion rate by 100 to turn this into a percentage. Here's an example: 100 addresses divided by (/) 1000 visits to a post equals (=) 0.1 times (x) 100 equals (=) 10% Page Conversion Rate."
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
                        Heading="Lead conversion rate to sale %"
                        TooltipContent = "Close rate refers to the number of sales calls and email outreach activities against the number of conversions (i.e., successful sales). This number is important. It allows us to demonstrate, for instance, that for every 1,000 leads we generate, you can expect 10 sales."
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
                        Heading="Lifetime customer value $"
                        TooltipContent = "This refers to the total revenue you expect the customer to generate over their lifetime."
                        min={0}
                        max={100000}
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
                        Heading="Content creation costs $"
                        TooltipContent = "Enter the cost for the content. If you’ve paid for the creation of any images or graphics, include this in the cost, too."
                        min={0}
                        max={100000}
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
                        Heading="Content promotion costs $"
                        TooltipContent = "Here you enter the cost for advertising your piece of content. This could be the price of a Google or Facebook paid ad. But, if you’re into organic traffic, the cost is zero."
                        min={0}
                        max={10000}
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
                <CalculatorValue
                    Heading="Total investment"
                    TooltipContent = "This is self-explanatory. It refers to the total cost of your content creation and content marketing investment."
                    value={totalInvestment}                    
                />   
                </Grid>                          
             </GridItem>
             </Invest>
    </Container>
</Fullwidth>
<ResultBox>
<h3>Your return on investment</h3>
         <p>(Total revenue - Total investment)/Total investment = ROI</p>
         <p>Number of months 
             <SelectBox value={selectMonths} onChange={e=>setSelectMonths(e.target.value)}>
                 <option value="1">1</option>
                 <option value="12">12</option>
                 <option value="24">24</option>
                 <option value="36">36</option>
             </SelectBox>
         </p>
         <ReturnBotBg> 
            <li>Return on investment : {Math.round(roiTotal !==0 && roiTotal * selectMonths)}%</li>
            <li>Leads : {numberOfLeads * selectMonths}</li>
            <li>Sales : {numberOfSales * selectMonths}</li>
            <li>Revenue : {dollarSign}{formatNumber(totalRevenue * selectMonths)}</li>
        </ReturnBotBg>
        <BoxLogo>
        <Link to="/">
        <img className="w-auto opacity-9" src={logoWhite} alt="Stragetically" />
        </Link>
        </BoxLogo>
</ResultBox>

</ContainerMain>

</Wrapper>
<Wrapper>
<ContainerPara>
<p>Ahrefs found that more than 90% of content never ranks. We think that’s silly.</p>

<p>Don’t waste your time and money creating content that won’t rank or generate a ROI.</p>

<p>Strategically’s content writing services are SEO-focused, customer-driven and proven to deliver. We uncover ranking opportunities in the search data, then we create 10X content designed to resonate with your target audience and beat your competitors.</p>

<p>If it won’t rank, we don’t write it. </p>
</ContainerPara>
</Wrapper>
</PageWrapper>


   

</>


    )
}
export default Calculator;
const BoxLogo = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
& > a > img{
    width:175px !important;
}
`
const Wrapper = styled.div`
width:100%;
display: flex;
justify-content: center;
align-items: center;
`;
const ContainerMain = styled.div`
margin:120px 0px 0px;
max-width:991px;
width:100%;
overflow:hidden;
box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.75);
`
const ContainerPara = styled.div`
margin:30px 0px 0px;
max-width:991px;
width:100%;
overflow:hidden;
`


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
    background-color:#E84786;
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

const PageTitle = styled.div`
background:#ffffff; text-align:center;
padding:2% 0; margin-bottom:4%;
width:100%;
float:left;
@media (max-width: 768px) {
    padding:5% 0;
}
 & h1{
     color:#143059; font-size:3.5vw; padding:0.2% 0; margin:0px;
        @media (max-width: 768px) {
            font-size:24px;
        }
    }
 & p{
     color:#143059; margin:0; font-size:1.75vw;  padding:0.2% 0; margin:0px;
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
display:flex;
@media (min-width: 768px) {
    flex-flow: row !important;
    justify-content: space-between;
}
@media (max-width: 768px) {
    flex-flow: column !important;
}
`;

const Grid = styled.div`
 position:relative;
 @media (min-width: 768px) {
    padding:0px 10px;
}
@media (max-width: 768px) {
    padding:0px;
}
`;
const Invest = styled.div`

`;
const ReturnBotBg = styled.ul`
    width:100%;
    margin:0px !important;
    padding:0px 30px !important;
    & > li{
            color:#ffffff;
            margin:0px !important;
            padding:0px !important;
            font-size:20px !important;
            line-height:1.6 !important;
        }
`;
const ResultBox = styled.div`
width:100%;
float:left;
background-color: #57c0de;
padding: 24px;
@media (max-width: 768px) {
    padding:15px;
    h4{ font-size:28px; line-height:35px}
}
h3{ font-size:28px; line-height:32px;color:#fff; margin: 0 0 30px 0;font-weight:700;}
h4{ font-size:35px; line-height:40px;color:#fff; margin: 0; font-weight:700;}
p{ font-size:18px; line-height:26px;color:#fff; margin: 0 0 30px 0;font-weight:400;}

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
const SelectBox = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
    border:none;
    border-radius: 3px !important;
    margin: 0rem 0.5rem;
    padding: 0.2rem;
    padding-right: 2rem;
`