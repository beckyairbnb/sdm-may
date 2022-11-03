import React from "react";

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

              >
                <h2 className="font-size-11">
                We hire writers that are industry experts.
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            {/* Right */}
            <div
              className="col-xl-6 col-lg-6 col-md-5 col-xs-8"

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

            >
              <div className="mr-lg-10 mr-xl-25">

              <p>Effective content marketing needs to speak to your audience, convey your brand voice, and connect with your customers. </p>

          <p>At Strategically, we hire you the best talent to fit your business needs, goals, as well as your customer pain points. </p>

          <p>As well hiring the top 1% of writers, all content goes through a strict editing process before it reaches you to ensure it meets our strict quality standards. </p>
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
