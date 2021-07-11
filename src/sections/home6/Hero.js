import React from "react";
import { Link } from "gatsby";

import imgM from "../../assets/image/home-6/png/hero-mobile.png";
import imgYS from "../../assets/image/home-6/png/cirle-yellow-shape.png";

const Hero = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container position-static">
        <div className="row align-items-center justify-content-center position-static">
          {/* Hero Image */}
          <div className="col-xl-6 col-lg-6 col-md-7 col-xs-8 position-static">
            <div className="l6-hero-image-group">
              <img
                className="w-100"
                src={imgM}
                alt=""

              />
              <div className="img-1">
                <img
                  className="w-100"
                  src={imgYS}
                  alt=""

                />
              </div>
            </div>
          </div>
          {/* End Hero Image */}
          {/* Hero Content */}
          <div className="col-lg-6 col-md-9 col-sm-11">
            <div
              className="mt-8 mt-lg-0 pr-md-11 pr-lg-0 pr-xl-10"

            >
              <h1 className="mb-8 pr-sm-18 pr-md-8 pr-lg-0 line-height-84">
                Hire quality content writers who understand your brand
              </h1>
              <p className="font-size-7 mb-0 pr-sm-10 pr-md-10 pr-lg-0 pr-xl-18">
              Get blog posts, white papers, case studies & more from Native English writers.
              </p>
              <div className="mt-10">
                <Link to="/pricing" className="btn btn-dodger-blue-2 header-btn rounded-5">
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
