import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Slider from 'react-rangeslider'

import 'react-rangeslider/lib/index.css'
   

const Calculator = () => {

    const [ websiteTraffic, setWebsiteTraffic] = useState(0)
    const [ totalInvestment, setTotalInvestment] = useState(0)
    const [ totalRevenue, setTotalRevenue] = useState(0)

    const [ numberOfLeads, setNumberOfLeads] = useState(0)
    const [ numberOfSales, setNumberOfSales] = useState(0)

    const [ roiTotal, setRoiTotal] = useState(0)

    const [ avgMonthlyVolume, setAvgMonthlyVolume] = useState(10000)
    const [ clickRate, setClickRate] = useState(10)

    const [ conversionRate, setConversionRate] = useState(10)
    const [ leadconversionRate, setLeadconversionRate] = useState(50)
    const [ lifetimeCustomerValue, setLifetimeCustomerValue] = useState(1500)

    const [ contentCreationCost, setContentCreationCost] = useState(1000)
    const [ contentPromotionCost, setContentPromotionCost] = useState(700)

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
return(
    <>
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
                <H3heading>Avg. monthly search volume</H3heading>
                <InputText name="avgMonthlyVolume" value={avgMonthlyVolume}/>
                <SliderContainer>
                <Slider
                    min={100}
                    max={10000}
                    step={100}
                    tooltip={false}
                    value={avgMonthlyVolume}
                    onChange={handleAvgMonthlyVolumeChange}
                    />
                    <Number>
                        <div>{100}</div>
                        <div>{10000}</div>
                    </Number>
                </SliderContainer>
            </Grid>
            <Grid>
                <H3heading>Click through rate</H3heading>
                <InputText name="clickRate" value={clickRate}/>
                <SliderContainer>
                    <Slider
                        min={0}
                        max={100}
                        step={5}
                        tooltip={false}
                        value={clickRate}
                        onChange={handleClickRateChange}
                        />
                        <Number>
                            <div>{0}%</div>
                            <div>{100}%</div>
                        </Number>
                </SliderContainer>
            </Grid>
            <Grid>
                <H3heading>Website traffic</H3heading>
                <RFirst>{websiteTraffic !==0 && websiteTraffic}</RFirst>
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
                    <H3heading>Website conversion rate to lead</H3heading>
                    <InputText name="conversionRate" value={conversionRate}/>
                    <SliderContainer>
                        <Slider
                            min={0}
                            max={100}
                            step={5}
                            tooltip={false}
                            value={conversionRate}
                            onChange={handleConversionRateChange}
                            />
                            <Number>
                                <div>{0}%</div>
                                <div>{100}%</div>
                            </Number>
                    </SliderContainer>
                </Grid>
                <Grid>
                    <H3heading>Lead conversion rate to sale</H3heading>
                    <InputText name="leadconversionRate" value={leadconversionRate}/>
                    <SliderContainer>
                        <Slider
                            min={0}
                            max={100}
                            step={5}
                            tooltip={false}
                            value={leadconversionRate}
                            onChange={handleLeadconversionRateChange}
                            />
                            <Number>
                                <div>{0}%</div>
                                <div>{100}%</div>
                            </Number>
                    </SliderContainer>
                </Grid>
                <Grid>
                    <H3heading>Lifetime customer value</H3heading>
                    <InputText name="lifetimeCustomerValue" value={lifetimeCustomerValue}/>
                    <SliderContainer>
                        <Slider
                            min={0}
                            max={5000}
                            step={100}
                            tooltip={false}
                            value={lifetimeCustomerValue}
                            onChange={handleLifetimeCustomerValueChange}
                            />
                            <Number>
                                <div>{0}</div>
                                <div>{5000}</div>
                            </Number>
                    </SliderContainer>
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
                    <H3heading>Content creation costs</H3heading>
                    <InputText name="contentCreationCost" value={contentCreationCost}/>
                    <SliderContainer>
                        <Slider
                            min={0}
                            max={1000}
                            step={50}
                            tooltip={false}
                            value={contentCreationCost}
                            onChange={handleContentCreationCostChange}
                            />
                            <Number>
                                <div>{0}</div>
                                <div>{1000}</div>
                            </Number>
                    </SliderContainer>
                </Grid>
                <Grid>
                    <H3heading>Content promotion costs</H3heading>
                    <InputText name="contentPromotionCost" value={contentPromotionCost}/>
                    <SliderContainer>
                        <Slider
                            min={0}
                            max={1000}
                            step={50}
                            tooltip={false}
                            value={contentPromotionCost}
                            onChange={handleContentPromotionCostChange}
                            />
                            <Number>
                                <div>{0}</div>
                                <div>{1000}</div>
                            </Number>
                    </SliderContainer>
                </Grid>
                <Grid>
                    <H3heading>Total investment</H3heading>
                    <RFirst>{totalInvestment !==0 && totalInvestment}</RFirst>
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

const Fresult = styled.div`
font-size:2.4vw;
font-weight:700;
line-height: 1.2;
`
const RFirst = styled.div`
font-size:1.8vw;
font-weight:700;
line-height:40px;
`
const Number = styled.div`

width: 100%;
display: flex;
flex-flow: row nowrap;

place-content: stretch space-between;

align-items: stretch;

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
margin:0.1vw 0px 1.5vw;
padding:0.1vw 0px;
`
const H3heading = styled.h3`
font-size:1.25vw;
line-height: 1.1;
margin:0.1vw 0px;
padding:0.1vw 0px;
min-height:24px;
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
 & h1{ color:#fff; font-size:3.5vw; padding:0.2% 0; margin:0px;}
 & p{ color:#fff; margin:0; font-size:1.75vw;  padding:0.2% 0; margin:0px;}
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
padding:10px;
border-radius: 4px;
border: 1px solid #ccc;
font-size:1.25vw;
line-height: 1.1;
font-weight: 600; color:#222;
`;