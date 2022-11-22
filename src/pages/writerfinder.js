import React from "react";
import { Link } from "gatsby"
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";
import Helmet from "react-helmet";
import HeroSection from "../sections/writerfinder/Hero";
import FeaturesSection from "../sections/writerfinder/features";
import WritersContent from "../sections/writerfinder/writerscontent";
import Testimonials from "../sections/writerfinder/testimonials";
import Testimonials2 from "../sections/writerfinder/testimonials2";
import PricingSection from "../sections/writerfinder/pricing";
import Faq from "../sections/writerfinder/faqsection";

const WriterFinder = () => {
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
              <Link to="#"><a className="btn btn-dodger-blue-2 header-btn rounded-5 d-none d-lg-inline-flex" href={"/get-a-quote/"}>
                View Pricing
              </a>
              </Link> 
            </>
          ),
          footerStyle: "style4",
        }}
      >
        <HeroSection />
        <FeaturesSection />
        <WritersContent />
        <Testimonials />
        <Testimonials2 />
        <PricingSection />
        <Faq />
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
export default WriterFinder;
