import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"

import imgBg from "../../assets/image/inner-page/jpg/sign-in-right-img.jpg";
import logoB from "../../assets/image/sitelogo.png";

import PageWrapper from "../PageWrapper";

const LeadgenLayout = ({children}) => {
  const { siteLogo } = useStaticQuery(
    graphql`
      query {
        siteLogo: file(relativePath: {eq: "sitelogo.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 251)
          }
        }

      }
    `
  )
  return (
    <PageWrapper
        themeConfig={{
          headerClassName: "pt-13 pt-lg-11 px-14 px-xl-24",
          headerLogoClassName: "mx-auto mx-lg-0"
        }}
      >
        <div className="min-height-100vh d-flex align-items-center bg-default-3">
          <div className="container-fluid h-100">
            <div className="row no-gutters align-items-center justify-content-center h-100">
             
              <div className="col-xl-4 col-lg-6 col-md-10">
                <div
                  className="pt-10 pb-md-4 pb-lg-10 max-w-413 mx-auto"
                  data-aos="fade-up"
                  data-aos-duration={500}
                  data-aos-delay={500}
                >
                    <div className="mb-10">
                    <GatsbyImage
                    image={getImage(siteLogo)}
                    width={251} height={60}
                    className="light-version-logo"
                />
                    </div>
                
                    {children}
                </div>
              </div>
              {/* Right Image */}
              <div className="col-lg-8 col-md-10 min-height-lg-100vh">
                <div
                  className="bg-images min-h-107 min-height-100vh d-none d-lg-block"
                  css={`
                    background-image: url(${imgBg});
                  `}
                />
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
  );
};
export default LeadgenLayout;
