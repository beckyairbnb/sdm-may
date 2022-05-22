import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import imgM from "../../assets/image/home-2/png/meeting-2.png";
import imgDP from "../../assets/image/home-2/png/dot-pattern-black.png";
import imgLC from "../../assets/image/home-2/png/left-circlehalf-shape.png";

const Content3 = ({ className, ...rest }) => {
  const { imgM, imgDP, imgLC } = useStaticQuery(
    graphql`
      query {
        imgM: file(relativePath: {eq: "home-2/png/meeting-2.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 475)
          }
        }
        imgDP: file(relativePath: {eq: "home-2/png/dot-pattern-black.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 176)
          }
        }
        imgLC: file(relativePath: {eq: "home-2/png/left-circlehalf-shape.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 395)
          }
        }
      }
    `
  )
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-9 col-xs-11">
              <div
                className="section-title"

              >
                <h2 className="font-size-11 mb-10 mb-lg-20">
                  Stop worrying about content quality.
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
                        <GatsbyImage
                            image={getImage(imgM)} 
                            width={475} height={593}
                            className="w-100"
                        />
                  {/* <img className="w-100" src={imgM} alt="" /> */}
                  <div className="img-2">
                  <GatsbyImage
                            image={getImage(imgDP)} 
                            width={176} height={191}
                            className="w-100" 
                        />
                    {/* <img className="w-100" src={imgDP} alt="" /> */}
                  </div>
                  <div className="img-3 rounded-10">
                  <GatsbyImage
                            image={getImage(imgLC)} 
                            width={395} height={209}
                            className="w-100 opacity-7" 
                        />
                    {/* <img className="w-100 opacity-7" src={imgLC} alt="" /> */}
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

              <p className="heading-default-color font-size-6 mb-11">  Great content is the heart and soul of any website but planning for and creating great content isn’t easy. That’s where we come in.</p>
                <p className="heading-default-color font-size-6 mb-11">
                  We create content that’s engineered to resonate with your target audience. Our content team manages the entire production process, providing ongoing strategic guidance while sourcing top talent and overseeing delivery.{" "}
                </p>
                <div className="btn-group mb-12">
                  <Link className="btn btn-dodger-blue-2 rounded-5" to={"/pricing/"}>
                    View Pricing
                  </Link>
                </div>
                <div className="">
                  <p className="font-size-3 line-height-20 mb-7 mb-5 mr-xs-17 mr-md-11 mr-lg-17">
                    “The right content can tap into your target audience’s interests, desires and emotions, attract and engage new visitors and high-quality leads create brand advocates who talk about and share your content and brand assets on social media.”
                  </p>
                  <h6 className="font-size-3 font-weight-medium">
                    Rebecca Hey, Founder of Strategically
                  </h6>
                </div>
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
