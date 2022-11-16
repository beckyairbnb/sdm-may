import React from "react";
import CountUp from "react-countup";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LazyLoad from "react-lazyload";


const Counter = ({ className, ...rest }) => {
  const { imgL1, imgL2, imgL3, imgHeart, imgStars } = useStaticQuery(
    graphql`
      query {
        imgHeart: file(relativePath: {eq: "home-2/png/heart-icon-group.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 100)
          }
        }
        imgStars: file(relativePath: {eq: "home-2/png/star-group.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 108)
          }
        }
        imgL1: file(relativePath: {eq: "home-2/png/company-logo/company-logo-1.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 150)
          }
        }
        imgL2: file(relativePath: {eq: "home-2/png/company-logo/company-logo-2.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 150)
          }
        }
        imgL3: file(relativePath: {eq: "home-2/png/company-logo/company-logo-3.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 150)
          }
        }
      }
    `
  )
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row justify-content-center justify-content-lg-start">
            {/* Left */}
            <div className="col-xl-5 col-lg-6 col-md-9">
              <div className="row">
                {/* Single Counter */}
                <div className="col-xs-6">
                  <div
                    className="mb-11 mb-lg-0"

                  >
                    <h2 className="font-size-12 mb-6">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp duration={2} end={8} />M+
                        </span>
                      </LazyLoad>
                    </h2>
                    <div className="mt-5">
                    <GatsbyImage
                            image={getImage(imgHeart)} 
                            width={100} height={14}
                        />
                      <h5 className="font-size-5 font-weight-normal mb-1">
                        Words Written
                      </h5>
                      <p className="font-size-5 text-dodger-blue-2 mb-0">
                        On websites
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Single Counter */}
                {/* Single Counter */}
                <div className="col-xs-6">
                  <div
                    className="mb-11 mb-lg-0"

                  >
                    <h2 className="font-size-12 mb-6">
                      <LazyLoad>
                        <CountUp duration={4} end={5} className="counter" />.
                        <CountUp duration={0} end={0} className="counter" />
                      </LazyLoad>
                    </h2>
                    <div className="mt-5">
                    <GatsbyImage
                            image={getImage(imgStars)} 
                            width={108} height={16}
                        />
                      <h5 className="font-size-5 font-weight-normal mb-1">
                        Google Reviews
                      </h5>
                      <p className="font-size-5 text-dodger-blue-2 mb-0">
                        Happy customers
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Single Counter */}
              </div>
            </div>
            {/* Left End */}
            {/* Right Start */}
            <div className="col-lg-6 offset-xl-1">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-xs-12">
                  <div
                    className="section-title"

                  >
                    <h2 className="font-size-9 pr-xl-22 mb-7 mb-lg-11 pr-lg-0">
                      Trusted by 250+ happy website owners and businesses
                      since 2017.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h6 className="font-size-6 font-weight-normal text-stone mb-5 mb-lg-9">
                    Trusted by companies like yours
                  </h6>
                  <div className="row justify-content-xl-between">
                    {/* Single Brand */}
                    <div
                      className="single-brand-logo px-5 my-6"

                    >
                      <GatsbyImage
                            image={getImage(imgL1)} 
                            width={150} height={29}
                        />
                    </div>
                    {/* Single Brand */}
                    <div
                      className="single-brand-logo px-5 my-6"

                    >
                      <GatsbyImage
                            image={getImage(imgL2)} 
                            width={150} height={29}
                        />
                    </div>
                    {/* Single Brand */}
                    <div
                      className="single-brand-logo px-5 my-6"

                    >
                      <GatsbyImage
                            image={getImage(imgL3)} 
                            width={150} height={29}
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
