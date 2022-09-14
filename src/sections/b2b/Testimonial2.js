import React, { useRef } from "react";
import Slider from "react-slick";
import { Testimonials } from "../../data/testimonials"
import TestimonialCard1 from "../../components/TestimonialCard1";

import Stars from "../../assets/images/stars.png";
import Author from "../../assets/images/author3.png";


const Testimonial2 = ({ className, ...rest }) => {




  return (
    <>
      <div className={className} {...rest}>
        {/* <div className="container">
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
        </div> */}

<div className="container">
          <div class="row justify-content-center">
          <div class="col-lg-10 col-12">
              <div className="testimonial border p-md-10 p-8 rounded">
                <img src={Stars} alt="" width={158} height={25} />
                <p class="font-size-8 line-height-28 text-dark-cloud my-10">I worked with Strategically while working as Head of Content for a B2B SaaS company. The work this agency produces is always of the highest quality and delivered on time without fail. They are really great at making sure the work matched the brief and went above and beyond to make sure we were happy with the work.</p>
                <div className="d-flex align-items-center">
                <img src={Author} alt="" width={55} height={55} className="rounded-circle" />
                  <div className="ml-4">
                  <h4 class="font-size-6 mb-0 text-dark-cloud">Cary Hastings</h4>
                  <p className="mb-0">HelloBonsai</p>
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

export default Testimonial2;
