import React, { useEffect } from "react";
import { navigate } from 'gatsby'
import PageWrapper from "../components/PageWrapper";
import HeaderButton from "../components/Header/HeaderButton";
import Helmet from "react-helmet";

const Success = () => {
  useEffect(() => {
    setTimeout(() => {        
        navigate('/book-a-demo/');
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
            <HeaderButton/>

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
