import React from "react";
import { Link } from "gatsby"
import Helmet from "react-helmet";

import HappyClientsReviews from "../../sections/case-study/happyClientsReviews";

import PageWrapper from "../../components/PageWrapper";

import CasestudyImg from "../../assets/images/about-img.png";
import ClientImg from "../../assets/images/originalkettlebell.png";
import ClientImg1 from "../../assets/images/lanacooper-2.jpg";

import logo1 from "../../assets/images/clients/logo-1.jpg";
import logo2 from "../../assets/images/clients/logo-2.jpg";
import logo3 from "../../assets/images/clients/logo-3.jpg";
import logo4 from "../../assets/images/clients/logo-4.jpg";
import logo5 from "../../assets/images/clients/logo-5.jpg";
import logo7 from "../../assets/images/clients/logo-7.jpg";
import logo9 from "../../assets/images/clients/logo-9.jpg";
import logo10 from "../../assets/images/clients/logo-10.jpg";

const CaseStudy = () => {
    return (
        <>
            <Helmet>
                <title>Strategically | Content Writing Agency</title>
            </Helmet>
            <PageWrapper
                themeConfig={{
                    headerClassName: "site-header--menu-right",
                    headerButton: (
                        <>
                            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/get-a-quote/1/"}>
                                View Pricing
                            </a>
                        </>
                    ),
                    footerStyle: "style2",
                }}
            >
                <div className="main-banner mt-12">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                                <div className="text-center pt-5 pb-lg-4 mb-lg-2">
                                    <h1>Read our case studies and see our results in action</h1>
                                    <Link
                                        to="/get-a-quote/1/"
                                        className="btn btn btn-dodger-blue-2 header-btn-2 mt-5 mb-3 pt-md-10 pb-md-10 pl-md-12 pr-md-12 font-size-3 rounded-5 text-uppercase w-auto border-0">View Pricing</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="py-2 mb-14">
                    <div className="container my-1">
                        <h3 className="text-center mb-5">We work with companies like yours</h3>
                        <div className="row my-1 client-logo">
                            <div className="col-md-6 col-sm-12 d-flex flex-row justify-content-md-end justify-content-sm-center align-items-center m-0 p-0">
                                <div className="client-item"><img src={logo1} alt="Client 1" /></div>
                                <div className="client-item"><img src={logo2} alt="Client 2" /></div>
                                <div className="client-item"><img src={logo3} alt="Client 3" /></div>
                                <div className="client-item"><img src={logo4} alt="Client 4" /></div>
                            </div>
                            <div className="col-md-6 col-sm-12 d-flex flex-row justify-content-md-start justify-content-sm-center align-items-center m-0 p-0">
                                <div className="client-item"><img src={logo5} alt="Client 5" /></div>
                                <div className="client-item"><img src={logo7} alt="Client 7" /></div>
                                <div className="client-item"><img src={logo9} alt="Client 9" /></div>
                                <div className="client-item"><img src={logo10} alt="Client 10" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-16 mb-10">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-xs-12">
                               <Link to="/case-study/original-kettlebell" className="d-flex justify-content-center align-items-center case-img"><img className="mb-10" src={ClientImg} alt="" /></Link>
                            </div>
                            <div className="col-lg-6 col-xs-12">
                                <h3 class="mb-6 font-size-10"><Link to="/case-study/original-kettlebell">Original Kettlebell</Link></h3>
                                <p>Original Kettlebell launched during a lockdown, which meant demand for their product was insanely high. They were busy doing all the jobs associated with setting up and running a new business but at warp speed.</p>
                                <p>Original Kettlebell had three core challenges with its content creation. First, like many other fast-growing businesses, they knew they needed content but didn’t have the bandwidth to do it themselves. </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bg-light py-16">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-xs-12">
                                <h3 class="mb-6 font-size-10"><Link to="/case-study/sanctions">Sanctions</Link></h3>
                                <p> sanctions.io had a blog where they posted once per month. Unfortunately, they are a team of data and technology buffs, not writers. “Our team doesn't have great writers, I'm not a great writer, and it's always a big headache trying to write.”</p>
                                <p>Thorsten and the team were procrastinating and pushing away creating content for their blog when they knew they needed it to improve their SEO. For most businesses, there is a straightforward solution: outsourcing their work. But for a niche technology company, sanctions.io was struggling to find an agency they were satisfied with.</p>
                            </div>
                            <div className="col-lg-6 col-xs-12">
                                <Link to="/case-study/sanctions" className="d-flex justify-content-center align-items-center case-img1"><img src={ClientImg1} alt="" className="d-flex justify-content-center align-items-center" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <HappyClientsReviews
                    title="Over 4M+ words written!"
                    subtitle="Strategically has produced thousands of pieces of content for over 250+ happy clients."
                    ctatextbelow="Read what our customers are saying about Strategically"
                />
            </PageWrapper>
        </>
    );
};
export default CaseStudy;