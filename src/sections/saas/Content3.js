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

              >
                <h2 className="font-size-11">
                Reduce your cost per conversion
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
              <p>Paid advertising may bring in consistent traffic, but as soon as you’ve bought a customer, you need to spend more to get the next one. And the cost per click keeps on increasing reducing your profits. </p>

              <p>Many low price subscription SaaS businesses can’t afford to burn money on ads. With free or low price packages, it’s just not viable or scalable. </p>

              <p>Content marketing brings in qualified traffic for the long term. By building a web of content targeting your ideal customer, you can grow your brand awareness, increase your trust, and make more sales. </p>  </div>
              <div className="">
                <p className="font-size-3 line-height-20 mb-7 mb-5 mr-xs-17 mr-md-11 mr-lg-17">
                  “It’s been great working with Strategically. They quickly got an understanding of our industry: our solution, users, and goals. And produced great content, always on time.”
                </p>
                <h6 className="font-size-3 font-weight-medium">
                   Ermias Giovanni, Gmelius
                </h6>
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
