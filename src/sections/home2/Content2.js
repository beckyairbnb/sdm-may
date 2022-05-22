import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Content2 = ({ className, ...rest }) => {
  const { img1, img2, img3, imgC, imgP, imgH } = useStaticQuery(
    graphql`
      query {
        img1: file(relativePath: {eq: "home-2/png/explore.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 36)
          }
        }
        img2: file(relativePath: {eq: "home-2/png/interview.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 36)
          }
        }
        img3: file(relativePath: {eq: "home-2/png/card-favorite.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 36)
          }
        }
        imgC: file(relativePath: {eq: "home-2/png/content-2-img.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 475)
          }
        }
        imgP: file(relativePath: {eq: "home-2/png/patterns-dot-green.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 176)
          }
        }
        imgH: file(relativePath: {eq: "home-2/png/right-circlehalf-shape.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 303)
          }
        }
      }
    `
  )
  const contentWidgetData = [
    {
      icon: img1,
      title: "Find expert writers",
      text: "We hire the top 1% of writers only.",
    },
    {
      icon: img2,
      title: "Scale your content",
      text: "We write, design, and produce content at scale",
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
              <h2 className="font-size-11">Award-winning content team</h2>
              <ul className="list-unstyled mt-9 mt-lg-14">
                {contentWidgetData.map(({ icon, title, text }, index) => {
                  return (
                    <li className="media align-items-center mb-12" key={index}>
                      <div className="border square-83 rounded-10 mr-9">
                        <GatsbyImage
                            image={getImage(icon)} 
                            width={36} height={36}
                        />
                        {/* <img src={icon} alt="" /> */}
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
                <div className="img-1 position-relative text-right rounded-10 border-2">
                      <GatsbyImage
                            image={getImage(imgC)} 
                            width={475} height={593}
                            className="w-100 w-lg-auto"
                        />
                  <div className="img-2">
                        <GatsbyImage
                            image={getImage(imgP)} 
                            width={176} height={191}
                            className="w-100" 
                        />
                  </div>
                  <div className="img-3">
                        <GatsbyImage
                            image={getImage(imgH)} 
                            width={303} height={430}
                            className="w-100 opacity-7" 
                        />
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
