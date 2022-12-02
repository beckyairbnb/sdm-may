import React from "react";
import Helmet from "react-helmet";

import PageWrapper from "../../components/PageWrapper";
import HeaderButton from "../../components/Header/HeaderButton";
import ReadOurBlog from "../../components/blog/readourblog";

import Icon1 from "../../assets/images/icon-traffic.png";
import Icon2 from "../../assets/images/icon-value.png";
import Icon3 from "../../assets/images/icon-links.png";
import ClientImg from "../../assets/images/lanacooper-2.jpg";


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
                                <h2 class="display-4 font-weight-bold text-left mb-7">How Strategically increased sanctions.io traffic by 2X in 6 months</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-dark-cloud w-full py-md-20 py-14  text-center">
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col-md-4 col-sm-6 mb-5">
                                <img src={Icon2} alt="" />
                                <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">2X increase </h2>
                                <h5 className="text-center text-white">in organic traffic</h5>
                            </div>
                            <div class="col-md-4 col-sm-6 mb-5">
                                <img src={Icon1} alt="" />
                                <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3">2.5X words</h2>
                                <h5 className="text-center text-white">written per month</h5>
                            </div>
                            <div class="col-md-4 col-sm-6 mb-5">
                                <img src={Icon3} alt="" />
                                <h2 class="font-size-lg-12 font-size-10 text-center text-white mt-3"> 4 agencies</h2>
                                <h5 className="text-center text-white">tried & failed</h5>
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
                                        <img className="mb-10" src={ClientImg} alt="" />
                                    </div>
                                    <div class="col-lg-7 col-md-11 mt-10">
                                        <h2 className="font-size-10">The client</h2>
                                        <div className="service-post-divider "></div>
                                        <p><a href="https://sanctions.io/">sanctions.io</a> knows all there is about business partner screenings against global sanctions. The start-up has helped 100+ companies with their simple and reliable data and technology solutions. But co-founders Thorsten, Hector, and Jens were struggling in one department: content creation.</p>
                                        <p>Strategically was up for the challenge, and we caught up with Thorsten to discuss his experience since working with our agency.</p>
                                    </div>
                                </div>
                                <h2 className="font-size-10 text-left my-lg-10 my-5">The problem</h2>
                                <p> sanctions.io had a blog where they posted once per month. Unfortunately, they are a team of data and technology buffs, not writers. <span class="purple">“Our team doesn't have great writers, I'm not a great writer, and it's always a big headache trying to write.”</span></p>
                                <p>Thorsten and the team were procrastinating and pushing away creating content for their blog when they knew they needed it to improve their SEO. For most businesses, there is a straightforward solution: outsourcing their work. But for a niche technology company, sanctions.io was struggling to find an agency they were satisfied with.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div class="quote-blk py-14 px-14 text-center my-10">
                            <h3 className="text-white font-size-9  my-0">“We worked with three or four agencies over 12 to 15 months, and we were at the point where we said the content quality was a big issue for us. We needed a dependable source of good content that was willing to put the work in for us.”</h3>
                        </div>
                    </div>
                    <div className="container">
                        <p>At the same time, sanctions.io is a startup, with set budgets for marketing activities. Thorsten knew he could find a dependable agency if he were prepared to pay a premium price, but <span className="purple">“we cannot pay a huge company; we don't have a huge budget.”</span></p>
                        <p>They needed a cost-effective solution that didn't sacrifice quality. They needed <a href="/">Strategically.</a></p>
                    </div>
                </div>
                <div class="pb-10 text-size">
                    <div className="container">
                        <h2 className="font-size-10 mb-lg-10 mb-5">The solution</h2>
                        <p> After yet another dissatisfied experience with a content writing agency, Thorsten took to Google. He searched again for an agency that could be up for the challenge of producing niche content for their blog. This time, he stumbled across Strategically.</p>
                        <p>Thorsten knew we were the one: <span class="purple">“it was just a feeling.”</span> and we offered an affordable pricing plan aligned with his smaller startup budget. Thorsten said our <span className="purple"> “general offering for a small start-up like ours is very attractive from a pricing standpoint.”</span></p>
                        <p>So Thorsten gave us a call, and we wrote our first piece of content for sanctions.io… and it totally missed the mark. Like other agencies, we failed to understand his industry comprehensively enough, which showed in our writing. But we were different for one reason: we were the only agency Thorsten worked with that wanted to do better.</p>
                    </div>
                    <div className="container">
                        <div class="quote-blk py-14 px-14 text-center my-10">
                            <h3 className="text-white my-0">“You were the first agency to say, “let's look harder, let's look into this, let's try it again”, and this I really appreciated. Your willingness to accept feedback and really help your customers sets you apart from other agencies.”</h3>
                        </div>
                    </div>
                    <div className="container">
                        <p>We took our time to understand Thorsten's requirements and find a better fit among our network of writers. We asked for feedback, swapped his writer, and now he's happy with every piece of content we produce. He's now increased his monthly words by 2.5X!</p>
                        <p>Not only did we ask Thorsten for feedback on our writing, but also on our processes. Thorsten explained that our flexibility in how we work also made him stay, as this customer-first approach is how sanctions.io runs its business.</p>
                    </div>
                    <div className="container">
                        <div class="quote-blk py-14 px-14 text-center my-10">
                            <h3 className="text-white my-0">“What usually turns me off when I work with service providers is that I have to do everything through a dashboard. You were willing to say, “Just send me an email”… I believe in making things easy for the clients, and it's how we do our business. I really liked that.”</h3>
                        </div>
                    </div>
                    <div className="container">
                        <p>We also offer our content ideation services to Thorsten, solving more problems for our customers. By taking control of coming up with content, Thorsten and the team can focus on the things that matter more and which they excel at. <span className="purple">“The process is very easy to work with: good ideas, good content, simple interaction, and a great offering… [It's] very frictionless compared to other experiences that I had.”</span></p>
                        <h2 className="font-size-10 mb-lg-10 mb-5 mt-10">The impact</h2>
                        <p>Since sanctions.io started working with Strategically, <span className="purple"> “we tripled our organic traffic on the website. We also see the success of trial requests and, in the end, in revenue.”</span></p>
                        <p>Thorsten thinks a large part of this has to do with their content and the increased frequency of putting blogs up on the web – something they wouldn’t have the time to do by themselves or could trust other agencies to do for them. With content ideation also taken care of, posting quality content regularly is even easier for Thorsten and the team.</p>
                    </div>
                </div>
                <ReadOurBlog/>
            </PageWrapper>
        </>
    );
};
export default Sanctions;
