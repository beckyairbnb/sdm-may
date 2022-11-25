import React from "react";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/b2b/Hero";
import Counter from "../sections/b2b/Counter";
import Testimonial from "../sections/b2b/Testimonial";
import CTA from "../sections/b2b/CTA";
import Helmet from "react-helmet";
import Content4 from "../sections/b2b/Content4";
import Content5 from "../sections/b2b/Content5";
import ContentOne from "../sections/b2b/ContentOne";
import ContentWidth from "../sections/b2b/ContentWidth";
import ContentWidth2 from "../sections/b2b/ContentWidth2";

const Strategy = () => {
  return (
    <>
    <Helmet>
     <title>Strategically | SEO Content Strategy Agency</title>
   </Helmet>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
            <Link className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/contact"}>
              Sign Up
            </Link>
            </>
          ),
          footerStyle: "style2",
        }}
      >
        <Hero className="pt-11 pt-lg-34 pb-8 pb-lg-33" />
        <Counter className="pt-lg-5 pb-8 pb-lg-27" />
        <ContentOne className="pt-27 pt-lg-35 pb-lg-34 " />
        <Content5 className="pt-15 pt-lg-30 pb-15 pb-lg-26" />
        <Content4 className="pt-30 pt-lg-28 pb-15 pb-lg-30" />
        <ContentWidth className="pt-lg-5 pb-8 pb-lg-27" />
      <ContentWidth2 className="pt-lg-5 pb-8 pb-lg-27" />
  <Testimonial className="pt-lg-19 pb-12 pb-lg-17" />
        <CTA className="bg-images" />
      </PageWrapper>
    </>
  );
};
export default Strategy;
