import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import ClientsLogos from "../ClientsLogos";
import FooterCta from "../../sections/footercta";


const Footer = ({ className, ...rest }) => {
  return (
    <>
      
      <div className={`pt-13 ${className}`} {...rest}>
        <ClientsLogos/>
        <FooterCta/>
        
        <div className="container pt-lg-12 pb-8 pb-lg-12 ">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {/* Single Widgets */}
                <div className="col-md-3 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-medium mb-10">
                      Industries
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <Link
                          to="/writer-services/b2b-content-writing-services/"
                          className="font-size-5 text-default-color"
                        >
                          B2B Content Writing Services
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/writer-services/fintech-content-writer/"
                          className="font-size-5 text-default-color"
                        >
                          Fintech Content Writer
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/writer-services/saas-content-writer/"
                          className="font-size-5 text-default-color"
                        >
                          SaaS Content Writer
                        </Link>
                      </li>
                      {/* <li className="mb-6">
                        <Link
                          to="/writer-services/casino-gaming-content-writing/"
                          className="font-size-5 text-default-color"
                        >
                          Casino Gaming
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/writer-services/ecommerce-content-marketing-writer/"
                          className="font-size-5 text-default-color"
                        >
                          Ecommerce
                        </Link>
                      </li> */}
                      <li className="mb-6">
                        <Link
                          to="/writer-services/"
                          className="font-size-5 text-default-color"
                        >
                          All Industries
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widgets */}
                {/* Single Widgets */}
                <div className="col-md-3 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-medium mb-10">
                      Services
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <Link
                          to="/seo-strategy-agency/"
                          className="font-size-5 text-default-color"
                        >
                          Seo Content Strategy
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/writer-services/blog-article-writing/"
                          className="font-size-5 text-default-color"
                        >
                          Blog Article Writing Services
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/writer-services/seo-content-writing/"
                          className="font-size-5 text-default-color"
                        >
                          SEO Content Writing
                        </Link>
                      </li>
                     
                      {/* <li className="mb-6">
                        <Link
                          to="/writer-services/product-description-writing/"
                          className="font-size-5 text-default-color"
                        >
                          Product Description Writing
                        </Link>
                      </li> */}
                      <li className="mb-6">
                        <Link
                          to="/writer-services/"
                          className="font-size-5 text-default-color"
                        >
                          All Writing Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-medium mb-10">
                    Policies
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <Link
                          to={`/privacy/`}
                          className="font-size-5 text-default-color"
                        >
                          Privacy
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to={`/terms/`}
                          className="font-size-5 text-default-color"
                        >
                          Terms
                        </Link>
                      </li>
                      {/* <li className="mb-6">
                        <Link
                          to="/content-delivery-policy/"
                          className="font-size-5 text-default-color"
                        >
                          Content Delivery Policy
                        </Link>
                      </li> */}
                      <li className="mb-6">
                        <Link
                          to="/money-back-guarantee/"
                          className="font-size-5 text-default-color"
                        >
                          Refund Policy
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/affiliate-scheme/"
                          className="font-size-5 text-default-color"
                        >
                          Affiliate Scheme
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-medium mb-10">
                      Support
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <Link
                          to={`/contact/`}
                          className="font-size-5 text-default-color"
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to={`/samples/`}
                          className="font-size-5 text-default-color"
                        >
                          Samples
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/writing-jobs/"
                          className="font-size-5 text-default-color"
                        >
                          Become a Writer
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to={`/get-a-quote/1/`}
                          className="font-size-5 text-default-color"
                        >
                          Pricing
                        </Link>
                      </li>
                      {/* <li className="mb-6">
                        <Link
                          to={`/faq/`}
                          className="font-size-5 text-default-color"
                        >
                          FAQs
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 border-top border-dark-light mt-5 pt-6 pb-0">
            <p className="text-center">Strategically Digital Marketing Ltd. Company Number 11898834 VAT 328 9819 52 | <Link to="/privacy/"  className="text-default-color">Privacy</Link> | <Link to="/terms/" className="text-default-color">Terms</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
