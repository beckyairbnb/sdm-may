import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/pricing/Hero";
import Pricing from "../sections/pricing/Pricing";
import Faq from "../sections/pricing/Faq";

const PricingPage = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/contact"}>
              Sign Up
            </a>

            </>
          ),
          footerStyle: "style4",
        }}
      >
        <Hero />
        <Pricing />
        <Faq />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
