import React from "react";

import imageOne from "../../assets/image/home-3/png/desktop-dashboard-full.png";
import imageTwo from "../../assets/image/home-3/png/image-gallery-card.png";
import imageThree from "../../assets/image/home-3/png/yellow-card.png";

import iconOne from "../../assets/image/svg/connect.svg";
import iconTwo from "../../assets/image/svg/chart-growth.svg";
import iconThree from "../../assets/image/svg/storage.svg";

const ContentOne = ({ className, ...rest }) => {
  const widgetArray = [
    {
      title: "Connect with new people",
      icon: iconOne,
    },
    {
      title: "Increase chance to engage",
      icon: iconTwo,
    },
    {
      title:
        "Unlimited storage <span className='ml-6 badge bg-golden-yellow text-uppercase font-size-3 px-3 rounded-5'>Pro</span>",
      icon: iconThree,
    },
  ];

  return (
    <div className={`position-relative ${className}`} {...rest}>
      <div className="container position-static">
        <div className="row position-static justify-content-center justify-content-lg-start">
          <div className="col-xl-5 col-lg-7 col-md-10 col-sm-10 order-2 order-lg-1">
            <div className="pr-md-20 pr-xl-5">
              {/* Section Title */}
              <div
                className="mb-5 mb-lg-13 pr-md-15 pr-lg-10 pr-xl-0"

              >
                <h2 className="font-size-10 mb-8">
                  Stage 1: Gain Information from You
                </h2>
                <p>
            It’s useless to build an SEO strategy if the design doesn’t perfectly align with the business objectives. We need to understand what makes you different and what makes you money.</p>
            <p> We must understand your business goals from the start. After all, the last thing we want is to go back and make changes because we weren’t clear about a few critical fundamental principles at the beginning.</p>
              </div>
              {/* End Section Title */}

            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-xs-10 position-static order-1 order-lg-2">
            <div className="l3-content-image-group-4 position-lg-absolute mb-13 mb-lg-0">
              <div className="img-1 shadow-5">
                <img className="w-100 w-lg-auto" src={imageOne} alt="" />
                <div className="img-2 rounded-10">
                  <img className="w-100 w-lg-auto" src={imageTwo} alt="" />
                </div>
                <div className="img-3">
                  <img className="w-100 w-lg-auto" src={imageThree} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentOne;
