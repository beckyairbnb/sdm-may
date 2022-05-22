import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const ClientsLogos = (props) => {
  const { flogo1, flogo2, flogo3, flogo4, flogo5 } = useStaticQuery(
    graphql`
      query {
        flogo1: file(relativePath: {eq: "flogos/google-reviews.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        flogo2: file(relativePath: {eq: "flogos/contentmarketing-min.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        flogo3: file(relativePath: {eq: "flogos/contentmarketing.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        flogo4: file(relativePath: {eq: "flogos/top-marketing-comp.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        flogo5: file(relativePath: {eq: "flogos/writing.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  )
    return (
        <div className="container">
            <LogosRow className="row">
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 my-3" onClick={() => window.open("https://g.page/strategically?share", "_blank")}>
                    <GatsbyImage
                      image={getImage(flogo1)} 
                      width={272} height={144}
                      className="w-100 opacity-9"
                    />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 my-3" onClick={() => window.open("https://superbcompanies.com/categories/content-marketing-companies/", "_blank")}>
                   <GatsbyImage
                      image={getImage(flogo2)} 
                      width={320} height={320}
                      className="w-100 opacity-9"
                    />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 my-3">
                <GatsbyImage
                      image={getImage(flogo3)} 
                      width={370} height={400}
                      className="w-100 opacity-9"
                    />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 my-3" onClick={() => window.open("https://www.designrush.com/agency/content-marketing", "_blank")}>
                <GatsbyImage
                      image={getImage(flogo4)} 
                      width={223} height={197}
                      className="w-100 opacity-9"
                    />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 my-3" onClick={() => window.open("https://www.goodfirms.co/writing", "_blank")}>
                <GatsbyImage
                      image={getImage(flogo5)} 
                      width={374} height={322}
                      className="w-100 opacity-9"
                    />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 my-3">
                    <img className="w-100 opacity-9" src="https://core.sortlist.com//_/apps/core/images/badges-en/badge-flag-blue-light-xl.svg" />
                </div>
            </LogosRow>
        </div>
    )

}

export default ClientsLogos

const LogosRow = styled.div`
display: flex;
align-items: stretch;
& > div{
  display: flex;
  flex-direction: row;
  align-items: center;
}
& > div > a{
  width:100%;
  cursor:pointer;
  
}
& > div > a > img{
  width:100%;
  cursor:pointer;
}
& > div > a > svg{
  width:100%;
  cursor:pointer;
}
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-between;
align-items: stretch;
@media (max-width: 480px) {
  .col-xs-4 {
    flex: 0 0 50% !important;
    max-width: 50% !important;
  }
}
`;