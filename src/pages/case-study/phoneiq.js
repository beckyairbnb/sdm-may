import React from "react";
import { Link } from "gatsby"
import Helmet from "react-helmet";

import PageWrapper from "../../components/PageWrapper";
import HeaderButton from "../../components/Header/HeaderButton";
import ReadOurBlog from "../../components/blog/readourblog";

import Icon1 from "../../assets/images/icon-traffic.png";
import Icon2 from "../../assets/images/icon-value.png";
import Icon3 from "../../assets/images/icon-links.png";
import ClientImg from "../../assets/images/phoneiq-client.png";

import FeaturedImg5 from "../../assets/images/post_img1.jpg"
import FeaturedImg6 from "../../assets/images/post_img2.jpg"
import FeaturedImg7 from "../../assets/images/post_img3.jpg"

const Sanctions = () => {
    return (
        <>
            <Helmet>
                <title>PhoneIQ Case Study - How Strategically Improved PhoneIQs Website Metrics by Delivering High-Quality Content</title>
            </Helmet>
            <PageWrapper
                themeConfig={{
                    headerClassName: "site-header--menu-right",
                    headerButton: (
                        <>
                            <HeaderButton />
                        </>
                    ),
                    footerStyle: "style2",
                }}
            >
                <div className="pt-26 pt-lg-30 pb-8">
                    <div className="container">
                        <div class="row">
                            <div class="col-xl-10 col-12">
                                <h2 class="display-4 font-weight-bold text-left mb-7">How Strategically improved PhoneIQs website metrics by delivering high quality content</h2>
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
                                <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">Increased</h2>
                                <h5 className="text-center text-white">High-Quality Content</h5>
                            </div>
                            <div class="col-md-4 col-sm-6 mb-5">
                                <img src={Icon1} alt="" />
                                {/* <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">1.7M</h2> */}
                                <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">Improved</h2>
                                <h5 className="text-center text-white">Website Metrics</h5>
                            </div>
                            <div class="col-md-4 col-sm-6 mb-5">
                                <img src={Icon3} alt="" />
                                {/* <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">7,000+</h2> */}
                                <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">Another</h2>
                                <h5 className="text-center text-white"> Satisfied Client</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-12 pt-lg-20 text-size">
                    <div className="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-12 col-12">
                                <div class="row mb-lg-14 mb-10 align-items-center">
                                    <div class="col-lg-5 col-12 cimage justify-content-center align-items-center">
                                        {/* <img className="mb-10" src={ClientImg} alt="" /> */}
                                        <h2 className="font-size-13 mb-0">phoneIQ</h2>
                                    </div>
                                    <div class="col-lg-7 col-md-11 mt-10">
                                        <h2 className="font-size-10">The client</h2>
                                        <div className="service-post-divider "></div>
                                        <p>PhoneIQ provides an all-in-one cloud phone system and call centre software for companies that run on the Salesforce platform.</p>
                                        <p>The pandemic forced companies to shift into the remote working realm. PhoneIQ saw a massive increase in the number of companies that now needed its world-leading communication platform. </p>
                                        <p>As its client base grew, PhoneIQ wanted to increase its output of high-quality content provided to its audience. They swiftly realised how this could improve conversions and positively impact their SEO strategy. </p>
                                        {/* <p>The system was working well, but PhoneIQ wanted to increase its output of high-quality content for SEO purposes. They needed a content agency that could provide a wide range of writers with the necessary research skills to produce up-to-date and accurate technology content. Luckily for them, this is where Strategically excels.</p> */}
                                    </div>
                                </div>
                                <h2 className="font-size-10 text-left my-lg-10 my-5">The problem</h2>
                                <p>PhoneIQ faced a significant challenge in delivering interesting and updated tech-related articles, especially considering the sector moves at lightning speed with constant innovation and development. </p>
                                <p>In particular, PhoneIQ understood that writing in the technology sector required writers to be <a href="#">"very focused on checking for updated sources and trends.”</a> In addition, they knew that the writers would need excellent research skills to deliver the type of content they desired.</p>
                                <p>To start with, their marketing team managed all of the content in-house. PhoneIQ had team members write the articles required and then moved to hire an independent <a href="#">tech content writing service </a>to help as guest writers.</p>
                                <p>The system was working well, but PhoneIQ wanted to increase its output of high-quality content for SEO purposes. They needed a content agency that could provide a wide range of writers with the necessary research skills to produce up-to-date and accurate technology content. Luckily for them, this is where Strategically excels. </p>
                                {/* <p>PhoneIQ found Strategically after looking for additional technical writers online. They contacted us and agreed to let us write a sample piece for them. We scoured our network of in-house writers to find the perfect writer for the assignment. They were instantly impressed by what we produced. </p>
                                <p><span className="purple">"We agreed to have them write an article for us so [that] we could assess their service, and I was positively impressed."</span></p>
                                <p>One thing that piqued PhoneIQ's attention was the team's responsiveness to their queries, giving them the confidence to know that any potential problems arising would be quickly resolved.</p>
                                <p>From then on, it was plain sailing. We're proficient and highly experienced in providing high-quality SEO content consistently. It's what we're born to do. PhoneIQ lets us know the article needed - and we handle the rest. </p>
                                <p><span className="purple">"Finding Strategically was great. I just brief them on the article we need and have been very happy with the results so far. They're very responsive and timely."</span></p>
                                <p>We asked PhoneIQ for feedback on our services, and they emphasised our excellent communication and speed of delivery. </p>
                                <p>In addition, they seldom need revisions when we deliver the content. This is partly due to our vast network of skilled writers and partly because we have a knack for picking an ideally-suited author. Furthermore, our writing process is an in-depth and rigorous endeavour - we leave no stone unturned - ensuring our satisfied clients always have the finished product they visualized.</p>
                                <p><span className="purple">"I find your services to be really reliable in time as well as expected quality. Communication is great and is all in all a great partner that helps us deliver high quality content to our audience. I hardly ever need to ask for any revisions. Articles are checked in spelling, headings and subheadings, etc."</span></p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pb-10 text-size">
                    <div className="container">
                        <h2 className="font-size-10 mb-lg-10 mb-5">The solution</h2>
                        <p>PhoneIQ found Strategically after looking for additional technical writers online. They contacted us and agreed to let us write a sample piece for them. We scoured our network of in-house writers to find the perfect writer for the assignment. They were instantly impressed by what we produced.</p>
                        <div className="">
                            <div class="quote-blk py-14 px-14 text-center my-10">
                                <h3 className="text-white my-0">"We agreed to have them write an article for us so [that] we could assess their service, and I was positively impressed."</h3>
                            </div>
                        </div>
                        <p>One thing that piqued PhoneIQ's attention was the team's responsiveness to their queries, giving them the confidence to know that any potential problems arising would be quickly resolved. </p>
                        <p>From then on, it was plain sailing. We're proficient and highly experienced in providing high-quality SEO content consistently. It's what we're born to do. PhoneIQ lets us know the article needed - and we handle the rest. </p>
                        <div className="">
                            <div class="quote-blk py-14 px-14 text-center my-10">
                                <h3 className="text-white my-0">"Finding Strategically was great. I just brief them on the article we need and have been very happy with the results so far. They're very responsive and timely."</h3>
                            </div>
                        </div>
                        <p>We asked PhoneIQ for feedback on our services, and they emphasised our excellent communication and speed of delivery.</p>
                        <p>In addition, they seldom need revisions when we deliver the content. This is partly due to our vast network of skilled writers and partly because we have a knack for picking an ideally-suited author. Furthermore, our writing process is an in-depth and rigorous endeavour - we leave no stone unturned - ensuring our satisfied clients always have the finished product they visualized.</p>
                        <div className="">
                            <div class="quote-blk py-14 px-14 text-center my-10">
                                <h3 className="text-white my-0">"I find your services to be really reliable in time as well as expected quality. Communication is great and is all in all a great partner that helps us deliver high quality content to our audience. I hardly ever need to ask for any revisions. Articles are checked in spelling, headings and subheadings, etc."</h3>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h2 className="font-size-10 mb-lg-10 mb-5 mt-10">The impact</h2>
                        <p>The impact for PhoneIQ after working with Strategically has allowed it to continue publishing high-quality content, driving towards its SEO goals. PhoneIQ has also seen its baseline website metrics substantially increase due to the SEO content provided - that seems like a double win!
                        </p> <div className="">
                            <div class="quote-blk py-14 px-14 text-center my-10">
                                <h3 className="text-white my-0">"It's great. It has given us the possibility to continue delivering high quality content and that has helped us increase our website's metrics."</h3>
                            </div>
                        </div>
                        <p>PhoneIQ also mentioned that better results and easier workflow were additional benefits of working with us. When asked how PhoneIQ defines success in regards to our partnership, they stated that Strategically offers, <span className="purple">"Good communication [is key], adherence to schedule, number of articles published, number of revisions per article."</span></p>

                        <p>Overall, that's another satisfied client whose benchmark metrics continue to increase due to the high-quality content delivered by Strategically. </p>
                    </div>

                </div>
                <ReadOurBlog />
            </PageWrapper>
        </>
    );
};
export default Sanctions;
