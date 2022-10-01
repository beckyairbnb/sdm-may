import React from "react";

import PageWrapper from "../components/PageWrapper";
import Helmet from "react-helmet";

const Contact = () => {
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
            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/get-a-quote/2/"}>
              View Pricing
            </a>
            </>
          ),
          footerStyle: "style2",
        }}
      >
        <div className="min-height-100vh d-flex align-items-center pt-23 pt-md-26 pt-lg-30 pb-8 pb-md-12 pb-lg-23">
          <div className="container">
            {/* Section Title */}
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div
                  className="mb-10 mb-lg-18 text-center"
                  data-aos="fade-up"
                  data-aos-duration={300}
                  data-aos-once="true"
                >
                  <h2 className="font-size-11 mb-7">Contact us</h2>
                  <p className="font-size-7 mb-0">
                    Send us a message and we will reply you within 12 hours.
                  </p>
                </div>
              </div>
            </div>
            {/* End Section Title */}
            {/* Contact Form */}
            <div className="row justify-content-center">
              <div className="col-12">
                {/* contact details */}
                <div
                  className="top-contact-info bg-default-1 max-w-540 mx-auto py-10 px-13 rounded-10"

                >
                  <div className="row">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                      <div className="border-md-right border-cornflower-blue">
                        <h4 className="font-size-5 text-default-color font-weight-normal mb-0">
                          Call us 
                        </h4>
                        <a
                          className="font-size-7 font-weight-bold heading-default-color" 
                          href="tel:447939447382"
                        >
                          +44 7939447382
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0">
                      <div className="pl-1 pr-3">
                        <h4 className="font-size-5 text-default-color font-weight-normal mb-0">
                          Email us
                        </h4>
                        <a
                          className="font-size-7 font-weight-bold heading-default-color"
                          href="mailto:hello@strategically.co"
                        >
                          hello@strategically.co
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* contact details */}
                <div className="pt-12 pb-10 max-w-536 mx-auto d-flex flex-column">
                  <form
                    name="contactformnew"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    data-aos="fade-up"
                    data-aos-duration={1100}
                    data-aos-once="true"
                  >
                    
                    {/* Company Name */}

                    <input type="hidden" name="form-name" value="contactformnew" />
                    <input type="hidden" name="subject" value="Strategically.co Content Writing Agency | Get in Touch"/>

                    <div className="form-group mb-7 position-relative">
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="John Doe"
                        id="name"
                        required
                      />
                    </div>
                    {/* Email */}
                    <div className="form-group mb-7 position-relative">
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="Email Address"
                        id="email"
                        required
                      />
                    </div>
                    {/* Email */}
                    <div className="form-group mb-7 position-relative">
                      <input
                        type="text"
                        name="phone"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="Phone Number"
                        id="phone"
                        required
                      />
                    </div>
                    <div className="form-group mb-7 position-relative">
                      <input
                        type="text"
                        name="companyname"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="Company Name"
                        id="companyname"
                        required
                      />
                    </div>
                    {/* stories Name */}
                    <div className="form-group mb-7 position-relative">
                      <input
                        type="text"
                        name="stories"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="Which package are you interested in?"
                        id="stories"
                        required
                      />
                    </div>
                    {/* Message Field */}
                    <div className="form-group mb-7 position-relative">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Type your message"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 pt-7 font-size-5 border-default-color"
                        defaultValue={""}
                        required
                      />
                    </div>
                    <div className="button">
                      <button
                        type="submit"
                        href="/#"
                        className="btn btn-dodger-blue-2 h-55 w-100 rounded-4"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Contact;
