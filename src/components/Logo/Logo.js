import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components";

import logoB from "../../assets/image/sitelogo.png";
import logoW from "../../assets/image/sitelogo.png";

const Logo = ({ className = "", ...rest }) => {
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
    <Link to="/" className={`${className}`} {...rest}>
      {/* <!-- light version logo (logo must be black)--> */}
      <GatsbyImage
                            image={getImage(siteLogo)} 
                            width={251} height={60}
                            className="light-version-logo"
                        />
      {/* <LogoImg src={logoB} alt="" className="light-version-logo" /> */}
      <GatsbyImage
                            image={getImage(siteLogo)} 
                            width={251} height={60}
                            className="dark-version-logo"
                        />
      {/* <!-- Dark version logo (logo must be White)--> */}
      {/* <LogoImg src={logoW} alt="" className="dark-version-logo" /> */}
    </Link>
  );
};
const LogoImg = styled.img`
max-height:80px;
`
export default Logo;
