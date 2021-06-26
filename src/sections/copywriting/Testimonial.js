import React, { useRef } from "react";
import Slider from "react-slick";

import TestimonialCard1 from "../../components/TestimonialCard1";
import imgT1 from "../../assets/image/home-2/png/testimonial-img-1.png";
import imgT2 from "../../assets/image/home-2/png/testimonial-img-2.png";
import imgT3 from "../../assets/image/home-2/png/testimonial-img-3.png";
import imgT4 from "../../assets/image/home-2/png/testimonial-img-4.png";
import imgT5 from "../../assets/image/home-2/png/testimonial-img-5.png";

const items = [
  {
    image: imgT1,
    content:
      "“Great experience - professional, high quality work! Great writer, autonomous, with good ideas and excellent execution.”",
    userlink: "ABTasty",
  },
  {
    image: imgT2,
    content:
      "“It’s been great working with Strategically. They quickly got an understanding of our industry: our solution, users, and goals. And produced great content, always on time.”",
    userlink: "Gmelius",
  },
  {
    image: imgT3,
    content:
      "“Working with Strategically has been amazing and a real pleasure, they are highly knowledgeable in regards to digital marketing. 10/10 and comes highly recommended.”",
    userlink: "BubblegumSEO",
  },
  {
    image: imgT4,
    content:
      "“Working with Strategically has been an amazing experience. They are professional, hard-working, and extremely dedicated. I wouldn’t hesitate to recommend.”",
    userlink: "WebsitePlanet.com",
  },
  {
    image: imgT5,
    content:
      "“Recommendations are precise and to the point, always linking to the end business results. Strategically go above and beyond explaining complex concepts and strategies, that are transformative to any business and at the right price point as well.”",
    userlink: "Independent Audit",
  },
];

const Testimonial = ({ className, ...rest }) => {
  const elSlider = useRef();

  const slickSettings = {
    autoplay: false,
    slidesToShow: 4,
    arrows: false,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="mb-8 mb-lg-5">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-9">
                <div
                  className="mb-8 mb-lg-16 mb-md-0 text-center text-md-left"

                >
                  <span className="bg-dodger-blue-2-op1 circle-84 font-size-9 mb-5 mb-lg-11 mx-auto mx-md-0">
                    <i className="fa fa-heart text-dodger-blue-2"></i>
                  </span>
                  <h2 className="font-size-11 mb-0">
                    250+ customers are loving Strategically.
                  </h2>
                </div>
              </div>
              <div
                className="col-lg-5 col-md-3"
              
              >
                <div className="testimonial-one-button text-center text-md-right mt-3 mt-md-18">
                  <button
                    type="button"
                    className="slick-prev"
                    onClick={() => {
                      elSlider.current.slickPrev();
                    }}
                  >
                    <i className="icon icon-minimal-left"></i>
                  </button>
                  <button
                    type="button"
                    className="slick-next"
                    onClick={() => {
                      elSlider.current.slickNext();
                    }}
                  >
                    <i className="icon icon-minimal-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Section Title --> */}
          {/* <!-- category slider --> */}
          <div className="row">
            <div className="col-12">
              <div className="testimonial-one">
                <Slider
                  ref={elSlider}
                  {...slickSettings}
                  css={`
                    .slick-dots {
                      display: flex !important;
                    }
                  `}
                >
                  {items.map((item, index) => (
                    <div className="single-category focus-reset" key={index}>
                      <TestimonialCard1 options={item} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          {/* <!-- End category slider --> */}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
