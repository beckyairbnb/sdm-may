import React from "react";

const Pricing = () => {
  return (
    <div className="pb-5 pb-md-11 pb-lg-19">
      <div className="container">
        <div className="row justify-content-center">
        {/* Single Table */}

              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">

                <div
                  className="border rounded-10 text-center px-7 px-lg-16 pt-10 pb-13 gr-hover-2 mb-9"

                >

                  <p className="text-dodger-blue-1 font-size-7 mb-9">STARTER</p>
                  <h2 className="font-size-9 text-dark-cloud mb-1"> $799<span className="font-size-5">/month</span></h2>
                  <span className="font-size-5 mb-2">4000 words per month</span>

                  <ul className="list-unstyled font-size-5 text-dark-cloud">
                  <li className="mb-6">
                    <i className="fa fa-check mr-4 text-dodger-blue-1" />
                    Dedicated UK or US writer
                  </li>
                    <li className="mb-6">
                      <i className="fa fa-check mr-4 text-dodger-blue-1" />
                      UK or US editor
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
                    <a className="btn btn-blue-3 btn-2 rounded-5" href={"/contact"}>
                    Sign up
                    </a>
                  </div>
                </div>
              </div>
              {/* End Single Table */}

                {/* Single Table */}

                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">

                  <div
                    className="border rounded-10 text-center px-7 px-lg-16 pt-10 pb-13 gr-hover-2 mb-9"

                  >

                  <p className="text-dodger-blue-1 font-size-7 mb-9">GROWTH</p>
                  <h2 className="font-size-9 text-dark-cloud mb-1"> $1599<span className="font-size-5">/month</span></h2>
                  <span className="font-size-5 mb-2">8000 words per month</span>

                  <ul className="list-unstyled font-size-5 text-dark-cloud">
                  <li className="mb-6">
                    <i className="fa fa-check mr-4 text-dodger-blue-1" />
                    Dedicated UK or US writer
                  </li>
                    <li className="mb-6">
                      <i className="fa fa-check mr-4 text-dodger-blue-1" />
                      UK or US editor
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
                      <a className="btn btn-blue-3 btn-2 rounded-5" href={"/contact"}>
                        Sign up
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Single Table */}


                {/* Single Table */}

                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">

                  <div
                    className="border rounded-10 text-center px-7 px-lg-16 pt-10 pb-13 gr-hover-2 mb-9"

                  >

                  <p className="text-dodger-blue-1 font-size-7 mb-9">STRATEGY</p>
                  <h2 className="font-size-9 text-dark-cloud mb-1"><span className="font-size-5">from</span> $3499<span className="font-size-5">/one time</span></h2>
                  <span className="font-size-5 mb-2">SEO Content Strategy</span>

                  <ul className="list-unstyled font-size-5 text-dark-cloud">
                  <li className="mb-6">
                    <i className="fa fa-check mr-4 text-dodger-blue-1" />
                    Keyword research
                  </li>
                    <li className="mb-6">
                      <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                      Title recommendations with keyword clusters
                    </li>

                    <li className="mb-6">
                      <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                      Content calendar
                    </li>
                    <li className="mb-6">
                      <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                      Link building opportunities
                    </li>
                    <li className="mb-6">
                      <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                      eCommerce collection or service page recommendations
                    </li>

                    </ul>

                    <div className="pt-7 pt-lg-17">
                      <a className="btn btn-blue-3 btn-2 rounded-5" href={"/contact"}>
                        Sign up
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

export default Pricing;
