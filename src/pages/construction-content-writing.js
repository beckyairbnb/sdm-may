import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/construction/Hero";
import Counter from "../sections/construction/Counter";
import Content2 from "../sections/construction/Content2";
import Content3 from "../sections/construction/Content3";
import Testimonial from "../sections/construction/Testimonial";
import CTA from "../sections/construction/CTA";
import Helmet from "react-helmet";
import Content4 from "../sections/construction/Content4";
import Content5 from "../sections/construction/Content5";

const Construction = () => {
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
        <Content4 className="pt-30 pt-lg-28 pb-15 pb-lg-30" />
        <Content5 className="pt-15 pt-lg-30 pb-15 pb-lg-26" />
        <Testimonial className="pt-lg-19 pb-12 pb-lg-17" />
        <CTA className="bg-images" />
      </PageWrapper>
    </>
  );
};
export default Construction;
