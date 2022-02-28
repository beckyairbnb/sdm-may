import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import flogo1 from '../../assets/images/flogos/google-reviews.png'
import flogo2 from '../../assets/images/flogos/contentmarketing-min.png'
import flogo3 from '../../assets/images/flogos/contentmarketing.png'
import flogo4 from '../../assets/images/flogos/top-marketing-comp.png'
import flogo5 from '../../assets/images/flogos/writing.svg'

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div className={`pt-13 ${className}`} {...rest}>
        <div className="container">
            <LogosRow className="row">
              <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 my-3" onClick={()=> window.open("https://g.page/strategically?share", "_blank")}><img  className="w-100 opacity-9" src={flogo1} /></div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 my-3" onClick={()=> window.open("https://superbcompanies.com/categories/content-marketing-companies/", "_blank")}><img  className="w-100 opacity-9" src={flogo2} /></div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 my-3"><img className="w-100 opacity-9" src={flogo3} /></div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 my-3" onClick={()=> window.open("https://www.designrush.com/agency/content-marketing", "_blank")}><img  className="w-100 opacity-9" src={flogo4} /></div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 my-3" onClick={()=> window.open("https://www.goodfirms.co/writing", "_blank")}><img className="w-100 opacity-9" src={flogo5} /></div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 my-3">
              <img className="w-100 opacity-9" src="https://core.sortlist.com//_/apps/core/images/badges-en/badge-flag-blue-light-xl.svg"/>
              </div>
            </LogosRow>
        </div>
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
const LogosRow = styled.div`
display: flex;
align-items: stretch;
& > div{
  display: flex;
  flex-direction: row;
  align-items: center;
}
& > div > a{
  width:100%;
  cursor:pointer;
  
}
& > div > a > img{
  width:100%;
  cursor:pointer;
}
& > div > a > svg{
  width:100%;
  cursor:pointer;
}
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-between;
align-items: stretch;
@media (max-width: 480px) {
  .col-xs-4 {
    flex: 0 0 50% !important;
    max-width: 50% !important;
  }
}
`;
export default Footer;
