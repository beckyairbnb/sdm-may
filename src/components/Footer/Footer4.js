import React from "react";
import { Link } from "gatsby";

import imgLB from "../../assets/image/logo-main-black.png";
import imgLW from "../../assets/image/logo-main-white.png";

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div className={`bg-white pt-12 pb-10 ${className}`} {...rest}>
        <div className="container">
          <div className="pb-13">
            <div className="row align-items-center justify-content-lg-between">
            </div>
          </div>
          <div className="border-top border-default-color dark-mode-texts d-flex align-items-center justify-content-center justify-content-sm-between flex-column flex-sm-row flex-wrap pt-9">
            <div>
              <ul className="d-flex align-items-center list-unstyled mb-5 mb-sm-0">
                <li>
                  <Link
                    to="/privacy"
                    className="pr-5 text-stone gr-hover-text-dodger-blue-1 font-size-5 pr-12"
                  >
                    Privacy
                  </Link>
                  <Link
                    to="/terms"
                    className="pr-5 text-stone gr-hover-text-dodger-blue-1 font-size-5 pr-12"
                  >
                    Terms
                  </Link>
                  <Link
                    to="/contact"
                    className="pr-5 text-stone gr-hover-text-dodger-blue-1 font-size-5 pr-12"
                  >
                    Contact Us
                  </Link>
                </li>


              </ul>
            </div>
            <div>
              <ul className="d-flex align-items-center list-unstyled mb-0">

                <li>
          Strategically Digital Marketing Ltd. Company Number 11898834. VAT 328 9819 52.

                </li>
                <li>

                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
