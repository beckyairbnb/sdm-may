import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home3/Hero";
import Counter from "../sections/home2/Counter";
import Progress from "../sections/home22/Progress";
import Content1 from "../sections/home22/Content1";
import Content2 from "../sections/home22/Content2";
import Content3 from "../sections/home22/Content3";
import Testimonial from "../sections/home2/Testimonial";
import CTA from "../sections/home2/CTA";
import Helmet from "react-helmet";
import Pricing from "../sections/home22/Pricingstrategy";


const Home22 = () => {
  return (
    <>
    <Helmet>
     <title>Strategically | Content Strategy Agency</title>
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
        <Hero className="pt-11 pt-lg-34 pb-8 pb-lg-33" />
        <Counter className="pt-lg-5 pb-8 pb-lg-27" />
        <Content2 className="pb-0 pb-lg-31" />
        <Content3 className="pb-12 pb-lg-25" />
        <Pricing />
        <Testimonial className="pt-lg-19 pb-12 pb-lg-17" />
        <CTA className="bg-images" />
      </PageWrapper>
    </>
  );
};
export default Home22;
