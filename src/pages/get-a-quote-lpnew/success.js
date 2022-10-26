import React, { useEffect } from "react";
import { navigate } from 'gatsby'
import PageWrapper from "../../components/PageWrapper";
import Hero from "../../sections/pricing/Hero";
import Faq from "../../sections/pricing/Faq";
import Helmet from "react-helmet";

const Success = () => {
  useEffect(() => {
    setTimeout(() => {        
        navigate('https://calendly.com/becky-strategically/get-a-quote-lpnew');
    }, 1);
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
            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/get-a-quote/2/"}>
              View Pricing
            </a>

            </>
          ),
          footerStyle: "style2",
        }}
      >
        {/* <Hero />
        <Faq /> */}
      </PageWrapper>
    </>
  );
};
export default Success;
