import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components';
import { Helmet } from "react-helmet";

import PageWrapper from "../components/PageWrapper";
import CareerImageContentButton from '../components/ContentSlices/CareerImageContentButton'
import CareerFeatures from '../components/ContentSlices/CareerFeatures'
import CareerJobs from '../components/ContentSlices/CareerJobs'
// import CTA from '../components/ContentSlices/CTA'
// import Heading from '../components/ContentSlices/Heading'
// import Text from '../components/ContentSlices/Text'
// import BoxedContent from '../components/ContentSlices/BoxedContent'


import PostShare from '../components/PostShare'
import MoreServices from '../components/MoreServices'
import imgFavicon from "../assets/favicon.png";

const CareerTemplate = (props)=>{
  const { data } = props
  const { PageData, site, Jobs } = data
  const siteURL = site.siteMetadata.siteUrl 
  //const stitle = `Read ${PageData.data.title.text} `;
  //const surl = `${siteURL}${props.location.pathname || "/"}`;
  //const stwitterHandle = "_MsLinda";
  const seoTitle = PageData.data.seotitle.text || 'Strategically'
  const seoDescription = PageData.data.metadescription.text || 'Strategically'
  
  
  return(
    <>
    <Helmet>
          <title>{seoTitle}</title>
          <meta name="description" content={seoDescription} />
          <link rel="icon" type="image/png" href={imgFavicon} />
    </Helmet>
    <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/pricing/"}>
              View Pricing
            </a>
            </>
          ),
          footerStyle: "style2",
        }}
      >
    <div className="wrapper mt-4 pt-4">
      <div className="container main-container mb-8 pb-10">
        <div className="row d-flex justify-content-center">
            <div className="col-sm-7 d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-delay={500}
            >
              <h1 className="text-center">{PageData.data.title.text}</h1>
              <p className="text-center text-xl-center">{PageData.data.sub_text.text}</p>
            </div>
        </div>      
      </div>
      <div className="container-fluid mt-2 mb-10 pb-10">
        <div className="row d-flex justify-content-center">
            <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center rounded-8"
            data-aos="fade-up"
            data-aos-duration={800}
            data-aos-delay={500}>
            <Img
                    fluid={PageData.data.featured_image.localFile.childImageSharp.fluid}
                    className="w-100"
                />
            </div>
        </div>      
      </div>
      
      <div className="container mt-2 pb-4">
      <div className="row">
      <div className="col-sm-12">
      {PageData.data.body.map((item, index)=>{
                      
                      const { slice_type, primary, items } = item
                     {
                       if(slice_type==='section_with_image__heading_and_button')
                       {
                         return <CareerImageContentButton data={primary}/>
                       }
                       else if(slice_type==='work_with_us')
                       {
                         return <CareerFeatures data={primary} items={items}/>
                       }
                     }
                     
                  })}
      </div>
      
      </div>
      </div>
      <div className="container-fluid p-0" id='joblisting'>
      <div className="row">
      <div className="col-sm-12">
          <CareerJobs siteURL={siteURL} title={PageData.data.open_roles_heading} subtitle={PageData.data.open_roles_sub_text.text} items={Jobs}/>
      </div>      
      </div>
    </div>
    </div>
    
  </PageWrapper>
  </>
)}
export const Blogbanner = styled.div`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size:100% auto;
  margin:0px;
  min-height: 500px;
  @media only screen and (max-width: 767px) {
    background-size:auto 100%;
    background-position:center center;
    min-height: 440px;
  }
  @media only screen and (max-width: 600px) {
    min-height: 360px;
  }
  @media only screen and (max-width: 480px) {
    min-height: 320px;
  }
  @media (max-width: 360px) {
    min-height: 260px;
  }
`;


export const query = graphql`
query getCareerData($id: String!) {
    site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
  Jobs : allPrismicWritingjobs {
    edges {
      node {
        uid
        data {
          title {
            text
            html
          }
          job_location
          job_type
          description {
            text
          }
          featuredimage {
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
  PageData : prismicCareer(id: {eq: $id}) {
      id
      data {
        featured_image {
          localFile {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        title {
          html
          text
        }
        sub_text {
          html
          text
        }
        seotitle {
          text
        }
        metadescription {
          text
        }
        open_roles_heading
        open_roles_sub_text {
          text
        }
        body {
          ... on PrismicCareerDataBodyWorkWithUs {
            id
            slice_type
            primary {
              work_with_us_heading {
                html
                text
              }
            }
            items {
              feature_heading {
                text
              }
              features_description {
                text
                html
              }
              features_image {
                localFile {
                  childImageSharp {
                    fixed(quality: 100) {
                      ...GatsbyImageSharpFixed_withWebp
                    }
                  }
                }
              }
            }
          }
          ... on PrismicCareerDataBodySectionWithImageHeadingAndButton {
            id
            slice_type
            primary {
              section_heading {
                text
                html
              }
              section_content {
                text
                html
              }
              button_text
              button_link
              section_image {
                localFile {
                  childImageSharp{
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
        
        
      }
    }
}
`
export default CareerTemplate