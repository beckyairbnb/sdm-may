import React from "react";

import img1 from "../../assets/image/home-2/png/explore.png";
import img2 from "../../assets/image/home-2/png/interview.png";
import img3 from "../../assets/image/home-2/png/card-favorite.png";
import imgC from "../../assets/image/home-2/png/content-2-img.png";
import imgP from "../../assets/image/home-2/png/patterns-dot-green.png";
import imgH from "../../assets/image/home-2/png/right-circlehalf-shape.png";

const Content2 = ({ className, ...rest }) => {
  const contentWidgetData = [
    {
      icon: img1,
      title: "Find expert writers",
      text: "We hire the top 1% of UK and US writers only.",
    },
    {
      icon: img2,
      title: "Get content quickly",
      text: "We process your content requests in days,not weeks.",
    },
    {
      icon: img3,
      title: "Content done-for-you",
      text: " Our content team manages the entire production process.",
    },
  ];
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* Left */}
            <div
              className="col-xl-4 col-lg-5 col-md-6 col-xs-8 order-2 order-md-1"

            >
              <h2 className="font-size-11">Grow your business with content.</h2>
              <ul className="list-unstyled mt-9 mt-lg-14">
                {contentWidgetData.map(({ icon, title, text }, index) => {
                  return (
                    <li className="media align-items-center mb-12" key={index}>
                      <div className="border square-83 rounded-10 mr-9">
                        <img src={icon} alt="" />
                      </div>
                      <div className="content">
                        <h5>{title}</h5>
                        <p className="font-size-5 line-height-28 mb-0">
                          {text}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* Left End */}
            {/* Right */}
            <div
              className="col-xl-6 offset-xl-2 col-lg-7 col-md-6 col-xs-8 order-1 order-md-2"
              
            >
              <div className="l2-content-image-group-2 mb-10 mb-md-0 rounded-10">
                <div className="img-1 position-relative text-right rounded-10">
                  <img className="w-100 w-lg-auto" src={imgC} alt="" />
                  <div className="img-2">
                    <img className="w-100" src={imgP} alt="" />
                  </div>
                  <div className="img-3">
                    <img className="w-100 opacity-7" src={imgH} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Right */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content2;
