import React, { useState, useContext } from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import { Container, Dropdown, NavDropdown } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";

const Navigation = () => {
    const gContext = useContext(GlobalContext);
    return (
        <div className="d-flex align-items-center nav">
            <Container className="eventsNav">
                <NavDropdown
                    className="align-text-top"
                    title="Services"
                    id="basic-nav-dropdown"
                >
                    <Dropdown.Header>
                        {"  "}
                        <h5 className="pr-5 pl-6">Services</h5>
                    </Dropdown.Header>

                    {/* <Dropdown.Item>
                        <div className="linktext" onClick={gContext.toggleOffCanvas}>
                            <div className="icon">
                                <StaticImage src="../../assets/images/samples.svg" alt="" />
                            </div>

                            <div>
                                <h6><Link to="/get-free-content-samples/" onClick={gContext.toggleOffCanvas}>Get free content samples</Link></h6>
                                <p><Link to="/get-free-content-samples/" onClick={gContext.toggleOffCanvas}>Want to check out samples specific to your niche? Get free sample articles for any industry, written by our 5 star writers. </Link></p>
                            </div>

                            <div className="arrow">
                                <svg width="20" height="20" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero" /></svg>
                            </div>
                        </div>
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <div className="linktext" onClick={gContext.toggleOffCanvas} >
                            <div className="icon">
                                <StaticImage src="../../assets/images/topics.svg" alt="" />
                            </div>

                            <div>
                                <h6><Link to="/get-ten-free-topic-ideas/" onClick={gContext.toggleOffCanvas}>Get 10 free topic ideas</Link></h6>
                                <p><Link to="/get-ten-free-topic-ideas/" onClick={gContext.toggleOffCanvas}>Not sure what to write? We offer ten topic ideas unique to your business completely free</Link></p>
                            </div>

                            <div className="arrow">
                                <svg width="20" height="20" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero" /></svg>
                            </div>

                        </div>

                    </Dropdown.Item>

                    <Dropdown.Item>
                        <div className="linktext" onClick={gContext.toggleOffCanvas}>
                            <div className="icon">
                                <StaticImage src="../../assets/images/audit.svg" alt="" />
                            </div>

                            <div>
                                <h6><Link to="/free-seo-audit/" className="text-black" onClick={gContext.toggleOffCanvas}>Get your free SEO audit</Link></h6>
                                <p><Link to="/free-seo-audit/" className="text-black" onClick={gContext.toggleOffCanvas}>Written epic content, but it’s not getting the eyeballs you need? Enter the URL and target keywords, and will send you actionable tips to improve your SERP positions. </Link></p>
                            </div>

                            <div className="arrow">
                                <svg width="20" height="20" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero" /></svg>
                            </div>
                        </div>
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <div className="linktext" onClick={gContext.toggleOffCanvas}>
                            <div className="icon">
                                <StaticImage src="../../assets/images/roi.svg" alt="" />
                            </div>

                            <div>
                                <h6><Link to="/calculate-content-roi/" className="text-black" onClick={gContext.toggleOffCanvas}>Calcuate your content ROI</Link></h6>
                                <p><Link to="/calculate-content-roi/" className="text-black" onClick={gContext.toggleOffCanvas}>Love the idea of content marketing, but not sure it’s viable? Use our free content marketing ROI calculator to find out now.</Link> </p>
                            </div>

                            <div className="arrow">
                                <svg width="20" height="20" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero" /></svg>
                            </div>
                        </div>
                    </Dropdown.Item> */}
                </NavDropdown>
                <Link to="/case-study" className="nav-link" role="button" onClick={gContext.toggleOffCanvas}>
                    Case Studies
                </Link>
                <Link to="/blog/" className="nav-link" role="button" onClick={gContext.toggleOffCanvas}>
                    Blog
                </Link>
                <Link to="/get-a-quote/" onClick={gContext.toggleOffCanvas} className="btn btn-dodger-blue-2 header-btn rounded-5 d-lg-none d-inline-flex mt-10 " href={"/get-a-quote/"}>
                    Get a quote
                </Link>
                <div className="w-100 mt-5 d-lg-none d-inline-flex">
                    <a class="btn btn header-btn2 rounded-5 d-lg-none d-inline-flex" target="_blank" rel="noopener noreferrer" href="https://calendly.com/becky-strategically/intro-meeting">Book a Demo</a>
                </div>
            </Container>
        </div>
    );
}
export default Navigation;