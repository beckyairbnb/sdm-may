import React from "react";
import { Link } from "gatsby";
import ClientsLogos from "../ClientsLogos";
import FooterCta from "../../sections/footercta";


const Footer = ({ className, ...rest }) => {
  console.log('restrest',rest)
  return (
    <>

      <div className={`pt-13 ${className}`} {...rest}>
        <ClientsLogos />
        <FooterCta />

        <div className="container pt-lg-12 pb-8 pb-lg-12 ">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {/* Single Widgets */}
                <div className="col-md-3 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-medium mb-10">
                    Services
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <Link
                          to="/writer-services/accounting-writer/"
                          className="font-size-5 text-default-color"
                        >
                          Accounting Writers
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
                      <li className="mb-6">
                        <Link
                          to="/writer-services/saas-content-writer/"
                          className="font-size-5 text-default-color"
                        >
                          SaaS Content Writing
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/writer-services/fintech-content-writer/"
                          className="font-size-5 text-default-color"
                        >
                          Fintech Content Writing
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/writer-services/casino-content-writing-services/"
                          className="font-size-5 text-default-color"
                        >
                          Casino Content Services 
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
                      &nbsp;
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <Link
                          to="/writer-services/cyber-security-writer/"
                          className="font-size-5 text-default-color"
                        >
                          Cyber Security Writing
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/writer-services/b2b-content-writing-services/"
                          className="font-size-5 text-default-color"
                        >
                          B2B Content Writing
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/writer-services/human-resources-writer/"
                          className="font-size-5 text-default-color"
                        >
                          Human Resources Writers
                        </Link>
                      </li>                     
                      <li className="mb-6">
                        <Link
                          to="/writer-services/"
                          className="font-size-5 text-default-color"
                        >
                          Content writing services
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
                      <li className="mb-6">
                        <Link
                          to={`/get-a-quote/`}
                          className="font-size-5 text-default-color"
                        >
                          Pricing
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-medium mb-10">
                      Resources
                    </h4>
                    <ul className="list-unstyled">
                    <li className="mb-6">
                        <Link
                          to={`/case-study/`}
                          className="font-size-5 text-default-color"
                        >
                          Case Studies
                        </Link>
                      </li>
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
                          to={`/get-free-content-samples/`}
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
                          to={`/blog/`}
                          className="font-size-5 text-default-color"
                        >
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 border-top border-dark-light mt-5 pt-6 pb-0">
              <p className="text-center">Strategically Digital Marketing Ltd. Company Number 11898834 VAT 328 9819 52 | <Link to="/privacy/" className="text-default-color">Privacy</Link> | <Link to="/terms/" className="text-default-color">Terms</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
