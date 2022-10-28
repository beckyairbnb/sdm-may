import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"

import Icon1 from "../../assets/images/writer-finder/feature-icon1.svg";
import Icon2 from "../../assets/images/writer-finder/feature-icon2.svg";
import Icon3 from "../../assets/images/writer-finder/feature-icon3.svg";

const FeaturesSection = () => {
    return (
        <Features>

            <div className="container-fluid">
                <div className="row ">
                    <div class="col-xl-3 col-lg-4 col-md-6 col-xs-12 p-9 media  border-right">
                        <div className="border rounded-pill p-6 mr-6">
                            <img src={Icon1} alt="" className="" />
                        </div>
                        <div className="d-flex flex-column">
                            <h5 className="my-3">1. Tell us about your site</h5>
                            <p className="font-size-5 mb-0">Fill out a short survey letting us know about your site, budget, content subjects, and how we can help find you the right writer.</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-xs-12 p-9 media  border-right">
                        <div className="border rounded-pill p-6 mr-6">
                            <img src={Icon2} alt="" className="" />
                        </div>
                        <div className="d-flex flex-column">
                            <h5 className="my-3">2. We find you candidates</h5>
                            <p className="font-size-5 mb-0">Based on your answers, we go through our 7,000+ writers to find the perfect ones for your project and reach out to them for you.</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-xs-12 p-9 media  border-right">
                        <div className="border rounded-pill p-6 mr-6">
                            <img src={Icon3} alt="" className="" />
                        </div>
                        <div className="d-flex flex-column">
                            <h5 className="my-3">3. You meet your writers</h5>
                            <p className="font-size-5 mb-0">Once a writer tells us they're interested in your project, we introduce you to them so you can start creating content together.</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-12 p-9 d-flex justify-content-center align-items-start"> <Link to={"/"} className="btn bg-blue text-white px-8 py-4 font-size-2 rounded-pill">
                        Find your writers
                    </Link></div>
                </div>
            </div>
        </Features>
    );
};

export default FeaturesSection;

const Features = styled.div`  
position: relative;
    width: 100%;
    max-width: 1300px;
    margin-top: -130px;
    margin-right: auto;
    margin-left: auto;
    background-color: #fff;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
    @media screen and (max-width: 991px){
    width:90%;
    }
}

    a{ height:auto !important;min-width: auto;}
`;
