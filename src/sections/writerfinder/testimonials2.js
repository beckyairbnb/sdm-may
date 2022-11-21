import React from "react";
import styled from "styled-components";

import TmIcon from "../../assets/images/writer-finder/tm-icon.svg";

import areview1 from "../../assets/images/steve-shaw.png";
import areview2 from "../../assets/images/cartan-edsall.png";
import areview3 from "../../assets/images/thortson.png";
import quote from "../../assets/images/writer-finder/quote-blue.png";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Testimonials2 = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };
    return (
<>
        <TestimonialSection>
            <div className="">
                <div className="container">
                    <div className="row shadow bg-white align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-6 col-12 bgblue d-flex align-items-center justify-content-center">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#fff" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 11.701c0 2.857-1.869 4.779-4.5 5.299l-.498-1.063c1.219-.459 2.001-1.822 2.001-2.929h-2.003v-5.008h5v3.701zm6 0c0 2.857-1.869 4.779-4.5 5.299l-.498-1.063c1.219-.459 2.001-1.822 2.001-2.929h-2.003v-5.008h5v3.701z"/></svg> */}
                            <h2 className="font-size-20 text-white">What Our <br />customers<br /> are saying</h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="flex-wrap text-align-center align-items-center justify-content-center">
                                <Slider {...settings}>
                                    <div>
                                        <Testimonial1 className="text-align-center align-items-center justify-content-center">
                                            <p className="text-black mb-12">“I had tried a couple of places for content prior to Strategically, but they were somewhat lacking—Becky got what I was looking for immediately, was very professional in her communications, delivered far more quickly than anticipated and the content was far superior. Thanks Becky & team!”</p>
                                            <div className="w-100 mb-8 mx-auto d-flex justify-content-center"><img src={areview1} width="60" height="60" /></div>
                                            <p className="font-size-6 text-uppercase text-black">Steve Shaw - 2 Reviews</p>
                                        </Testimonial1>
                                    </div>
                                    <div>
                                        <Testimonial1 className="text-align-center align-items-center justify-content-center">
                                            <p className="text-black mb-12">“Becky and her team of writers go above and beyond to deliver high-quality content quickly and at reasonable prices. She is on top of every detail, responds immediately to any questions, and makes my job SO much easier! So glad I found Strategically and don't have to keep searching for the perfect content partner.”</p>
                                            <div className="w-100 mb-8 d-flex justify-content-center"><img src={areview2} width="60" height="60" /></div>
                                            <p className="font-size-6 text-uppercase text-black">Carter Edsall - 1 Reviews</p>
                                        </Testimonial1>
                                    </div>
                                    <div>
                                        <Testimonial1 className="text-align-center align-items-center justify-content-center">
                                            <p className="text-black mb-12">"I have been working with Becky and her team for a few months now and have to say I am just blown away by the professionalism and also by the determination to help their clients. We had been looking for a content writing service almost for two years with a lot of bad experiences since our product is very 'nichy' and not very easy to understand for anyone outside our industry. Becky and her team went above and ahead to learn and understand the 'lingo' and are producing really awesome content."</p>
                                            <div className="w-100 mb-8 d-flex justify-content-center"><img src={areview3} width="60" height="60" /></div>
                                            <p className="font-size-6 text-uppercase text-black">Thorsten Gorny - 1 Review</p>
                                        </Testimonial1>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TestimonialSection>
     
        </>
    )
}
export default Testimonials2;

const TestimonialSection = styled.div` 
.shadow {
    box-shadow: 0 10px 24px 0 rgb(82 91 115 / 12%);
    padding-bottom:50px;
}
.bgblue {
    background-color:#011d42;
    border-radius:0 0 100px 0;
    padding:200px 60px;
}
h2 {
    font-family: "Oswald", Sans-serif;
    font-size: 60px;
    font-weight: 700;
    position:relative;
}
h2:before {
    background:url(${quote}); 
    position: absolute;
    content:'';
top:-60px;
left:-60px;
    background-repeat:no-repeat;
    background-position:center center;
    height:100px;
    width:100px;
    background-color: rgba(255,255,255,.1);
    border-radius: 50%;
}
`;

const Testimonial1 = styled.div` 
    // box-shadow: 0 10px 24px 0 rgb(244 55 168 / 40%);
    // background-image: linear-gradient(135deg,#ff9f2e,#f723c4);
    // width:46%; margin: 0 2%;
    padding: 30px 50px;
    text-align:center;

    @media screen and (max-width: 600px){
        width:100%;margin: 0; padding:30px;
    }
    `;
