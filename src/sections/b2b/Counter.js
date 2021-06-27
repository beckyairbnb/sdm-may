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
              <h2 className="font-size-11 mb-7">Our SEO strategy process</h2>
              <p className="font-size-7 mb-0">Our SEO strategy process is tried and true. We have tested virtually every angle possible that’s why we guarantee our strategy recommendations will work. We won’t waste your time recommending you build content that won’t rank, allowing you to start generating leads or sales as soon as possible. One of the primary elements that make our SEO strategy services unique is we don’t do trial and error. We believe in strategy first, then build. This strategy leads to the best sustainable results for you.  </p>
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
