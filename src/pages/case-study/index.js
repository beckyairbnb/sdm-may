import React from "react";
import { Link } from "gatsby"
import Helmet from "react-helmet";

import PageWrapper from "../../components/PageWrapper";

import CasestudyImg from "../../assets/images/about-img.png";

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
                <div className="py-16 mb-10">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-xs-12">
                               <Link to="/case-study/original-kettlebell"><img src={CasestudyImg} alt="" className="w-100" /></Link>
                            </div>
                            <div className="col-lg-6 col-xs-12">
                                <h3 class="mb-6 font-size-10"><Link to="/case-study/original-kettlebell">Original Kettlebell</Link></h3>
                                <p>Original Kettlebell launched during a lockdown, which meant demand for their product was insanely high. They were busy doing all the jobs associated with setting up and running a new business but at warp speed.</p>
                                <p>Original Kettlebell had three core challenges with its content creation. First, like many other fast-growing businesses, they knew they needed content but didn’t have the bandwidth to do it themselves. </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bg-light py-16 mb-10">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-xs-12">
                                <h3 class="mb-6 font-size-10"><Link to="/case-study/sanctions">Sanctions</Link></h3>
                                <p> sanctions.io had a blog where they posted once per month. Unfortunately, they are a team of data and technology buffs, not writers. “Our team doesn't have great writers, I'm not a great writer, and it's always a big headache trying to write.”</p>
                                <p>Thorsten and the team were procrastinating and pushing away creating content for their blog when they knew they needed it to improve their SEO. For most businesses, there is a straightforward solution: outsourcing their work. But for a niche technology company, sanctions.io was struggling to find an agency they were satisfied with.</p>
                            </div>
                            <div className="col-lg-6 col-xs-12">
                                <Link to="/case-study/sanctions"><img src={CasestudyImg} alt="" className="w-100" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
};
export default CaseStudy;