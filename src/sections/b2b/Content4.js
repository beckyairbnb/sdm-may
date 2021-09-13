import React from "react";
import { Link } from 'gatsby';
import imageOne from "../../assets/image/home-4/png/content-2-img.png";

const Content4 = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9 order-2 order-lg-1">
            <div
              className="mt-13 mt-lg-0"

            >

            <h2 className="font-size-11">
              Stage 3: Build the strategy
              </h2>
              <p>Only after we’ve finished researching do we start designing your strategy. Our objective is to convert the data into a set of clear, concise recommendations that can be implemented by developers, content writers, and link builders.</p>
<p>The recommendations will cover wireframes with defined titles, headers, and content overview for core pages. URL structure, a website architecture document, and a link-building strategy.</p>
<p>A detailed content strategy includes keyword clusters and content requirements ready for the content creation team to produce the content.</p>
  </div>
          </div>
          {/* Right Image */}
          <div className="col-xl-5 offset-xl-1 col-lg-5 col-md-8 col-xs-11 order-1 order-lg-2">
            <div
              className="l4-content-img-2 ml-lg-10 ml-xl-7 rounded-10 text-center"

            >
              <img
                className="w-75 w-md-100"
                src={imageOne}
                alt=""
              />
              <div className="image-card w-fit-content bg-white rounded-15 d-flex align-items-center shadow-10 p-8">
                <div className="mr-6 square-59 bg-dodger-blue-1-op1 rounded-10 text-dodger-blue-1 font-size-7">
                  <i className="fas fa-bell" />
                </div>
                <div className="text-left">
                  <h4 className="font-size-6 text-dark-cloud mb-0 line-height-26">
                    Delivered
                  </h4>
                  <p className="font-size-5 text-stone mb-0">
                    SEO Content Strategy
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Right Image */}
        </div>
      </div>
    </div>
  );
};

export default Content4;
