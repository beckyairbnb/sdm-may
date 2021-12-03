import React from "react";
import { Link } from "gatsby";

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div className={`pt-13 pt-lg-25 pb-13 pb-lg-18 ${className}`} {...rest}>
        <div className="container">
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
                          to="/writer-services/saas-content-writer/"
                          className="font-size-5 text-default-color"
                        >
                          SaaS
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/writer-services/marketing-content-writer/"
                          className="font-size-5 text-default-color"
                        >
                          Marketing
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/writer-services/accounting-writer/"
                          className="font-size-5 text-default-color"
                        >
                          Accounting
                        </Link>
                      </li>
                      <li className="mb-6">
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
                          eCommerce
                        </Link>
                      </li>
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
                          to="/writer-services/seo-content-writing/"
                          className="font-size-5 text-default-color"
                        >
                          Seo Content Writing
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/writer-services/ebook-writing/"
                          className="font-size-5 text-default-color"
                        >
                          Ebook Writing
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/writer-services/product-description-writing/"
                          className="font-size-5 text-default-color"
                        >
                          Product description writing
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/writer-services/white-paper-writing/"
                          className="font-size-5 text-default-color"
                        >
                          White paper Writing
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-medium mb-10">
                      Legal
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
                      <li className="mb-6">
                        <Link
                          to="/content-delivery-policy/"
                          className="font-size-5 text-default-color"
                        >
                          Content Delivery Policy
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/money-back-guarantee/"
                          className="font-size-5 text-default-color"
                        >
                          Refund Policy
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
                      <li className="mb-6">
                        <Link
                          to={`/faq/`}
                          className="font-size-5 text-default-color"
                        >
                          FAQ
                        </Link>
                      </li>
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
