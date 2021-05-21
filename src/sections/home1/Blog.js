import React from "react";
import { Link } from "gatsby";

import imgB1 from "../../assets/image/home-1/png/post-thumbnails-1.png";
import imgB2 from "../../assets/image/home-1/png/post-thumbnails-2.png";
import imgB3 from "../../assets/image/home-1/png/post-thumbnails-3.png";
import imgB4 from "../../assets/image/home-1/png/post-thumbnails-4.png";

const Blog = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          {/* <!-- Section Title --> */}




              {/* Section Padding */}
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-11">
                  <div
                    className="text-center mb-10 mb-lg-23"

                  >
        
                  </div>
                </div>
              </div>
              {/* End Section Padding */}









          <div className="mb-10 mb-lg-17">
            <div className="row align-items-center justify-content-center justify-content-lg-start">
              <div className="col-xl-5 col-lg-6 col-xs-10">
                {/* <!-- Section Title --> */}
                <div
                  className="text-center text-lg-left"
                  data-aos="fade-right"
                  data-aos-duration="500"
                >
                  <h2 className="font-size-11 font-weight-medium pr-md-6 pr-lg-9 pr-xl-0 mb-0">
                    Latest samples of our work
                  </h2>
                </div>
                {/* <!-- End Section Title --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Section Title --> */}
          <div
            className="row justify-content-center"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <div className="col-lg-6 col-md-10">
              {/* <!-- Single Blog --> */}
              <Link to={"https://www.bubblegumsearch.com/blog/seo-plan/"}>
                <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                  <div className="mr-10">
                    <img className="square-116" src={imgB1} alt="" />
                  </div>
                  <div className="mt-8 mt-xs-0">
                    <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                      A 10-Step SEO Plan to Rank Higher in 2020
                    </h4>
                    <div className="d-flex align-items-center flex-wrap">
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>BubblegumSEO
                      </span>
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>14 min read
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              {/* <!-- End Single Blog --> */}


              {/* <!-- Single Blog --> */}
              <Link to={"https://www.bubblegumsearch.com/blog/mobile-seo-audit/"}>
                <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                  <div className="mr-10">
                    <img className="square-116" src={imgB1} alt="" />
                  </div>
                  <div className="mt-8 mt-xs-0">
                    <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                      Mobile SEO Audit in 10 Easy Steps (FREE Checklist)
                    </h4>
                    <div className="d-flex align-items-center flex-wrap">
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>BubblegumSEO
                      </span>
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>16 min read
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              {/* <!-- End Single Blog --> */}


              {/* <!-- Single Blog --> */}
              <Link to={"https://www.bubblegumsearch.com/blog/shopify-seo/"}>
                <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                  <div className="mr-10">
                    <img className="square-116" src={imgB1} alt="" />
                  </div>
                  <div className="mt-8 mt-xs-0">
                    <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                      Shopify SEO: The Ultimate Beginner’s Guide to Higher Rankings
                    </h4>
                    <div className="d-flex align-items-center flex-wrap">
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>BubblegumSEO
                      </span>
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>15 min read
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              {/* <!-- End Single Blog --> */}

              {/* <!-- Single Blog --> */}
              <Link to={"https://www.adscale.com/2020/02/06/5-highly-effective-ways-to-increase-the-average-order-value-of-your-ecommerce-store/"}>
                <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                  <div className="mr-10">
                    <img className="square-116" src={imgB2} alt="" />
                  </div>
                  <div className="mt-8 mt-xs-0">
                    <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                      5 Effective Ways to Increase the Average Order Value of Your Ecommerce Store
                    </h4>
                    <div className="d-flex align-items-center flex-wrap">
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>Adscale
                      </span>
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>4 min read
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              {/* <!-- End Single Blog --> */}
            </div>
            <div className="col-lg-6 col-md-10 mt-lg-n23">
              {/* <!-- Single Blog --> */}
              <Link to={"https://www.adscale.com/2020/02/17/ecommerce-trends-in-2020-what-do-we-predict/"}>
                <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                  <div className="mr-10">
                    <img className="square-116" src={imgB3} alt="" />
                  </div>
                  <div className="mt-8 mt-xs-0">
                    <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                      Ecommerce Trends in 2020: What Do We Predict?
                    </h4>
                    <div className="d-flex align-items-center flex-wrap">
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>Adscale
                      </span>
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>6 min read
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              {/* <!-- End Single Blog --> */}

              {/* <!-- Single Blog --> */}
              <Link to={"https://www.abtasty.com/blog/website-personalization-2020/"}>
                <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                  <div className="mr-10">
                    <img className="square-116" src={imgB4} alt="" />
                  </div>
                  <div className="mt-8 mt-xs-0">
                    <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                      A Guide to Website Personalization in 2020
                    </h4>
                    <div className="d-flex align-items-center flex-wrap">
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>ABTasty
                      </span>
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>10 min read
                      </span>
                    </div>
                  </div>
                </div>
              </Link>




              <Link to={"https://www.abtasty.com/blog/instagram-followers/"}>
                <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                  <div className="mr-10">
                    <img className="square-116" src={imgB4} alt="" />
                  </div>
                  <div className="mt-8 mt-xs-0">
                    <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                      How to Get More Instagram Followers for Your Retail Brand
                    </h4>
                    <div className="d-flex align-items-center flex-wrap">
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>ABTasty
                      </span>
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>8 min read
                      </span>
                    </div>
                  </div>
                </div>
              </Link>


              {/* <!-- Single Blog --> */}
              <Link to={"https://www.websiteplanet.com/social-media-tools/sendible/"}>
                <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                  <div className="mr-10">
                    <img className="square-116" src={imgB3} alt="" />
                  </div>
                  <div className="mt-8 mt-xs-0">
                    <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                      Sendible: Sendible’s Feature-Rich, but Is the Price Right?
                    </h4>
                    <div className="d-flex align-items-center flex-wrap">
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>WebsitePlanet
                      </span>
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>12 min read
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              {/* <!-- End Single Blog --> */}

              {/* <!-- End Single Blog --> */}
              {/* <!-- Btn Section --> */}
              <div className="btn-section text-center mt-10 mt-lg-13">
                <a className="btn-link gr-hover-text-primary" href="/contact">
                  Get started
                </a>
              </div>
              {/* <!-- End Btn Section --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
