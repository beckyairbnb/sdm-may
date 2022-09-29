import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import imgA1 from "../../assets/image/home-2/png/arrow-1.png";
import imgA2 from "../../assets/image/home-2/png/arrow-2.png";
import imgS from "../../assets/image/home-2/png/search.png";
import imgE from "../../assets/image/home-2/png/event-confirm.png";
import imgR from "../../assets/image/home-2/png/right-layer.png";

const Progress = ({ className, ...rest }) => {
  const { imgA1, imgA2, imgS, imgE, imgR } = useStaticQuery(
    graphql`
      query {
        imgA1: file(relativePath: {eq: "home-2/png/arrow-1.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 224, height: 89)
          }
        }
        imgA2: file(relativePath: {eq: "home-2/png/arrow-2.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 228)
          }
        }
        imgS: file(relativePath: {eq: "home-2/png/search.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 36)
          }
        }
        imgE: file(relativePath: {eq: "home-2/png/event-confirm.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 33)
          }
        }
        imgR: file(relativePath: {eq: "home-2/png/right-layer.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 46)
          }
        }
      }
    `
  )
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-xs-10">
              <div className="text-center pt-13 pt-lg-23 pb-13 pb-lg-12 pr-lg-10 pr-xl-0">
                <h2 className="font-size-11 mb-0">
                Working with Strategically is easy
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
                    <GatsbyImage
                            image={getImage(imgA1)} 
                            width={224} height={89}
                        />
                  </div>
                  <div
                    className="arrow-shape-2 d-none d-lg-block absolute-top-right"

                  >
                    <GatsbyImage
                            image={getImage(imgA2)} 
                            width={228} height={72}
                        />
                  </div>
                </div>
                {/* <!-- Single Progress --> */}
                <GridItem
                  className="single-widgets pr-md-18 pr-lg-0 pl-lg-10 pl-xl-22 mb-10 mb-lg-0 text-center text-md-left"

                >
                  <div className="square-97 bg-dodger-blue-1 shadow-bg-dodger-blue-1 rounded-10 mb-10 mx-auto mx-md-0">
                  {/* <GatsbyImage
                            image={getImage(imgS)} 
                            width={36} height={36}
                        /> */}
                        <div className="text-white font-size-9">1</div>
                  </div>
                  <div className="">
                    <h3 className="font-size-8 mb-6 capitalize">Order</h3>
                    <p className="font-size-5 line-height-28 mb-0">
                    Submit your article brief via email or our order dashboard.
                    </p>
                  </div>
                </GridItem>
                {/* <!-- End Single Progress --> */}
                {/* <!-- Single Progress --> */}
                <GridItem
                  className="single-widgets pr-md-18 pr-lg-0 pl-lg-10 pl-xl-22 mb-10 mb-lg-0 text-center text-md-left"

                >
                  <div className="square-97 bg-dodger-blue-2 shadow-bg-dodger-blue-2 rounded-10 mb-10  mx-auto mx-md-0">
                  {/* <GatsbyImage
                            image={getImage(imgE)} 
                            width={33} height={32}
                        /> */}
                        <div className="text-white font-size-9">2</div>
                  </div>
                  <div className="">
                    <h3 className="font-size-8 mb-6 capitalize">Relax</h3>
                    <p className="font-size-5 line-height-28 mb-0">
                    Sit back and relax while our expert writers work their magic.
                    </p>
                  </div>
                </GridItem>
                {/* <!-- End Single Progress --> */}
                {/* <!-- Single Progress --> */}
                <GridItem
                  className="single-widgets pr-md-18 pr-lg-0 pl-lg-10 pl-xl-22 mb-10 mb-lg-0 text-center text-md-left"

                >
                  <div className="square-97 bg-dodger-blue-2 rounded-10 mb-10 shadow-bg-dodger-blue-2 mx-auto mx-md-0">
                      {/* <GatsbyImage
                            image={getImage(imgR)} 
                            width={46} height={36}
                        /> */}
                        <div className="text-white font-size-9">3</div>
                  </div>
                  <div className="">
                    <h3 className="font-size-8 mb-6 capitalize">Approve</h3>
                    <p className="font-size-5 line-height-28 mb-0">
                    We send you the article to review. Approve it straight away or request unlimited free revisions.
                    </p>
                  </div>
                </GridItem>
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

const GridItem = styled.div`
& > .square-97{
  background-color:#56c0de !important;
}
`;
export default Progress;
