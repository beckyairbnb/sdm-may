import React, { useState, useContext } from "react";
import { Link } from "gatsby"
import {
    Nav,
    Navbar,
    Container,
    Button,
    Image,
    Dropdown,
    NavDropdown,
    Col,
    Row,
} from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";

const Navigation = () => {
    const gContext = useContext(GlobalContext);
    return (
        <div className="d-flex align-items-center nav">
             <Container className="eventsNav">           
            <NavDropdown
                className="align-text-top"
                title="What We Do"
                id="basic-nav-dropdown"
            >
                <Dropdown.Header>
                    {"  "}
                    <h5 className="pr-5 pl-6">What We Do</h5>
                </Dropdown.Header>

                <Dropdown.Item>                   
                    <div>
                        <h6><Link to="/get-free-content-samples/"  className="text-black" onClick={gContext.toggleOffCanvas}>SEO content and sales copy</Link></h6>
                        <p><Link to="/get-free-content-samples/" className="text-black" onClick={gContext.toggleOffCanvas}>Want to check out samples specific to your niche? Get free sample articles for any industry, written by our 5 star writers. </Link></p>
                    </div>
                </Dropdown.Item>               

                <Dropdown.Item>
                   
                    <div>
                        <h6><Link to="/get-ten-free-topic-ideas/" className="text-black" onClick={gContext.toggleOffCanvas}>Content strategy</Link></h6>
                        <p><Link to="/get-ten-free-topic-ideas/" className="text-black" onClick={gContext.toggleOffCanvas}>Want to write content, but stuck for topic ideas? Get ten free topics specifical to your business emailed straight to your inbox. </Link></p>
                    </div>
                </Dropdown.Item>             

                <Dropdown.Item>
                   
                    <div>
                        <h6><Link to="/free-seo-audit/" className="text-black" onClick={gContext.toggleOffCanvas}>Content audit</Link></h6>
                        <p><Link to="/free-seo-audit/" className="text-black" onClick={gContext.toggleOffCanvas}>Written epic content, but it’s not getting the eyeballs you need? Enter the URL and target keywords, and will send you actionable tips to improve your SERP positions. </Link></p>
                    </div>
                </Dropdown.Item>                

                <Dropdown.Item>
                  
                    <div>
                        <h6><Link to="/calculate-content-roi/" className="text-black" onClick={gContext.toggleOffCanvas}>Content ROI calculator</Link></h6>
                        <p><Link to="/calculate-content-roi/" className="text-black" onClick={gContext.toggleOffCanvas}>Love the idea of content marketing, but not sure it’s viable? Use our free content marketing ROI calculator to find out now.</Link> </p>
                    </div>
                </Dropdown.Item>
            </NavDropdown>
             <Link to="/case-study" className="nav-link" role="button" onClick={gContext.toggleOffCanvas}>
             Case Studies
            </Link>
            <Link to="/blog" className="nav-link" role="button" onClick={gContext.toggleOffCanvas}>
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