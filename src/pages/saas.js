import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/saas/Hero";
import ContentOne from "../sections/saas/ContentOne";
import ContentTwo from "../sections/saas/ContentTwo";
import ContentThree from "../sections/saas/ContentThree";
import Team from "../sections/saas/Team";
import Testimonial from "../sections/saas/Testimonial";
import Pricing from "../sections/saas/Pricing";

const Saas = () => {
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
        <ContentOne className="pt-13 pt-lg-28 pb-13 pb-lg-26" />
        <ContentTwo className="bg-default-4 pt-15 pt-lg-30 pb-15 pb-lg-26" />
        <ContentThree className="bg-dark-cloud pt-30 pt-lg-28 pb-15 pb-lg-30" />
        <Testimonial />

      </PageWrapper>
    </>
  );
};
export default Saas;
