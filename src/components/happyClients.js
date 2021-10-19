import React from "react"
import Reviews from "./Testimonials"
import starsImg from "../assets/images/stars.png";
const HappyClients = ({title, subtitle, ctatextbelow}) => {
    return(
        <>
        <div className="testimonials-up pt-12 d-flex flex-column justify-content-center bg-light">
            <div className="container pt-md-5 pt-sm-4">
                <div className="d-flex flex-column justify-content-center">
                    <div className="row d-flex justify-content-center text-center mb-3">
                        <div className="col-xl-8 col-lg-7 col-md-9">
                            {title.html && <div dangerouslySetInnerHTML={{ __html: title.html }} className="w-100" ></div>}
                            {subtitle.html && <div dangerouslySetInnerHTML={{ __html: subtitle.html }} className="w-100" ></div>}
                        </div>
                    </div> 
                    <div className="row d-flex justify-content-center text-center">
                        <div class="col-md-6 col-sm-9 d-flex flex-row justify-content-between align-items-center">
                        <img src={starsImg} alt="Stars" className="stars-img" />
                        </div>  
                    </div>
                    <div className="row d-flex justify-content-center text-center mt-4">
                        <p className="font-size-5 mt-4 mb-5">{ctatextbelow}</p>
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
  
export default HappyClients