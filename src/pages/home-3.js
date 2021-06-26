import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home3/Hero";
import Company from "../sections/home3/Company";
import Feature from "../sections/home3/Feature";
import ContentOne from "../sections/home3/ContentOne";
import ContentTwo from "../sections/home3/ContentTwo";
import Review from "../sections/home3/Review";
import Pricing from "../sections/home3/Pricing";
import Helmet from "react-helmet";

const Home3 = () => {
  return (
    <>
    <Helmet>
     <title>Strategically | SEO Strategy Agency</title>
   </Helmet>
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
        <Hero className="bg-default-3 pt-25 pt-lg-29" />
        <Company className="pt-12 pb-9" />
        <ContentOne className="pt-27 pt-lg-35 pb-lg-34 " />
        <ContentTwo className="pb-13 pb-lg-34" />
        <Review className="bg-default-3 pt-13 pt-lg-25 pb-9 pb-lg-25" />
        <Pricing className="pt-13 pt-lg-25 pb-8 pb-lg-22 " />
      </PageWrapper>
    </>
  );
};
export default Home3;
