import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/pricing/Hero";
import Pricing from "../sections/pricing/Pricing";
import Faq from "../sections/pricing/Faq";
import HeaderButton from "../components/Header/HeaderButton";
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
            <HeaderButton/>
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
