import React, { useState } from "react";
import { graphql, Link } from "gatsby"
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";


import { Helmet } from "react-helmet";

import Image from "../components/ContentSlices/Image";
import CTA from "../components/ContentSlices/CTA";
import Heading from "../components/ContentSlices/Heading";
import Text from "../components/ContentSlices/Text";
import ServicesList from "../components/servicesList";
import HeaderButton from "../components/Header/HeaderButton";
import Progress from "../sections/LP/Progress";
import HappyClientsReviews from "../sections/LP/happyClientsReviews";
import Content2 from "../sections/LP/Content2";

import FaqAccordion from "../sections/pricing/FaqAccordion";
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
                    <h1>Award-winning copywriting agency</h1>
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
        <Progress className="pb-lg-21 " />
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
        <div className="container my-20">
          <h2 className="text-center mb-4">Our copywriting services</h2>
          <p className="text-center mb-10">Our sales copy is customer-driven and proven to deliver. We'll<br /> get you conversions, sales, and revenue to  drive exponential growth</p>
          <div class="row d-flex gap-5">
            <div class="col-lg-4 col-md-6 col-12 border p-6 justify-content-center d-flex flex-column text-center align-items-center">
              <div className="rounded-circle lpcircle bg-dodger-blue-1 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm1.437 9.396c-.439.44-1.031.636-1.621.577l-3.816 2.027 2.028-3.818c-.059-.578.134-1.177.575-1.619.445-.445 1.05-.642 1.649-.572l3.748-1.992-1.99 3.748c.073.632-.151 1.226-.573 1.649zm-1.437-13.396c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm.854-10.021c-.001.46-.374.833-.833.833-.46 0-.834-.373-.834-.833 0-.461.373-.834.834-.833.459 0 .833.374.833.833z" /></svg>
              </div>
              <h4 className="py-2">Website copy</h4>
              <p>By understanding your business goals and target audience, we engineer our copy to resonate with your ideal customer</p>
            </div>
            <div class="col-lg-4 col-md-6 col-12 border p-6 justify-content-center d-flex flex-column text-center align-items-center">
              <div className="rounded-circle lpcircle bg-dodger-blue-1 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M2.597 7.81l4.911 13.454c-3.434-1.668-5.802-5.19-5.802-9.264 0-1.493.32-2.91.891-4.19zm16.352 3.67c0-1.272-.457-2.153-.849-2.839-.521-.849-1.011-1.566-1.011-2.415 0-.978.747-1.88 1.862-1.819-1.831-1.677-4.271-2.701-6.951-2.701-3.596 0-6.76 1.845-8.601 4.64.625.02 1.489.032 3.406-.118.555-.034.62.782.066.847 0 0-.558.065-1.178.098l3.749 11.15 2.253-6.756-1.604-4.394c-.555-.033-1.08-.098-1.08-.098-.555-.033-.49-.881.065-.848 2.212.17 3.271.171 5.455 0 .555-.033.621.783.066.848 0 0-.559.065-1.178.098l3.72 11.065 1.027-3.431c.444-1.423.783-2.446.783-3.327zm-6.768 1.42l-3.089 8.975c.922.271 1.898.419 2.908.419 1.199 0 2.349-.207 3.418-.583-.086-.139-3.181-8.657-3.237-8.811zm8.852-5.839c.224 1.651-.099 3.208-.713 4.746l-3.145 9.091c3.061-1.784 5.119-5.1 5.119-8.898 0-1.79-.457-3.473-1.261-4.939zm2.967 4.939c0 6.617-5.384 12-12 12s-12-5.383-12-12 5.383-12 12-12 12 5.383 12 12zm-.55 0c0-6.313-5.137-11.45-11.45-11.45s-11.45 5.137-11.45 11.45 5.137 11.45 11.45 11.45 11.45-5.137 11.45-11.45z" /></svg>
              </div>
              <h4 className="py-2">Landing pages and funnels</h4>
              <p>Great content is the heart and soul of any website but planning for and creating grat content isn't easy. That's where we come in</p>
            </div>
            <div class="col-lg-4 col-md-6 col-12 border p-6 justify-content-center d-flex flex-column text-center align-items-center">
              <div className="rounded-circle lpcircle bg-dodger-blue-1 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z" /></svg>
              </div>
              <h4 className="py-2">Email marketing</h4>
              <p>Successful email marketing campaigns rely on clever, compelling copy. We can help.</p>
            </div>
          </div>
        </div>
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
