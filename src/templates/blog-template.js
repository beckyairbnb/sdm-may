import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet";
import Img from "gatsby-image"
import useIntersectionObserver from '@react-hook/intersection-observer'
import PageWrapper from "../components/PageWrapper";
import Image from '../components/ContentSlices/Image'
import CTA from '../components/ContentSlices/CTA'
import Heading from '../components/ContentSlices/Heading'
import Text from '../components/ContentSlices/Text'
import BoxedContent from '../components/ContentSlices/BoxedContent'
import PostShare from '../components/PostShare'

import postimg1 from "../assets/images/post-img1.jpg";
import stratagicsicon from "../assets/images/stratagic-s.png";
import imgFavicon from "../assets/favicon.png";
const BlogTemplate = (props)=>{
  const { data } = props
  const { PostData } = data
  const seoTitle = PostData.data.seotitle || 'Strategically'
  const seoDescription = PostData.data.metadescription || 'Strategically'

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
            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/get-a-quote/1/"}>
              View Pricing
            </a>
            </>
          ),
          footerStyle: "style2",
        }}
      >
    <div className="blog-wrapper">
      <div className="container-fluid p-0 overflow-hidden">
        <div className="blog-banner d-flex flex-column align-items-center text-center">
            <div className="w-100 ban-img">
            <Img
                    fluid={PostData.data.featuredimage.localFile.childImageSharp.fluid}
                />
            </div>
            <div className="position-absolute pl-2 pr-2 text-container">
                <div className="d-flex justify-content-center mt-4 mb-5">
                <Img
                    fluid={PostData.data.featuredimage.localFile.childImageSharp.fluid}
                />
                    </div>
                    {PostData.data.title.html && <div dangerouslySetInnerHTML={{ __html: PostData.data.title.html }} className="text-white text-center w-100 mt-20" ></div>}
                    {PostData.data.sub_title.html && <div dangerouslySetInnerHTML={{ __html: PostData.data.sub_title.html }} className="text-center w-100 mb-10 mt-10 text-white" ></div>}
                    
                        <Link to="/pricing/" className="btn btn btn-blue-3 header-btn-2 pt-10 pb-10 pl-12 pr-12 font-size-3 rounded-5 text-uppercase w-auto border-0">
                          Order content online
                        </Link>
            </div>
        </div>
    </div>
    <div className="container pb-4 pt-5 mt-5">   
              <div className="row blog-content d-flex flex-wrap mt-5 pt-3">  
              <div className="col-lg-2 col-xs-12">&nbsp;</div>
                <div className="col-lg-8 col-xs-12 text-left blog-content-inner">
                {PostData.data.description.html && <div dangerouslySetInnerHTML={{ __html: PostData.data.description.html }} className="w-100 my-2" ></div>}
                    {PostData.data.body.map((item, index)=>{
                      
                        const { slice_type, primary } = item
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
                {/* <div className="col-lg-2 col-xs-12 blog-social "><PostShare/></div> */}
              </div>
      </div>
      
    </div>
    </PageWrapper>
    </>
)}
export const query = graphql`
query getPosteData($uid: String) {
  PostData : prismicBlog(uid: {eq: $uid}) {
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
        seotitle 
        metadescription
        BoxedContent : body{
          ... on PrismicBlogDataBodyBoxedContent {
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
          ... on PrismicBlogDataBodyTextBlock {
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
          ... on PrismicBlogDataBodyCtaBlock {
            id
            slice_type
            primary {
              button_text
              cta_content {
                html
              }
            }
          }
          ... on PrismicBlogDataBodyHeadingBlock {
            id
            slice_type
            primary {
              heading_text {
                html
                text
              }
            }
          }
          ... on PrismicBlogDataBodyImageDescription {
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
export default BlogTemplate