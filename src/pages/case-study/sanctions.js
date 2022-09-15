import React from "react";
import { Link } from "gatsby"
import Helmet from "react-helmet";

import PageWrapper from "../../components/PageWrapper";


import Icon1 from "../../assets/images/icon-traffic.png";
import Icon2 from "../../assets/images/icon-value.png";
import Icon3 from "../../assets/images/icon-links.png";
import ClientImg from "../../assets/images/sanction-img.png";

import FeaturedImg5 from "../../assets/images/post_img1.jpg"
import FeaturedImg6 from "../../assets/images/post_img2.jpg"
import FeaturedImg7 from "../../assets/images/post_img3.jpg"

const Sanctions = () => {
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
                            <div class="col-xl-8 col-12">
                                {/* <h2 class="font-size-md-12 font-size-10 text-center mb-7">How Siege Media Grew Shutterfly's Blog to $1,700,000 in Monthly Traffic Value</h2> */}
                                <h2 class="display-2  font-weight-bold text-center mb-7">How Strategically increased Sanctions.io traffic by 3X in 6 months</h2>

                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="py-12 pt-lg-20 text-size">
                    <div className="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-10 col-12">
                                <div class="row mb-lg-14 mb-10">
                                    <div class="col-lg-4 col-12">
                                        <img className="w-full justify-center mb-10" src={ClientImg} alt="" />
                                    </div>
                                    <div class="col-lg-8 col-md-11">
                                        <h2 className="font-size-10">The client</h2>
                                        <div className="service-post-divider "></div>
                                        <p><a href="https://sanctions.io/">Sanctions.io</a> knows all there is about business partner screenings against global sanctions. The start-up has helped 100+ companies with their simple and reliable data and technology solutions. But co-founders Thorsten, Hector, and Jens were struggling in one department: content creation.</p>
                                        <p>Strategically was up for the challenge, and we caught up with Thorsten to discuss his experience since working with our agency.</p>

                                    </div>
                                </div>
                                {/* <h2 className="font-size-10 text-left mb-10">Challenges</h2>
                                <p>Shutterfly recently launched their new blog under their “Ideas” subfolder, but lacked the internal resources to get it up and running. They needed a partner who understood the powerful traffic engine of SEO-driven content, as well as the ability to create high-quality, well-branded content.</p> */}

                                <h2 className="font-size-10 text-left my-lg-10 my-5">The problem</h2>

                                <p> Sanctions.io had a blog where they posted once per month. Unfortunately, they are a team of data and technology buffs, not writers. <span class="purple">“Our team doesn't have great writers, I'm not a great writer, and it's always a big headache trying to write.”</span></p>

                                {/* <div class="testimonial border p-md-10 p-8 rounded mb-8">
                                    <p class="font-size-7 line-height-28 text-dark-cloud m-0"> “Our team doesn't have great writers, I'm not a great writer, and it's always a big headache trying to write.”</p>
                                </div> */}
                                <p>Thorsten and the team were procrastinating and pushing away creating content for their blog when they knew they needed it to improve their SEO. For most businesses, there is a straightforward solution: outsourcing their work. But for a niche technology company, Sanctions.io was struggling to find an agency they were satisfied with.</p>
                            </div>
                        </div>
                    </div>


                    <div class="quote-blk py-10 py-lg-20 text-center my-10">
                        <div className="container">
                            <h3 className="text-white font-size-9  my-0">“We worked with three or four agencies over 12 to 15 months, and we were at the point where we said the content quality was a big issue for us. We needed a dependable source of good content that was willing to put the work in for us.”</h3>
                        </div>
                    </div>

                    <div className="container">
                        <p>At the same time, Sanctions.io is a startup, with set budgets for marketing activities. Thorsten knew he could find a dependable agency if he were prepared to pay a premium price, but <span className="purple">“we cannot pay a huge company; we don't have a huge budget.”</span></p>

                     <p>They needed a cost-effective solution that didn't sacrifice quality. They needed <a href="/">Strategically.</a></p>
                    </div>




                </div>
                {/* <div class="quote-blk py-10 py-lg-22 text-center">
                    <div className="container">
                        <h2 className="text-white font-size-md-12 font-size-10  my-0">“With Verblio, it's trackable. You charge me by post—simple as that. You don't care how long it takes. You charge me by the number of words.”</h2>
                    </div>
                </div> */}


                {/* <div class="bg-default-3 pt-12 pt-md-18 pb-lg-10 pb-5 pt-lg-22 text-center">
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
                </div> */}


                <div class="pb-10 text-size">
                    <div className="container">

                        {/* <h2 className="font-size-10 mb-lg-10 mb-5">Growth Summary</h2>

                        <p>product lines spanning wedding, graduation, babies and the holiday season. Through high-quality content generated over several years, we helped Shutterfly significantly build their traffic and sales.</p>
                        <p>We flexed our wide range of SEO-focused content creation capabilities, creating interactives, videos, product photography, blog articles and more.</p>
                        <p>Given Shutterfly had strong existing authority, most of the link building performed was done through passive link acquisition via the rankings and traffic generated. We ran the content strategy and creation end-to-end and actively scaled up content for Shutterfly, creating more than 500 unique pieces over three years to power the company to over 2,500,000 monthly visits.</p>*/}


                        <h2 className="font-size-10 mb-lg-10 mb-5">The solution</h2>
                        <p> After yet another dissatisfied experience with a content writing agency, Thorsten took to Google. He searched again for an agency that could be up for the challenge of producing niche content for their blog. This time, he stumbled across Strategically.</p>
                        <p>Thorsten knew we were the one: <span class="purple">“it was just a feeling.”</span> and we offered an affordable pricing plan aligned with his smaller startup budget. Thorsten said our <span className="purple"> “general offering for a small start-up like ours is very attractive from a pricing standpoint.”</span></p>
                       


                        <p>So Thorsten gave us a call, and we wrote our first piece of content for Sanctions.io… and it totally missed the mark. Like other agencies, we failed to understand his industry comprehensively enough, which showed in our writing. But we were different for one reason: we were the only agency Thorsten worked with that wanted to do better.</p>
                    </div> 
                    <div class="quote-blk py-10 py-lg-20 text-center my-10">
                        <div className="container">
                            <h3 className="text-white font-size-9  my-0">“You were the first agency to say, “let's look harder, let's look into this, let's try it again”, and this I really appreciated. Your willingness to accept feedback and really help your customers sets you apart from other agencies.”</h3>

                        </div></div>
                    <div className="container">
                        <p>We took our time to understand Thorsten's requirements and find a better fit among our network of writers. We asked for feedback, swapped his writer, and now he's happy with every piece of content we produce. He's now increased his monthly words by 2.5X!</p>
                        <p>Not only did we ask Thorsten for feedback on our writing, but also on our processes. Thorsten explained that our flexibility in how we work also made him stay, as this customer-first approach is how Sanctions.io runs its business.</p>
                    </div>

                    <div class="quote-blk py-10 py-lg-20 text-center mb-10 mt-10">
                        <div className="container">
                            <h3 className="text-white font-size-9  my-0">“What usually turns me off when I work with service providers is that I have to do everything through a dashboard. You were willing to say, “Just send me an email”… I believe in making things easy for the clients, and it's how we do our business. I really liked that.”</h3>
                        </div>
                    </div>
                    <div className="container">
                        <p>We also offer our content ideation services to Thorsten, solving more problems for our customers. By taking control of coming up with content, Thorsten and the team can focus on the things that matter more and which they excel at. <span className="purple">“The process is very easy to work with: good ideas, good content, simple interaction, and a great offering… [It's] very frictionless compared to other experiences that I had.”</span></p>
                        


                        <h2 className="font-size-10 mb-lg-10 mb-5 mt-10">The impact</h2>
                        <p>Since Sanctions.io started working with Strategically, <span className="purple"> “we tripled our organic traffic on the website. We also see the success of trial requests and, in the end, in revenue.”</span></p>
                        <p>Thorsten thinks a large part of this has to do with their content and the increased frequency of putting blogs up on the web – something they wouldn’t have the time to do by themselves or could trust other agencies to do for them. With content ideation also taken care of, posting quality content regularly is even easier for Thorsten and the team.</p>
                        {/* <p>And we are already discussing the next steps to take Sanctions.io further, boost site traffic, and see an even larger return on investment:</p> */}
                    </div>
                    {/* <div class="quote-blk py-10 py-lg-20 text-center my-10">
                        <div className="container">
                            <h3 className="text-white font-size-9  my-0">
                                “Our organic traffic is growing, but we don't have a backlink strategy or a domain rating. This is something we need to improve on in the future.”</h3>
                        </div>
                    </div>
                    <div className="container">

                        <p>We offer an SEO strategy solution where we deep dive into the data, keywords, and competitive landscape and prepare a blueprint strategy on content for the next six months. As Thorsten’s business and budget grow, this is a service we can offer. <span className="purple">“I'm so grateful that we work together, and I am so happy. I'm really super happy!”</span></p>
                        
                    </div> */}
                </div>
                <div class="bg-dark-cloud w-full py-md-20 py-14  text-center">
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col-md-4 col-sm-6 mb-5">
                                <img src={Icon2} alt="" />
                                {/* <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">0 to 2.5M</h2> */}
                                <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">3X increase </h2>
                                <h5 className="text-center text-white">in organic traffic</h5>
                            </div>
                            <div class="col-md-4 col-sm-6 mb-5">
                                <img src={Icon1} alt="" />
                                {/* <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">1.7M</h2> */}
                                <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">2.5X words</h2>
                                <h5 className="text-center text-white">written per month</h5>
                            </div>
                            <div class="col-md-4 col-sm-6 mb-5">
                                <img src={Icon3} alt="" />
                                {/* <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">7,000+</h2> */}
                                <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3"> 4 agencies</h2>
                                <h5 className="text-center text-white">tried & failed</h5>
                            </div>
                        </div>
                    </div>
                </div>

                

                <div class="pt-0 pb-10 py-lg-20 d-flex justify-content-center align-items-center text-center">
                    <div className="container">
                        <h2 className="font-size-md-12 font-size-10 mb-12">Get customer-driven and SEO-focused content to power your sales</h2>
                        <Link class="btn btn btn-dodger-blue-2 header-btn rounded-5 px-10" to="/get-a-quote/1/">Get pricing now </Link>
                    </div>
                </div>

                <div class="bg-default-3 py-lg-18 py-10 text-center">
                    <div className="container">
                        <h2 className="font-size-10 mb-md-12 mb-8">Read our blog</h2>
                        <div class="row">
                            <div class="col-md-4 mb-md-0 mb-4">
                                <a href="https://strategically.co/blog/think-tank/increase-website-authority">
                                    <img className="w-100 mb-6" src={FeaturedImg5} alt="" />
                                    <h3 className="font-size-8">How to increase your website authority</h3>
                                </a>
                            </div>
                            <div class="col-md-4 mb-md-0 mb-4">
                                <a href="https://strategically.co/blog/writing-tips/how-to-write-a-blog-post-outline">
                                    <img className="w-100 mb-6" src={FeaturedImg6} alt="" />
                                    <h3 className="font-size-8">How to write a blog post outline</h3>
                                </a>
                            </div>
                            <div class="col-md-4 mb-md-0 mb-4">
                                <a href="https://strategically.co/blog/writing-tips/seo-content-strategy">
                                    <img className="w-100 mb-6" src={FeaturedImg7} alt="" />
                                    <h3 className="font-size-8">The 7 steps to a killer SEO strategy</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


               








                {/* <div class="bg-dark py-md-22 py-10 text-center">
                    <div className="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 col-12">
                                <h2 className="font-size-11 font-weight-normal mb-10 text-gray-2">Grow your business with content </h2>
                                <img src={RightArrow} alt="" />

                            </div>
                        </div>
                    </div>
                </div> */}
            </PageWrapper>
        </>

    );
};
export default Sanctions;
