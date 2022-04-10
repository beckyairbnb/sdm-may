import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import logoB from "../../assets/image/sitelogo.png";
import logoW from "../../assets/image/sitelogo.png";

const Logo = ({ className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      {/* <!-- light version logo (logo must be black)--> */}
      <LogoImg src={logoB} alt="" className="light-version-logo" />
      {/* <!-- Dark version logo (logo must be White)--> */}
      <LogoImg src={logoW} alt="" className="dark-version-logo" />
    </Link>
  );
};
const LogoImg = styled.img`
max-height:80px;
`
export default Logo;
