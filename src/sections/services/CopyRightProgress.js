import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CopyRightProgress = ({ className, data }) => {
  const { items, primary } = data
  console.log('primaryprimary',items)
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
      <div className={className}>
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-10 col-md-10 col-xs-10">
              <div className="text-center pt-13 pt-lg-23 pb-13 pb-lg-12 pr-lg-10 pr-xl-0">
                <h2 className="font-size-11 mb-0">
                {primary?.heading?.text}
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-xs-8">
              <div className="timeline-area d-sm-flex just justify-content-lg-between flex-wrap flex-lg-nowrap position-relative">
                <div className="image-group-3">
                  <div className="arrow-shape-1 d-none d-lg-block absolute-top-left">
                    <GatsbyImage
                            image={getImage(imgA1)} 
                            width={224} height={89}
                        />
                  </div>
                  <div className="arrow-shape-2 d-none d-lg-block absolute-top-right">
                    <GatsbyImage
                            image={getImage(imgA2)} 
                            width={228} height={72}
                        />
                  </div>
                </div>
                {items && items.map((item, index)=>{
                  return(
                    <GridItem
                      key={index}
                      className="single-widgets pr-md-18 pr-lg-0 pl-lg-10 pl-xl-22 mb-10 mb-lg-0 text-center text-md-left"
                    >
                      <div className="square-97 bg-dodger-blue-1 shadow-bg-dodger-blue-1 rounded-10 mb-10 mx-auto mx-md-0">
                      <GatsbyImage
                                image={getImage(item.icon)} 
                                width={36} height={36}
                            />
                      </div>
                      <div className="">
                        <h3 className="font-size-8 mb-6">{item?.heading?.text}</h3>
                        <p className="font-size-5 line-height-28 mb-0">{item?.description1}</p>
                      </div>
                    </GridItem>
                  )
                })}
                
                {/* <GridItem
                  className="single-widgets pr-md-18 pr-lg-0 pl-lg-10 pl-xl-22 mb-10 mb-lg-0 text-center text-md-left"

                >
                  <div className="square-97 bg-dodger-blue-2 shadow-bg-dodger-blue-2 rounded-10 mb-10  mx-auto mx-md-0">
                  <GatsbyImage
                            image={getImage(imgE)} 
                            width={33} height={32}
                        />
                  </div>
                  <div className="">
                    <h3 className="font-size-8 mb-6">Create</h3>
                    <p className="font-size-5 line-height-28 mb-0">
                    Your articles are prepared by an expert writer, proofread and passed through a plagiarism checker.
                    </p>
                  </div>
                </GridItem> */}
                {/* <GridItem
                  className="single-widgets pr-md-18 pr-lg-0 pl-lg-10 pl-xl-22 mb-10 mb-lg-0 text-center text-md-left"

                >
                  <div className="square-97 bg-dodger-blue-2 rounded-10 mb-10 shadow-bg-dodger-blue-2 mx-auto mx-md-0">
                      <GatsbyImage
                            image={getImage(imgR)} 
                            width={46} height={36}
                        />
                  </div>
                  <div className="">
                    <h3 className="font-size-8 mb-6">Optimise</h3>
                    <p className="font-size-5 line-height-28 mb-0">
                    We integrate your keywords into your blog posts to ensure they are optimised for the search engines.
                    </p>
                  </div>
                </GridItem> */}
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
export default CopyRightProgress;
