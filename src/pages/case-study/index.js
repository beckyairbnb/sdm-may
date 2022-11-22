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
                            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/get-a-quote/"}>
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
                                        to="/get-a-quote/"
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
                <div className="bg-light py-16 mb-8">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-xs-12">
                                <h3 class="mb-6 font-size-10"><Link to="/case-study/sanctions">Sanctions</Link></h3>
                                <p>We worked with sanctions.io, a niche SaaS helping companies screen against global sanctions. In 12 months, we helped them to increase their organic traffic by 2X in 6 months, succeeding where four other agencies had failed. </p>
                                <p>In this case study, we go over the details related to the content creation partnership and the impressive results we generated for sanctions.io.</p>
                            </div>
                            <div className="col-lg-6 col-xs-12">
                                <Link to="/case-study/sanctions" className="d-flex justify-content-center align-items-center case-img1"><img src={ClientImg1} alt="" className="d-flex justify-content-center align-items-center" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-16">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-xs-12">
                               <Link to="/case-study/original-kettlebell" className="d-flex justify-content-center align-items-center case-img"><img className="mb-10" src={ClientImg} alt="" /></Link>
                            </div>
                            <div className="col-lg-6 col-xs-12">
                                <h3 class="mb-6 font-size-10"><Link to="/case-study/original-kettlebell">Original Kettlebell</Link></h3>
                                <p>During the pandemic, we worked with Original Kettlebell, a fast-growing fitness eCommerce store. In less than a year, we helped them to grow from 0 to £1 million in revenue in 12 months, gaining 500K in traffic and more than 300 top 10 positions in the SERPs.</p>
                                <p>Read this case study to see how our laser-focused content strategy got them fast results without wasting valuable time on wasted deliverables. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-light py-16 mb-8">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-xs-12">
                                <h3 class="mb-6 font-size-10"><Link to="/case-study/phoneiq">PhoneIQ</Link></h3>
                                <p>We’ve helped PhoneIQ, an all-in-one cloud phone system and call centre software for companies that run on the Salesforce platform, to scale their content creation for several years. </p>
                                <p>In this case study, we explain how our high-quality content has helped PhoneIQ to improve its website metrics and create a consistent cadence of tech content. </p>
                            </div>
                            <div className="col-lg-6 col-xs-12">
                                <Link to="/case-study/phoneiq" className="d-flex justify-content-center align-items-center case-img1"><img src={ClientImg1} alt="" className="d-flex justify-content-center align-items-center" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            
                <HappyClientsReviews
                    title="Over 8M+ words written!"
                    subtitle="Strategically has produced thousands of pieces of content for over 250+ happy clients."
                    ctatextbelow="Read what our customers are saying about Strategically"
                />
            </PageWrapper>
        </>
    );
};
export default CaseStudy;