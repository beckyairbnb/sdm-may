import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import GlobalContext from "../../context/GlobalContext";

import { useStaticQuery, graphql } from "gatsby"

const SiteHeader = styled.header``;

const ToggleButton = styled.button``;


const HeaderNoFooter = () => {
  const { SiteLogo } = useStaticQuery(
    graphql`
      query {
        SiteLogo: file(relativePath: {eq: "logo.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 216)
          }
        }
      }
    `
  )
  const MyLogo = getImage(SiteLogo)
  const gContext = useContext(GlobalContext);
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });

  return (
    <>
      <SiteHeader
        className={`site-header ${
          gContext.theme.headerClassName
        } px-7 px-lg-10 dynamic-sticky-bg site-header--absolute site-header--sticky

        ${showScrolling ? "scrolling" : ""} ${
          showReveal ? "reveal-header " : ""
        }`}
      >
        <Container fluid={gContext.theme.headerFluid}>
          <nav className="navbar site-navbar offcanvas-active navbar-expand-lg  px-0">
            {/* <!-- Brand Logo--> */}
            <div className="brand-logo mt-3 mt-md-0">
            {/* <img src={logoB} alt="" className="light-version-logo" /> */}
            <GatsbyImage image={MyLogo} alt="Strategically | Content Writing Agency"/>
            </div>

            <div className="collapse navbar-collapse">
              <div className="navbar-nav-wrapper">
                
              </div>
            </div>

         
            
          </nav>
        </Container>
      </SiteHeader>
      
    </>
  );
};
export default HeaderNoFooter;
