import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"
import writerIcon from "../../assets/images/writer-finder/writer.svg";

const PricingSection = () => {
    return (
        <div className="container text-center">
            <div className="py-10">
                <h2 className="font-size-9">Find your writers</h2>
                <Spacer />
                <LargeTitle>Pricing</LargeTitle>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5 col-12">
                        <Price className="bg-white d-flex justify-content-center align-items-center flex-column p-14">
                            <Writericon className="d-flex justify-content-center align-items-center rounded-pill mb-8">
                                <img src={writerIcon} alt="" />
                            </Writericon>
                            <h3 className="font-size-8">Find Your Writers</h3>
                            <p className="text-blue font-size-7 border-bottom pt-5 pb-10 mb-10">$250</p>
                            <p className="w-100 border-bottom mb-6 pb-6">3-5 Writers Skilled in Your Niche</p>
                            <p className="w-100 border-bottom mb-6 pb-6">Writing Samples From Each Writer</p>
                            <p className="w-100 border-bottom mb-6 pb-6">3 Business Day Turnaround</p>
                            <p className="w-100 border-bottom mb-6 pb-6">100% Satisfaction Guarantee</p>
                            <Link to={"/"} className="btn bg-blue text-white px-8 py-4 mt-10 font-size-2 rounded-pill">
                                Find your writers
                            </Link>
                        </Price>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default PricingSection;

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
const Price = styled.div` 
box-shadow: 1px 0 35px 0 rgb(0 0 0 / 6%); margin-top:-30px;
a{ height:auto !important;min-width: auto;}
`;

const Writericon = styled.div` 
width: 72px;
height: 72px;
 background-color: #4b6bf5;
 background-image: linear-gradient(135deg,#ff9f2e,#f723c4);
`;