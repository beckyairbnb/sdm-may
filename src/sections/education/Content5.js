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
                data-aos="fade-right"
                data-aos-duration={500}
                data-aos-once="true"
              >
                <img className="w-100" src={imgC} alt="" />
                <div className="abs-img-1">
                  <img className="w-100" src={imgDot} alt="" />
                </div>
                {/* l1-content-card-1 Image Section */}
                <div
                  className="l1-content-card-1 bg-white shadow-3"
                  data-aos="zoom-in-left"
                  data-aos-duration={900}
                  data-aos-delay={300}
                  data-aos-once="true"
                >
                  <div className="abs-card-icon">
                    <span className="bg-gradient-1 circle-73">
                      <img src={imgE} alt="" />
                    </span>
                  </div>
                  <div className="abs-content pl-10 pr-10 pt-9">
                    <div className="border-bottom-dotted mb-8">
                      <h5 className="font-size-8 font-weight-medium mb-0 text-dark-cloud">
                        New Article Alert!
                        <span role="img" aria-label="party">
                          🎉
                        </span>
                      </h5>
                      <p className="font-size-4 mb-7 text-bali-gray">
                        20 mins ago
                      </p>
                    </div>
                    <div className="media align-items-center mb-7">
                      <div className="mr-5 mt-n4">
                        <img className="circle-44" src={imgD} alt="" />
                      </div>
                      <div className="company-info">
                        <h6 className="font-size-6 font-weight-normal mb-0 text-dark-cloud lineo">
                          Article 1, Month 1
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
                  We manage the whole process.
                </h2>
                <p>Our content team manages the entire production process, providing ongoing strategic guidance while sourcing top talent and overseeing delivery.</p>

<p>Our team has managed hundreds of projects from large authority websites to niche tech sites. Once you start with Strategically, we set up regular contact points to ensure that you’re happy with our service and the content. </p>

<p>Our content creation is service is fully managed. All of your tasks will be delivered on time and will meet our rigorous quality standard. In the event you’re not completely satisfied, we offer unlimited revisions. </p>

<p>We stay in contact with you throughout the whole process, so you’ll always be kept in the loop.</p>



              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content5;
