import React, { useEffect } from "react";
import { graphql, Link } from "gatsby"
import Slider, { Range } from 'rc-slider';
import Helmet from "react-helmet";

import PageWrapper from "../components/PageWrapper";
import 'rc-slider/assets/index.css';

import FaqAccordion from "../sections/pricing/FaqAccordion";


import { useRanger } from "react-ranger";
import styled from "styled-components";

const PricePage = ({ data }) => {
  const { PriceData } = data
  const { items } = PriceData.data.body[0]
  const firstItem = items[0]

  const [disabled, setDisabled] = React.useState(false);
  const [range, setRange] = React.useState(false);
  const [reverse, setReverse] = React.useState(false);
  const [vertical, setVertical] = React.useState(false);
  const [value, setValue] = React.useState(2000);
  const [values, setValues] = React.useState([0, 100]);
  const [selectedOption, setSelectedOption] = React.useState('monthly');
  const [buttonText, setButtonText] = React.useState(firstItem.button_text);
  const [buttonLink, setButtonLink] = React.useState(firstItem.button_link);
  const [selectedValue, setSelectedValue] = React.useState(firstItem.month_to_month_price);




  useEffect(() => {
    console.log('selected item', value)
    const selectedItem = items.filter((item) => {
      return item.monthly_words === value
    })
    if (selectedOption === 'monthly') {
      setSelectedValue(selectedItem[0].month_to_month_price)
    }
    else if (selectedOption === 'yearly') {
      setSelectedValue(selectedItem[0].annual_price)
    }
    setButtonText(selectedItem[0].button_text)
    setButtonLink(selectedItem[0].button_link)
    console.log('Option value', selectedOption)
  }, [value, selectedOption, selectedValue, buttonText, buttonLink])

  const checkboxChangeHandler = (event) => {
    setValue(event.target.value)
    setSelectedOption('monthly');
  }
  const onOptionValueChange = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <>
      <Helmet>
        <title>Strategically | Content Writing Agency</title>
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
        <Container>
          <div className="App range-slider pt-24">
            <PricingSection className="mb-10">
              <Slider className="mb-10"
                min={firstItem.monthly_words}
                max={items[items.length - 1].monthly_words}
                defaultValue={items[0].monthly_words}
                marks={{ 2000: 2000, 4000: 4000, 8000: 8000, 12000: 12000, 16000: 16000, 20000: 20000, 30000: 30000, 50000: 50000, 100000: 100000 }}
                step={null}
                onChange={(nextValues) => {
                  setValue(nextValues);
                }}
              />
              <div className="row">
                <div className="col-lg-4">
                  <PricingTable className="w-100 d-flex flex-column align-items-center p-12">
                    <PricingHeader>
                      <PricingSwitcher className="text-center mb-10">
                        <Fieldset>
                          <label className={selectedOption === "monthly" ? "active" : "inactive"}>
                            <input
                              type="radio"
                              value="monthly"
                              onChange={onOptionValueChange}                              
                              checked={selectedOption === "monthly"}
                            />
                            Monthly
                          </label>
                          <label className={selectedOption === "yearly" ? "active" : "inactive"}>
                            <input
                              type="radio"
                              value="yearly"
                              onChange={onOptionValueChange}                              
                              checked={selectedOption === "yearly"}
                            />
                            Yearly
                          </label>
                          <span class="switch"></span>

                        </Fieldset>

                      </PricingSwitcher>

                      <h2>${selectedValue}</h2>
                      <h6>
                        <span>Usd/Month</span>
                      </h6>
                    </PricingHeader>
                    <Features>
                      <ul className="p-0 mb-10">
                        <li>7 - 10 day delivery</li>
                        <li>In-depth research</li>
                        <li>Quality content writing</li>
                        <li>SEO optimisation</li>
                        <li>Grammarly proofreading</li>
                        <li>Copyscape pass</li>
                        <li>Unlimited revisions</li>
                        <li>Dedicated account manager</li>
                        <li>Access to order management system</li>
                      </ul>
                    </Features>
                    <a
                      className="btn btn btn-dodger-blue-2 header-btn rounded-pill"
                      href={buttonLink}
                    >
                      {buttonText}
                    </a>
                  </PricingTable>
                </div>
                <div className="col-lg-8">
                  <FaqAccordion />
                </div>
              </div>
            </PricingSection>
          </div>
        </Container>
      </PageWrapper>
    </>
  );
};
export default PricePage;

const Container = styled.div`
  @media (min-width: 992px) {
    margin: 0px auto;
    max-width: 1170px;
    padding:0 15px;
  }
`;

const PricingSection = styled.div`
width:100%;
.rc-slider-rail {height:8px;}
.rc-slider-track {height:8px;}
.rc-slider-handle {width: 22px; height: 22px; margin-top: -8px;background-color:#ff0088;border-color:#ff0088;opacity: 1;}
.rc-slider-dot {width:0; height:0;}

.rc-slider-mark-text{transform: rotate(90deg) !important;  top: 15px; margin-left:-15px;}

`
const PricingTable = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  margin:60px 0px 30px !important;
`;

const PricingHeader = styled.div`
  text-align: center;
  margin-bottom: 25px;
  h6 {
    color: #000;
    text-transform: uppercase;
    font-size: 14px;
    span {
      color: #8f82d2;
    }
  }
  h2 {
    color: #ff0088;
    font-size: 70px;
    line-height: 75px;
  }
`;
const Features = styled.div`
  li {
    text-align: center;
    list-style: none;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 15px;
  }
`;

const PricingSwitcher = styled.div`

`
const Fieldset = styled.div`
display: inline-block;display: flex;
position: relative;
border-radius: 50em;
border: 0px solid #FF0088;
width:250px; margin:0 auto;

input[type="radio"] {
	position: absolute;
	opacity: 0;
    
}
label {
	position: relative;
	z-index: 1;
	display: inline-block;
	width: 100%;
	height: 40px;
	line-height: 40px;
	cursor: pointer;
	font-size: 1rem;
	margin:0px 3px; 
  border-radius: 5px;
}
label.active{
  background-color: #1a284b;
  color:#fff;
}
label.inactive{
  background-color:#f4f8f9;
  color: #98b0c8;
}    



input[type="radio"]:checked + .switch,
label:nth-of-type(n) + input[type="radio"]:checked + .switch {

	transform: translateX(123px);
  
}



// .switch {
// 	position: absolute;
// 	top:0px;
// 	left:0px;
// 	height: 40px;
// 	width: 50%;
// 	background-color: #1a284b;color:#fff;
// 	border-radius: 5px;
// 	-webkit-transition: -webkit-transform 0.5s;
// 	-moz-transition: -moz-transform 0.5s;
// 	transition: transform 0.5s;
 

// }

`
export const query = graphql`
query PricePage {
  PriceData : prismicPriceTable(id: {eq: "4ae29779-cc90-59bc-a46a-84a259e1f968"}) {
    data {
      body {
        ... on PrismicPriceTableDataBodyPriceTableData {
          id
          items {
            monthly_words
            month_to_month_price
            annual_price
            button_text
            button_link
          }
        }
      }
    }
  }
}
`