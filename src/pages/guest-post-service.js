import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home2/Hero";
import Progress from "../sections/home2/Progress";
import Testimonial from "../sections/newservice/Testimonial";
import Faq from "../sections/pricing/Faq";
import Helmet from "react-helmet";

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
            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/get-a-quote/1/"}>
              View Pricing
            </a>
            </>
          ),
          footerStyle: "style2",
        }}
      >
     <Hero className="pt-11 pt-lg-34 pb-10" />
     <section className="pricing">
     <div className="pt-11 pt-lg-23">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-11">
            <div className="text-center mb-10 mb-lg-23">
              <h2 className="font-size-11 mb-7">Our Pricing</h2>
              <p className="font-size-7 mb-0">No contracts. Cancel any time. Money back guarantee.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div className="pb-5 pb-md-11 pb-lg-19">
      <div className="container-fluid">
        <div className="row justify-content-center pricing_table">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="border rounded-10 text-center px-7 pt-10 pb-13 gr-hover-2 mb-9">
                  <p className="text-dodger-blue-1 font-size-7 mb-9">STARTER</p>
                  <h2 className="font-size-9 text-dark-cloud mb-1"> $649<span className="font-size-5">/month</span></h2>
                  <span className="font-size-5 mb-2">4000 words per month</span>
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
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="border rounded-10 text-center px-7 pt-10 pb-13 gr-hover-2 mb-9">
                  <p className="text-dodger-blue-1 font-size-7 mb-9">GROWTH</p>
                  <h2 className="font-size-9 text-dark-cloud mb-1"> $1299<span className="font-size-5">/month</span></h2>
                  <span className="font-size-5 mb-2">8000 words per month</span>
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
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="border rounded-10 text-center px-7 pt-10 pb-13 gr-hover-2 mb-9">
                  <p className="text-dodger-blue-1 font-size-7 mb-9">SCALE</p>
                  <h2 className="font-size-9 text-dark-cloud mb-1"> $1949<span className="font-size-5">/month</span></h2>
                  <span className="font-size-5 mb-2">12,000 words per month</span>
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
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="border rounded-10 text-center px-7 pt-10 pb-13 gr-hover-2 mb-9">
                  <p className="text-dodger-blue-1 font-size-7 mb-9">STARTER</p>
                  <h2 className="font-size-9 text-dark-cloud mb-1"> $649<span className="font-size-5">/month</span></h2>
                  <span className="font-size-5 mb-2">4000 words per month</span>
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
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="border rounded-10 text-center px-7 pt-10 pb-13 gr-hover-2 mb-9">
                  <p className="text-dodger-blue-1 font-size-7 mb-9">STARTER</p>
                  <h2 className="font-size-9 text-dark-cloud mb-1"> $649<span className="font-size-5">/month</span></h2>
                  <span className="font-size-5 mb-2">4000 words per month</span>
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
    </section>

    <Progress className="pb-lg-21 border-top border-default-color-1" />
  <Testimonial className="pt-lg-19 pb-12 pb-lg-25" />
  <Faq />
      </PageWrapper>
    </>
  );
};
export default Content;
