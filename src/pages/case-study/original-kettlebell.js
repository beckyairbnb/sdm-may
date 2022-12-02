import React from "react";
import Helmet from "react-helmet";

import PageWrapper from "../../components/PageWrapper";
import HeaderButton from "../../components/Header/HeaderButton";
import ReadOurBlog from "../../components/blog/readourblog";

import Icon1 from "../../assets/images/icon-traffic.png";
import Icon2 from "../../assets/images/icon-value.png";
import Icon3 from "../../assets/images/icon-links.png";
import ClientImg from "../../assets/images/originalkettlebell.png";


const OriginalKettlebell = () => {
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
                            <HeaderButton/>
                        </>
                    ),
                    footerStyle: "style2",
                }}
            >
                <div className="pt-26 pt-lg-30 pb-8">
                    <div className="container">
                        <div class="row">
                            <div class="col-xl-10 col-12">
                                <h2 class="display-4 font-weight-bold text-left mb-7">0 to £1 million in revenue in 12 months</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-dark-cloud w-full py-md-20 py-14  text-center">
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col-md-4 col-sm-6 mb-5">
                                <img src={Icon2} alt="" />
                                {/* <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">0 to 2.5M</h2> */}
                                <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">0 to £1M </h2>
                                <h5 className="text-center text-white">in 12 months</h5>
                            </div>
                            <div class="col-md-4 col-sm-6 mb-5">
                                <img src={Icon1} alt="" />
                                {/* <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">1.7M</h2> */}
                                <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">300+</h2>
                                <h5 className="text-center text-white">Top 10 positions</h5>
                            </div>
                            <div class="col-md-4 col-sm-6 mb-5">
                                <img src={Icon3} alt="" />
                                {/* <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">7,000+</h2> */}
                                <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">500K</h2>
                                <h5 className="text-center text-white">Added organic traffic</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-12 pt-lg-20 text-size">
                    <div className="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-12 col-12">
                                <div class="row mb-lg-14 mb-10 align-items-center">
                                    <div class="col-lg-5 col-12 cimage1 d-flex justify-content-center align-items-center">
                                        <img className="mb-10" src={ClientImg} alt="" />
                                    </div>
                                    <div class="col-lg-7 col-md-11 mt-10">
                                        <h2 className="font-size-10">The client</h2>
                                        <div className="service-post-divider "></div>
                                        <p>Born out of necessity during the first UK lockdown as, like many others, <a href="https://www.originalkettlebell.com">Original Kettlebell</a> founders struggled to find the equipment they needed to stay fit. Passionate about keeping people active, in the tough times and the good, they founded an eCommerce store specialising in UK-made home gym equipment.</p>
                                        <p>With extreme demand during COVID, Original Kettlebell needed a content team to cut through the BS and create a lean content strategy to get them into fighting shape as quickly as possible. </p>
                                    </div>
                                </div>
                                {/* <h2 className="font-size-10 text-left mb-10">Challenges</h2>
                                <p>Shutterfly recently launched their new blog under their “Ideas” subfolder, but lacked the internal resources to get it up and running. They needed a partner who understood the powerful traffic engine of SEO-driven content, as well as the ability to create high-quality, well-branded content.</p> */}
                                <h2 className="font-size-10 text-left my-lg-10 my-5">The problem</h2>
                                <p>Original Kettlebell launched during a lockdown, which meant demand for their product was insanely high. They were busy doing all the jobs associated with setting up and running a new business but at warp speed.</p>
                                <p>Original Kettlebell had three core challenges with its content creation. First, like many other fast-growing businesses, they knew they needed content but didn’t have the bandwidth to do it themselves. </p>
                                <p>Second, with demand high, they needed a content team that would recommend the highest value pages for the site without pushing them to publish extra pages for the sake of adding words.</p>
                                <p>Third, they wanted a plan to set them up for success after the pandemic ended and the demand naturally slowed. They needed a strategic content plan and the team to implement it. </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div class="quote-blk py-14 px-14 text-center my-10">
                            <h3 className="text-white font-size-9 my-0">“We’ve worked with other writers on past businesses, and we knew that the speed we were working at wasn't going to be possible for freelancers. We also were wary of agencies that take months to get going, then deliver little of immediate value.”</h3>
                        </div>
                    </div>
                    <div className="container">
                        <p>Despite its growth, Original Kettlebell was still a startup getting to grips with its costs, budgets, and the added complexity of delivering during lockdowns. In other words, they didn’t have an unlimited budget for content creation.</p>
                        <p>They needed an affordable solution focused on delivering the MVP to get them off the ground and through the initial growth stages. They needed us, a <a href="/">strategic content writing agency.</a></p>
                    </div>
                </div>
                <div class="pb-10 text-size">
                    <div className="container">
                        <h2 className="font-size-10 mb-lg-10 mb-5">The solution</h2>
                        <p>After chatting with a few agencies, Original Kettlebell found Strategically. We explained how our <u>SEO content strategies</u> worked — by understanding your business goals and target audience, we create a deeply customised, data-driven SEO strategy to power your sales — and they decided to give us a try. (Cue happy dance).</p>
                    </div>
                    <div className="container">
                        <div class="quote-blk py-14 px-14 text-center my-10">
                            <h3 className="text-white my-0">“Unlike other agencies, you said, “let’s look at the data and find out what are the most valuable pages to add right now”. This was so refreshing. Your willingness to focus on what really mattered to the business instead of how many words you could churn out.</h3>
                        </div>
                    </div>
                    <div className="container">
                        <p>The goal was to create a streamlined content strategy for Original Kettlebell and then deliver the pieces of content that would add the most value for the business in the short and long-term. </p>
                        <p>After we’d conducted the keyword research and competitive analysis for the strategy, we recommended a simple two-pronged approach:</p>
                        <ol className="links">
                            <li className="w-100 mb-6"><b>Product pages:</b> Each product page should be reverse engineered to be aligned with the available organic search. </li>
                            <li className="w-100 mb-6"><b>Exercise pages:</b> A series of pages designed to rank for individual kettlebell exercises, including videos and step-by-step instructions. </li>
                        </ol>
                        <p>Simple, right? We didn’t waste time spinning our wheels on complex strategies that would take months to implement. Instead, we listened to the client’s business goals and designed a lean strategy to let them hit the ground running (pun intended). </p>
                        <p>But, while the strategy was simple, it was driven by data, and each page or exercise recommendation was recommended based on lucrative keywords uncovered in our research phase.</p>
                    </div>
                    <div className="container">
                        <div class="quote-blk py-14 px-14 text-center my-10">
                            <h3 className="text-white my-0">“The deliverable was simple, understandable, and most importantly, quick to implement. The team had done an excellent job listening to our needs and sticking to the task.”</h3>
                        </div>
                    </div>
                    <div className="container">
                        <h2 className="font-size-10 mb-lg-10 mb-5 mt-10">The impact</h2>
                        <p>Since Original Kettlebell started working with us, “<span className="purple">we’ve gone from 0 in revenue to over £1 million — in less than 12 months. And we rank top for around 300 valuable keywords</span>.”</p>
                        <p>While many content agencies could have helped with the content creation, Original Kettlebell attributes the results to Strategically’s “<span className="purple">willingness to listen, quick action, and deep understanding of the MVP model required for scaling a startup</span>.”</p>
                    </div>                   
                </div>
                
                <ReadOurBlog/>
            </PageWrapper>
        </>
    );
};
export default OriginalKettlebell;
