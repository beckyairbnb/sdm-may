import React from "react";
import { graphql, Link } from "gatsby"
import PageWrapper from "../components/PageWrapper";

import Content2 from "../sections/LP/Content2";
import Helmet from "react-helmet";
import Progress from "../sections/LP/Progress";
import HappyClientsReviews from "../sections/LP/happyClientsReviews";
import FaqAccordion from "../sections/pricing/FaqAccordion";
import logo1 from "../assets/images/clients/logo-1.jpg";
import logo2 from "../assets/images/clients/logo-2.jpg";
import logo3 from "../assets/images/clients/logo-3.jpg";
import logo4 from "../assets/images/clients/logo-4.jpg";
import logo5 from "../assets/images/clients/logo-5.jpg";

import logo7 from "../assets/images/clients/logo-7.jpg";
import logo9 from "../assets/images/clients/logo-9.jpg";
import logo10 from "../assets/images/clients/logo-10.jpg";

import Stars from "../assets/images/stars.png";
import Author from "../assets/images/author2.png";
import Collapsible from 'react-collapsible';

import LpImg from "../assets/images/lp-img.jpg"



const LpIndex = (props) => {
    const { data } = props
    const { PriceData } = props.data  
  
    const Faqitems = PriceData.data.body.filter((item) => {
      return item.slice_type === "faq_block";
    });
  
    console.log('Faqitems',Faqitems)
  
    const fitems = Faqitems[0].items

    console.log('fitems',fitems)
    
    return (
        <div className="lp_page">
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
                <div className="lp_bg pt-10 position-relative">
                    
                <img src={LpImg} alt="" className="position-absolute bottom right lp-img1"/>
                    <div className="main-banner mt-12">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                                    <div className="text-center pt-5 pb-lg-4 mb-lg-2">
                                        <h1>Award-winning content writing agency</h1>
                                        {/* {PageData.data.title.html && <div dangerouslySetInnerHTML={{ __html: PageData.data.title.html }} className="mb-4" ></div>} */}
                                        <div>Our expert content writers work with ABTasty, Baremetrics, VWO and more</div>
                                        <Link
                                            to="/get-a-quote/"
                                            className="btn btn btn-dodger-blue-2 header-btn-2 mt-5 mb-3 pt-md-10 pb-md-10 pl-md-12 pr-md-12 font-size-3 rounded-5 text-uppercase w-auto border-0">View Pricing</Link>
                                        <p>100% original. Managed Service. Get started today.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="text-center d-sm-block d-lg-none d-md-none"> <img src="images/mob-banner.jpg" alt="" className="w-100" /></div>
                        </div>
                    </div>

                    <div className="py-2 mb-4">
                        <div className="container my-1">
                            <div className="client-logo d-flex flex-column">
                                <div className="d-flex flex-row justify-content-center align-items-center m-0 p-0">
                                    <div className="client-item"><img src={logo1} alt="Client 1" /></div>
                                    <div className="client-item"><img src={logo2} alt="Client 2" /></div>
                                    <div className="client-item"><img src={logo3} alt="Client 3" /></div>
                                    <div className="client-item"><img src={logo4} alt="Client 4" /></div>
                                </div>
                                <div className="d-flex flex-row justify-content-center align-items-center m-0 p-0">
                                    <div className="client-item"><img src={logo5} alt="Client 5" /></div>
                                    <div className="client-item"><img src={logo7} alt="Client 7" /></div>
                                    <div className="client-item"><img src={logo9} alt="Client 9" /></div>
                                    <div className="client-item"><img src={logo10} alt="Client 10" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <img src={LpImg2} alt="" className="position-absolute lp-img2"/> */}
                </div>

                <Progress className="pb-lg-21 " />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12 col-lg-9 col-md-12 col-sm-12 d-flex justify-content-center mt-5 pb-20">
                            <Link
                                to="/get-a-quote/"
                                className="btn btn btn-dodger-blue-2 header-btn-2 mt-5 mb-3 pt-md-10 pb-md-10 pl-md-12 pr-md-12 font-size-3 rounded-5 text-uppercase w-auto border-0">View Pricing</Link>
                        </div>
                    </div>
                </div>

                <HappyClientsReviews
                    title="Over 8M+ words written!"
                    subtitle="Strategically has produced thousands of pieces of content for over 250+ happy clients."
                    ctatextbelow="Read what our customers are saying about Strategically"
                />
                <Content2 className="pb-0 pb-15 pt-20" />

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12 col-lg-9 col-md-12 col-sm-12 d-flex justify-content-center pb-20">
                            <Link
                                to="/get-a-quote/"
                                className="btn btn btn-dodger-blue-2 header-btn-2 mb-3 pt-md-10 pb-md-10 pl-md-12 pr-md-12 font-size-3 rounded-5 text-uppercase w-auto border-0">View Pricing</Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div class="row justify-content-center my-10">
                        <div class="col-lg-10 col-12">
                            <div className="testimonial border p-md-10 p-8 rounded">
                                <img src={Stars} alt="" width={158} height={25} />
                                <p class="font-size-8 line-height-28 text-dark-cloud my-10">"The team was able to wrap their heads around the product we work with, which is a metrics product for SaaS. The content is filled with specific product-related knowledge that really speaks to our audience and helps us talk with our customers! Definitely recommend working with them!"</p>
                                <div className="d-flex align-items-center">
                                    <img src={Author} alt="" width={55} height={55} className="rounded-circle" />
                                    <div className="ml-4">
                                        <h4 class="font-size-6 mb-0 text-dark-cloud">Lindsey Rogerson</h4>
                                        <p className="mb-0">Baremetrics</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-20">
                    <h2 className="text-center mb-4">Our services</h2>
                    <p className="text-center mb-10">Our services are SEO-focused, customer-driven and proven to deliver. We'll<br /> get you the traffic, links and rankings that drive exponential growth</p>
                    <div class="row d-flex gap-5">
                        <div class="col-lg-4 col-md-6 col-12 border p-6 justify-content-center d-flex flex-column text-center align-items-center">
                            <div className="rounded-circle lpcircle bg-dodger-blue-1 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm1.437 9.396c-.439.44-1.031.636-1.621.577l-3.816 2.027 2.028-3.818c-.059-.578.134-1.177.575-1.619.445-.445 1.05-.642 1.649-.572l3.748-1.992-1.99 3.748c.073.632-.151 1.226-.573 1.649zm-1.437-13.396c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm.854-10.021c-.001.46-.374.833-.833.833-.46 0-.834-.373-.834-.833 0-.461.373-.834.834-.833.459 0 .833.374.833.833z" /></svg>
                            </div>
                            <h4 className="py-2">Website copy</h4>
                            <p>By understanding your business goals and target audience, we engineer our copy to resonate with your ideal customer</p>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12 border p-6 justify-content-center d-flex flex-column text-center align-items-center">
                            <div className="rounded-circle lpcircle bg-dodger-blue-1 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M2.597 7.81l4.911 13.454c-3.434-1.668-5.802-5.19-5.802-9.264 0-1.493.32-2.91.891-4.19zm16.352 3.67c0-1.272-.457-2.153-.849-2.839-.521-.849-1.011-1.566-1.011-2.415 0-.978.747-1.88 1.862-1.819-1.831-1.677-4.271-2.701-6.951-2.701-3.596 0-6.76 1.845-8.601 4.64.625.02 1.489.032 3.406-.118.555-.034.62.782.066.847 0 0-.558.065-1.178.098l3.749 11.15 2.253-6.756-1.604-4.394c-.555-.033-1.08-.098-1.08-.098-.555-.033-.49-.881.065-.848 2.212.17 3.271.171 5.455 0 .555-.033.621.783.066.848 0 0-.559.065-1.178.098l3.72 11.065 1.027-3.431c.444-1.423.783-2.446.783-3.327zm-6.768 1.42l-3.089 8.975c.922.271 1.898.419 2.908.419 1.199 0 2.349-.207 3.418-.583-.086-.139-3.181-8.657-3.237-8.811zm8.852-5.839c.224 1.651-.099 3.208-.713 4.746l-3.145 9.091c3.061-1.784 5.119-5.1 5.119-8.898 0-1.79-.457-3.473-1.261-4.939zm2.967 4.939c0 6.617-5.384 12-12 12s-12-5.383-12-12 5.383-12 12-12 12 5.383 12 12zm-.55 0c0-6.313-5.137-11.45-11.45-11.45s-11.45 5.137-11.45 11.45 5.137 11.45 11.45 11.45 11.45-5.137 11.45-11.45z" /></svg>
                            </div>
                            <h4 className="py-2">SEO blog content</h4>
                            <p>Great content is the heart and soul of any website but planning for and creating grat content isn't easy. That's where we come in</p>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12 border p-6 justify-content-center d-flex flex-column text-center align-items-center">
                            <div className="rounded-circle lpcircle bg-dodger-blue-1 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fff" transform="360deg"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-15l-3.431 12h-2.102l2.542-9h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.196z" /></svg>
                            </div>
                            <h4 className="py-3">SEO content strategy</h4>
                            <p>Based on keyword trends and competitive analysis, out editorial team will pepare a comprehensive content strategy that includes potential content ideas.</p>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12 border p-6 justify-content-center d-flex flex-column text-center align-items-center">
                            <div className="rounded-circle lpcircle bg-dodger-blue-1 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm0 3h-10v1h10v-1z" /></svg>
                            </div>
                            <h4 className="py-2">Link-building</h4>
                            <p>We offer full-service building to drive organic rankings, increase revenue, and position you as an industry expert.</p>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12 border p-6 justify-content-center d-flex flex-column text-center align-items-center">
                            <div className="rounded-circle lpcircle bg-dodger-blue-1 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M7 16h13v1h-13v-1zm13-3h-13v1h13v-1zm0-6h-5v1h5v-1zm0 3h-5v1h5v-1zm-17-8v17.199c0 .771-1 .771-1 0v-15.199h-2v15.98c0 1.115.905 2.02 2.02 2.02h19.958c1.117 0 2.022-.904 2.022-2.02v-17.98h-21zm19 17h-17v-15h17v15zm-9-12h-6v4h6v-4z" /></svg>
                            </div>
                            <h4 className="py-2">CMS installation</h4>
                            <p>Too busy to install your epic new content? We get it. Our team will handle the installation for a small additional charge.</p>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12 border p-6 justify-content-center d-flex flex-column text-center align-items-center">
                            <div className="rounded-circle lpcircle bg-dodger-blue-1 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z" /></svg>
                            </div>
                            <h4 className="py-2">Email marketing</h4>
                            <p>Successful email marketing campaigns rely on clever, compelling copy. We can help.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12 col-lg-9 col-md-12 col-sm-12 d-flex justify-content-center pb-20">
                            <Link
                                to="/get-a-quote/"
                                className="btn btn btn-dodger-blue-2 header-btn-2 mb-3 pt-md-10 pb-md-10 pl-md-12 pr-md-12 font-size-3 rounded-5 text-uppercase w-auto border-0">View Pricing</Link>
                        </div>
                    </div>
                </div>
                <div className="container mb-10">
                    <div class="row d-flex flex-row justify-content-center">
                    <div className="col-lg-8">
                        {fitems && <FaqAccordion data={fitems} />}
                    </div>
                        {/* <div class="col-12">
                            <Collapsible className="mb-8" trigger="What is an SEO content writing service?">
                                <p>SEO web content writing is the art of producing high-end content for website visitors while, at the same time, adhering to the best SEO practices. Doing so ensures that the content is easy to find and drives qualified leads to your webpage from search engines.  </p>
                                <p>Search engines feature complex algorithms to separate valuable content from web copy that uses outdated SEO practices. For example, inserting keywords into bad-quality, shallow content won't improve a website's ranking. Cooperating with expert writers is the safest choice.</p>
                                <p>Every Strategically writer is trained in the latest SEO practices and knows how to use high-end marketing techniques and craft informative, engaging, and actionable copy.</p>
                                <p>We combine journalism with creative writing and SEO marketing to produce content for our clients. Consequently, regardless of the type of ordered content, from white papers to blog posts, we ensure our copy hits the mark every time.</p>
                                <p>Hiring an SEO content writer or service can be an excellent investment to improve your online visibility and attract more traffic to your website. By outsourcing your content needs, you can focus on other aspects of your business, such as marketing and customer service, while ensuring that your website receives the attention it deserves.</p>
                            </Collapsible>
                            <Collapsible className="mb-8" trigger="How do I do SEO for my article?">
                                <p>Search engine optimisation (SEO) is a long-term marketing strategy. It improves the visibility and organic search results of a website or landing page in Google and other global search engines.</p>
                                <p>Proper SEO techniques can drive more traffic to a site from organic or unpaid search results than paid advertisements.</p>
                                <p>Not everyone understands how to do SEO from the get-go. This is why people turn to professional SEO writing solutions, such as Strategically, to scale their SEO content.</p>
                                <p>Here are some handy SEO writing tips and techniques:</p>
                                <h5>Research your keywords</h5>
                                <p>Before you start writing, it's essential to do your research and figure out which keywords you want to target. You can use various tools, such as Google's Keyword Planner (free) and many other paid tools, to find high-traffic, relevant keywords. Once you have a list of potential keywords, it's time to start writing!</p>
                                <h5>Write for your audience</h5>
                                <p>Before creating content, you need to know your target audience. It seems straightforward, yet many businesses produce content for the wrong reasons.</p>
                                <p>Not every post should be about your products or services. The aim should be to create industry-related content and offer real value to readers.</p>
                                <p>In other words, establish yourself and your company as an expert within your industry.</p>
                                <h5>Keep everything under one roof</h5>
                                <p>Get the traffic your website deserves by maintaining your content under your domain name. </p>
                                <h5>Use keywords</h5>
                                <p>Using relevant keyword-rich phrases in headlines and throughout your content allows readers and search engines to know what your topic is about. </p>
                                <p>As such, use keywords sparingly and thoughtfully and stick to a natural feel. But take care. Visitors won't like it if you stuff too many keywords, and Google will penalise you.</p>
                                <h5>Create attractive headlines</h5>
                                <p>Engaging headlines that appeal to readers ensures they're going to click on your post. Don't underestimate the power and effectiveness of a headline in SEO. </p>
                                <p>Write headlines that are short, clear, eye-catching, and rich in keywords. Also, add meta descriptions to further elaborate on your topic. </p>
                                <h5>Optimise the meta title and description</h5>
                                <p>The meta tags appear in the search results, so it's important to ensure they are optimised for your target keywords. For your title, aim for something that is both catchy and includes your target keywords. </p>
                                <p>The meta description should be a gist of your article that appears in the search results. Again, aim for something informative that includes your target keywords.</p>
                                <h5>Add images</h5>
                                <p>Adding an image to your blog content makes a great impression on people, as humans love visual content. Use royalty-free images for obvious reasons, or take a premium subscription from a stock photo provider subscription if you have the budget. </p>
                                <p>It's also essential to optimise your images for the web. It means adding alt text to them—which is a short description of the image that appears when the image is loading or if the image can't be displayed.</p>
                                <h5>Structure your content</h5>
                                <p>If the contents of your blog post aren't organised, they'll get lost. To avoid this, break your content into smaller paragraphs with clear headlines to keep readers engaged and your content easy to read. </p>
                                <p>Use the correct tag hierarchy when tagging headlines, such as H1 for titles or H2 for subsections. In summary, proper back-end organisation is paramount to a website's success.</p>
                                <h5>Make sure your website is well-structured</h5>
                                <p>Search engines like websites that are well-organised and easy to navigate. Make sure your website has a clear hierarchy and well-defined navigation. Use descriptive titles and URLs that accurately reflect the content on each page.</p>
                                <h5>Link building</h5>
                                <p>This SEO technique has come a long way since the practice of link buying. That said, links are still a crucial ranking factor for SEO. Aim to link to your previously published articles in your recent posts to ensure a link back to your website if another webpage picks your content. This increases your website's authority, helping it rank higher on Google.</p>
                                <h5>Promote your content</h5>
                                <p>Once your article is published, promote it to get the word out. You can do this through social media, email marketing, and other marketing channels. </p>
                                <p>The more people see and share your article, the more likely it is to rank well in the search results.</p>
                                <h5>Monitor your efforts</h5>
                                <p>Lastly, staying on top of your SEO content by utilising Google Analytics (or other similar tools) is vital for understanding how your content is doing.</p>
                                <p>Checking page views, bounce rate, and the average time a viewer spends on a page helps you determine whether your content strategy is successful.</p>
                                <p>SEO is a complex process, but following these steps will help you get started on the right foot.</p>
                            </Collapsible>
                            <Collapsible className="mb-8" trigger="How much do SEO articles cost?">
                                <p>The cost depends on your relationship with the writer and the writer's content creation experience. In most cases, freelance writers charge an hourly or per-project fee. In both scenarios, it can be a real challenge to budget your SEO article writing ahead of time. Plus, if you need revisions, there's no guarantee that a freelance article writer won't charge extra.</p>
                                <p>As an agency, we have a rule: we always charge upfront and never add surprise costs or hidden fees. We keep it simple by charging only per word for our copy. When you place an order through our order management system, you decide the number of words, so you already know how long your article will be and how much it will cost.</p>
                                <p>Additionally, we offer FREE revisions. Yep, that's right. FREE revisions. This way, we ensure our clients are 100% satisfied with our content.</p>
                            </Collapsible>
                            <Collapsible className="mb-8" trigger="How are research articles written?">
                                <p>Writing a research article is more challenging than blog writing or creating a traditional landing page. Why? It's because a research article requires in-depth research from the writer's side.</p>
                                <p>For starters, you need to identify the research question or study objective. Why? Because it's the central organising principle of the paper. Without it, there's no research article. The key attributes to a good research question are:</p>
                                <ul>
                                    <li><p>Specificity</p></li>
                                    <li><p>Novelty</p></li>
                                    <li><p>Relevance to the scientific community or to what the type of content the client's asking for</p></li>
                                </ul>
                                <p>With this in mind, the structure of the paper comes next. The elemental composition of a typical research article is the following sequence:</p>
                                <ul>
                                    <li><p><strong>Introduction:</strong> This is where you will introduce your topic and explain why it is important. Be sure to include a hypothesis, as this will help to guide your research.</p></li>
                                    <li><p><strong>Methods:</strong> In this step, you will describe the methods you used to conduct your research. Include details on your participants, data collection, and data analysis.</p></li>
                                    <li><p><strong>Results:</strong> Now, it's time to present your findings. Include both quantitative and qualitative data.</p></li>
                                    <li><p><strong>Discussion:</strong> The last step should discuss the implications of your findings, explaining what the results mean and how they relate to the topic.</p></li>
                                </ul>
                                <p>We're a content writing agency, not an academic institution. Yet, our team of writers is experienced in producing such content for an everyday audience. We still adhere to research principles and cite studies and scientific results to support our claims as we expand on our client's topic but do it in a way that will be understandable by all and in a voice that matches the client's style.</p>
                                <p>Give us a phone call or email to discuss your research article needs. We'd be more than happy to pitch in and help out!</p>

                            </Collapsible>
                            <Collapsible className="mb-8" trigger="Where can I find content writers for my blog?">
                                <p>That's not hard. There are many content writers on the market right now. For a start, you could turn to any one of several freelance platforms or post a job on freelance job boards to receive bids from interested candidates.</p>
                                <p>Browsing Google or social media for writing agencies could be another solution. Additionally, you can find writers on LinkedIn or Facebook if you know how to search. Similarly, searching on job platforms like Hire My Mom, Indeed, or Craigslist can bring results.</p>
                                <p>But if you want a more professional solution without wasting hours searching for different candidates' profiles, reach out to us at <a href="https://strategically.co/contact/">Strategically</a>. With us, you're guaranteed access to a pool of talented and seasoned content writers who know how to produce any type of content, from engaging and personal blogs to listicles and research articles. </p>
                                <p>Whether you hire a professional writer or write your content yourself, focus on quality. Even if you're not using your blog to make money but to increase your reputation as a professional within your industry, skimping on quality is a no-no and not worth it.</p>
                            </Collapsible>
                            <Collapsible className="mb-8" trigger="What are content writing and article writing?">
                                <p>Content writing and article writing are often used interchangeably, but the terms don't refer to the same thing.</p>
                                <p>Article writing consists of writing only articles, while content writing is a whole industry and involves numerous forms of content — web copy, product reviews, product descriptions, blogs, SEO pieces, news pieces, creative writing, advertorials, press releases, and so on.</p>
                                <p>Content writing aims to achieve better traction, reach more prospects, and provide value to website visitors. Content writing can market a business idea effectively to the target audience. In contrast, article writing typically doesn't have an objective and aims to inform readers about a product, service or event.</p>
                                <p>Content writing is used to promote a product, service, or brand. It's meant to engage the reader and persuade them to take action. The writing style is to the point, as it needs to hold the readers' attention.</p>
                                <p>On the other hand, article writing is used to inform or educate the reader on a particular topic. Articles are usually longer than content pieces, as they go into greater detail on the subject. It's often found in magazines, personal blogs, educational platforms, or newspapers, as the goal is to inform the reader about something.</p>
                                <p>Article writing tends to have a formal approach with a predefined format, while content writing isn't that strict. For instance, when creating advertorials, you don't have to follow a specific structure unless the client asks for one.</p>
                                <p>Lastly, content writing doesn't have a particular target audience or may target people with different interests. Article writing, though, is specific and dedicated to a particular audience.</p>
                                <ul>
                                    <li><p>Content writing is more informal, shorter, engaging, and includes calls to action</p></li>
                                    <li><p>Article writing is more formal, longer, and focused on providing information</p></li>
                                </ul>
                                <p>In every case, our agency is highly experienced in content and article writing, so don't hesitate to contact us for your content needs!</p>
                            </Collapsible>
                            <Collapsible className="mb-8" trigger="Why should I let Strategically produce my content?">
                                <p>We're one of the UK's leading writing solutions, and we've helped over 250 businesses succeed and scale their content creation. At the same time, we've produced over 2M+ words of content for our consumers.</p>
                                <p>Quality content can help you attract and retain customers, boost your search engine ranking, and build brand awareness. But creating quality content takes time, effort, and skill. And if you're like most business owners, you don't have the time or resources to produce all the content you need.</p>
                                <p>Strategically takes care of the entire content creation process, from researching the topics to writing, editing, proofreading, and SEO. We can produce landing page content, social media posts, website content, blog posts, eBooks, and more on topics covering various industries. Everything we write will be tailored to your specific needs.</p>
                                <p>As we've mentioned before, apart from our years of experience in the industry, the great thing about us is that we offer FREE revisions. Thanks to this policy, you can have peace of mind that you'll always receive quality content no matter what.</p>
                            </Collapsible>
                        </div> */}
                    </div>
                </div>
            </PageWrapper>
        </div>
    );
};

export default LpIndex;

export const query = graphql`
query LpPricePage {
  PriceData : prismicPriceTable(id: {eq: "4ae29779-cc90-59bc-a46a-84a259e1f968"}) {
    data {
      heading {
        text
        html
      }
      sub_heading {
        text
        html
      }
      body {   
        ... on PrismicPriceTableDataBodyFaqBlock {
          id
          slice_type
          items {
            faq {
              document {
                ... on PrismicF {
                  id
                  data {
                    question {
                      text
                    }
                    answer {
                      text
                      html
                    }
                  }
                }
              }
            }
          }
        }     
        ... on PrismicPriceTableDataBodyPriceTableData {
          id
          slice_type
          items {
            monthly_words
            month_to_month_price
            annual_price
            button_text
            button_link
          }
        }
      }
    }
  }
}
`