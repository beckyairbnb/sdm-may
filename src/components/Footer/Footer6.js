import React from "react";
import ClientsLogos from "../ClientsLogos";
import FooterCta from "../../sections/footercta";
import ContentSection from "./ContentSection";
import FooterLinks from "./FooterLinks";

const Footer = ({ className, ...rest }) => {
  return (
      <div className={`pt-13 ${className}`} {...rest}>
        <ClientsLogos />
        <ContentSection />
        <FooterCta />
        <FooterLinks />
      </div>
  );
};

export default Footer;
