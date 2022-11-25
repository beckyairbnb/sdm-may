import React from "react";
import HappyClients from "../../components/happyClients";

const Testimonial = ({ className, title, ...rest }) => {
 

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          {/* <!-- Section Title --> */}
          {title && (
          <div className="mb-8 mb-lg-5">
            <div className="row align-items-center">
              
                <div className="col-lg-7 col-12">
                  <div
                    className="mb-8 mb-lg-16 mb-md-0 text-center text-md-left"

                  >
                    <span className="bg-dodger-blue-2-op1 circle-84 font-size-9 mb-5 mb-lg-11 mx-auto mx-md-0">
                      <i className="fa fa-heart text-dodger-blue-2"></i>
                    </span>
                    <h2 className="font-size-11 mb-0">
                      300+ customers are loving Strategically.
                    </h2>
                  </div>
                </div>
              
              
              <div
                className="col-lg-5 col-md-3"
              
              >
              </div>
            </div>
          </div>
          )}
           </div>
          {/* <!-- End Section Title --> */}
          {/* <!-- category slider --> */}
          <div className="container-fluid mt-lg-25 mt-5">
          <div className="row">
            <div className="col-12">
                <HappyClients/>
            </div>
          </div>
          </div>
          {/* <!-- End category slider --> */}
       
      </div>
    </>
  );
};

export default Testimonial;
