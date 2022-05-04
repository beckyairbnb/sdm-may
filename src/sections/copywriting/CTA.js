import React from "react";
import { Link } from "gatsby";
import backgroundImage from "../../assets/image/home-2/jpg/promo-bg-img.jpg";

const Content3 = ({ className, ...rest }) => {
  return (
    <>
      <div
        className={className}
        {...rest}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div
                className="text-center pt-14 pb-15 py-lg-31 dark-mode-texts"

              >
                <h2 className="font-size-11 mb-7">
                  Join 250+ businesses that outsource their content to Strategically.
                </h2>
                <Link to={"/pricing/"} className="btn btn-dodger-blue-2 rounded-5 mt-12">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content3;
