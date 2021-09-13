import React from "react";
import { Link } from "gatsby";
import imgBg from "../assets/image/inner-page/jpg/sign-up-right-img.jpg";
import Helmet from "react-helmet";
import PageWrapper from "../components/PageWrapper";
import Counter from "../sections/home2/Counter";
import Testimonial from "../sections/home2/Testimonial";
import Hero2 from "../sections/pricing/Hero2";
import Stats2 from "../sections/about/Stats2";


const SignUpImage = () => {
  return (
    <>
    <Helmet>
     <title>Strategically | Content Writing Agency</title>
   </Helmet>
      <PageWrapper
        themeConfig={{
          headerClassName: "pt-13 pt-lg-11 px-14 px-xl-24",
          headerLogoClassName: "mx-auto mx-lg-0",
        }}
      >
          <Hero2 />

        <div className="min-height-100vh d-flex align-items-center bg-default-1">
          <div className="container-fluid h-100">
            <div className="row no-gutters align-items-center justify-content-center h-100">
              <div className="col-xl-4 col-lg-6 col-md-10">
                <div className="pt-23 pt-md-17 pt-lg-18 pb-md-4 pb-lg-10 max-w-413 mx-auto">
                  <div
                    className="mb-10"

                  >
                    <h2 className="mb-1 font-size-10 letter-spacing-n83">
                      Request free writing samples
                    </h2>

                  </div>
                  <form
                    action="/"

                  >
                  {/* Company Name */}
                  <div className="form-group mb-6 position-relative">
                    <input
                      type="text"
                      name="address"
                      className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
                      placeholder="Your name"
                      id="company"
                    />
                  </div>
                    {/* Email */}
                    <div className="form-group mb-6 position-relative">
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
                        placeholder="Email address"
                        id="email"
                      />
                    </div>
                    {/* Industry */}
                    <div className="form-group mb-6 position-relative">
                      <input
                        type="industry"
                        name="industry"
                        className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
                        placeholder="What industry are you in?"
                        id="email"
                      />
                    </div>
                    {/* Business */}
                    <div className="form-group mb-6 position-relative">
                      <input
                        type="business"
                        name="business"
                        className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
                        placeholder="Are you an agency or business?"
                        id="email"
                      />
                    </div>




                    <div className="button">
                      <a href="/#" className="btn btn-blue-3 w-100 rounded-4">
                        Submit
                      </a>

                    </div>
                  </form>
                </div>
              </div>
              {/* Right Image */}
              <div className="col-xl-8 col-lg-6 col-md-10 min-height-lg-100vh">
                <div
                  className="bg-images min-height-100vh d-none d-lg-block"
                  css={`
                    background-image: url(${imgBg});
                  `}
                />
              </div>
            </div>
          </div>
        </div>

  <Stats2 />
        <Testimonial className="pt-lg-19 pb-12 pb-lg-17" />



      </PageWrapper>
    </>
  );
};
export default SignUpImage;
