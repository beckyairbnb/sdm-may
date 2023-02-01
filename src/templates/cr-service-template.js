import React, { useState } from "react";
import { graphql, Link } from "gatsby"
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";


import { Helmet } from "react-helmet";

import Image from "../components/ContentSlices/Image";
import CTA from "../components/ContentSlices/CTA";
import Heading from "../components/ContentSlices/Heading";
import Text from "../components/ContentSlices/Text";
import HeaderButton from "../components/Header/HeaderButton";
import Progress from "../sections/services/Progress"
import HappyClientsReviews from "../sections/LP/happyClientsReviews";
import Content2 from "../sections/LP/Content2";
import CopyWritingServices from "../components/CopyWritingServices";

import logo1 from "../assets/images/clients/logo-1.jpg";
import logo2 from "../assets/images/clients/logo-2.jpg";
import logo3 from "../assets/images/clients/logo-3.jpg";
import logo4 from "../assets/images/clients/logo-4.jpg";
import logo5 from "../assets/images/clients/logo-5.jpg";

import logo7 from "../assets/images/clients/logo-7.jpg";
import logo9 from "../assets/images/clients/logo-9.jpg";
import logo10 from "../assets/images/clients/logo-10.jpg";

import Stars from "../assets/images/stars.png";
import Author from "../assets/images/author2.png";

import LpImg from "../assets/images/lp-img.jpg"



import imgFavicon from "../assets/favicon.png";

const CrServiceTemplate = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const { data } = props;
  const { PageData } = data;
  const slug = data.PageData.slug;
  const seoTitle = PageData.data.seotitle.text || "Strategically";
  const seoDescription = PageData.data.metadescription.text || "Strategically";

  const CustomerDrivenServicesData = PageData.data.body.filter((item) => {
    return item.slice_type === "customer_driven_services";
  });
  const ServicesWeProvideData = PageData.data.body.filter((item) => {
    return item.slice_type === "services_we_provide";
  });

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
            <HeaderButton />
          ),
          footerStyle: "style2",
        }}
      >
        <div className="lp_bg pt-10 position-relative">

          <img src={LpImg} alt="" className="position-absolute bottom right lp-img1" />
          <div className="main-banner mt-12">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                  <div className="text-center pt-5 pb-lg-4 mb-lg-2">
                    <h1>Award-winning copywriting services</h1>
                    <div>Our expert copywriters work with ABTasty, Baremetrics, VWO and more</div>
                    <Link
                      to="/get-a-quote/"
                      className="btn btn btn-dodger-blue-2 header-btn-2 mt-5 mb-3 pt-md-10 pb-md-10 pl-md-12 pr-md-12 font-size-3 rounded-5 text-uppercase w-auto border-0">Get a quote</Link>
                    <p>100% original. Managed Service. Get started today.</p>
                  </div>
                </div>
              </div>
              <div className="text-center d-sm-block d-lg-none d-md-none"> <img src="images/mob-banner.jpg" alt="" className="w-100" /></div>
            </div>
          </div>

          <div className="py-2 mb-4">
            <div className="container my-1">
              <div className="client-logo d-flex flex-column">
                <div className="d-flex flex-row justify-content-center align-items-center m-0 p-0">
                  <div className="client-item"><img src={logo1} alt="Client 1" /></div>
                  <div className="client-item"><img src={logo2} alt="Client 2" /></div>
                  <div className="client-item"><img src={logo3} alt="Client 3" /></div>
                  <div className="client-item"><img src={logo4} alt="Client 4" /></div>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center m-0 p-0">
                  <div className="client-item"><img src={logo5} alt="Client 5" /></div>
                  <div className="client-item"><img src={logo7} alt="Client 7" /></div>
                  <div className="client-item"><img src={logo9} alt="Client 9" /></div>
                  <div className="client-item"><img src={logo10} alt="Client 10" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {CustomerDrivenServicesData && CustomerDrivenServicesData.length>0 && (
          <Progress className="pb-lg-21 border-top border-default-color-1" data={CustomerDrivenServicesData[0]} />
        )}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-9 col-md-12 col-sm-12 d-flex justify-content-center mt-5 pb-20">
              <Link
                to="/get-a-quote/"
                className="btn btn btn-dodger-blue-2 header-btn-2 mt-5 mb-3 pt-md-10 pb-md-10 pl-md-12 pr-md-12 font-size-3 rounded-5 text-uppercase w-auto border-0">Get a quote</Link>
            </div>
          </div>
        </div>
        <HappyClientsReviews
          title="Over 8M+ words written!"
          subtitle="Strategically has produced thousands of pieces of content for over 300+ happy clients."
          ctatextbelow="Read what our customers are saying about Strategically"
        />
        <Content2 className="pb-0 pb-15 pt-20" />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-9 col-md-12 col-sm-12 d-flex justify-content-center pb-20">
              <Link
                to="/get-a-quote/"
                className="btn btn btn-dodger-blue-2 header-btn-2 mb-3 pt-md-10 pb-md-10 pl-md-12 pr-md-12 font-size-3 rounded-5 text-uppercase w-auto border-0">Get a quote</Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div class="row justify-content-center my-10">
            <div class="col-lg-10 col-12">
              <div className="testimonial border p-md-10 p-8 rounded">
                <img src={Stars} alt="" width={158} height={25} />
                <p class="font-size-8 line-height-28 text-dark-cloud my-10">"The team was able to wrap their heads around the product we work with, which is a metrics product for SaaS. The content is filled with specific product-related knowledge that really speaks to our audience and helps us talk with our customers! Definitely recommend working with them!"</p>
                <div className="d-flex align-items-center">
                  <img src={Author} alt="" width={55} height={55} className="rounded-circle" />
                  <div className="ml-4">
                    <h4 class="font-size-6 mb-0 text-dark-cloud">Lindsey Rogerson</h4>
                    <p className="mb-0">Baremetrics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {ServicesWeProvideData && ServicesWeProvideData.length>0 && (
          <CopyWritingServices data={ServicesWeProvideData[0]} />
        )}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-9 col-md-12 col-sm-12 d-flex justify-content-center pb-20">
              <Link
                to="/get-a-quote/"
                className="btn btn btn-dodger-blue-2 header-btn-2 mb-3 pt-md-10 pb-md-10 pl-md-12 pr-md-12 font-size-3 rounded-5 text-uppercase w-auto border-0">Get a quote</Link>
            </div>
          </div>
        </div>
        <div className="py-14 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 col-md-9 col-sm-12">

                {PageData.data.body.map((item, index) => {
                  const { slice_type, primary } = item;
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
          ... on PrismicCopyrightingServiceDataBodyServicesWeProvide {
              id
              slice_type
              primary {
                section_heading {
                  text
                }
                description {
                  raw
                  html
                }
              }
              items {
                service_title {
                  text
                }
                service_description {
                  raw
                  html
                }
              }
            }
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

// ... on PrismicCopyrightingServiceDataBodyOtherServices {
//   id
//   slice_type
//   items {
//     service {
//       document {
//         ... on PrismicCopyrightingService {
//           uid
//           data {
//             title {
//               text
//             }
//             short_title
//           }
//         }
//       }
//     }
//   }
// }
