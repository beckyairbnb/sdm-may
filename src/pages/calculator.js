import React, { useState } from 'react'
import styled from "styled-components";
import RangeSlider from "../components/RangeSlider";

   

const Calculator = () => {

return(
<Wrapper>    
    <PageTitle>
        <Container>
            <h1>Social ROI Calculator</h1>
            <p>Do a little math. Impress your boss.</p>
        </Container>
    </PageTitle>
<Fullwidth>
    <Container>
     <h2 className="font-size-9">Calculate your return</h2>
        <GridItem>
            <Grid>
                <h3 className="font-size-8">Total Facebook visits from campaign</h3>
                <RangeSlider></RangeSlider>
            </Grid>
            <Grid>
                <h3 className="font-size-8">Total Facebook visits from campaign</h3>
                <RangeSlider></RangeSlider>
            </Grid>
            <Grid>
                <h3 className="font-size-8">Close rate</h3>
                <RangeSlider></RangeSlider>
            </Grid>
            <Grid>
                <h3 className="font-size-8">Lifetime customer value</h3>
                <RangeSlider></RangeSlider>
            </Grid>
        </GridItem>
    </Container>
</Fullwidth>

<Fullwidth>
    <Container>
     <h2 className="font-size-9">Calculate your investment</h2>
        <GridItem>
            <Grid>
                <h3 className="font-size-8">Total ad spendn</h3>
                <RangeSlider></RangeSlider>
            </Grid>
            <Grid>
                <h3 className="font-size-8">Content creation costs</h3>
                <RangeSlider></RangeSlider>
            </Grid>
            <Grid>
                <h3 className="font-size-8">Labor costs</h3>
                <RangeSlider></RangeSlider>
            </Grid>
            <Grid>
              
            </Grid>
             </GridItem>
    </Container>
</Fullwidth>



<Container>
    <ReturnBox>
        <ReturnTop>
            <h2 className="text-white mb-8">Your Return On Investment</h2>
            <Total>
                <div className="text-white"><span className="font-size-9">($0 - $700) / $700</span><br/>(Total Revenue - Total Investment) / Total Investment</div>
                <div className="font-size-10 f-bold text-white">-100%</div>
            </Total>
        </ReturnTop>
        <ReturnBot>
            <div>Leads <br/>0</div>
            <div>Sales <br/>0</div>
            <div>Total Revenue <br/>$0</div>
        </ReturnBot>
    </ReturnBox>
</Container>

</Wrapper>

    )
}
export default Calculator;

const Wrapper = styled.div`
width:100%;
float:left;
`;



const PageTitle = styled.div`
background:#143059; text-align:center;
padding:50px 0; margin-bottom:50px;
width:100%;
float:left;
 & h1{ color:#fff}
 & p{ color:#fff}
 }
`;
const Container = styled.div`
  max-width: 1140px;
  margin: auto;
  padding:0 15px;
`;
const Fullwidth = styled.div`
  width: 100%;float:left;margin-bottom:50px;
 & h2{ margin-bottom:25px;}
`;
const GridItem = styled.div`
display: grid;
grid-gap: 1.5rem;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Grid = styled.div`
 padding:0 0px;
 & h3{ min-height:80px;}
`;
const ReturnBox = styled.div`
width:100%; float:left; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 18px 3px;
`;
const ReturnTop = styled.div`
  width: 100%;float:left;padding: 45px 30px;background-color: rgb(47, 107, 154);
  `;
  const Total = styled.div`
  -moz-box-pack: justify;
justify-content: space-between;
display: flex;
  `;

  const ReturnBot = styled.div`
 width: 100%;float:left;background-color: rgb(67, 89, 122);padding:25px;
 -moz-box-pack: justify; color:#fff;
justify-content: space-between;
display: flex;
  `;