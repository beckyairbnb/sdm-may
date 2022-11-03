import React from "react";
import styled from "styled-components";
import TmIcon from "../../assets/images/writer-finder/tm-icon.svg";


const Testimonials = () => {
    return (

        <div className="container text-center">
            <div className="py-lg-24 pt-5 pb-14">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-9 col-12">
                        <h2 className="font-size-9">What people say about us</h2>
                        <Spacer />
                        <LargeTitle>Testimonials</LargeTitle>

                        <div className="d-flex flex-wrap justify-content-center align-items-end gap-10">
                            <Testimonial1>
                                <p className="text-white mb-8">“The Writer Finder found expert writers to create high-level PPC content for our content needs at several price points. We liked their service so much we’ve used them twice and referred them to other entrepreneurs.”</p>
                                <p className="font-size-2 text-uppercase text-white">JOHNATHAN DANE - FOUNDER OF KLIENT BOOST</p>
                            </Testimonial1>
                            <Testimonial1>
                                <p className="text-white">“When searching for the best writers who understand SEO and content, especially in our niche of hearing health, we've been running into barriers. Then we found The Writer Finder. I put in my request and within a few days had an extremely comprehensive list of qualified, experienced writers. To say I was impressed would be putting it mildly. Thank you from all of us at MDHearingAid. I look forward to recommending you to others in our industry.”</p>
                                <p className="font-size-2 text-uppercase text-white">NATALIE ZIEMBA - MARKETING AMNAGER MDHEARINGAID</p>
                            </Testimonial1>

                            <Testimonial2>
                                <p className="text-white mb-8">"My entire business revolves around finding quality writers who will consistently deliver top-notch content. I had little success using freelance websites and was unsure if I'd ever be able to find good writers. Then I found The Writer Finder. Erika is great to work with and has sourced professionals that I continue to work with today. If you're in the market for writers, your first stop should be The Writer Finder."</p>
                                <p className="font-size-2 text-uppercase text-white">ANDREW HELLING -- FOUNDER OF RETHORITY</p>
                            </Testimonial2>

                            <Tmicon>
                                <img src={TmIcon} alt="" />
                            </Tmicon>

                        </div>


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
    box-shadow: 0 10px 24px 0 rgb(244 55 168 / 40%);
    background-image: linear-gradient(135deg,#ff9f2e,#f723c4);
    width:46%; margin: 0 2%;
    padding: 65px 50px;
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