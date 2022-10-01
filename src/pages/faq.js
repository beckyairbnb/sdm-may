import React from "react";
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/pricing/Hero";
import Pricing from "../sections/pricing/Pricing";
import Faq from "../sections/pricing/Faq";
import Helmet from "react-helmet";

const FaqPage = () => {
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
            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/get-a-quote/2/"}>
              View Pricing
            </a>

            </>
          ),
          footerStyle: "style2",
        }}
      >
       <Container>
       <Faq />
       </Container>
      </PageWrapper>
    </>
  );
};
const Container = styled.div`  
  @media (min-width: 992px) {
    margin: 150px auto 10px;
    max-width: 1170px;  
  }
  @media (max-width: 991px) {
    max-width: 100%;  
    margin: 120px auto 10px; 
    padding:0px;   
  }
`;
export default FaqPage;
