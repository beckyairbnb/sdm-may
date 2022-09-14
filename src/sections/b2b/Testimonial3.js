import React, { useRef } from "react";
import Slider from "react-slick";
import { Testimonials } from "../../data/testimonials"
import TestimonialCard1 from "../../components/TestimonialCard1";

import Stars from "../../assets/images/stars.png";
import Author from "../../assets/images/author1.png";


const Testimonial3 = ({ className, ...rest }) => {




  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div class="row justify-content-center">
          <div class="col-lg-10 col-12">
              <div className="testimonial border p-md-10 p-8 rounded">
                <img src={Stars} alt="" width={158} height={25} />
                <p class="font-size-8 line-height-28 text-dark-cloud my-10">This company has been like a breath of fresh air for me! Responsive, inventive and always has great ideas. I'm really enjoying working with them and loving that they deliver on time and what they promise.</p>
                <div className="d-flex align-items-center">
                  <img src={Author} alt="" width={55} height={55} className="rounded-circle" />
                  <div className="ml-4">
                  <h4 class="font-size-6 mb-0 text-dark-cloud">Lucy Cohen</h4>
                  <p className="mb-0">Mazuma Money</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial3;
