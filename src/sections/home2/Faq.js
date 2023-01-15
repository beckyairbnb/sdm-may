import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const Faq = () => {
    return (
        <div className="pb-13 pb-md-18 pb-lg-25">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-9">
                        <div className="text-center mb-2 mb-lg-3">
                            <h2 className="font-size-9 text-dark-cloud mb-0">Frequently asked questions</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 home-faq-sec px-0">
                    <Accordion allowZeroExpanded>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                What are content writing agencies?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>Content agencies provide professional writing services to businesses and individuals. They specialize in creating engaging and compelling written content for websites, blogs, ebooks, social media posts, and other marketing materials. </p>
                                <p>The agencies are typically staffed with experienced writers, editors, and marketers who can craft high-quality content for various industries and topics. Some companies provide additional services like keyword research, competitor analysis, launching marketing campaigns, and website design.</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What services are included in content writing?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>Content writing services can include web content, blog content, article writing, press releases, search engine optimization (SEO), and social media content. Let's see what these services may include:</p>
                                <p><b>Web content:</b> Website landing pages, product and service descriptions, and homepage articles. </p>
                                <p><b>Blog content:</b> Topic-based articles, interviews, and opinion pieces. </p>
                                <p><b>Article writing:</b> News stories, feature articles, and instructional articles. </p>
                                <p><b>Press releases:</b> Informative pieces about a product launch, new partnership, or other newsworthy events. </p>
                                <p><b>SEO content:</b> Optimized content for search engines, including using keywords, metadata, and other optimization techniques.</p>
                                <p><b>Social media content:</b> Posts for Facebook, Twitter, LinkedIn, and other social networks.</p>
                                <p>In addition, the services may include writing whitepapers, ebooks, or scripts for video and podcast episodes.</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Why does content matter? 
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>Content matters because it is the core of any website and marketing campaign. It attracts users to a website, drives clicks and shares on social media, and helps to establish a brand identity and trust. </p>
                                <p>Quality content also helps to improve organic search rankings and make websites easier to find by search engine bots. As a result, content is a key factor in driving conversions, leads, and sales.</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What is a good content strategy?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>A good content strategy is an organized plan for creating and delivering content to achieve specific business objectives or a predetermined key performance indicator (KPI). </p>
                                <p>A strategy should meet the unique needs of an organization and its audience. It should include specific guidelines for the type of content to create, the best channels to reach the target audience, how often to post, and how to measure success. Businesses can build brand loyalty and stay competitive by sticking to the content strategy.</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What is the golden rule of SEO?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                    <p>The golden rule of SEO is to always focus on the user experience. For that, you need to create easy-to-read and informative content that answers a user's query. Content should also be optimized for search engines. It should use keywords that accurately reflect the search intent and provide relevant internal or external links to help users explore the topic better. Additionally, content should be well-structured with headings, images, and other elements that make it simple to navigate for users.</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How much do content writing services cost?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                            <p>The cost of content writing services varies depending on your needs and the scope of work.</p>
                            <p>Factors that can affect the cost are </p>
                            <ul>
                                <li>The type of content needed (i.e., blog posts, website copy, press releases, or white paper)</li>
                                <li>Complexity, length, and timeline of the project</li>
                                <li>The expertise required (subject knowledge, SEO, etc.)</li>
                                <li>The level of research involved</li>
                                <li>The number of revisions included. </li>
                            </ul>


                            <p>The more complex and detailed the project, the more expensive the content writing services will be.</p>

                            </AccordionItemPanel>
                        </AccordionItem>                        
                    </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
