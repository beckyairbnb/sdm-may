import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import PageWrapper from "../components/PageWrapper";
import Image from "../components/ContentSlices/Image";
import CTA from "../components/ContentSlices/CTA";
import Heading from "../components/ContentSlices/Heading";
import Text from "../components/ContentSlices/Text";
import ServicesList from "../components/servicesList";
import HeaderButton from "../components/Header/HeaderButton";

import ModalPopup from "../components/ModalPopup";

import imgFavicon from "../assets/favicon.png";

const CrServiceTemplate = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const { data } = props;
  const { PageData } = data;
  const slug = data.PageData.slug;
  const seoTitle = PageData.data.seotitle.text || "Strategically";
  const seoDescription = PageData.data.metadescription.text || "Strategically";


  return (
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
            <HeaderButton/>
          ),
          footerStyle: "style2",
        }}
      >
        <div className="main-banner">
          {/* <div className="container-fluid nope">
            <Breadcrumbs bcrumb={bcrumb} />
          </div> */}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                <div className="text-center pt-5 pb-lg-4 mb-lg-2">
                  {PageData.data.title.html && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: PageData.data.title.html,
                      }}
                      className="mb-4"
                    ></div>
                  )}
                 
                </div>
              </div>
            </div>
            <div className="text-center d-sm-block d-lg-none d-md-none">
              {" "}
              <img src="images/mob-banner.jpg" alt="" className="w-100" />
            </div>
          </div>
        </div>

        

  
        
        <div className="py-14 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 col-md-9 col-sm-12">    
                
                {PageData.data.body.map((item, index) => {
                  const { slice_type, primary} = item;
                  {
                    if (slice_type === "cta_block") {
                      return <CTA data={primary} />;
                    } else if (slice_type === "heading_block") {
                      return <Heading data={primary} />;
                    } else if (slice_type === "text_block") {
                      return <Text data={primary} />;
                    } else if (slice_type === "image___description") {
                      return <Image data={primary} />;
                    }
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="py-2">
          {PageData.data.body.map((item, index) => {
            const { slice_type, items } = item;
            {
              if (slice_type === "other_services") {
                return (
                  <ServicesList
                    title="Other Writer Services We Provide"
                    items={items}
                  />
                );
              }
            }
          })}
        </div>
        <ModalPopup show={modalShow} onHide={() => setModalShow(false)} />
      </PageWrapper>
    </>
  );
};
export const Blogbanner = styled.div`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 100% auto;
  margin: 0px;
  min-height: 500px;
  @media only screen and (max-width: 767px) {
    background-size: auto 100%;
    background-position: center center;
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
  query getCrServiceData($id: String!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    AllServices: allPrismicService(
      filter: { uid: { ne: "writer-services" } }
      sort: { fields: data___short_title, order: ASC }
    ) {
      edges {
        node {
          uid
          id
          data {
            title {
              text
            }
            short_title
          }
        }
      }
    }
    PageData: prismicCopyrightingService(id: { eq: $id }) {
      id
      slug: uid
      data {
        short_title
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
        title {
          html
          text
        }
        seotitle {
          text
        }
        metadescription {
          text
        }
        BoxedContent: body {
          ... on PrismicCopyrightingServiceDataBodyBoxedContent {
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
          ... on PrismicCopyrightingServiceDataBodyCustomerDrivenServices {
            id
            slice_type
            primary {
              heading {
                text
              }
            }
            items {
              heading {
                text
              }
              description1
              icon {
                gatsbyImageData(layout: FIXED, width: 36)
              }
            }
          }
          ... on PrismicCopyrightingServiceDataBodyOtherServices {
            id
            slice_type
            items {
              service {
                document {
                  ... on PrismicCopyrightingService {
                    uid
                    data {
                      title {
                        text
                      }
                      short_title
                    }
                  }
                }
              }
            }
          }
          ... on PrismicCopyrightingServiceDataBodyTextBlock {
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
          ... on PrismicCopyrightingServiceDataBodyCtaBlock {
            id
            slice_type
            primary {
              button_text
              button_link
            }
          }
          ... on PrismicCopyrightingServiceDataBodyHeadingBlock {
            id
            slice_type
            primary {
              heading_text {
                html
                text
              }
            }
          }
          ... on PrismicCopyrightingServiceDataBodyImageDescription {
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
`;
export default CrServiceTemplate;
