import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"

import Icon1 from "../../assets/images/writer-finder/feature-icon1.svg";
import Icon2 from "../../assets/images/writer-finder/feature-icon2.svg";
import Icon3 from "../../assets/images/writer-finder/feature-icon3.svg";

const FeaturesSection = () => {
    return (
        <Features>
            <div className="container">
                <div className="row ">
                    <div class="col-lg-4 col-md-6 col-xs-12">
                        <Featurebox className="flex-column text-center justify-content-between align-items-center d-flex">
                            <img src={Icon1} alt="" className="" width={80} height={80} />
                            <h5 className="font-size-8 my-10">1. Tell us your content needs</h5>
                            <p className="font-size-6 mb-0">Answer a few quick questions to let us know your business goals, content budget, target audience, and content requirements.</p>
                        </Featurebox >
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12">
                        <Featurebox className="flex-column text-center justify-content-between align-items-center d-flex">
                            <img src={Icon2} alt="" className="" width={80} height={80}/>
                            <h5 className="font-size-8 my-10">2. We find your writer</h5>
                            <p className="font-size-6 mb-0">Our content experts review your answers and search our database of 2000 writers to find the perfect match.</p>
                        </Featurebox >
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12">
                        <Featurebox className="flex-column text-center justify-content-between align-items-center d-flex">
                            <img src={Icon3} alt="" className="" width={80} height={80} />
                            <h5 className="font-size-8 my-10">3. Say hello to your new writer</h5>
                            <p className="font-size-6 mb-0">We introduce three to five writers to you. Review their samples and contact them directly, before making your final choice.</p>
                        </Featurebox >
                    </div>
                </div>
                <div className="mt-16 justify-content-center align-items-center d-flex"><Link to={"/"} className="btn btn-dodger-blue-2 header-btn rounded-5 text-dark px-8 py-4 font-size-2">
                        Find your writers
                    </Link></div>
            </div>

            {/* <div className="container-fluid">
                <div className="row ">
                    <div class="col-xl-3 col-lg-4 col-md-6 col-xs-12 p-9 media  border-right">
                        <div className="border rounded-pill p-6 mr-6">
                            <img src={Icon1} alt="" className="" />
                        </div>
                        <div className="d-flex flex-column">
                            <h5 className="my-3">1. Tell us your content needs</h5>
                            <p className="font-size-5 mb-0">Answer a few quick questions to let us know your business goals, content budget, target audience, and content requirements.</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-xs-12 p-9 media  border-right">
                        <div className="border rounded-pill p-6 mr-6">
                            <img src={Icon2} alt="" className="" />
                        </div>
                        <div className="d-flex flex-column">
                            <h5 className="my-3">2. We find your writer</h5>
                            <p className="font-size-5 mb-0">Our content experts review your answers and search our database of 2000 writers to find the perfect match.</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-xs-12 p-9 media  border-right">
                        <div className="border rounded-pill p-6 mr-6">
                            <img src={Icon3} alt="" className="" />
                        </div>
                        <div className="d-flex flex-column">
                            <h5 className="my-3">3. Say hello to your new writer</h5>
                            <p className="font-size-5 mb-0">We introduce three to five writers to you. Review their samples and contact them directly, before making your final choice.</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-12 p-9 d-flex justify-content-center align-items-start"> <Link to={"/"} className="btn bg-blue text-white px-8 py-4 font-size-2 rounded-pill">
                        Find your writers
                    </Link></div>
                </div>
            </div> */}
        </Features>
    );
};

export default FeaturesSection;

const Features = styled.div`  
position: relative;
    width: 100%;
    margin-top: 80px;


    a{ height:auto !important;min-width: auto;}
`;

const Featurebox = styled.div`  
 box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
 padding:30px;
 height:100%;
border-radius:10px;
`