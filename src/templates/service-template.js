import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import useIntersectionObserver from '@react-hook/intersection-observer'

import Image from '../components/ContentSlices/Image'
import CTA from '../components/ContentSlices/CTA'
import Heading from '../components/ContentSlices/Heading'
import Text from '../components/ContentSlices/Text'
import BoxedContent from '../components/ContentSlices/BoxedContent'


import PostShare from '../components/PostShare'
import MoreServices from '../components/MoreServices'


const ServiceTemplate = (props)=>{
    const { data } = props
    const { PageData, site, OtherServices } = data
    console.log('Props' , props)
    const siteURL = site.siteMetadata.siteUrl 
    const stitle = `Read ${PageData.data.title.text} `;
    const surl = `${siteURL}${props.location.pathname || "/"}`;
    const stwitterHandle = "_MsLinda";
  return(
    <div className="wrapper">
      <div className="container-fluid p-0 overflow-hidden">
        <div className="blog-banner d-flex flex-column align-items-center text-center">
            <div className="w-100 ban-img">
                <Img
                    fluid={PageData.data.featuredimage.localFile.childImageSharp.fluid}
                />
            </div>
            <div className="position-absolute pl-2 pr-2 text-container">
                <div className="d-flex justify-content-center mt-4 mb-5">
                <Img
                    fluid={PageData.data.featuredimage.localFile.childImageSharp.fluid}
                />
                    </div>
                    {PageData.data.title.html && <div dangerouslySetInnerHTML={{ __html: PageData.data.title.html }} className="text-white text-center w-100 mt-20" ></div>}
                    {PageData.data.sub_title.html && <div dangerouslySetInnerHTML={{ __html: PageData.data.sub_title.html }} className="text-center w-100 mb-10 mt-10 text-white" ></div>}
                    
                        <button className="btn btn btn-blue-3 header-btn-2 pt-10 pb-10 pl-12 pr-12 font-size-3 rounded-5 text-uppercase w-auto border-0">
                            Get Your Quote in Seconds
                        </button>
            </div>
        </div>
    </div>
       <div className="container pb-4 pt-5 mt-5">      
                 
              <div className="row blog-content d-flex flex-wrap mt-5 pt-3">  
              <div className="col-lg-2 col-xs-12">&nbsp;</div>
              
                <div className="col-lg-8 col-xs-12 text-left blog-content-inner">
                {PageData.data.description.html && <div dangerouslySetInnerHTML={{ __html: PageData.data.description.html }} className="w-100 my-2" ></div>}
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
                <div className="col-lg-2 col-xs-12 blog-social "><PostShare socialConfig={{
                            twitter : stwitterHandle,
                            config: {
                              url: surl,
                              title: stitle,
                            },
                          }}/></div>
              </div>
      </div>
    <div className="d-flex justify-content-center align-items-center text-center bg-light pt-10 pb-8 border-top border-bottom">
      <BoxedContent data={PageData.data.BoxedContent}/>
    </div>
    <div className="d-flex pt-20 pb-8">
        <MoreServices data={OtherServices}/>
    </div>
  </div>
)}
export const query = graphql`
query getServiceData($id: String!) {
    site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    OtherServices : allPrismicService(limit: 6, filter: {id: {ne: $id}}) {
        edges {
          node {
            id
            uid
            data {
              title {
                text
              }
              featuredimage {
                localFile {
                  childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              description {
                text
              }
            }
          }
        }
      }
  PageData : prismicService(id: {eq: $id}) {
      id
      data {
        featuredimage {
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
        sub_title {
          html
          text
        }
        description {
          html
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