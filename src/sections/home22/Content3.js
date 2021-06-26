import React from "react";
import { Link } from "gatsby";

import imgM from "../../assets/image/home-2/png/meeting-2.png";
import imgDP from "../../assets/image/home-2/png/dot-pattern-black.png";
import imgLC from "../../assets/image/home-2/png/left-circlehalf-shape.png";

const Content3 = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-9 col-xs-11">
              <div
                className="section-title"
                data-aos="fade-left"
                data-aos-delay={500}
                data-aos-once="true"
              >
                <h2 className="font-size-10 mb-10 mb-lg-20">
                  Get a free content strategy consultation.
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            {/* Right */}
            <div
              className="col-xl-6 col-lg-6 col-md-5 col-xs-8"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true"
            >
              <div className="content-image-group-3 mb-17 mb-lg-0 mr-xl-16">
                <div className="img-1">
                  <img className="w-100" src={imgM} alt="" />
                  <div className="img-2">
                    <img className="w-100" src={imgDP} alt="" />
                  </div>
                  <div className="img-3 rounded-10">
                    <img className="w-100 opacity-7" src={imgLC} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Right */}
            {/* Left */}
            <div
              className="col-lg-6 col-md-7 col-xs-10"
              data-aos="fade-left"
              data-aos-delay={500}
              data-aos-once="true"
            >
              <div className="mr-lg-10 mr-xl-25">
                <p className="heading-default-color font-size-6 mb-10">
                Get ready to supercharge your content strategy. Sam, Strategically's SEO Strategist, will analyze your content and present your top growth opportunities in a PDF.
                </p>
                <p className="heading-default-color font-size-6 mb-11">
                This includes audience research, keyword analysis, and more. If nothing else, it’s an opportunity to think through ideas for your account, and we can leave it at that.{" "}
                </p>
                <div className="btn-group mb-12">
                  <Link className="btn btn-dodger-blue-2 rounded-5" to={"/contact"}>
                    Chat with Sam
                  </Link>
                </div>

              </div>
            </div>
            {/* Left End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content3;
