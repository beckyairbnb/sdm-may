import React from "react"
import Slider from "react-slick";
import { Testimonials } from '../data/testimonials'
const Reviews = () => {
    const settings = {
        dots: false,
        arrows : false,
        className: "center",
        centerMode: true,
        infinite: true,        
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1800,
              settings: {
                centerPadding: "60px",
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
                breakpoint: 1199,
                settings: {
                  centerPadding: "20px",
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              },
            {
              breakpoint: 991,
              settings: {
                centerPadding: "10px",
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                centerPadding: "5px",
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
      };
    return(
        <div className="pt-md-2 pt-sm-2">
            <Slider {...settings}>
                        {Testimonials.map((item, index) => {
                          return (
                            <div key={index}>
                                <div className="testimonial-item shadow d-flex flex-column bg-white rounded-3 p-6 m-6">                        
                                    <div className="w-100 d-flex justify-content-start flex-row align-items-center">
                                        <div className="bg-white circle-55">                                      
                                            <img width={39} height={44} src={item.image} alt={item.title} className="rounded-circle p-0 m-0 w-100"/>
                                        </div>
                                        <div className="ps-3">
                                            <h4 className="fs-4 text my-0 py-0 lh-sm mb-0 text-secondary-dark">{item.user}</h4>
                                        </div>
                                    </div>                        
                                    <p className="mt-1 mb-0 text-dark">{item.content}</p>
                                
                                </div>
                            </div>
                            )
                        })}
            </Slider>
        </div>
    )
} 
export default Reviews