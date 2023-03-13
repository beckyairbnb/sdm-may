import React from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from "react-helmet";

import PageWrapper from "../components/PageWrapper";

import "../layout/landing-css.css"

import heroImg from "../assets/images/landing/hero-img.png";
import contentImg from "../assets/images/landing/content-img.png"
import client1Img from "../assets/images/landing/client1.png"
import client2Img from "../assets/images/landing/client2.png"
import client3Img from "../assets/images/landing/client3.png"
import client4Img from "../assets/images/landing/client4.png"
import client5Img from "../assets/images/landing/client5.png"
import client6Img from "../assets/images/landing/client6.png"
import reviewImg from "../assets/images/landing/review-img.png"
import increaseImg from "../assets/images/landing/increase-img.png"

const LandingPage = (props) => {
    return (
        <>
            <Helmet>
                <title>Professional content writing services | B2B Content writing agency</title>
                <meta name="description" content="High-quality content writing services from an agency you can trust. Just ask our customers" />
            </Helmet>
            <PageWrapper
                themeConfig={{
                    headerClassName: "site-header--menu-right",
                    headerButton: (
                        <>
                            <Link className="btn btn btn-dodger-blue-2 header-btn rounded-5" to={"/get-a-quote/"}>
                                Get a quote
                            </Link>
                        </>
                    ),
                    footerStyle: "style2",
                }}
            >
                <div className="landing-wrapper">
                <section class="herosection w-100 float-left overflow-hidden">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-xs-12">
                                <div class="pr-xl-4 pt-4">
                                    <h2 class="display-4 font-weight-bold mb-4">Grow your business with on-demand content creation</h2>
                                    <div class="hero-img mobile w-100 float-left">
                                    <img src={heroImg} alt="" />
                                    </div>
                                    <p class="lead font-weight-normal mb-4">We work with 300+ clients to create high-quality SEO content that
                                        increases traffic, conversions, and revenue.</p>
                                    <a href="#" class="btn1 bg-pink text-white">Book a discovery call</a>
                                </div>
                            </div>
                            <div class="col-md-6 col-xs-12">
                                <div class="hero-img desktop w-100 float-left position-relative ">
                                <img src={heroImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-waves position-relative"></div>
                </section>

                <section class="customersection w-100 float-left text-center position-relative overflow-hidden">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 offset-lg-1 col-xs-12">
                                <h2 class="font-weight-bold mb-4">SEO-focused, customer-driven content that drives growth</h2>
                                <p class="lead font-weight-normal mb-5">Whether you want an eBook, blog, or anything in between, we’ll pair
                                    you with a dedicated writer matching your tone of voice, target audience, and industry. Smash your content
                                    goals with a team that is laser-focused on generating ROI from your content marketing strategy.</p>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-md-4 col-xs-12 mb-md-0 mb-5 sub_box_outer">
                                <div
                                    class="bg-light p-lg-4 p-3 rounded-25 sub_box d-flex justify-content-start align-items-center flex-column h-100 mb-5">
                                    <div class="icon bg-light-blue rounded-10 d-flex justify-content-center align-items-center mb-4">
                                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2"
                                                d="M10.0352 47.3047L16.6524 9.81647C16.6986 9.53353 16.8007 9.26263 16.9527 9.01956C17.1047 8.77648 17.3036 8.5661 17.5377 8.40067C17.7719 8.23524 18.0366 8.11807 18.3165 8.056C18.5964 7.99393 18.8859 7.98819 19.168 8.03912L34.2617 10.6915C34.832 10.7981 35.3377 11.1242 35.67 11.5998C36.0024 12.0753 36.1349 12.6622 36.0391 13.2344L29.3945 50.9415C28.9395 53.4805 27.5087 55.7405 25.4083 57.2379C23.3079 58.7352 20.7049 59.3509 18.1563 58.9532C12.7149 58.0782 9.07814 52.7462 10.0352 47.3047Z"
                                                fill="#288BFD" />
                                            <path
                                                d="M10.0352 47.3047L16.6524 9.81647C16.6986 9.53353 16.8007 9.26263 16.9527 9.01956C17.1047 8.77648 17.3036 8.5661 17.5377 8.40067C17.7719 8.23524 18.0366 8.11807 18.3165 8.056C18.5964 7.99393 18.8859 7.98819 19.168 8.03912L34.2617 10.6915C34.832 10.7981 35.3377 11.1242 35.67 11.5998C36.0024 12.0753 36.1349 12.6622 36.0391 13.2344L29.3945 50.9415C28.9395 53.4805 27.5087 55.7405 25.4083 57.2379C23.3079 58.7352 20.7049 59.3509 18.1563 58.9532C12.7149 58.0782 9.07814 52.7462 10.0352 47.3047Z"
                                                stroke="#288BFD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M32.3477 34.1251L52.2812 26.879C52.5523 26.7789 52.8404 26.7335 53.129 26.7454C53.4177 26.7573 53.7011 26.8262 53.963 26.9483C54.2248 27.0703 54.4599 27.243 54.6547 27.4564C54.8494 27.6697 55 27.9196 55.0977 28.1915L60.3477 42.5743C60.5413 43.1183 60.512 43.7168 60.2661 44.2392C60.0202 44.7617 59.5778 45.1658 59.0352 45.3633L23.0508 58.461"
                                                stroke="#288BFD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M60.1562 44.4336V56.875C60.1562 57.4552 59.9258 58.0116 59.5155 58.4218C59.1053 58.832 58.5489 59.0625 57.9688 59.0625H19.6875"
                                                stroke="#288BFD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M19.6875 52.5C21.4997 52.5 22.9688 51.0309 22.9688 49.2188C22.9688 47.4066 21.4997 45.9375 19.6875 45.9375C17.8753 45.9375 16.4062 47.4066 16.4062 49.2188C16.4062 51.0309 17.8753 52.5 19.6875 52.5Z"
                                                fill="#288BFD" />
                                        </svg>
                                    </div>
                                    <h3 class="font-weight-bold mb-4 mt-3">Content that compels & converts</h3>
                                    <p class="lead font-weight-normal">With more than 300 clients and only 5 star reviews, you can trust us to
                                        smash your sales copy. Get ready to grow your business with Strategically.</p>
                                </div>
                            </div>
                            <div class="col-md-4 col-xs-12 mb-md-0 mb-5 sub_box_outer">
                                <div
                                    class="bg-light p-lg-4 p-3 rounded-25 sub_box d-flex justify-content-start align-items-center flex-column h-100 mb-5">
                                    <div class="icon bg-light-pink rounded-10 d-flex justify-content-center align-items-center mb-4">
                                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2"
                                                d="M25.4844 33.5781C24.5361 31.2518 24.0531 28.7622 24.0625 26.25C24.0625 22.3562 25.2172 18.5498 27.3804 15.3122C29.5437 12.0746 32.6185 9.55123 36.2159 8.06113C39.8133 6.57103 43.7718 6.18115 47.5908 6.9408C51.4098 7.70045 54.9178 9.5755 57.6712 12.3288C60.4245 15.0822 62.2996 18.5902 63.0592 22.4092C63.8189 26.2282 63.429 30.1867 61.9389 33.7841C60.4488 37.3815 57.9254 40.4563 54.6878 42.6196C51.4502 44.7829 47.6438 45.9375 43.75 45.9375C41.2378 45.947 38.7482 45.4639 36.4219 44.5156L32.8125 48.125H26.25V54.6875H19.6875V61.25H8.75V50.3125L25.4844 33.5781Z"
                                                fill="#FF0088" />
                                            <path
                                                d="M25.4844 33.5781C24.5361 31.2518 24.0531 28.7622 24.0625 26.25C24.0625 22.3562 25.2172 18.5498 27.3804 15.3122C29.5437 12.0746 32.6185 9.55123 36.2159 8.06113C39.8133 6.57103 43.7718 6.18115 47.5908 6.9408C51.4098 7.70045 54.9178 9.5755 57.6712 12.3288C60.4245 15.0822 62.2996 18.5902 63.0592 22.4092C63.8189 26.2282 63.429 30.1867 61.9389 33.7841C60.4488 37.3815 57.9254 40.4563 54.6878 42.6196C51.4502 44.7829 47.6438 45.9375 43.75 45.9375C41.2378 45.947 38.7482 45.4639 36.4219 44.5156V44.5156L32.8125 48.125H26.25V54.6875H19.6875V61.25H8.75V50.3125L25.4844 33.5781Z"
                                                stroke="#FF0088" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M47.2812 25.5625C49.0934 25.5625 50.5625 24.0934 50.5625 22.2812C50.5625 20.4691 49.0934 19 47.2812 19C45.4691 19 44 20.4691 44 22.2812C44 24.0934 45.4691 25.5625 47.2812 25.5625Z"
                                                fill="#FF0088" />
                                        </svg>
                                    </div>
                                    <h3 class="font-weight-bold mb-4 mt-3">One-size does not fit all companies</h3>
                                    <p class="lead font-weight-normal">By digging into your needs, we align your content with your target
                                        audience’s needs and unique business goals.</p>
                                </div>
                            </div>
                            <div class="col-md-4 col-xs-12 sub_box_outer">
                                <div
                                    class="bg-light p-lg-4 p-3 rounded-25 sub_box d-flex justify-content-start align-items-center flex-column h-100 mb-5">
                                    <div class="icon bg-sky rounded-10 d-flex justify-content-center align-items-center mb-4">
                                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2"
                                                d="M59.0625 13.125H10.9375C10.3573 13.125 9.80094 13.3555 9.3907 13.7657C8.98047 14.1759 8.75 14.7323 8.75 15.3125V59.0625L17.5 54.6875L26.25 59.0625L35 54.6875L43.75 59.0625L52.5 54.6875L61.25 59.0625V15.3125C61.25 14.7323 61.0195 14.1759 60.6093 13.7657C60.1991 13.3555 59.6427 13.125 59.0625 13.125ZM30.625 43.75H17.5V26.25H30.625V43.75Z"
                                                fill="#55BFDE" />
                                            <path
                                                d="M8.75 59.0625V15.3125C8.75 14.7323 8.98047 14.1759 9.3907 13.7657C9.80094 13.3555 10.3573 13.125 10.9375 13.125H59.0625C59.6427 13.125 60.1991 13.3555 60.6093 13.7657C61.0195 14.1759 61.25 14.7323 61.25 15.3125V59.0625L52.5 54.6875L43.75 59.0625L35 54.6875L26.25 59.0625L17.5 54.6875L8.75 59.0625Z"
                                                stroke="#55BFDE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M39.375 30.625H52.5" stroke="#55BFDE" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M39.375 39.375H52.5" stroke="#55BFDE" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M30.625 26.25H17.5V43.75H30.625V26.25Z" stroke="#55BFDE" stroke-width="3"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <h3 class="font-weight-bold mb-4 mt-3">Data-backed strategies</h3>
                                    <p class="lead font-weight-normal">90% of content online never ranks. We think that’s a waste of time. Our
                                        data-backed strategies find lucrative keywords to target.</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-100 d-inline-block mt-md-5"><a href="#" class="bg-sky btn1 border-2 border-blue text-blue">Book a
                            discovery call</a></div>
                    </div>
                </section>

                <section class="contentsection bg-light w-100 float-left text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 offset-lg-1 col-xs-12">
                                <div class="content_blk w-100 float-left position-relative">
                                    <h2 class="font-weight-bold mb-4">We write content that increases traffic, converts readers, and makes you
                                        money</h2>
                                    <img src={contentImg} alt="" class="mobile mb-4" />
                                    <p class="lead font-weight-normal mb-md-5 mb-4">We’ve worked with more than 300 clients and written over 8
                                        million
                                        words. We use our<br /> expert insight to increase your traffic and conversions.</p>
                                    <img src={contentImg} alt="" class="desktop mb-5" />
                                    <div class="w-100 d-inline-block"><a href="#" class="bg-blue btn1 text-white">Book a
                                        discovery call</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="casestudies w-100 float-left text-center position-relative">
                    <div class="container">
                        <h2 class="font-weight-bold mb-4">5 star reviews, case studies. We’re proud as punch.</h2>
                        <p class="lead font-weight-normal mb-5">We’re not the type to brag, so we’ll let our customers do the talking.
                            We’ve got 5 star reviews and case studies<br /> from clients of all sizes and industries.</p>
                        <ul class="row list-inline mt-10 pt-10">
                            <li class="col-lg-4 col-sm-6 col-xs-12 mb-8">
                                <div class="s_box bg-light p-3 pt-5 text-center mb-5 rounded-25 position-relative">
                                    <img src={client1Img} alt="" class="client_img mb-3" />
                                    <p class="lead font-weight-medium mb-3">Increased traffic by 2X in 6 months</p>
                                </div>
                            </li>
                            <li class="col-lg-4 col-sm-6 col-xs-12 mb-8">
                                <div class="s_box bg-light p-3 pt-5 text-center mb-5 rounded-25 position-relative">
                                    <img src={client2Img} alt="" class="client_img mb-3" />
                                    <p class="lead font-weight-medium mb-3">0 to £1 million in revenue in 1 year</p>
                                </div>
                            </li>
                            <li class="col-lg-4 col-sm-6 col-xs-12 mb-8">
                                <div class="s_box bg-light p-3 pt-5 text-center mb-5 rounded-25 position-relative">
                                    <img src={client3Img} alt="" class="client_img mb-3" />
                                    <p class="lead font-weight-medium mb-3">Improved all website metrics</p>
                                </div>
                            </li>
                            <li class="col-lg-4 col-sm-6 col-xs-12 mb-8">
                                <div class="s_box bg-light p-3 pt-5 text-center mb-5 rounded-25 position-relative">
                                    <img src={client4Img} alt="" class="client_img mb-3" />
                                    <p class="lead font-weight-medium mb-3">90% increase in coversions</p>
                                </div>
                            </li>
                            <li class="col-lg-4 col-sm-6 col-xs-12 mb-8">
                                <div class="s_box bg-light p-3 pt-5 text-center mb-5 rounded-25 position-relative">
                                    <img src={client5Img} alt="" class="client_img mb-3" />
                                    <p class="lead font-weight-medium mb-3">25% decrease in cost per click</p>
                                </div>
                            </li>
                            <li class="col-lg-4 col-sm-6 col-xs-12 mb-8">
                                <div class="s_box bg-light p-3 pt-5 text-center mb-md-5 rounded-25 position-relative">
                                    <img src={client6Img} alt="" class="client_img mb-3" />
                                    <p class="lead font-weight-medium mb-3">Increased traffic by 2X in 6 months</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section class="reviews_blk w-100 float-left pt-10 pb-8 text-center">
                    <div class="container my-4">
                        <h2 class="text-white mb-4">Read the 5 star reviews</h2>
                        <img src={reviewImg} alt="" class="w-auto" width="230" height="115" />
                        <a href="#" class="w-100 d-inline-block mt-4 lead font-weight-medium">See why we’re the best content writing
                            agency <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 16H27" stroke="#55BFDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18 7L27 16L18 25" stroke="#55BFDE" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </section>

                <section class="tired w-100 float-left position-relative ">
                    <div class="container">
                        <h2 class="font-weight-bold mb-4 text-center">Tired of this list of content creation jobs? We’ll take ‘em off your
                            hands</h2>
                        <p class="text-center lead mb-5 font-weight-bold">Looking for something else? Let us know on your discovery call,
                            and we’ll add it to your package.</p>
                        <div class="row ">
                            <div class="col-md-4 col-xs-12">
                                <ul class="pl-0">
                                    <li class="mb-2 position-relative pl-4  "><a class="lead font-weight-medium text-dark" href="#">Keyword
                                        research</a></li>
                                    <li class="mb-2 position-relative pl-4 "><a class="lead font-weight-medium text-dark" href="#">Brand
                                        guidelines</a></li>
                                    <li class="mb-2 position-relative pl-4 "><a class="lead font-weight-medium text-dark" href="#">Topic
                                        ideation</a></li>
                                    <li class="mb-2 position-relative pl-4 "><a class="lead font-weight-medium text-dark"
                                        href="#">Proofreading</a></li>
                                    <li class="mb-1 position-relative pl-4 "><a class="lead font-weight-medium text-dark" href="#">Customer
                                        personas</a></li>
                                    <li class="mb-1 position-relative pl-4 "><a class="lead font-weight-medium text-dark" href="#">Compelling
                                        copy</a></li>


                                </ul>
                            </div>
                            <div class="col-md-4 col-xs-12">
                                <ul class="pl-0">
                                    <li class="mb-2 position-relative pl-3 "><a class="lead font-weight-medium text-dark" href="#">Landing pages
                                        for ads</a></li>
                                    <li class="mb-2 position-relative pl-3 "><a class="lead font-weight-medium text-dark" href="#">Crafting
                                        headings</a></li>
                                    <li class="mb-2 position-relative pl-3 "><a class="lead font-weight-medium text-dark" href="#">Copy
                                        hierarchy</a></li>
                                    <li class="mb-2 position-relative pl-3 "><a class="lead font-weight-medium text-dark" href="#">Target
                                        audience personas</a></li>
                                    <li class="mb-1 position-relative pl-3 "><a class="lead font-weight-medium text-dark" href="#">Brand tone of
                                        voice</a></li>
                                    <li class="mb-1 position-relative pl-3 "><a class="lead font-weight-medium text-dark" href="#">Call to
                                        action wording</a></li>

                                </ul>

                            </div>
                            <div class="col-md-4 col-xs-12">
                                <ul class="pl-0">
                                    <li class="mb-2 position-relative pl-3 "><a class="lead font-weight-medium text-dark"
                                        href="#">Conversion-focused copy</a></li>
                                    <li class="mb-2 position-relative pl-3 "><a class="lead font-weight-medium text-dark" href="#">Typos and
                                        human-error</a></li>
                                    <li class="mb-2 position-relative pl-3 "><a class="lead font-weight-medium text-dark" href="#">Oxford
                                        commas</a></li>
                                    <li class="mb-2 position-relative pl-3 "><a class="lead font-weight-medium text-dark" href="#">Content
                                        calendar</a></li>
                                    <li class="mb-2 position-relative pl-3 "><a class="lead font-weight-medium text-dark" href="#">Managing
                                        writers</a></li>
                                    <li class="mb-2 position-relative pl-3 "><a class="lead font-weight-medium text-dark" href="#">Relevant
                                        topics</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="content-section bg-light py-5 w-100 float-left position-relative">
                    <div class="pink_cross">
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.33548 23C2.67647 23.0003 2.03217 22.8052 1.48405 22.4394C0.935925 22.0735 0.508568 21.5533 0.256051 20.9446C0.00353466 20.3359 -0.0628301 19.666 0.06536 19.0196C0.19355 18.3732 0.510547 17.7793 0.976242 17.313L17.313 0.976289C17.9381 0.351178 18.786 -6.87665e-08 19.67 0C20.5541 6.87664e-08 21.4019 0.351178 22.027 0.976289C22.6521 1.6014 23.0033 2.4492 23.0033 3.33325C23.0033 4.21729 22.6521 5.06515 22.027 5.69026L5.69021 22.027C5.38115 22.3363 5.01406 22.5815 4.60995 22.7484C4.20584 22.9154 3.77272 23.0009 3.33548 23Z"
                                fill="#FF0088" />
                            <path
                                d="M19.6723 23C18.788 23.0011 17.9394 22.6511 17.313 22.027L0.976289 5.69026C0.666765 5.38073 0.421226 5.01327 0.253713 4.60886C0.0861994 4.20445 3.40496e-08 3.77098 0 3.33325C-3.40497e-08 2.89551 0.0861995 2.4621 0.253713 2.05769C0.421226 1.65327 0.666765 1.28581 0.976289 0.976289C1.28581 0.666765 1.65327 0.421226 2.05769 0.253713C2.4621 0.0861995 2.89557 -3.40497e-08 3.3333 0C3.77103 3.40496e-08 4.20445 0.0861994 4.60886 0.253713C5.01327 0.421226 5.38073 0.666765 5.69026 0.976289L22.027 17.313C22.4924 17.7791 22.8093 18.3725 22.9377 19.0185C23.066 19.6645 23 20.3341 22.7481 20.9426C22.4961 21.5511 22.0694 22.0713 21.522 22.4375C20.9745 22.8037 20.3309 22.9994 19.6723 23Z"
                                fill="#FF0088" />
                        </svg>
                    </div>
                    <div class="blue_cross">
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.33548 23C2.67647 23.0003 2.03217 22.8052 1.48405 22.4394C0.935925 22.0735 0.508568 21.5533 0.256051 20.9446C0.00353466 20.3359 -0.0628301 19.666 0.06536 19.0196C0.19355 18.3732 0.510547 17.7793 0.976242 17.313L17.313 0.976289C17.9381 0.351178 18.786 -6.87665e-08 19.67 0C20.5541 6.87664e-08 21.4019 0.351178 22.027 0.976289C22.6521 1.6014 23.0033 2.4492 23.0033 3.33325C23.0033 4.21729 22.6521 5.06515 22.027 5.69026L5.69021 22.027C5.38115 22.3363 5.01406 22.5815 4.60995 22.7484C4.20584 22.9154 3.77272 23.0009 3.33548 23Z"
                                fill="#288BFD" />
                            <path
                                d="M19.6723 23C18.788 23.0011 17.9394 22.6511 17.313 22.027L0.976289 5.69026C0.666765 5.38073 0.421226 5.01327 0.253713 4.60886C0.0861994 4.20445 3.40496e-08 3.77098 0 3.33325C-3.40497e-08 2.89551 0.0861995 2.4621 0.253713 2.05769C0.421226 1.65327 0.666765 1.28581 0.976289 0.976289C1.28581 0.666765 1.65327 0.421226 2.05769 0.253713C2.4621 0.0861995 2.89557 -3.40497e-08 3.3333 0C3.77103 3.40496e-08 4.20445 0.0861994 4.60886 0.253713C5.01327 0.421226 5.38073 0.666765 5.69026 0.976289L22.027 17.313C22.4924 17.7791 22.8093 18.3725 22.9377 19.0185C23.066 19.6645 23 20.3341 22.7481 20.9426C22.4961 21.5511 22.0694 22.0713 21.522 22.4375C20.9745 22.8037 20.3309 22.9994 19.6723 23Z"
                                fill="#288BFD" />
                        </svg>
                    </div>
                    <div class="green_cross">
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.33548 23C2.67647 23.0003 2.03217 22.8052 1.48405 22.4394C0.935925 22.0735 0.508568 21.5533 0.256051 20.9446C0.00353466 20.3359 -0.0628301 19.666 0.06536 19.0196C0.19355 18.3732 0.510547 17.7793 0.976242 17.313L17.313 0.976289C17.9381 0.351178 18.786 -6.87665e-08 19.67 0C20.5541 6.87664e-08 21.4019 0.351178 22.027 0.976289C22.6521 1.6014 23.0033 2.4492 23.0033 3.33325C23.0033 4.21729 22.6521 5.06515 22.027 5.69026L5.69021 22.027C5.38115 22.3363 5.01406 22.5815 4.60995 22.7484C4.20584 22.9154 3.77272 23.0009 3.33548 23Z"
                                fill="#27AE60" />
                            <path
                                d="M19.6723 23C18.788 23.0011 17.9394 22.6511 17.313 22.027L0.976289 5.69026C0.666765 5.38073 0.421226 5.01327 0.253713 4.60886C0.0861994 4.20445 3.40496e-08 3.77098 0 3.33325C-3.40497e-08 2.89551 0.0861995 2.4621 0.253713 2.05769C0.421226 1.65327 0.666765 1.28581 0.976289 0.976289C1.28581 0.666765 1.65327 0.421226 2.05769 0.253713C2.4621 0.0861995 2.89557 -3.40497e-08 3.3333 0C3.77103 3.40496e-08 4.20445 0.0861994 4.60886 0.253713C5.01327 0.421226 5.38073 0.666765 5.69026 0.976289L22.027 17.313C22.4924 17.7791 22.8093 18.3725 22.9377 19.0185C23.066 19.6645 23 20.3341 22.7481 20.9426C22.4961 21.5511 22.0694 22.0713 21.522 22.4375C20.9745 22.8037 20.3309 22.9994 19.6723 23Z"
                                fill="#27AE60" />
                        </svg>
                    </div>
                    <div class="purple_cross">
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.33548 23C2.67647 23.0003 2.03217 22.8052 1.48405 22.4394C0.935925 22.0735 0.508568 21.5533 0.256051 20.9446C0.00353466 20.3359 -0.0628301 19.666 0.06536 19.0196C0.19355 18.3732 0.510547 17.7793 0.976242 17.313L17.313 0.976289C17.9381 0.351178 18.786 -6.87665e-08 19.67 0C20.5541 6.87664e-08 21.4019 0.351178 22.027 0.976289C22.6521 1.6014 23.0033 2.4492 23.0033 3.33325C23.0033 4.21729 22.6521 5.06515 22.027 5.69026L5.69021 22.027C5.38115 22.3363 5.01406 22.5815 4.60995 22.7484C4.20584 22.9154 3.77272 23.0009 3.33548 23Z"
                                fill="#9B59B6" />
                            <path
                                d="M19.6723 23C18.788 23.0011 17.9394 22.6511 17.313 22.027L0.976289 5.69026C0.666765 5.38073 0.421226 5.01327 0.253713 4.60886C0.0861994 4.20445 3.40496e-08 3.77098 0 3.33325C-3.40497e-08 2.89551 0.0861995 2.4621 0.253713 2.05769C0.421226 1.65327 0.666765 1.28581 0.976289 0.976289C1.28581 0.666765 1.65327 0.421226 2.05769 0.253713C2.4621 0.0861995 2.89557 -3.40497e-08 3.3333 0C3.77103 3.40496e-08 4.20445 0.0861994 4.60886 0.253713C5.01327 0.421226 5.38073 0.666765 5.69026 0.976289L22.027 17.313C22.4924 17.7791 22.8093 18.3725 22.9377 19.0185C23.066 19.6645 23 20.3341 22.7481 20.9426C22.4961 21.5511 22.0694 22.0713 21.522 22.4375C20.9745 22.8037 20.3309 22.9994 19.6723 23Z"
                                fill="#9B59B6" />
                        </svg>
                    </div>
                    <div class="sky_cross">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.335 22.9967C2.67609 22.997 2.03188 22.802 1.48384 22.4362C0.935792 22.0704 0.508496 21.5503 0.256015 20.9417C0.0035344 20.333 -0.0628209 19.6632 0.0653509 19.0169C0.193523 18.3706 0.510474 17.7768 0.976103 17.3106L17.3105 0.97615C17.9355 0.351128 18.7833 -6.87567e-08 19.6672 0C20.5511 6.87566e-08 21.3988 0.351127 22.0238 0.97615C22.6488 1.60117 23 2.44886 23 3.33277C23 4.21669 22.6488 5.06442 22.0238 5.68945L5.6894 22.0239C5.38039 22.3331 5.01334 22.5783 4.60929 22.7452C4.20525 22.9122 3.77219 22.9976 3.335 22.9967Z"
                                fill="#55BFDE" />
                            <path
                                d="M19.6695 22.9967C18.7853 22.9978 17.9369 22.6479 17.3106 22.0239L0.97615 5.68945C0.66667 5.37997 0.421166 5.01256 0.253677 4.6082C0.0861871 4.20385 3.40447e-08 3.77044 0 3.33277C-3.40448e-08 2.8951 0.0861872 2.46175 0.253677 2.05739C0.421166 1.65304 0.66667 1.28563 0.97615 0.97615C1.28563 0.66667 1.65304 0.421166 2.05739 0.253677C2.46175 0.0861872 2.89516 -3.40448e-08 3.33283 0C3.7705 3.40447e-08 4.20385 0.0861871 4.6082 0.253677C5.01256 0.421166 5.37997 0.66667 5.68945 0.97615L22.0239 17.3106C22.4892 17.7765 22.8061 18.3699 22.9344 19.0158C23.0627 19.6617 22.9968 20.3312 22.7448 20.9396C22.4929 21.548 22.0663 22.0682 21.5189 22.4343C20.9715 22.8005 20.328 22.9961 19.6695 22.9967Z"
                                fill="#55BFDE" />
                        </svg>
                    </div>
                    <div class="black_cross">
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.33548 23C2.67647 23.0003 2.03217 22.8052 1.48405 22.4394C0.935925 22.0735 0.508568 21.5533 0.256051 20.9446C0.00353466 20.3359 -0.0628301 19.666 0.06536 19.0196C0.19355 18.3732 0.510547 17.7793 0.976242 17.313L17.313 0.976289C17.9381 0.351178 18.786 -6.87665e-08 19.67 0C20.5541 6.87664e-08 21.4019 0.351178 22.027 0.976289C22.6521 1.6014 23.0033 2.4492 23.0033 3.33325C23.0033 4.21729 22.6521 5.06515 22.027 5.69026L5.69021 22.027C5.38115 22.3363 5.01406 22.5815 4.60995 22.7484C4.20584 22.9154 3.77272 23.0009 3.33548 23Z"
                                fill="#263247" />
                            <path
                                d="M19.6723 23C18.788 23.0011 17.9394 22.6511 17.313 22.027L0.976289 5.69026C0.666765 5.38073 0.421226 5.01327 0.253713 4.60886C0.0861994 4.20445 3.40496e-08 3.77098 0 3.33325C-3.40497e-08 2.89551 0.0861995 2.4621 0.253713 2.05769C0.421226 1.65327 0.666765 1.28581 0.976289 0.976289C1.28581 0.666765 1.65327 0.421226 2.05769 0.253713C2.4621 0.0861995 2.89557 -3.40497e-08 3.3333 0C3.77103 3.40496e-08 4.20445 0.0861994 4.60886 0.253713C5.01327 0.421226 5.38073 0.666765 5.69026 0.976289L22.027 17.313C22.4924 17.7791 22.8093 18.3725 22.9377 19.0185C23.066 19.6645 23 20.3341 22.7481 20.9426C22.4961 21.5511 22.0694 22.0713 21.522 22.4375C20.9745 22.8037 20.3309 22.9994 19.6723 23Z"
                                fill="#263247" />
                        </svg>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 offset-md-1 col-xs-12">
                                <h2 class="text-dark font-weight-bold text-center">We create kickass content that will actually get
                                    found and read</h2>
                                <p class="lead font-weight-normal mb-4 text-center pt-3 pb-4">When you create content, it costs you time or
                                    money. It’s only fair that it can be found online. But the vast majority of content never ranks — we think
                                    that sucks.</p>
                                <div class="d-flex mt-5 align-items-sm-center bg-white flex-sm-row flex-column rounded-25 p-4">
                                    <div class="bg-light-blue rounded-10 bg-box d-flex justify-content-center align-items-center">
                                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2"
                                                d="M10.9375 61.25C14.5619 61.25 17.5 58.3119 17.5 54.6875C17.5 51.0631 14.5619 48.125 10.9375 48.125C7.31313 48.125 4.375 51.0631 4.375 54.6875C4.375 58.3119 7.31313 61.25 10.9375 61.25Z"
                                                fill="#288BFD" />
                                            <path opacity="0.2"
                                                d="M26.25 32.8125C29.8744 32.8125 32.8125 29.8744 32.8125 26.25C32.8125 22.6256 29.8744 19.6875 26.25 19.6875C22.6256 19.6875 19.6875 22.6256 19.6875 26.25C19.6875 29.8744 22.6256 32.8125 26.25 32.8125Z"
                                                fill="#288BFD" />
                                            <path opacity="0.2"
                                                d="M43.75 50.3125C47.3744 50.3125 50.3125 47.3744 50.3125 43.75C50.3125 40.1256 47.3744 37.1875 43.75 37.1875C40.1256 37.1875 37.1875 40.1256 37.1875 43.75C37.1875 47.3744 40.1256 50.3125 43.75 50.3125Z"
                                                fill="#288BFD" />
                                            <path opacity="0.2"
                                                d="M59.0625 21.875C62.6869 21.875 65.625 18.9369 65.625 15.3125C65.625 11.6881 62.6869 8.75 59.0625 8.75C55.4381 8.75 52.5 11.6881 52.5 15.3125C52.5 18.9369 55.4381 21.875 59.0625 21.875Z"
                                                fill="#288BFD" />
                                            <path
                                                d="M10.9375 61.25C14.5619 61.25 17.5 58.3119 17.5 54.6875C17.5 51.0631 14.5619 48.125 10.9375 48.125C7.31313 48.125 4.375 51.0631 4.375 54.6875C4.375 58.3119 7.31313 61.25 10.9375 61.25Z"
                                                stroke="#288BFD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M26.25 32.8125C29.8744 32.8125 32.8125 29.8744 32.8125 26.25C32.8125 22.6256 29.8744 19.6875 26.25 19.6875C22.6256 19.6875 19.6875 22.6256 19.6875 26.25C19.6875 29.8744 22.6256 32.8125 26.25 32.8125Z"
                                                stroke="#288BFD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M43.75 50.3125C47.3744 50.3125 50.3125 47.3744 50.3125 43.75C50.3125 40.1256 47.3744 37.1875 43.75 37.1875C40.1256 37.1875 37.1875 40.1256 37.1875 43.75C37.1875 47.3744 40.1256 50.3125 43.75 50.3125Z"
                                                stroke="#288BFD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M59.0625 21.875C62.6869 21.875 65.625 18.9369 65.625 15.3125C65.625 11.6881 62.6869 8.75 59.0625 8.75C55.4381 8.75 52.5 11.6881 52.5 15.3125C52.5 18.9369 55.4381 21.875 59.0625 21.875Z"
                                                stroke="#288BFD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M23.1328 32.0195L14.0547 48.918" stroke="#288BFD" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M39.1016 39.1016L30.8984 30.8984" stroke="#288BFD" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M55.9453 21.082L46.8672 37.9805" stroke="#288BFD" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div class="ml-sm-4 mt-sm-0 mt-4">
                                        <h4 class="text-black display-5 font-weight-bold">Ongoing consultation</h4>
                                        <p class="lead font-weight-normal pt-1">All of our projects include kick-off calls and regular feedback
                                            points. No questions asked. </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-5 align-items-sm-center bg-white flex-sm-row flex-column rounded-25 p-4">
                                    <div class="bg-light-pink rounded-10 bg-box d-flex justify-content-center align-items-center">
                                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2" d="M56.875 19.6875H13.125V50.3125H56.875V19.6875Z" fill="#FF0088" />
                                            <path d="M13.125 50.3125V19.6875" stroke="#FF0088" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M56.875 19.6875V50.3125" stroke="#FF0088" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M26.25 35V39.375" stroke="#FF0088" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M35 32.8125V39.375" stroke="#FF0088" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M43.75 30.625V39.375" stroke="#FF0088" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path
                                                d="M59.0625 10.9375H10.9375C9.72938 10.9375 8.75 11.9169 8.75 13.125V17.5C8.75 18.7081 9.72938 19.6875 10.9375 19.6875H59.0625C60.2706 19.6875 61.25 18.7081 61.25 17.5V13.125C61.25 11.9169 60.2706 10.9375 59.0625 10.9375Z"
                                                stroke="#FF0088" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M35 50.3125V59.0625" stroke="#FF0088" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path
                                                d="M35 67.8125C37.4162 67.8125 39.375 65.8537 39.375 63.4375C39.375 61.0213 37.4162 59.0625 35 59.0625C32.5838 59.0625 30.625 61.0213 30.625 63.4375C30.625 65.8537 32.5838 67.8125 35 67.8125Z"
                                                stroke="#FF0088" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.75 50.3125H61.25" stroke="#FF0088" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div class="ml-sm-4 mt-sm-0 mt-4">
                                        <h4 class="text-black display-5 font-weight-bold">Consistent publishing</h4>
                                        <p class="lead font-weight-normal pt-1">Get rid of the headache of publishing content consistently. We
                                            deliver on time – every time.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-5 align-items-sm-center bg-white flex-sm-row flex-column rounded-25 p-4">
                                    <div class="bg-green rounded-10 bg-box d-flex justify-content-center align-items-center">
                                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2"
                                                d="M57.9141 36.3945C57.9961 35.4648 57.9141 33.6055 57.9141 33.6055L62.4531 27.5625C61.8178 25.2093 60.8804 22.9483 59.6641 20.8359L52.1992 19.7695C51.5612 19.0951 50.9049 18.4388 50.2305 17.8008L49.1641 10.3359C47.0531 9.11685 44.7917 8.1792 42.4375 7.54688L36.3945 12.0859C35.4667 12.0039 34.5333 12.0039 33.6055 12.0859L27.5625 7.54688C25.2093 8.18215 22.9483 9.11964 20.8359 10.3359L19.7695 17.8008C19.0951 18.4388 18.4388 19.0951 17.8008 19.7695L10.3359 20.8359C9.11685 22.9469 8.1792 25.2083 7.54688 27.5625L12.0859 33.6055C12.0313 34.5352 12.0859 36.3945 12.0859 36.3945L7.54688 42.4375C8.18215 44.7907 9.11964 47.0517 10.3359 49.1641L17.8008 50.2305C18.4388 50.9232 19.0951 51.5794 19.7695 52.1992L20.8359 59.6641C22.9469 60.8831 25.2083 61.8208 27.5625 62.4531L33.6055 57.9141C34.5333 57.9961 35.4667 57.9961 36.3945 57.9141L42.4375 62.4531C44.7907 61.8178 47.0517 60.8804 49.1641 59.6641L50.2305 52.1992C50.9141 51.5703 52.1992 50.2305 52.1992 50.2305L59.6641 49.1641C60.8831 47.0531 61.8208 44.7917 62.4531 42.4375L57.9141 36.3945ZM35 48.125C32.4041 48.125 29.8665 47.3552 27.7081 45.913C25.5497 44.4708 23.8675 42.421 22.8741 40.0227C21.8807 37.6244 21.6208 34.9854 22.1272 32.4394C22.6336 29.8934 23.8837 27.5548 25.7192 25.7192C27.5548 23.8837 29.8934 22.6336 32.4394 22.1272C34.9854 21.6208 37.6244 21.8807 40.0227 22.8741C42.421 23.8675 44.4708 25.5497 45.913 27.7081C47.3552 29.8665 48.125 32.4041 48.125 35C48.125 38.481 46.7422 41.8194 44.2808 44.2808C41.8194 46.7422 38.481 48.125 35 48.125Z"
                                                fill="#27AE60" />
                                            <path
                                                d="M35 48.125C42.2487 48.125 48.125 42.2487 48.125 35C48.125 27.7513 42.2487 21.875 35 21.875C27.7513 21.875 21.875 27.7513 21.875 35C21.875 42.2487 27.7513 48.125 35 48.125Z"
                                                stroke="#27AE60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M50.2305 17.8008C50.9232 18.4388 51.5794 19.0951 52.1992 19.7695L59.6641 20.8359C60.8804 22.9483 61.8178 25.2093 62.4531 27.5625L57.9141 33.6055C57.9141 33.6055 57.9961 35.4648 57.9141 36.3945L62.4531 42.4375C61.8208 44.7917 60.8831 47.0531 59.6641 49.1641L52.1992 50.2305C52.1992 50.2305 50.9141 51.5703 50.2305 52.1992L49.1641 59.6641C47.0517 60.8804 44.7907 61.8178 42.4375 62.4531L36.3945 57.9141C35.4667 57.9961 34.5333 57.9961 33.6055 57.9141L27.5625 62.4531C25.2083 61.8208 22.9469 60.8831 20.8359 59.6641L19.7695 52.1992C19.0951 51.5612 18.4388 50.9049 17.8008 50.2305L10.3359 49.1641C9.11964 47.0517 8.18215 44.7907 7.54688 42.4375L12.0859 36.3945C12.0859 36.3945 12.0313 34.5352 12.0859 33.6055L7.54688 27.5625C8.1792 25.2083 9.11685 22.9469 10.3359 20.8359L17.8008 19.7695C18.4388 19.0951 19.0951 18.4388 19.7695 17.8008L20.8359 10.3359C22.9483 9.11964 25.2093 8.18215 27.5625 7.54688L33.6055 12.0859C34.5333 12.0039 35.4667 12.0039 36.3945 12.0859L42.4375 7.54688C44.7917 8.1792 47.0531 9.11685 49.1641 10.3359L50.2305 17.8008Z"
                                                stroke="#27AE60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div class="ml-sm-4 mt-sm-0 mt-4">
                                        <h4 class="text-black display-5 font-weight-bold">Data-driven content</h4>
                                        <p class="lead font-weight-normal pt-1">Take the guesswork out of content creation. Use data-driven
                                            methods instead. </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-5 align-items-sm-center bg-white flex-sm-row flex-column rounded-25 p-4">
                                    <div class="bg-red rounded-10 bg-box d-flex justify-content-center align-items-center">
                                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2"
                                                d="M59.0625 13.125H10.9375C9.72938 13.125 8.75 14.1044 8.75 15.3125V48.125C8.75 49.3331 9.72938 50.3125 10.9375 50.3125H59.0625C60.2706 50.3125 61.25 49.3331 61.25 48.125V15.3125C61.25 14.1044 60.2706 13.125 59.0625 13.125Z"
                                                fill="#E74C3C" />
                                            <path
                                                d="M59.0625 13.125H10.9375C9.72938 13.125 8.75 14.1044 8.75 15.3125V48.125C8.75 49.3331 9.72938 50.3125 10.9375 50.3125H59.0625C60.2706 50.3125 61.25 49.3331 61.25 48.125V15.3125C61.25 14.1044 60.2706 13.125 59.0625 13.125Z"
                                                stroke="#E74C3C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M43.75 50.3125L52.5 61.25" stroke="#E74C3C" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M26.25 50.3125L17.5 61.25" stroke="#E74C3C" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M26.25 32.8125V39.375" stroke="#E74C3C" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M35 28.4375V39.375" stroke="#E74C3C" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M43.75 24.0625V39.375" stroke="#E74C3C" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M35 13.125V6.5625" stroke="#E74C3C" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div class="ml-sm-4 mt-sm-0 mt-4">
                                        <h4 class="text-black display-5 font-weight-bold">Conversion-focused</h4>
                                        <p class="lead font-weight-normal pt-1">Increase sales with conversion copy designed to resonate with your
                                            target customers.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-5 align-items-sm-center bg-white flex-sm-row flex-column rounded-25 p-4">
                                    <div class="bg-violet rounded-10 bg-box d-flex justify-content-center align-items-center">
                                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2"
                                                d="M6.5625 50.3127V44.051C6.5625 28.3283 19.1953 15.3674 34.8906 15.3127C38.6343 15.2983 42.3439 16.0232 45.8068 17.4459C49.2696 18.8686 52.4175 20.961 55.0697 23.6031C57.722 26.2452 59.8265 29.385 61.2624 32.8423C62.6984 36.2997 63.4375 40.0065 63.4375 43.7502V50.3127C63.4375 50.8929 63.207 51.4493 62.7968 51.8595C62.3866 52.2697 61.8302 52.5002 61.25 52.5002H8.75C8.16984 52.5002 7.61344 52.2697 7.2032 51.8595C6.79297 51.4493 6.5625 50.8929 6.5625 50.3127Z"
                                                fill="#9B59B6" />
                                            <path
                                                d="M6.5625 50.3127V44.051C6.5625 28.3283 19.1953 15.3674 34.8906 15.3127C38.6343 15.2983 42.3439 16.0232 45.8068 17.4459C49.2696 18.8686 52.4175 20.961 55.0697 23.6031C57.722 26.2452 59.8265 29.385 61.2624 32.8423C62.6984 36.2997 63.4375 40.0065 63.4375 43.7502V50.3127C63.4375 50.8929 63.207 51.4493 62.7968 51.8595C62.3866 52.2697 61.8302 52.5002 61.25 52.5002H8.75C8.16984 52.5002 7.61344 52.2697 7.2032 51.8595C6.79297 51.4493 6.5625 50.8929 6.5625 50.3127Z"
                                                stroke="#9B59B6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M35 15.3125V24.0625" stroke="#9B59B6" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M7.51953 36.3945L15.9961 38.6641" stroke="#9B59B6" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M62.4805 36.3945L54.0039 38.6641" stroke="#9B59B6" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M28.2734 52.5L46.9766 28.1367" stroke="#9B59B6" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div class="ml-sm-4 mt-sm-0 mt-4">
                                        <h4 class="text-black display-5 font-weight-bold">Pure Performance</h4>
                                        <p class="lead font-weight-normal pt-1">Whether you want leads or sales, our content resonates with your
                                            ideal customer.</p>
                                    </div>
                                </div>
                                <div class="w-100 inline-block text-center mt-5">
                                    <a href="#" class="w-100 inline-block text-pink lead text-center font-weight-bold">Not what are you looking
                                        for? Tell us in your
                                        no-obligation discovery call <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 16H27" stroke="#FF0088" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M18 7L27 16L18 25" stroke="#FF0088" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="container h-100">
                        <div class="competition w-100 float-left position-relative">
                            <div class="row h-100">
                                <div class="col-lg-6 col-md-8 col-xs-12 d-flex flex-column justify-content-between">
                                    <h2 class="text-white font-weight-bold mb-4 ">Are you ready for content<br/>that beats the<br/>competition?</h2>
                                        <div class="comp-btn"><a href="#" class="bg-white btn1 text-pink">Book a discovery call</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>


                <section class="covered_blk w-100 float-left py-5 text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 offset-lg-1 col-xs-12">
                                <h2 class="font-weight-bold mb-4">Want to scale other channels? You guessed it, we’ve got you covered. </h2>
                                <p class="lead font-weight-medium mb-5">Partner with Strategically to supercharge all of your content goals.
                                    Go all in or wait for ROI on one channel, then expand.</p>
                                <ul class="row list-inline">
                                    <li class="col-lg-4 col-sm-6 col-xs-12">
                                        <div class="c_box text-center rounded-25 p-4 mb-4">
                                            <svg width="160" height="160" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.2"
                                                    d="M185.625 41.25H34.375C32.5516 41.25 30.803 41.9743 29.5136 43.2636C28.2243 44.553 27.5 46.3016 27.5 48.125V185.625L55 171.875L82.5 185.625L110 171.875L137.5 185.625L165 171.875L192.5 185.625V48.125C192.5 46.3016 191.776 44.553 190.486 43.2636C189.197 41.9743 187.448 41.25 185.625 41.25ZM96.25 137.5H55V82.5H96.25V137.5Z"
                                                    fill="#288BFD" />
                                                <path
                                                    d="M27.5 185.625V48.125C27.5 46.3016 28.2243 44.553 29.5136 43.2636C30.803 41.9743 32.5516 41.25 34.375 41.25H185.625C187.448 41.25 189.197 41.9743 190.486 43.2636C191.776 44.553 192.5 46.3016 192.5 48.125V185.625L165 171.875L137.5 185.625L110 171.875L82.5 185.625L55 171.875L27.5 185.625Z"
                                                    stroke="#288BFD" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M123.75 96.25H165" stroke="#288BFD" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M123.75 123.75H165" stroke="#288BFD" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M96.25 82.5H55V137.5H96.25V82.5Z" stroke="#288BFD" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <h5 class="lead font-weight-medium mt-2">Website audit</h5>
                                        </div>
                                    </li>
                                    <li class="col-lg-4 col-sm-6 col-xs-12">
                                        <div class="c_box text-center rounded-25 p-4 mb-4">
                                            <svg width="160" height="160" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.2"
                                                    d="M28.8751 125.125C27.9372 120.138 27.4768 115.074 27.5001 110C27.4892 92.9379 32.7742 76.293 42.6258 62.3624C52.4773 48.4317 66.4096 37.9021 82.5001 32.2266V94.1016L28.8751 125.125Z"
                                                    fill="#FF0088" />
                                                <path d="M110 110V27.5" stroke="#FF0088" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M181.414 68.75L38.5859 151.25" stroke="#FF0088" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M28.8751 125.125C27.9372 120.138 27.4768 115.074 27.5001 110C27.4892 92.9379 32.7742 76.293 42.6258 62.3624C52.4773 48.4317 66.4096 37.9021 82.5001 32.2266V94.1016L28.8751 125.125Z"
                                                    stroke="#FF0088" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M110 27.5C124.456 27.5016 138.658 31.3018 151.183 38.5197C163.708 45.7377 174.117 56.1201 181.367 68.627C188.616 81.1338 192.452 95.3261 192.49 109.782C192.529 124.238 188.768 138.45 181.584 150.995C174.401 163.54 164.047 173.978 151.56 181.262C139.073 188.546 124.892 192.421 110.436 192.499C95.9799 192.577 81.7573 188.855 69.1926 181.706C56.6279 174.557 46.1621 164.232 38.8438 151.766"
                                                    stroke="#FF0088" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <h5 class="lead font-weight-medium mt-2">Content strategy</h5>
                                        </div>
                                    </li>
                                    <li class="col-lg-4 col-sm-6 col-xs-12">
                                        <div class="c_box text-center rounded-25 p-4 mb-4">
                                            <svg width="160" height="160" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M110 110H185.625" stroke="#9B59B6" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M110 55H185.625" stroke="#9B59B6" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M110 165H185.625" stroke="#9B59B6" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M79.0625 41.25L49.2422 68.75L34.375 55" stroke="#9B59B6" stroke-width="7"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M79.0625 96.25L49.2422 123.75L34.375 110" stroke="#9B59B6" stroke-width="7"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M79.0625 151.25L49.2422 178.75L34.375 165" stroke="#9B59B6" stroke-width="7"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <h5 class="lead font-weight-medium mt-2">Website audit</h5>
                                        </div>
                                    </li>
                                    <li class="col-lg-4 col-sm-6 col-xs-12">
                                        <div class="c_box text-center rounded-25 p-4 mb-4">
                                            <svg width="160" height="160" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.2"
                                                    d="M41.2499 185.625C41.2386 182.913 41.7643 180.226 42.7968 177.719C43.8292 175.211 45.348 172.933 47.2655 171.016C49.183 169.098 51.4612 167.579 53.9687 166.547C56.4761 165.515 59.1632 164.989 61.8749 165H178.75V27.5002H61.8749C59.1632 27.4888 56.4761 28.0145 53.9687 29.047C51.4612 30.0795 49.183 31.5983 47.2655 33.5158C45.348 35.4332 43.8292 37.7114 42.7968 40.2189C41.7643 42.7264 41.2386 45.4135 41.2499 48.1252V185.625Z"
                                                    fill="#27AE60" />
                                                <path
                                                    d="M41.2499 185.625C41.2386 182.913 41.7643 180.226 42.7968 177.719C43.8292 175.211 45.348 172.933 47.2655 171.016C49.183 169.098 51.4612 167.579 53.9687 166.547C56.4761 165.515 59.1632 164.989 61.8749 165H178.75V27.5002H61.8749C59.1632 27.4888 56.4761 28.0145 53.9687 29.047C51.4612 30.0795 49.183 31.5983 47.2655 33.5158C45.348 35.4332 43.8292 37.7114 42.7968 40.2189C41.7643 42.7264 41.2386 45.4135 41.2499 48.1252V185.625Z"
                                                    stroke="#27AE60" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M41.25 185.625V192.5H165" stroke="#27AE60" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <h5 class="lead font-weight-medium mt-2">Case studies</h5>
                                        </div>
                                    </li>
                                    <li class="col-lg-4 col-sm-6 col-xs-12">
                                        <div class="c_box text-center rounded-25 p-4 mb-4">
                                            <svg width="160" height="160" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.2"
                                                    d="M27.5 171.875C31.1467 171.875 34.6441 170.426 37.2227 167.848C39.8013 165.269 41.25 161.772 41.25 158.125V55C41.25 53.1766 41.9743 51.428 43.2636 50.1386C44.553 48.8493 46.3016 48.125 48.125 48.125H185.625C187.448 48.125 189.197 48.8493 190.486 50.1386C191.776 51.428 192.5 53.1766 192.5 55V158.125C192.5 161.772 191.051 165.269 188.473 167.848C185.894 170.426 182.397 171.875 178.75 171.875H27.5Z"
                                                    fill="#FBBC05" />
                                                <path d="M82.5 96.25H151.25" stroke="#FBBC05" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M82.5 123.75H151.25" stroke="#FBBC05" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M27.5 171.875C31.1467 171.875 34.6441 170.426 37.2227 167.848C39.8013 165.269 41.25 161.772 41.25 158.125V55C41.25 53.1766 41.9743 51.428 43.2636 50.1386C44.553 48.8493 46.3016 48.125 48.125 48.125H185.625C187.448 48.125 189.197 48.8493 190.486 50.1386C191.776 51.428 192.5 53.1766 192.5 55V158.125C192.5 161.772 191.051 165.269 188.473 167.848C185.894 170.426 182.397 171.875 178.75 171.875H27.5Z"
                                                    stroke="#FBBC05" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M27.5 171.875C23.8533 171.875 20.3559 170.426 17.7773 167.848C15.1987 165.269 13.75 161.772 13.75 158.125V75.625"
                                                    stroke="#FBBC05" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <h5 class="lead font-weight-medium mt-2">Product reviews</h5>
                                        </div>
                                    </li>
                                    <li class="col-lg-4 col-sm-6 col-xs-12">
                                        <div class="c_box text-center rounded-25 p-4 mb-4">
                                            <svg width="160" height="160" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.2"
                                                    d="M59.6406 110H101.062C102.402 109.986 103.711 109.599 104.844 108.883L122.031 97.3672C123.164 96.6511 124.473 96.2643 125.812 96.25H178.75V75.625C178.75 73.8016 178.026 72.053 176.736 70.7636C175.447 69.4743 173.698 68.75 171.875 68.75H112.32C110.834 68.7439 109.388 68.262 108.195 67.375L84.3047 49.5C83.1118 48.613 81.6662 48.1311 80.1797 48.125H34.375C32.5516 48.125 30.803 48.8493 29.5136 50.1386C28.2243 51.428 27.5 53.1766 27.5 55V178.75L53.2812 114.297C53.784 113.023 54.6605 111.93 55.7955 111.164C56.9305 110.397 58.2709 109.991 59.6406 110Z"
                                                    fill="#55BFDE" />
                                                <path
                                                    d="M27.5 178.75V55C27.5 53.1766 28.2243 51.428 29.5136 50.1386C30.803 48.8493 32.5516 48.125 34.375 48.125H80.1797C81.6662 48.1311 83.1118 48.613 84.3047 49.5L108.195 67.375C109.388 68.262 110.834 68.7439 112.32 68.75H171.875C173.698 68.75 175.447 69.4743 176.736 70.7636C178.026 72.053 178.75 73.8016 178.75 75.625V96.25"
                                                    stroke="#55BFDE" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M27.5 178.75L53.2812 114.297C53.784 113.023 54.6605 111.93 55.7955 111.164C56.9305 110.397 58.2709 109.991 59.6406 110H101.062C102.402 109.986 103.711 109.599 104.844 108.883L122.031 97.3672C123.164 96.6511 124.473 96.2643 125.812 96.25H196.711C197.798 96.2499 198.87 96.5076 199.838 97.002C200.806 97.4964 201.643 98.2133 202.281 99.0939C202.918 99.9746 203.338 100.994 203.505 102.068C203.672 103.142 203.582 104.241 203.242 105.273L178.75 178.75H27.5Z"
                                                    stroke="#55BFDE" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <h5 class="lead font-weight-medium mt-2">How-to-guides</h5>
                                        </div>
                                    </li>
                                    <li class="col-lg-4 col-sm-6 col-xs-12">
                                        <div class="c_box text-center rounded-25 p-4 mb-4">
                                            <svg width="160" height="160" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.2"
                                                    d="M67.0312 172.992L38.7578 196.711C37.7562 197.54 36.5401 198.068 35.2507 198.233C33.9612 198.399 32.6512 198.195 31.4727 197.647C30.2941 197.098 29.2953 196.226 28.5922 195.133C27.889 194.039 27.5103 192.769 27.5 191.469V55C27.5 53.1766 28.2243 51.428 29.5136 50.1386C30.803 48.8493 32.5516 48.125 34.375 48.125H185.625C187.448 48.125 189.197 48.8493 190.486 50.1386C191.776 51.428 192.5 53.1766 192.5 55V165C192.5 166.823 191.776 168.572 190.486 169.861C189.197 171.151 187.448 171.875 185.625 171.875H70.2109L67.0312 172.992Z"
                                                    fill="#E67E22" />
                                                <path
                                                    d="M67.0312 172.992L38.7578 196.711C37.7562 197.54 36.5401 198.068 35.2507 198.233C33.9612 198.399 32.6512 198.195 31.4727 197.647C30.2941 197.098 29.2953 196.226 28.5922 195.133C27.889 194.039 27.5103 192.769 27.5 191.469V55C27.5 53.1766 28.2243 51.428 29.5136 50.1386C30.803 48.8493 32.5516 48.125 34.375 48.125H185.625C187.448 48.125 189.197 48.8493 190.486 50.1386C191.776 51.428 192.5 53.1766 192.5 55V165C192.5 166.823 191.776 168.572 190.486 169.861C189.197 171.151 187.448 171.875 185.625 171.875H70.2109L67.0312 172.992Z"
                                                    stroke="#E67E22" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M82.5 96.25H137.5" stroke="#E67E22" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M82.5 123.75H137.5" stroke="#E67E22" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <h5 class="lead font-weight-medium mt-2">Newsletters</h5>
                                        </div>
                                    </li>
                                    <li class="col-lg-4 col-sm-6 col-xs-12">
                                        <div class="c_box text-center rounded-25 p-4 mb-4">
                                            <svg width="160" height="160" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.2"
                                                    d="M34.375 68.75H75.625V41.25C75.625 39.4266 74.9007 37.678 73.6114 36.3886C72.322 35.0993 70.5734 34.375 68.75 34.375H41.25C39.4266 34.375 37.678 35.0993 36.3886 36.3886C35.0993 37.678 34.375 39.4266 34.375 41.25V68.75Z"
                                                    fill="#990000" />
                                                <path opacity="0.2"
                                                    d="M75.625 151.25H116.875V41.25C116.875 39.4266 116.151 37.678 114.861 36.3886C113.572 35.0993 111.823 34.375 110 34.375H82.5C80.6766 34.375 78.928 35.0993 77.6386 36.3886C76.3493 37.678 75.625 39.4266 75.625 41.25V151.25Z"
                                                    fill="#990000" />
                                                <path opacity="0.2"
                                                    d="M147.125 154L187 143.258L194.133 169.813C194.366 170.687 194.424 171.599 194.304 172.497C194.184 173.394 193.888 174.258 193.433 175.041C192.978 175.823 192.373 176.508 191.652 177.056C190.932 177.604 190.11 178.005 189.234 178.234L162.68 185.367C160.925 185.841 159.054 185.601 157.475 184.699C155.897 183.798 154.74 182.307 154.258 180.555L147.125 154Z"
                                                    fill="#990000" />
                                                <path opacity="0.2"
                                                    d="M125.812 74.2497L165.687 63.5935L158.555 37.0388C158.071 35.2828 156.918 33.7863 155.344 32.8706C153.769 31.9548 151.898 31.6926 150.133 32.1403L123.578 39.2731C121.822 39.7569 120.326 40.9098 119.41 42.4843C118.494 44.0587 118.232 45.9295 118.68 47.695L125.812 74.2497Z"
                                                    fill="#990000" />
                                                <path
                                                    d="M68.75 34.375H41.25C37.453 34.375 34.375 37.453 34.375 41.25V178.75C34.375 182.547 37.453 185.625 41.25 185.625H68.75C72.547 185.625 75.625 182.547 75.625 178.75V41.25C75.625 37.453 72.547 34.375 68.75 34.375Z"
                                                    stroke="#990000" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M34.375 68.75H75.625" stroke="#990000" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M110 34.375H82.5C78.703 34.375 75.625 37.453 75.625 41.25V178.75C75.625 182.547 78.703 185.625 82.5 185.625H110C113.797 185.625 116.875 182.547 116.875 178.75V41.25C116.875 37.453 113.797 34.375 110 34.375Z"
                                                    stroke="#990000" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M75.625 151.25H116.875" stroke="#990000" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M150.085 32.1734L123.522 39.2909C119.854 40.2737 117.678 44.0435 118.66 47.7111L154.248 180.526C155.231 184.193 159 186.37 162.668 185.387L189.231 178.27C192.899 177.287 195.075 173.517 194.092 169.85L158.505 37.0348C157.522 33.3672 153.752 31.1907 150.085 32.1734Z"
                                                    stroke="#990000" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M147.125 154L187 143.258" stroke="#990000" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M125.812 74.25L165.688 63.5938" stroke="#990000" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <h5 class="lead font-weight-medium mt-2">Product descriptions</h5>
                                        </div>
                                    </li>
                                    <li class="col-lg-4 col-sm-6 col-xs-12">
                                        <div class="c_box text-center rounded-25 p-4 mb-4">
                                            <svg width="160" height="160" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.2" d="M185.625 137.5H137.5V185.625L185.625 137.5Z" fill="#34495E" />
                                                <path d="M82.5 82.5H137.5" stroke="#34495E" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M82.5 110H137.5" stroke="#34495E" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M82.5 137.5H110" stroke="#34495E" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M134.664 185.625H41.25C39.4266 185.625 37.678 184.901 36.3886 183.611C35.0993 182.322 34.375 180.573 34.375 178.75V41.25C34.375 39.4266 35.0993 37.678 36.3886 36.3886C37.678 35.0993 39.4266 34.375 41.25 34.375H178.75C180.573 34.375 182.322 35.0993 183.611 36.3886C184.901 37.678 185.625 39.4266 185.625 41.25V134.664C185.628 135.557 185.455 136.441 185.116 137.267C184.777 138.093 184.278 138.844 183.648 139.477L139.477 183.648C138.844 184.278 138.093 184.777 137.267 185.116C136.441 185.455 135.557 185.628 134.664 185.625V185.625Z"
                                                    stroke="#34495E" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M185.023 137.5H137.5V185.023" stroke="#34495E" stroke-width="7" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <h5 class="lead font-weight-medium mt-2">eCommerce categories</h5>
                                        </div>
                                    </li>
                                </ul>
                                <a href="#" class="w-100 d-inline-block mt-4 text-pink lead font-weight-medium">See why we’re the best content
                                    writing agency <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 16H27" stroke="#FF0088" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18 7L27 16L18 25" stroke="#FF0088" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="channels_blk w-100 float-left text-center py-5 position-relative">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 offset-lg-1 col-xs-12">
                                <h2 class="font-weight-bold mb-4">Do you need more? Let us smash multiple channels at once.</h2>
                                <p class="lead font-weight-normal mb-5">Let our team manage multiple channels, providing ongoing strategic
                                    guidance while sourcing top talent and overseeing delivery.</p>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-lg-4 col-md-6 col-xs-12 mb-lg-0 mb-5">
                                <div
                                    class="bg-white p-lg-4 p-3 rounded-25 sub_box d-flex justify-content-start align-items-center flex-column h-100 mb-5">
                                    <div class="icon bg-violet rounded-10 d-flex justify-content-center align-items-center mb-4">
                                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2"
                                                d="M10.0352 47.3049L16.6524 9.81659C16.6986 9.53365 16.8007 9.26275 16.9527 9.01968C17.1047 8.77661 17.3036 8.56622 17.5377 8.40079C17.7719 8.23536 18.0366 8.1182 18.3165 8.05612C18.5964 7.99405 18.8859 7.98831 19.168 8.03924L34.2617 10.6916C34.832 10.7982 35.3377 11.1244 35.67 11.5999C36.0024 12.0754 36.1349 12.6624 36.0391 13.2346L29.3945 50.9416C28.9395 53.4806 27.5087 55.7406 25.4083 57.238C23.3079 58.7353 20.7049 59.351 18.1563 58.9533C12.7149 58.0783 9.07814 52.7463 10.0352 47.3049Z"
                                                fill="#9B59B6" />
                                            <path
                                                d="M10.0352 47.3049L16.6524 9.81659C16.6986 9.53365 16.8007 9.26275 16.9527 9.01968C17.1047 8.77661 17.3036 8.56622 17.5377 8.40079C17.7719 8.23536 18.0366 8.1182 18.3165 8.05612C18.5964 7.99405 18.8859 7.98831 19.168 8.03924L34.2617 10.6916C34.832 10.7982 35.3377 11.1244 35.67 11.5999C36.0024 12.0754 36.1349 12.6624 36.0391 13.2346L29.3945 50.9416C28.9395 53.4806 27.5087 55.7406 25.4083 57.238C23.3079 58.7353 20.7049 59.351 18.1563 58.9533C12.7149 58.0783 9.07814 52.7463 10.0352 47.3049Z"
                                                stroke="#9B59B6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M32.3477 34.1247L52.2812 26.8786C52.5523 26.7785 52.8404 26.7331 53.129 26.745C53.4177 26.7569 53.7011 26.8259 53.963 26.9479C54.2248 27.0699 54.4599 27.2426 54.6547 27.456C54.8494 27.6694 55 27.9192 55.0977 28.1911L60.3477 42.5739C60.5413 43.1179 60.512 43.7164 60.2661 44.2389C60.0202 44.7614 59.5778 45.1654 59.0352 45.363L23.0508 58.4606"
                                                stroke="#9B59B6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M60.1562 44.4336V56.875C60.1562 57.4552 59.9258 58.0116 59.5155 58.4218C59.1053 58.832 58.5489 59.0625 57.9688 59.0625H19.6875"
                                                stroke="#9B59B6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M19.6875 52.5C21.4997 52.5 22.9688 51.0309 22.9688 49.2188C22.9688 47.4066 21.4997 45.9375 19.6875 45.9375C17.8753 45.9375 16.4062 47.4066 16.4062 49.2188C16.4062 51.0309 17.8753 52.5 19.6875 52.5Z"
                                                fill="#9B59B6" />
                                        </svg>
                                    </div>
                                    <h3 class="font-weight-bold mb-4">SEO content strategy</h3>
                                    <p class="lead font-weight-normal">Create a data-backed plan to attract, nurture, engage, and convert
                                        website visitors with content that is highly aligned with your audience.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-xs-12 mb-lg-0 mb-5">
                                <div
                                    class="bg-white p-lg-4 p-3 rounded-25 sub_box d-flex justify-content-start align-items-center flex-column h-100 mb-5">
                                    <div class="icon bg-light-pink rounded-10 d-flex justify-content-center align-items-center mb-4">
                                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2" d="M61.25 15.3125L35 39.375L8.75 15.3125H61.25Z" fill="#FF0088" />
                                            <path d="M61.25 15.3125L35 39.375L8.75 15.3125" stroke="#FF0088" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path
                                                d="M8.75 15.3125H61.25V52.5C61.25 53.0802 61.0195 53.6366 60.6093 54.0468C60.1991 54.457 59.6427 54.6875 59.0625 54.6875H10.9375C10.3573 54.6875 9.80094 54.457 9.3907 54.0468C8.98047 53.6366 8.75 53.0802 8.75 52.5V15.3125Z"
                                                stroke="#FF0088" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M30.2148 35L9.43359 54.0586" stroke="#FF0088" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M60.5664 54.0586L39.7852 35" stroke="#FF0088" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <h3 class="font-weight-bold mb-4">Sales copywriting</h3>
                                    <p class="lead font-weight-normal">From eCommerce product pages to conversion-focused sales copy, you get
                                        the maximum return on investment from your website.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-xs-12 mt-lg-0 mt-md-5">
                                <div
                                    class="bg-white p-lg-4 p-3 rounded-25 sub_box d-flex justify-content-start align-items-center flex-column h-100 mb-5">
                                    <div class="icon bg-sky rounded-10 d-flex justify-content-center align-items-center mb-4">
                                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2"
                                                d="M59.0625 13.125H10.9375C10.3573 13.125 9.80094 13.3555 9.3907 13.7657C8.98047 14.1759 8.75 14.7323 8.75 15.3125V59.0625L17.5 54.6875L26.25 59.0625L35 54.6875L43.75 59.0625L52.5 54.6875L61.25 59.0625V15.3125C61.25 14.7323 61.0195 14.1759 60.6093 13.7657C60.1991 13.3555 59.6427 13.125 59.0625 13.125ZM30.625 43.75H17.5V26.25H30.625V43.75Z"
                                                fill="#55BFDE" />
                                            <path
                                                d="M8.75 59.0625V15.3125C8.75 14.7323 8.98047 14.1759 9.3907 13.7657C9.80094 13.3555 10.3573 13.125 10.9375 13.125H59.0625C59.6427 13.125 60.1991 13.3555 60.6093 13.7657C61.0195 14.1759 61.25 14.7323 61.25 15.3125V59.0625L52.5 54.6875L43.75 59.0625L35 54.6875L26.25 59.0625L17.5 54.6875L8.75 59.0625Z"
                                                stroke="#55BFDE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M39.375 30.625H52.5" stroke="#55BFDE" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M39.375 39.375H52.5" stroke="#55BFDE" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M30.625 26.25H17.5V43.75H30.625V26.25Z" stroke="#55BFDE" stroke-width="3"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <h3 class="font-weight-bold mb-4">Search engine optimization</h3>
                                    <p class="lead font-weight-normal">Wherever you are in your SEO journey, our team will plan and implement an
                                        SEO strategy laser-focused on increasing links, visitors, conversions, and revenue.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="w-100 float-left py-md-5 py-4 increase_scn position-relative">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <h2 class="display-6 font-weight-bold pt-8 mb-4 ">Meet the team in charge of increasing your sales</h2>
                                <p class="lead font-weight-normal mb-4">Say hi to the team before signing up. Grab a virtual coffee, share a
                                    joke or two, and put our
                                    knowledge to the test. </p>
                                <a href="#" class="bg-blue btn1 desktop">Book a discovery call</a>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <img src={increaseImg} width="514" height="383" />
                                <a href="#" class="bg-blue btn1 mobile mt-3">Book a discovery call</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="faq_blk w-100 float-left bg-light">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2 col-xs-12">
                                <h2 class="font-weight-bold text-center mb-4">Frequently asked questions: Let’s get into the nitty gritty</h2>
                                <p class="lead font-weight-medium text-center mb-5">Anything missing? Ask us everything at your discovery
                                    call.</p>
                                <div id="accordion">
                                    <div class="card bg-white mb-2 border-none rounded-25 p-4">
                                        <div class="card-header bg-white border-none rounded-25 p-0" id="headingOne">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link border-none no-underline p-0" data-toggle="collapse"
                                                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    How can PPC help your business?
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" class="collapse show " aria-labelledby="headingOne" data-parent="#accordion">
                                            <div class="card-body p-0 mt-3">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card bg-white mb-2 border-none rounded-25 p-4">
                                        <div class="card-header bg-white border-none rounded-25 p-0" id="headingOne">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link border-none no-underline p-0" data-toggle="collapse"
                                                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    What's the difference between PPC and SEO?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div class="card-body p-0 mt-3">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card bg-white mb-2 border-none rounded-25 p-4">
                                        <div class="card-header bg-white border-none rounded-25 p-0" id="headingOne">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link border-none no-underline p-0" data-toggle="collapse"
                                                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    How much should I spend to get results?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div class="card-body p-0 mt-3">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" class="w-100 d-inline-block mt-4 font-weight-medium text-center">More questions? Get them answered
                                    in your no-obligation discovery call <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 16H27" stroke="#55BFDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18 7L27 16L18 25" stroke="#55BFDE" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bottom-banner w-100 float-left position-relative">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xs-12">
                                <div class="banner-text  text-center">
                                    <h2 class="text-white display-4 font-weight-bold ">We are ready to turn your blog<br/>into cash — are you?
                                    </h2>
                                    <a href="#" class="bg-pink btn1">Book your discovery call</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </PageWrapper>
        </>
    );
}

export default LandingPage