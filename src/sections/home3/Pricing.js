import React, { useState } from "react";

import sectionShape from "../../assets/image/svg/footer-shape.svg";

const Pricing = ({ className, ...rest }) => {
  const [plan, setPlan] = useState("monthly");

  // const pricings
  const PricingData = [
    {
      title: "Starter",
      list: ["4000 words per month", "UK or US writer", "UK or US editor", "Account manager", "Grammarly check", "Plagiarism check", " Formatted ready to publish", "Royalty free images"],
      price: plan === "monthly" ? "£399" : "$569",
    },
    {
      title: "Growth",
      list: ["8000 words per month", "Everything in Starter"],
      price: plan === "monthly" ? "£749" : "$1049",
    },
    {
      title: "Strategy",
      list: [
        "12,000 words per month",
        "Everything in Growth",
        "AI-powered SEO optimisation",
        "Monthly content strategy"
      ],
      price: plan === "monthly" ? "£1299" : "$1849",
    },
  ];

  return (
    <div className={`position-relative ${className}`} {...rest}>
      <div className="container">
        {/* Section Title */}
        <div className="mb-13 mb-lg-13">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div
                className="mb-10 mb-lg-0 text-center text-lg-left"
                data-aos="fade-right"
                data-aos-delay={500}
              >
                <h2 className="font-size-10 pr-md-10 pr-xl-0 mb-0">
                  Choose the right plan for you
                </h2>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-6 text-center text-md-right">
              <div
                className="btn-section"
                data-aos="fade-left"
                data-aos-delay={500}
              >
                <div className="btn-toggle-square active mx-3 price-deck-trigger rounded-10 bg-golden-yellow">
                  <button
                    className={`text-break btn-reset focus-reset ${plan ===
                      "yearly" && "active"}`}
                    onClick={() => setPlan("yearly")}
                  >
                    $USD
                  </button>
                  <button
                    className={`text-break btn-reset focus-reset ${plan ===
                      "monthly" && "active"}`}
                    onClick={() => setPlan("monthly")}
                  >
                    £GBP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Section Title */}

        {/* Table Main Body */}
        <div className="table-body">
          <div className="row justify-content-center">
            {PricingData.map(({ title, list, price }, index) => {
              return (
                <div className="col-lg-12 col-sm-6" key={index}>
                  <div
                    className="border-top pt-10 pb-8"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="mb-5 mb-lg-0">
                          <h3 className="font-size-7">{title}</h3>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="">
                          <ul className="list-unstyled font-size-6">
                            {list.map((item, index) => (
                              <li
                                className="heading-default-color mb-4"
                                key={index}
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="pr-lg-15 pr-xl-10 mb-5 mb-lg-0">
                          <h2 className="mb-0 font-size-11 font-weight-medium">
                            {price}
                          </h2>
                          <p className="mb-0 font-size-5 pr-xl-22">
                            {price} per month, billed monthly
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="mb-5 mb-lg-0 mt-4 text-left text-lg-right">
                          <a
                            className="btn btn-outline-gray-1 btn-2 border-width-2 rounded-5 gr-hover-bg-blue-3 heading-default-color"
                            href="/#"
                          >
                            Sign Up
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Table Main Body */}
      </div>
      <div className="pricing-bottom-shape d-none d-sm-block">
        <img
          src={sectionShape}
          alt=""
          data-aos="fade-left"
          data-aos-delay={500}
        />
      </div>
    </div>
  );
};

export default Pricing;
