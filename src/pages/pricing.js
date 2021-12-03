import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/pricing/Hero";
import Pricing from "../sections/pricing/Pricing";
import Faq from "../sections/pricing/Faq";
import Helmet from "react-helmet";

const PricingPage = () => {
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
        <Hero />
        
        <Pricing />
         {/* Section Title */}
         <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="text-center mb-13 mb-lg-19">
              <h2 className="font-size-9 text-dark-cloud mb-0">Money back guarantee</h2>
  <p>We are so confident you’ll love our work, we offer a 2000 word money back guarantee. Cancel before you’ve received more than 2000 words, and you will receive a full refund. No quibbles, no questions. </p>
            </div>
          </div>
        </div>
        {/* End Section Title */}

        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="text-center mb-13 mb-lg-19">
              <h2 className="font-size-9 text-dark-cloud mb-0">Are you serious about SEO?</h2>
  <p>If you are serious about SEO, upgrade to our Surfer SEO package for an additional $35 per 1000 words. We will optimise all of your content using AI to ensure it competes with the top ranking content for your target keywords.  </p>
            </div>
          </div>
        </div>
        <Faq />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
