import React from "react";

import PageWrapper from "../components/PageWrapper";
import Helmet from "react-helmet";

import Icon1 from "../assets/images/icon-traffic.png";
import Icon2 from "../assets/images/icon-value.png";
import Icon3 from "../assets/images/icon-links.png";
import AboutImg from "../assets/images/about-img.png";
import FeaturedImg1 from "../assets/images/featured-img1.jpg"
import FeaturedImg2 from "../assets/images/feature-img2.jpg"
import FeaturedImg3 from "../assets/images/feature-img3.jpg"
import FeaturedImg4 from "../assets/images/feature-img4.jpg"

import FeaturedImg5 from "../assets/images/casper-thumb.png"
import FeaturedImg6 from "../assets/images/thumb-gifts.png"
import FeaturedImg7 from "../assets/images/thumb-values.jpg"

import RightArrow from "../assets/images/right-arrow.png"




const CaseSudyPage = () => {
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
                <div className="pt-26 pt-lg-30 pb-8 pb-lg-16">
                    <div className="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 col-12">
                                <h2 class="font-size-md-12 font-size-10 text-center mb-7">How Siege Media Grew Shutterfly's Blog to $1,700,000 in Monthly Traffic Value</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-dark-cloud w-full py-md-20 py-14  text-center">
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col-md-4 col-sm-6 mb-5">
                                <img src={Icon1} alt="" />
                                <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">0 to 2.5M</h2>
                                <h5 className="text-center text-white">in organic traffic</h5>
                            </div>
                            <div class="col-md-4 col-sm-6 mb-5">
                                <img src={Icon2} alt="" />
                                <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">1.7M</h2>
                                <h5 className="text-center text-white">monthly traffic value</h5>
                            </div>
                            <div class="col-md-4 col-sm-6 mb-5">
                                <img src={Icon3} alt="" />
                                <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">7,000+</h2>
                                <h5 className="text-center text-white">links earned</h5>
                            </div>
                        </div>
                        </div>
                </div>


                <div className="py-12 py-lg-20 text-size">
                    <div className="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-10 col-12">
                                <div class="row mb-lg-20 mb-10">
                                    <div class="col-lg-6 col-12">
                                        <img className="w-100 mb-5" src={AboutImg} alt="" />
                                    </div>
                                    <div class="col-lg-6 col-md-11">
                                        <h2 className="font-size-10">The Client</h2>
                                        <div className="service-post-divider "></div>
                                        <p>Shutterfly turns the photos you love into award-winning photo books, meaningful cards, unique photo gifts, home decor and so much more.</p>
                                        <p><strong>Industry:</strong> eCommerce</p>
                                        <p><strong>Location:</strong> San Francisco, California</p>
                                        <p><strong>Services Provided:</strong> Content Marketing</p>
                                    </div>
                                </div>
                                <h2 className="font-size-10 text-left mb-10">Challenges</h2>
                                <p>Shutterfly recently launched their new blog under their “Ideas” subfolder, but lacked the internal resources to get it up and running. They needed a partner who understood the powerful traffic engine of SEO-driven content, as well as the ability to create high-quality, well-branded content.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-default-3 pt-12 pt-md-18 pb-lg-10 pb-5 pt-lg-22 text-center">
                    <div className="container">
                        <h2 className="font-size-10 mb-md-14 mb-8">Featured Content</h2>
                        <div class="row">
                            <div class="col-md-6 mb-md-12 mb-8">
                                <a href="#">
                                    <img className="w-100 mb-8" src={FeaturedImg1} alt="" />
                                    <h3 className="font-size-9">Wedding Hashtag Interactive</h3>
                                    <p class="teaser-subtitle font-size-8">Ranking #1 for “mother's day quotes," Est. 26,400,000 visitors/year, 184 links</p>
                                </a>
                            </div>
                            <div class="col-md-6 mb-md-12 mb-8">
                                <a href="#">
                                    <img className="w-100 mb-8" src={FeaturedImg2} alt="" />
                                    <h3 className="font-size-9">Mother's Day Quotes</h3>
                                    <p class="teaser-subtitle font-size-8">Ranking #1 for “mother's day quotes," Est. 26,400,000 visitors/year, 184 links</p>
                                </a>
                            </div>
                            <div class="col-md-6 mb-md-12 mb-8">
                                <a href="#">
                                    <img className="w-100 mb-8" src={FeaturedImg3} alt="" />
                                    <h3 className="font-size-9">Difference Between Ms. and Mrs.</h3>
                                    <p class="teaser-subtitle font-size-8">Ranking #1, Est. 48,700 visits/month, 72 links</p>
                                </a>
                            </div>
                            <div class="col-md-6 mb-md-12 mb-8">
                                <a href="#">
                                    <img className="w-100 mb-8" src={FeaturedImg4} alt="" />
                                    <h3 className="font-size-9">Graduation Party Ideas for Your Celebration</h3>
                                    <p class="teaser-subtitle font-size-8">260,000+ YouTube views</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="pt-12 pt-lg-18 pb-10 pt-lg-22 text-size">
                    <div className="container">

                        <h2 className="font-size-10 mb-lg-14 mb-5">Growth Summary</h2>

                        <p>product lines spanning wedding, graduation, babies and the holiday season. Through high-quality content generated over several years, we helped Shutterfly significantly build their traffic and sales.</p>
                        <p>We flexed our wide range of SEO-focused content creation capabilities, creating interactives, videos, product photography, blog articles and more.</p>
                        <p>Given Shutterfly had strong existing authority, most of the link building performed was done through passive link acquisition via the rankings and traffic generated. We ran the content strategy and creation end-to-end and actively scaled up content for Shutterfly, creating more than 500 unique pieces over three years to power the company to over 2,500,000 monthly visits.</p>

                    </div>
                </div>
                <div class="pt-0 pb-10 py-lg-22 d-flex justify-content-center align-items-center text-center">
                    <div className="container">
                        <h2 className="font-size-md-12 font-size-10 mb-lg-20 mb-10">Drive more traffic, links and revenue for your company.</h2>
                        <a class="btn btn btn-dodger-blue-2 header-btn rounded-5 px-10" href="#">Get a Free ROI Analysis</a>
                    </div>
                </div>

                <div class="bg-default-3 pt-12 pt-md-18 pb-10 pt-lg-22 text-center">
                    <div className="container">
                        <h2 className="font-size-10 mb-md-12 mb-8">Related Work</h2>
                        <div class="row">
                            <div class="col-md-4  mb-md-12 mb-8">
                                <a href="">
                                    <img className="w-100 mb-6" src={FeaturedImg5} alt="" />
                                    <h3 className="font-size-8">$796,000/mo Traffic Value Increase for Casper</h3>
                                </a>
                            </div>
                            <div class="col-md-4 mb-md-12 mb-8">
                                <a href="">
                                    <img className="w-100 mb-6" src={FeaturedImg6} alt="" />
                                    <h3 className="font-size-8">0 to 300,000+ Visits for Gifts.com</h3>
                                </a>
                            </div>
                            <div class="col-md-4 mb-md-12 mb-8">
                                <a href="">
                                    <img className="w-100 mb-6" src={FeaturedImg7} alt="" />
                                    <h3 className="font-size-8">0 to 1,000,000+ Monthly Traffic for FTD</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-dark py-md-22 py-10 text-center">
                    <div className="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 col-12">
                                <h2 className="font-size-11 font-weight-normal mb-10 text-gray-2">Let's create something amazing together</h2>
                                <img src={RightArrow} alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>

    );
};
export default CaseSudyPage;
