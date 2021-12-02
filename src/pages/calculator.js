import React, { useState } from 'react'
import styled from "styled-components";
import RangeSlider from "../components/RangeSlider";

   

const Calculator = () => {

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
     <H2heading>Calculate your return</H2heading>
        <GridItem>
            <Grid>
                <H3heading>Total Facebook visits from campaign</H3heading>
                <RangeSlider></RangeSlider>
            </Grid>
            <Grid>
                <H3heading>Total Facebook visits from campaign</H3heading>
                <RangeSlider></RangeSlider>
            </Grid>
            <Grid>
                <H3heading>Close rate</H3heading>
                <RangeSlider></RangeSlider>
            </Grid>
            <Grid>
                <H3heading>Lifetime customer value</H3heading>
                <RangeSlider></RangeSlider>
            </Grid>
        </GridItem>
    </Container>
</Fullwidth>

<Fullwidth>
    <Container>
    <Invest>
     <H2heading>Calculate your investment</H2heading>
        <GridItem>
            <Grid>
                <H3heading>Total ad spendn</H3heading>
                <RangeSlider></RangeSlider>
            </Grid>
            <Grid>
                <H3heading>Content creation costs</H3heading>
                <RangeSlider></RangeSlider>
            </Grid>
            <Grid>
                <H3heading>Labor costs</H3heading>
                <RangeSlider></RangeSlider>
            </Grid>
            <Grid>
              
            </Grid>
             </GridItem>
             </Invest>
    </Container>
</Fullwidth>
</Wrapper>



    <ResultBox>
        <ReturnTop>
        <Container>
            <h2>Your Return On Investment</h2>
            <Total>
                <div><span className="font-size-7">($0 - $700) / $700</span><br/>(Total Revenue - Total Investment) / Total Investment</div>
                <div>-100%</div>
            </Total>
            </Container>
        </ReturnTop>
        <ReturnBotBg> 
        <Container>
        <ReturnBot>
            <div>Leads <span>0</span></div>
            <div>Sales <span>0</span></div>
            <div>Total Revenue <span>$0</span></div>
          
        </ReturnBot>
        </Container>
        </ReturnBotBg> 
    </ResultBox>

</>


    )
}
export default Calculator;

const H2heading = styled.h2`
font-size:2.2vw;
line-height: 1.2;
margin:0.1vw 0px 0.5vw;
padding:0.1vw 0px;
min-height:50px;
`
const H3heading = styled.h3`
font-size:1.4vw;
line-height: 1.1;
margin:0.1vw 0px;
padding:0.1vw 0px;
min-height:50px;
`
const Wrapper = styled.div`
width:100%;
float:left; padding-bottom:250px;
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
  width: 100%;float:left;margin-bottom:50px;
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
@media (max-width: 992px) {
position:inherit;
}
`;
const ReturnTop = styled.div`
  width: 100%;float:left;padding:25px 0px;background-color: rgb(47, 107, 154);
  `;
  const Total = styled.div`
  -moz-box-pack: justify;
justify-content: space-between;
display: flex;
  `;

  const ReturnBot = styled.div`
 width: 100%;float:left;
 -moz-box-pack: justify; color:#fff;
justify-content: space-between;
display: flex;
  `;
  const ReturnBotBg = styled.div`
 width: 100%;float:left;background-color: rgb(67, 89, 122); padding:20px 0;
 `;