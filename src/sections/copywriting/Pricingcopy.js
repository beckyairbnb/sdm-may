import React from "react";

const Pricingcopy = () => {
  return (
    <div className="pb-5 pb-md-11 pb-lg-19">
      <div className="container">
        <div className="row justify-content-center">
        {/* Single Table */}

              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">

                <div
                  className="border rounded-10 text-center px-7 px-lg-16 pt-10 pb-13 gr-hover-2 mb-9"

                >

                  <p className="text-dodger-blue-1 font-size-7 mb-9">WEBSITE COPY</p>
                  <h2 className="font-size-9 text-dark-cloud mb-1"> $249<span className="font-size-5">/page</span></h2>
                  <span className="font-size-5 mb-2">Conversion-focused website pages</span>

                  <ul className="list-unstyled font-size-5 text-dark-cloud">
                  <li className="mb-6">
                    <i className="fa fa-check mr-4 text-dodger-blue-1" />
                    Dedicated Native English copywriter
                  </li>
                    <li className="mb-6">
                      <i className="fa fa-check mr-4 text-dodger-blue-1" />
                      Native English editor
                    </li>
                    <li className="mb-6">
                      <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                      Kick-off call
                    </li>

                    <li className="mb-6">
                      <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                      Unlimted free revisions
                    </li>

                    <li className="mb-6">
                      <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                    Dedicated account manager
                    </li>

                  </ul>

                  <div className="pt-7 pt-lg-17">
                    <a className="btn btn-blue-3 btn-2 rounded-5" href={"/contact"}>
                    Get Started
                    </a>
                  </div>
                </div>
              </div>
              {/* End Single Table */}


        </div>
      </div>
    </div>
  );
};

export default Pricingcopy;
