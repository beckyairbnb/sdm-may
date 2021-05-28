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
          SEO content for your SaaS
              </h2>
              <p>Our SaaS content writers have proven results delivering SEO content. But it’s not just about increasing traffic and ranking, we focus on leads, sales, and conversions.  </p>
              <p>
              <ul>
              <li>Nurture existing leads</li>
              <li>Build brand authority</li>
              <li>Increase user loyalty and retention</li>
              <li>Drive targeted organic traffic </li>
              <li>Beat out competitors for critical search terms </li>
              <li>Improve domain authority over time</li>
              </ul>
              </p>
              
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
                    New article
                  </h4>
                  <p className="font-size-5 text-stone mb-0">
                    You’ve received a new article
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
