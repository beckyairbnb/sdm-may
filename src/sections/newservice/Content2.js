import React from "react";

import imgC from "../../assets/image/home-2/png/content-2-img.png";
import imgP from "../../assets/image/home-2/png/patterns-dot-green.png";
import imgH from "../../assets/image/home-2/png/right-circlehalf-shape.png";

const Content2 = ({ className, ...rest }) => {

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

              <p>Do you want to increase sales, grow your brand awareness, or become the expert in your industry? </p>

            <p>Whatever your vision, we create top quality content that matches your business goals and speaks to your target audience. </p>

            <p>At Strategically, we create content that’s engineered to resonate with your target audience. Our content team manages the entire production process, providing ongoing strategic guidance while sourcing top talent and overseeing delivery.</p>

      
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
