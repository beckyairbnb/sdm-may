import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components';
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image"
import ProgressNew from "../sections/home2/ProgressNew";
import PageWrapper from "../components/PageWrapper";
import Image from '../components/ContentSlices/Image'
import CTA from '../components/ContentSlices/CTA'
import Heading from '../components/ContentSlices/Heading'
import Text from '../components/ContentSlices/Text'
import HappyClients from "../components/happyClients";
import BoxedContent from '../components/ContentSlices/BoxedContent'

import ModalPopup from '../components/ModalPopup'


// import PostShare from '../components/PostShare'
// import MoreServices from '../components/MoreServices'
import imgFavicon from "../assets/favicon.png";
import clientsImg from "../assets/images/clients-img.png";
import phoneSec from "../assets/images/phone-sec.webp";
import policyImg1 from "../assets/images/policy_1.png";
import policyImg2 from "../assets/images/policy_2.png";
import policyImg3 from "../assets/images/policy_3.png";

import logo1 from "../assets/images/clients/logo-1.jpg";
import logo2 from "../assets/images/clients/logo-2.jpg";
import logo3 from "../assets/images/clients/logo-3.jpg";
import logo4 from "../assets/images/clients/logo-4.jpg";
import logo5 from "../assets/images/clients/logo-5.jpg";
import logo6 from "../assets/images/clients/logo-6.jpg";
const ServiceTemplate = (props)=>{
    const [modalShow, setModalShow] = useState(false);
    const { data } = props
    const { PageData, site } = data
    console.log('Props' , props)
    const siteURL = site.siteMetadata.siteUrl 
    const stitle = `Read ${PageData.data.title.text} `;
    const surl = `${siteURL}${props.location.pathname || "/"}`;
    const stwitterHandle = "_MsLinda";
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
            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/pricing"}>
              View Pricing
            </a>
            </>
          ),
          footerStyle: "style4",
        }}
      >
    
    <div className="main-banner">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                  <div className="text-center pt-5 pb-lg-4 mb-lg-4">
                     {PageData.data.title.html && <div dangerouslySetInnerHTML={{ __html: PageData.data.title.html }} className="mb-4" ></div>}
                     {PageData.data.sub_title.html && <div dangerouslySetInnerHTML={{ __html: PageData.data.sub_title.html }}></div>}
                     <Link
                     to="/pricing"
                    className="btn btn btn-dodger-blue-2 header-btn-2 mt-5 mb-3 pt-md-10 pb-md-10 pl-md-12 pr-md-12 font-size-3 rounded-5 text-uppercase w-auto border-0">View Pricing</Link>
                     <p>{PageData.data.cta_button_below_text}</p>
                     
                  </div>
               </div>
            </div>
            <div className="text-center d-sm-block d-lg-none d-md-none"> <img src="images/mob-banner.jpg" alt="" className="w-100"/></div>
         </div>
      </div>
      
      <div className="py-5 my-4">
         <div className="container d-flex flex-row justify-content-between my-1"> 
            <div className="row d-flex flex-row justify-content-between my-1"> 
              <img src={logo1} alt="A dinosaur" className="col-md-2 col-sm-4 col-xm-6 my-2" />
              <img src={logo2} alt="A dinosaur" className="col-md-2 col-sm-4 col-xm-6 my-2" />
              <img src={logo3} alt="A dinosaur" className="col-md-2 col-sm-4 col-xm-6 my-2" />
              <img src={logo5} alt="A dinosaur" className="col-md-2 col-sm-4 col-xm-6 my-2" />
              <img src={logo6} alt="A dinosaur" className="col-md-2 col-sm-4 col-xm-6 my-2" />
            </div>
         </div>
      </div>
      <HappyClients title={PageData.data.testimonials_block_heading} subtitle={PageData.data.testimonials_block_sub_text} ctatextbelow={PageData.data.testimonials_block_stars_below_text} />
      <div className="py-12 my-5">
         <div className="container py-lg-10">
            <div className="row justify-content-center text-center py-lg-5">
               <div className="col-xl-8 col-lg-10 col-xs-12">
                 {PageData.data.button_block_heading.html && <div dangerouslySetInnerHTML={{ __html: PageData.data.button_block_heading.html }} className="w-100" ></div>}
                 <p>{PageData.data.button_block_subtext}</p>
                 <Link
                     to="/pricing"
                    className="btn btn btn-dodger-blue-2 header-btn-2 mt-5 mb-3 pt-md-10 pb-md-10 pl-md-12 pr-md-12 font-size-3 rounded-5 text-uppercase w-auto border-0">View Pricing</Link>
               </div>
            </div>
         </div>
      </div>

      <div className="pt-12 bg-light">
         <div className="container pt-10">
            <div className="row justify-content-center text-center">
               <div className="col-xl-8 col-lg-10 col-xs-12">
               {PageData.data.image_block_heading.html && <div dangerouslySetInnerHTML={{ __html: PageData.data.image_block_heading.html }} className="w-100" ></div>}
                 <p>{PageData.data.image_block_subtext}</p>
                  <p className="mb-md-5 mb-3"><button className="bg-transparent border-0 text-primary" onClick={() => setModalShow(true)}>See the Strategically App in action</button></p>
               </div>
               <div className="col-xl-10 col-lg-10 col-xs-12">
                 <img src={phoneSec} alt="" className="stars-img"/>
                 </div>
            </div>
         </div>
      </div>
      <ProgressNew className="pb-lg-21 border-top border-default-color-1" />      
      <div className="py-14 bg-light">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-9 col-md-9 col-sm-12">
               {PageData.data.heading_above_description.html && <div dangerouslySetInnerHTML={{ __html: PageData.data.heading_above_description.html }} className="w-100 mb-6" ></div>}
                    {PageData.data.description.html && <div dangerouslySetInnerHTML={{ __html: PageData.data.description.html }} className="w-100" ></div>}
                    {PageData.data.body.map((item, index)=>{
                      
                        const { slice_type, primary } = item
                        //console.log('Single Object',slice_type)
                       {
                         if(slice_type==='cta_block')
                         {
                           return <CTA data={primary}/>
                         }
                         else if(slice_type==='heading_block')
                         {
                           return <Heading data={primary}/>
                         }
                         else if(slice_type==='text_block')
                         {

                           return <Text data={primary}/>
                         }
                         else if(slice_type==='image___description')
                         {
                           return <Image data={primary}/>
                         }
                       }
                       
                    })}
               </div>
            </div>
         </div>
      </div>
      <ModalPopup
          show={modalShow}
          onHide={() => setModalShow(false)}
      />    
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
query getServiceData($id: String!) {
    site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
  PageData : prismicService(id: {eq: $id}) {
      id
      data {
        featuredimage {
          localFile {
            childImageSharp {
              fluid(quality: 100) {
                src
                srcWebp
              }
            }
          }
        }
        cta_button_text
        cta_button_below_text
        title {
          html
          text
        }
        sub_title {
          html
          text
        }
        description {
          html
        }
        seotitle {
          text
        }
        metadescription {
          text
        }
        testimonials_block_heading {
          html
        }
        testimonials_block_sub_text {
          html
        }
        testimonials_block_stars_below_text
        button_block_heading {
          html
          text
        }
        button_block_subtext
        image_block_heading {
          html
        }
        image_block_subtext
        heading_above_description {
          html
          text
        }
        BoxedContent : body{
          ... on PrismicServiceDataBodyBoxedContent {
            id
            primary {
              boxed_content_heading {
                text
                html
              }
              boxed_content_sub_heading {
                text
                html
              }
            }
            slice_type
            items {
              title1 {
                text
              }
              image {
                localFile {
                  childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              button_text
              price_text
            }
          }
        }
        body {
          ... on PrismicServiceDataBodyTextBlock {
            id
            slice_type
            primary {
              content {
                html
              }
              heading_text {
                html
                text
              }
            }
          }
          ... on PrismicServiceDataBodyCtaBlock {
            id
            slice_type
            primary {
              button_text
              cta_content {
                html
              }
            }
          }
          ... on PrismicServiceDataBodyHeadingBlock {
            id
            slice_type
            primary {
              heading_text {
                html
                text
              }
            }
          }
          ... on PrismicServiceDataBodyImageDescription {
            id
            slice_type
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              image_description {
                text
              }
            }
          }
          
        }
        
        
      }
    }
}
`
export default ServiceTemplate