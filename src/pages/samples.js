import React from "react";

import PageWrapper from "../components/PageWrapper";
import HeaderButton from "../components/Header/HeaderButton";
import Helmet from "react-helmet";

import Blog from "../sections/home1/Blog";
// import Section from "../layout/Section";

const SamplesPage = () => {
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
          <HeaderButton/>
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
