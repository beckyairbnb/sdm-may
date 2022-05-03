import React, { useEffect } from "react";
import { navigate } from 'gatsby'
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/pricing/Hero";
import Pricing from "../sections/pricing/Pricing";
import Faq from "../sections/pricing/Faq";
import Helmet from "react-helmet";

const Success = () => {
  useEffect(() => {
    setTimeout(() => {        
        navigate('https://calendly.com/becky-strategically/intro-meeting?month=2022-02');
    }, 10);
 });
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
            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/pricing/"}>
              View Pricing
            </a>

            </>
          ),
          footerStyle: "style2",
        }}
      >
        <Hero />
        {/* <Pricing /> */}
        <Faq />
      </PageWrapper>
    </>
  );
};
export default Success;
