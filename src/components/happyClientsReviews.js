import React from "react"
import { PrismicRichText } from "@prismicio/react";
import Reviews from "./Testimonials"
import starsImg from "../assets/images/stars.png";
const HappyClientsReviews = ({title, subtitle, ctatextbelow}) => {
    return(
        <>
            <div className="testimonials-up pt-12 d-flex flex-column justify-content-center bg-light">
                <div className="container pt-md-5 pt-sm-4">
                    <div className="d-flex flex-column justify-content-center">
                        <div className="row d-flex justify-content-center text-center mb-3">
                            <div className="col-xl-8 col-lg-7 col-md-9">
                            <h3>Over 2M+ words written!</h3>
                            <div class="w-100"><p>Strategically has produced thousands of pieces of content for over 250+ happy clients.</p></div>
                          
                            </div>
                        </div> 
                        <div className="row d-flex justify-content-center text-center">
                            <div class="col-md-6 col-sm-9 d-flex flex-row justify-content-between align-items-center">
                            <img src={starsImg} alt="Stars" className="stars-img" />
                            </div>  
                        </div>
                        <div className="row d-flex justify-content-center text-center mt-4">
                            {ctatextbelow && <p className="font-size-5 mt-4 mb-5">{ctatextbelow}</p>}
                        </div>
                    </div>
                </div>                 
            </div>
        
        <div className="container-fluid testimonials-container">
            <Reviews/>
        </div> 
        </>  
    )
}
  
export default HappyClientsReviews