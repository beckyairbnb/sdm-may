import React from "react";

import imgA1 from "../../assets/image/home-2/png/arrow-1.png";
import imgA2 from "../../assets/image/home-2/png/arrow-2.png";
import imgS from "../../assets/image/home-2/png/search.png";
import imgE from "../../assets/image/home-2/png/event-confirm.png";
import imgR from "../../assets/image/home-2/png/right-layer.png";

const Progress = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-xs-10">
              <div className="text-center pt-13 pt-lg-23 pb-13 pb-lg-12 pr-lg-10 pr-xl-0">
                <h2 className="font-size-11 mb-0">
                  Working with Strategically is simple.
                </h2>
              </div>
            </div>
          </div>
          {/* <!-- Section Title --> */}
          {/* <!-- Progress Items --> */}
          <div className="row justify-content-center">
            <div className="col-sm-12 col-xs-8">
              <div className="timeline-area d-sm-flex just justify-content-lg-between flex-wrap flex-lg-nowrap position-relative">
                {/* <!-- Image Group --> */}
                <div className="image-group-3">
                  <div
                    className="arrow-shape-1 d-none d-lg-block absolute-top-left"

                  >
                    <img src={imgA1} alt="" />
                  </div>
                  <div
                    className="arrow-shape-2 d-none d-lg-block absolute-top-right"

                  >
                    <img src={imgA2} alt="" />
                  </div>
                </div>
                {/* <!-- Single Progress --> */}
                <div
                  className="single-widgets pr-md-18 pr-lg-0 pl-lg-10 pl-xl-22 mb-10 mb-lg-0 text-center text-md-left"

                >
                  <div className="square-97 bg-dodger-blue-2 rounded-10 mb-10 shadow-bg-dodger-blue-2 mx-auto mx-md-0">
                    <img src={imgS} alt="" />
                  </div>
                  <div className="">
                    <h3 className="font-size-8 mb-6">We create content</h3>
                    <p className="font-size-5 line-height-28 mb-0">
                    Articles, blogs, case studies, ebooks, landing pages and more.                    </p>
                  </div>
                </div>
                {/* <!-- End Single Progress --> */}
                {/* <!-- Single Progress --> */}
                <div
                  className="single-widgets pr-md-18 pr-lg-0 pl-lg-10 pl-xl-22 mb-10 mb-lg-0 text-center text-md-left"

                >
                  <div className="square-97 bg-dodger-blue-2 rounded-10 mb-10 shadow-bg-dodger-blue-2 mx-auto mx-md-0">
                    <img src={imgE} alt="" />
                  </div>
                  <div className="">
                    <h3 className="font-size-8 mb-6">Expert writers</h3>
                    <p className="font-size-5 line-height-28 mb-0">
                    We match your business with a dedciated content writer in your niche.
                    </p>
                  </div>
                </div>
                {/* <!-- End Single Progress --> */}
                {/* <!-- Single Progress --> */}
                <div
                  className="single-widgets pr-md-18 pr-lg-0 pl-lg-10 pl-xl-22 mb-10 mb-lg-0 text-center text-md-left"

                >
                  <div className="square-97 bg-dodger-blue-2 rounded-10 mb-10 shadow-bg-dodger-blue-2 mx-auto mx-md-0">
                    <img src={imgR} alt="" />
                  </div>
                  <div className="">
                    <h3 className="font-size-8 mb-6">Scale your content</h3>
                    <p className="font-size-5 line-height-28 mb-0">
                      We scale your ccontent creation for all your marketing channels. 
                    </p>
                  </div>
                </div>
                {/* <!-- End Single Progress --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Progress Items --> */}
        </div>
      </div>
    </>
  );
};

export default Progress;
