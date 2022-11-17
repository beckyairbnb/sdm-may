import React from "react";
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

const Navigation = () => {
    return (
        <div className="d-flex align-items-center nav">
             <Container className="eventsNav">           
            {/* <NavDropdown
                className="align-text-top"
                title="Services"
                id="basic-nav-dropdown"
            >
                <Dropdown.Header>
                    {"  "}
                    <h5 className="pr-5 pl-5">Services</h5>
                </Dropdown.Header>

                <Dropdown.Item>
                   
                    <div>
                        <h6><Link to="/get-free-content-samples/">Sample Posts</Link></h6>
                        <p>Want to check out samples specific to your niche. Get free sample articles for any industry, written by our 5 star writes.</p>
                    </div>
                </Dropdown.Item>               

                <Dropdown.Item>
                   
                    <div>
                        <h6>Topic ideation</h6>
                        <p>Want to write content, but stuck for topic ideas? Get ten free topics specifical to your business emailed straight to your inbox.</p>
                    </div>
                </Dropdown.Item>             

                <Dropdown.Item>
                   
                    <div>
                        <h6>Content audit</h6>
                        <p>Written epic content, but it’s not get the eyeballs you need? Enter the URL and target keywords, and will send you actionable tips to improve your SERP positions.</p>
                    </div>
                </Dropdown.Item>                

                <Dropdown.Item>
                  
                    <div>
                        <h6>Content ROI calculator</h6>
                        <p>Love the idea of content marketing, but not sure it’s viable? Use our free content marketing ROI calculator to find out now.</p>
                    </div>
                </Dropdown.Item>
            </NavDropdown> */}
             <Link to="/case-study" className="nav-link" role="button">
                Blog
            </Link>
            <Link to="/blog" className="nav-link" role="button">
                Case Study
            </Link>
            </Container>
        </div>
    );
}
export default Navigation;