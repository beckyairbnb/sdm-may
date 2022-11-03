import React from "react";
import styled from "styled-components";

import Entrepreneur from "../../assets/images/writer-finder/entrepreneur.png";
import Lifehacker from "../../assets/images/writer-finder/lifehacker.png";
import Esquire from "../../assets/images/writer-finder/esquire.png";
import Forbest from "../../assets/images/writer-finder/forbest.png";
import Healthline from "../../assets/images/writer-finder/healthline.png";

import Time from "../../assets/images/writer-finder/time.png";
import Playboy from "../../assets/images/writer-finder/playboy.png";
import Cosmopolitan from "../../assets/images/writer-finder/cosmopolitan.png";
import Inc from "../../assets/images/writer-finder/inc.png";
import Shopify from "../../assets/images/writer-finder/shopify.png";

import Redbull from "../../assets/images/writer-finder/redbull.png";
import Theguardian from "../../assets/images/writer-finder/theguardian.png";
import Nbc from "../../assets/images/writer-finder/nbc.png";
import Thoughtcatalog from "../../assets/images/writer-finder/thoughtcatalog.png";
import Newyorktimes from "../../assets/images/writer-finder/newyorktimes.png";

import Sumo from "../../assets/images/writer-finder/sumo.png";
import Spire from "../../assets/images/writer-finder/spire.png";
import Perfectketo from "../../assets/images/writer-finder/perfectketo.png";
import Kettlefire from "../../assets/images/writer-finder/kettlefire.png";
import Yummly from "../../assets/images/writer-finder/yummly.png";
import Foursigmatic from "../../assets/images/writer-finder/foursigmatic.png";
import Patreon from "../../assets/images/writer-finder/patreon.png";



const WritersContent = () => {
    return (
        <div className="container text-center">
            <div className="py-lg-24 pt-14 pb-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-6 col-lg-8 col-12">
                        <h2 className="font-size-9">We're experts at sourcing writers</h2>
                        <Spacer />
                        <p>At <a href="https://www.yourgrowthmachine.com/" target="_blank" rel="noopener noreferrer">Growth Machine</a>, we create 70+ articles per week across 15+ different blogs, and have worked with dozens of different writers. Our articles are read by over <strong>3,000,000 people </strong>each month. We know how to find the perfect writer to give you <strong>the content your blog needs to stand out.</strong></p>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <div className="row justify-content-center align-items-center">
                <div className="col-xl-8 col-lg-10 col-12">
                        <h3 className="font-size-5">OUR WRITER-FINDING TEAM HAS WORKED WITH...</h3>
                        <div className="d-flex flex-wrap justify-content-center align-items-center">
                            <img src={Sumo} alt="" height={32} className="my-8 mx-7" />
                            <img src={Spire} alt="" height={32} className="my-8 mx-7" />
                            <img src={Perfectketo} alt="" height={32} className="my-8 mx-7" />
                            <img src={Kettlefire} alt="" height={32} className="my-8 mx-7" />
                            <img src={Yummly} alt="" height={32} className="my-8 mx-7" />
                            <img src={Foursigmatic} alt="" height={32} className="my-8 mx-7" />
                            <img src={Patreon} alt="" height={32} className="my-8 mx-7" />

                        </div>
                    </div>
                </div>
            </div>

            <div className="py-lg-20 py-5">
                <div className="row justify-content-center align-items-center">
                <div className="col-xl-7 col-lg-10 col-12">
                        <h3 className="font-size-5 mb-10">THE PERFECT WRITER: GUARANTEED</h3>

                        <p>We don't stop until you have a writer you're happy with. If you don't get a writer you love, <strong>we'll happily keep looking for you.</strong></p>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <div className="row justify-content-center align-items-center">
                <div className="col-xl-7 col-lg-10 col-12">
                        <h3 className="font-size-9">Ridiculously experienced writers
                        </h3>
                        <Spacer />
                        <p>We're sending you <strong>writers with professional blogging and content marketing experience</strong>. Writers who can generate leads, attract customers, get you to #1 on Google, educate readers, and make you a thought leader. Just check out the kinds of publications our writers have published for:</p>
                    </div>
                    <div className="col-xl-8 col-lg-10 col-12">
                        <div className="d-flex flex-wrap justify-content-center align-items-center">
                            <img src={Entrepreneur} alt="" height={32} className="my-8 mx-7" />
                            <img src={Lifehacker} alt="" height={32} className="my-8 mx-7" />
                            <img src={Esquire} alt="" height={32} className="my-8 mx-7" />
                            <img src={Forbest} alt="" height={32} className="my-8 mx-7" />
                            <img src={Healthline} alt="" height={32} className="my-8 mx-7" />

                            <img src={Time} alt="" height={32} className="my-8 mx-7" />
                            <img src={Playboy} alt="" height={32} className="my-8 mx-7" />
                            <img src={Cosmopolitan} alt="" height={32} className="my-8 mx-7" />
                            <img src={Inc} alt="" height={32} className="my-8 mx-7" />
                            <img src={Shopify} alt="" height={32} className="my-8 mx-7" />

                            <img src={Redbull} alt="" height={32} className="my-8 mx-7" />
                            <img src={Theguardian} alt="" height={32} className="my-8 mx-7" />
                        </div>
                        <div className="d-flex flex-wrap justify-content-center align-items-center">
                            <img src={Nbc} alt="" height={64} className="my-8 mx-7" />
                            <img src={Thoughtcatalog} alt="" height={64} className="my-8 mx-7" />
                            <img src={Newyorktimes} alt="" height={64} className="my-8 mx-7" />
                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default WritersContent;

const Spacer = styled.div` 

    width: 40px;
    height: 4px;
    margin: 30px auto 40px;
    background-color: #cbd0df;
    `;