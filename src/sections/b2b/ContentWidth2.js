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
    <div className="pt-23 pt-md-26 pt-lg-28">
      <div className="container">
        {/* Section Padding */}
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-11">
            <div
              className="text-center mb-10 mb-lg-23"    >
<h2 className="font-size-11 mb-7">Let's work together</h2>
              <p className="font-size-7 mb-0">
            <p>We only take on projects when we know we can make an exponential difference. We never work on a strategy if you don't have the budget to see the project and build the content and links needed.</p>
            <p>If our SEO strategy process sounds like something your business or brand needs, please click the blue button below and get in touch. </p>
              </p>
              <div className="max-w-435">
                <a
                  href="/contact"
                  className="btn btn-blue-3 w-100 h-55 rounded-4"
                >
                Get a fast quote
                </a>

              </div>
            </div>
          </div>
        </div>
        {/* End Section Padding */}
      </div>
    </div>
    </>
  );
};

export default Counter;
