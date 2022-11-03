import React from "react";
import { Link } from "gatsby";

import imageOne from "../../assets/image/inner-page/jpg/comming-soon-img.png";

const Hero = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Hero Image */}
          <div className="col-md-6 col-sm-8">
       
              <img
                className="w-100"
                src={imageOne}
                alt=""

              />
          </div>
          <div className="col-md-6 col-sm-11">
            <div
              className="mt-8 mt-lg-0 pr-md-11 pr-lg-0 pr-xl-10 ml-10"

            >
              <h1 className="mb-8 pr-sm-18 pr-md-8 pr-lg-0 line-height-84">
                Hire quality content writers who understand your brand
              </h1>
              <p className="font-size-7 mb-0 pr-sm-10 pr-md-10 pr-lg-0 pr-xl-18">
              Get blog posts, white papers, case studies & more from Native English writers.
              </p>
              <div className="mt-10">
                <Link to="/get-a-quote/2/" className="btn btn-dodger-blue-2 header-btn rounded-5">
                  View pricing
                </Link>
              </div>
            </div>
          </div>
          {/* End Hero Content */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
