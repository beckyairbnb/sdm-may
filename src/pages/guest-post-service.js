import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home2/Hero";
import Progress from "../sections/home2/Progress";
import Testimonial from "../sections/newservice/Testimonial";
import Faq from "../sections/pricing/Faq";
import Helmet from "react-helmet";

import ClientsLogos from "../components/ClientsLogos";

const Content = () => {
  return (
    <>
      <Helmet>
        <title>Strategically | Content Writing Agency</title>
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
        <Hero className="pt-11 pt-lg-34 pb-10" />

        <Progress className="pb-lg-21 border-top border-default-color-1" />
        <div className="bg-dark-cloud pt-20 pt-lg-20 pb-15 pb-lg-20">
          <div className="container">
            <div className="row d-flex justify-content-center">
             
              <div className="col-xl-7 col-lg-7 col-md-8 mt-n13 mt-md-n8 mt-lg-n0">
                <div
                  className="dark-mode-texts"
                  data-aos="fade-left"
                  data-aos-duration={600}
                  data-aos-delay={500}
                  data-aos-once="true"
                >
           
                  <h2 className="font-size-10 mb-8 letter-spacing-n83 pr-xs-22 pr-sm-18 pr-md-0 text-center">
                  We'are experts at sourcing writers
                  </h2>
                  <p className="font-size-7 mb-0 text-center">
                  At Growth Machine, we create 70+ articles per week across 15+ different blogs, and have worked with dozens of different blogs, and have worked with dozens of different writers. Our articles are read by over <b>3,000,000</b> people each month. We know how to find the perfect writer to give you <b>the content your blog needs to stand out.</b>
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white pt-25 pb-lg-25">
        <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-7 col-md-8 mt-n13 mt-md-n8 mt-lg-n0">
        <h2 className="font-size-10 mb-8 letter-spacing-n83 pt-5 pb-lg-10 text-center">
                  Our Writer-finding team has worked with ...
         </h2>
         </div>
         </div>
        <ClientsLogos/>
        </div>

        <div className="bg-dark-cloud pt-20 pt-lg-25 pb-15 pb-lg-20">
          <div className="container">
            <div className="row d-flex justify-content-center">
             
              <div className="col-xl-7 col-lg-7 col-md-8 mt-n13 mt-md-n8 mt-lg-n0">
                <div
                  className="dark-mode-texts"
                  data-aos="fade-left"
                  data-aos-duration={600}
                  data-aos-delay={500}
                  data-aos-once="true"
                >
           
                  <h2 className="font-size-10 mb-8 letter-spacing-n83 pr-xs-22 pr-sm-18 pr-md-0 text-center">
                  The Perfect Writer:Guaranteed
                  </h2>
                  <p className="font-size-3 mb-0 text-center">
                  We don't stop until you have a writer you're happy with. If you don't get a writer you love. we'll happily keep looking for you.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Testimonial className="pt-lg-19 pb-12 pb-lg-25" />
        <div className="bg-white pt-15 pb-15">
        <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-7 col-md-8 mt-n13 mt-md-n8 mt-lg-n0">
        <h2 className="font-size-10 mb-8 letter-spacing-n83 pt-5 pb-lg-10 text-center">
                  Ridiculously Experienced Writers
         </h2>
         <p className="font-size-6 mb-0 text-center pb-10">
                  We're sending you writers with professional blogging and content marketing experience. Writers who can generate leads, attract customers, get you to #1 on Google, educate readers, and make you a thought leader. Just check out the kinds of publications our writers have published for : 
         </p>
         </div>
         </div>
        <ClientsLogos/>
        </div>
        <div className="bg-white pt-15 pb-15">
        <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-7 col-md-8 mt-n13 mt-md-n8 mt-lg-n0">
        <h2 className="font-size-10 mb-8 letter-spacing-n83 pt-5 pb-lg-10 text-center">
                  Find Your Writers
         </h2>
         <div className="row justify-content-center">
         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8">

          <div
            className="border rounded-10 text-center px-7 px-lg-16 pt-10 pb-13 gr-hover-2 mb-9"

          >

            <p className="text-dodger-blue-1 font-size-7 mb-9">SCALE</p>
            <h2 className="font-size-9 text-dark-cloud mb-1"> $1949<span className="font-size-5">/month</span></h2>
            <span className="font-size-5 mb-2">12000 words per month</span>

            <ul className="list-unstyled font-size-5 text-dark-cloud">
            <li className="mb-6">
              <i className="fa fa-check mr-4 text-dodger-blue-1" />
                Native English writer
            </li>
              <li className="mb-6">
                <i className="fa fa-check mr-4 text-dodger-blue-1" />
                Native English editor
              </li>
              <li className="mb-6">
                <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                Account manager
              </li>

              <li className="mb-6">
                <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                Grammarly check
              </li>

              <li className="mb-6">
                <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
              Plagiarism check
              </li>
              <li className="mb-6">
                <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                Formatted ready to publish
              </li>
              <li className="mb-6">
                <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                Royalty free images
              </li>
            </ul>

            <div className="pt-7 pt-lg-17">
              <a className="btn btn-blue-3 btn-2 rounded-5" href={"https://app.strategically.co/order/DXZV8N"}>
              Sign up
              </a>
            </div>
          </div>
          </div>
         </div>
         </div>
         </div>
        </div>
        <Faq />
      </PageWrapper>
    </>
  );
};
export default Content;
