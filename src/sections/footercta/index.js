import React from "react";
import { Link } from 'gatsby';
const FooterCta = ()=>{
    return(
        <div className="bg-dark-cloud pt-20 pt-lg-20 pb-15 pb-lg-20 mt-15 mb-6 f-cta">
          <div className="container">
            <div className="row d-flex justify-content-center">             
              <div className="col-xl-8 col-lg-8 col-md-10 mt-n13 mt-md-n8 mt-lg-n0 d-flex" >
                <div
                  className="dark-mode-texts"
                >           
                  <h2 className="font-size-10 mb-8 letter-spacing-n83 text-center">
                  Ready to put your content on autopilot?
                  </h2>
                  {/* <p className="font-size-7 mb-0 text-center">
                  Book a call, we love to chat. 
                  </p> */}
                  <div className="d-flex justify-content-center">
                  <Link
                      className="btn btn btn-dodger-blue-2 header-btn rounded-pill mt-10"
                      to="/get-a-quote/"
                    >
                      Get a quote
                    </Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default FooterCta;