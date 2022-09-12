import React, { useRef } from "react";
import Slider from "react-slick";
import { Testimonials } from "../../data/testimonials"
import TestimonialCard1 from "../../components/TestimonialCard1";

import Stars from "../../assets/images/stars.png";
import Author from "../../assets/images/author.png";


const Testimonial2 = ({ className, ...rest }) => {




  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-12">
              <div className="testimonial2 shadow p-10 rounded">
                <div className="d-flex align-items-center">
                  <img src={Author} alt="" width={40} height={40} />
                  <h4 class="font-size-6 mb-0 text-dark-cloud ml-3">Gmelius</h4>
                </div>
                <p class="font-size-8 line-height-28 text-dark-cloud mt-10">“It’s been great working with Strategically. They quickly got an understanding of our industry: our solution, users, and goals. And produced great content, always on time.”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial2;
