import React from "react";

import PageWrapper from "../components/PageWrapper";
import Helmet from "react-helmet";

import Blog from "../sections/home1/Blog";
// import Section from "../layout/Section";

const SamplesPage = () => {
  return (
    <>
    <PageWrapper
      themeConfig={{
        headerClassName: "site-header--menu-right",
        headerButton: (
          <>
          <Helmet>
           <title>Strategically | Content Writing Agency</title>
         </Helmet>
          <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/get-a-quote/1/"}>
            View Pricing
          </a>
          </>
        ),
        footerStyle: "style2",
      }}
    >
      <Blog className="bg-default-1 pt-14 pt-md-18 pt-lg-27 pb-13 pb-md-17 pb-lg-26" />
      </PageWrapper>
    </>
  );
};
export default SamplesPage;
