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
              <h2 className="font-size-11 mb-7">Why you need an SEO strategy</h2>
              <p className="font-size-7 mb-0">
            <p>Creating content and building links can be a monumental waste of time unless you have a solid SEO strategy. Without a strategy, success is simply luck, and in SEO, luck does not exist.</p> <p>If you’re serious about building a long-term business, then a good SEO strategy is the cornerstone of your business success. Too many companies jump straight in and signup for a monthly SEO retainer and expect it just to work. These companies promise the earth, and in reality, very few deliver.</p> <p>We provide you with a strategy that paves the way for a successful SEO implementation – it’s a blueprint to building a successful website that delivers sales or leads and converts users into customers. Our research uncovers what your target audience wants, and the strategy uses that to create a plan for your website and content that delivers what they want.  </p>
            </p></div>
          </div>
        </div>
        {/* End Section Padding */}
      </div>
    </div>
    </>
  );
};

export default Counter;
