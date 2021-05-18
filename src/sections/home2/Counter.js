import React from "react";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import imgHeart from "../../assets/image/home-2/png/heart-icon-group.png";
import imgStars from "../../assets/image/home-2/png/star-group.png";
import imgL1 from "../../assets/image/home-2/png/company-logo/company-logo-1.png";
import imgL2 from "../../assets/image/home-2/png/company-logo/company-logo-2.png";
import imgL3 from "../../assets/image/home-2/png/company-logo/company-logo-3.png";



const Counter = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row justify-content-center justify-content-lg-start">
            {/* Left */}
            <div className="col-xl-5 col-lg-6 col-md-9">
              <div className="row">
                {/* Single Counter */}
                <div className="col-xs-6">
                  <div
                    className="mb-11 mb-lg-0"

                  >
                    <h2 className="font-size-12 mb-6">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp duration={2} end={2} />M+
                        </span>
                      </LazyLoad>
                    </h2>
                    <div className="mt-5">
                      <img className="mb-7" src={imgHeart} alt="" />
                      <h5 className="font-size-5 font-weight-normal mb-1">
                        Words Written
                      </h5>
                      <p className="font-size-5 text-dodger-blue-2 mb-0">
                        On websites
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Single Counter */}
                {/* Single Counter */}
                <div className="col-xs-6">
                  <div
                    className="mb-11 mb-lg-0"

                  >
                    <h2 className="font-size-12 mb-6">
                      <LazyLoad>
                        <CountUp duration={4} end={5} className="counter" />.
                        <CountUp duration={0} end={0} className="counter" />
                      </LazyLoad>
                    </h2>
                    <div className="mt-5">
                      <img className="mb-7" src={imgStars} alt="" />
                      <h5 className="font-size-5 font-weight-normal mb-1">
                        Google Reviews
                      </h5>
                      <p className="font-size-5 text-dodger-blue-2 mb-0">
                        Happy customers
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Single Counter */}
              </div>
            </div>
            {/* Left End */}
            {/* Right Start */}
            <div className="col-lg-6 offset-xl-1">
              <div className="row">
                <div className="col-lg-12 col-md-7 col-xs-9">
                  <div
                    className="section-title"

                  >
                    <h2 className="font-size-9 pr-xl-22 mb-7 mb-lg-11 pr-lg-0">
                      Trusted by 250+ happy website owners and businesses
                      since 2017.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h6 className="font-size-6 font-weight-normal text-stone mb-5 mb-lg-9">
                    Trusted by companies like yours
                  </h6>
                  <div className="row justify-content-xl-between">
                    {/* Single Brand */}
                    <div
                      className="single-brand-logo px-5 my-6"

                    >
                      <img src={imgL1} alt="" />
                    </div>
                    {/* Single Brand */}
                    <div
                      className="single-brand-logo px-5 my-6"

                    >
                      <img src={imgL2} alt="" />
                    </div>
                    {/* Single Brand */}
                    <div
                      className="single-brand-logo px-5 my-6"

                    >
                      <img src={imgL3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
