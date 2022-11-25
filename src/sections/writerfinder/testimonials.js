import React from "react";
import styled from "styled-components";

import TmIcon from "../../assets/images/writer-finder/tm-icon.svg";

import areview1 from "../../assets/images/steve-shaw.png";
import areview2 from "../../assets/images/cartan-edsall.png";
import areview3 from "../../assets/images/thortson.png";

import Masonry from 'react-masonry-css'

const Testimonials = () => {
    const breakpointColumnsObj = {
        default: 3,
        700: 2,
        500: 1,

    };
    return (

        <div className="container text-center">
            <div className="py-lg-24 pt-5 pb-14">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-9 col-12">
                        <h2 className="font-size-9">What people say about us</h2>
                        <Spacer />
                        <LargeTitle>Testimonials</LargeTitle>

                        {/* <div className="d-flex flex-wrap justify-content-center align-items-end gap-10">
                            <Testimonial1>
                                <div className="w-100 mb-4"><img src={areview1} width="60" height="60" /></div>
                                <p className="font-size-6 text-uppercase text-white">Steve Shaw - 2 Reviews</p>
                                <p className="text-white mb-8">“I had tried a couple of places for content prior to Strategically, but they were somewhat lacking—Becky got what I was looking for immediately, was very professional in her communications, delivered far more quickly than anticipated and the content was far superior. Thanks Becky & team!”</p>

                            </Testimonial1>
                            <Testimonial1>
                                <div className="w-100 mb-4"><img src={areview2} width="60" height="60" /></div>
                                <p className="font-size-6 text-uppercase text-white">Carter Edsall - 1 Review</p>
                                <p className="text-white">“Becky and her team of writers go above and beyond to deliver high-quality content quickly and at reasonable prices. She is on top of every detail, responds immediately to any questions, and makes my job SO much easier! So glad I found Strategically and don't have to keep searching for the perfect content partner.”</p>

                            </Testimonial1>

                            <Testimonial2>
                                <div className="w-100 mb-4"><img src={areview3} width="60" height="60" /></div>
                                <p className="font-size-6 text-uppercase text-white">Thorsten Gorny - 1 Review</p>
                                <p className="text-white mb-8">"I have been working with Becky and her team for a few months now and have to say I am just blown away by the professionalism and also by the determination to help their clients. We had been looking for a content writing service almost for two years with a lot of bad experiences since our product is very 'nichy' and not very easy to understand for anyone outside our industry. Becky and her team went above and ahead to learn and understand the 'lingo' and are producing really awesome content."</p>

                            </Testimonial2>

                            <Tmicon>
                                <img src={TmIcon} alt="" />
                            </Tmicon>

                        </div> */}


                    </div>
                </div>


                {/* <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    <div  className="align-self-center mt-4">
                        <Testimonial1 className="align-self-center topitem">
                            <p className="text-black mb-8">“I had tried a couple of places for content prior to Strategically, but they were somewhat lacking—Becky got what I was looking for immediately, was very professional in her communications, delivered far more quickly than anticipated and the content was far superior. Thanks Becky & team!”</p>
                            <div className="d-flex">
                                <div className="mb-4 mr-4"><img src={areview1} width="60" height="60" /></div>
                                <p className="font-size-6 text-uppercase text-black">Steve Shaw - 2 Reviews</p>
                            </div>
                        </Testimonial1>
                    </div>
                    <div className="align-self-end">
                        <Testimonial1 className="align-self-end">
                            <p className="text-black">“Becky and her team of writers go above and beyond to deliver high-quality content quickly and at reasonable prices. She is on top of every detail, responds immediately to any questions, and makes my job SO much easier! So glad I found Strategically and don't have to keep searching for the perfect content partner.”</p>
                            <div className="d-flex">
                                <div className="mr-4 mb-4"><img src={areview2} width="60" height="60" /></div>
                                <p className="font-size-6 text-uppercase text-black">Carter Edsall - 1 Review</p>
                            </div>
                        </Testimonial1>
                    </div>
                    <div  className="align-self-start">
                        <Testimonial1 className="align-self-start">
                            <p className="text-black mb-8">"I have been working with Becky and her team for a few months now and have to say I am just blown away by the professionalism and also by the determination to help their clients. We had been looking for a content writing service almost for two years with a lot of bad experiences since our product is very 'nichy' and not very easy to understand for anyone outside our industry. Becky and her team went above and ahead to learn and understand the 'lingo' and are producing really awesome content."</p>
                            <div className="d-flex">
                                <div className="mr-4 mb-4"><img src={areview3} width="60" height="60" /></div>
                                <p className="font-size-6 text-uppercase text-black">Thorsten Gorny - 1 Review</p>
                            </div>
                        </Testimonial1>
                    </div>
                </Masonry> */}

                <div className="row">
                    <div className="col-lg-4">
                        <Testimonial1 className="h-100 flex d-flex flex-column">
                            <div className="d-flex">
                                <div className="mb-4 mr-4"><img src={areview1} width="60" height="60" /></div>
                                <p className="font-size-6 text-uppercase text-black">Steve Shaw - 2 Reviews</p>
                            </div>
                            <p className="text-black mb-8">“I had tried a couple of places for content prior to Strategically, but they were somewhat lacking—Becky got what I was looking for immediately, was very professional in her communications, delivered far more quickly than anticipated and the content was far superior. Thanks Becky & team!”</p>
                        </Testimonial1>
                    </div>
                    <div className="col-lg-4">
                        <Testimonial1 className="h-100 d-flex flex-column">
                        <div className="d-flex">
                                <div className="mr-4 mb-4"><img src={areview2} width="60" height="60" /></div>
                                <p className="font-size-6 text-uppercase text-black">Carter Edsall - 1 Review</p>
                            </div>
                            <p className="text-black">“Becky and her team of writers go above and beyond to deliver high-quality content quickly and at reasonable prices. She is on top of every detail, responds immediately to any questions, and makes my job SO much easier! So glad I found Strategically and don't have to keep searching for the perfect content partner.”</p>
                        </Testimonial1>
                    </div>
                    <div className="col-lg-4">
                        <Testimonial1 className="h-100 d-flex flex-column">
                        <div className="d-flex">
                                <div className="mr-4 mb-4"><img src={areview3} width="60" height="60" /></div>
                                <p className="font-size-6 text-uppercase text-black">Thorsten Gorny - 1 Review</p>
                            </div>
                            <p className="text-black mb-8">"I have been working with Becky and her team for a few months now and have to say I am just blown away by the professionalism and also by the determination to help their clients. We had been looking for a content writing service almost for two years with a lot of bad experiences since our product is very 'nichy' and not very easy to understand for anyone outside our industry. Becky and her team went above and ahead to learn and understand the 'lingo' and are producing really awesome content."</p>
                        </Testimonial1>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Testimonials;


const Spacer = styled.div` 
    width: 40px;
    height: 4px;
    margin: 30px auto 40px;
    background-color: #cbd0df;
    `;

const LargeTitle = styled.div` 
    margin-top: 10px;
    margin-bottom: 10px;   
    color: rgba(230,232,239,.5);
    font-size: 128px;
    line-height: 96px;
    font-weight: 700;
    text-align: center;  
    @media screen and (max-width: 991px){
        font-size: 80px;
        line-height: 80px;
    }
    @media screen and (max-width: 599px){
        font-size:45px;
        line-height:55px;
    }
    `;

const Testimonial1 = styled.div` 
box-shadow: 0 10px 24px 0 rgb(82 91 115 / 12%);
border-radius:10px;
    // box-shadow: 0 10px 24px 0 rgb(244 55 168 / 40%);
   // background-image: linear-gradient(135deg,#ff9f2e,#f723c4);
    // width:46%; margin: 0 2%;
    padding: 30px;
    text-align:left;
    color:#000;
    @media screen and (max-width: 600px){
        width:100%;margin: 0; padding:30px;
    }


    `;

const Testimonial2 = styled.div` 
    box-shadow: 0 10px 24px 0 rgb(244 55 168 / 40%);
    background-image: linear-gradient(135deg,#ff4dae,#4268ff);
    width:46%; margin: 0 2%;
    padding: 65px 50px;
    @media screen and (max-width:600px){
        width:100%;margin: 0;padding:30px 30px 65px 30px;
    }
    `;

const Tmicon = styled.div` 
    opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    position: absolute;
    bottom: -44px;
    z-index: 2;
    display: flex;
    width: 100px;
    height: 100px;
    margin:0 auto;     
    justify-content: center;    
    align-items: center;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 8px 24px 0 rgb(82 91 115 / 12%);
    border: solid 2px #fff;
    padding: 5px;
    background-clip: content-box;
   

    `;