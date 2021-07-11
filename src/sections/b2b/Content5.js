import React from "react";

import imgC from "../../assets/image/home-1/png/content-one-img.png";
import imgDot from "../../assets/image/home-1/png/dot-bg.png";
import imgE from "../../assets/image/svg/email.svg";
import imgD from "../../assets/image/home-1/png/dropdrop.png";

const Content5 = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* Image Section */}
            <div className="col-xl-6 col-lg-5 col-md-7 col-xs-10">
              <div
                className="l1-content-image-group-1 mb-10 mb-lg-0"

              >
                <img className="w-100" src={imgC} alt="" />
                <div className="abs-img-1">
                  <img className="w-100" src={imgDot} alt="" />
                </div>
                {/* l1-content-card-1 Image Section */}
                <div
                  className="l1-content-card-1 bg-white shadow-3"

                >
                  <div className="abs-card-icon">
                    <span className="bg-gradient-1 circle-73">
                      <img src={imgE} alt="" />
                    </span>
                  </div>
                  <div className="abs-content pl-10 pr-10 pt-9">
                    <div className="border-bottom-dotted mb-8">
                      <h5 className="font-size-8 font-weight-medium mb-0 text-dark-cloud">
                      In-depth keyword research

                      </h5>

                    </div>
                    <div className="media align-items-center mb-7">
                      <div className="mr-5 mt-n4">
                        <img className="circle-44" src={imgD} alt="" />
                      </div>
                      <div className="company-info">
                        <h6 className="font-size-6 font-weight-normal mb-0 text-dark-cloud lineo">
                          Target audience A
                        </h6>
                        <p className="font-size-6 font-weight-bold text-dark-cloud mb-0">
                          Complete!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content Section */}
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-11">
              <div
                className="ml-lg-10 ml-xl-12 mt-lg-n20 pr-lg-10 pr-xl-10"

              >

                <h2 className="font-size-11">
                  Stage 2: Research
                </h2>
              <p>There’s still no advice at this stage: it’s just research. We spend as much time as needed building a keyword research document that forms the foundations of the strategy.</p>
                <p>Next, we check what’s ranking for your target keywords and define your direct search competitors, taking tons of notes and screenshots. This involves using numerous paid tools to reveal critical details about the analytics of the web pages.</p>
                <p>We learn what’s working for them, how are they generating quality links? Which content is actually worth building? How are they structuring their architecture?</p>
            <p>By researching how direct search competitors are performing, we can save you a vast amount of wasted time building content that will never rank and focus your efforts on activities that will deliver results.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content5;
