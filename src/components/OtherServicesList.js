import React from "react";
import { Link } from "gatsby"
const OtherServicesList = () => {
    return (
        <div className="container py-lg-10 bg-white ">
            <div className="row justify-content-center text-center py-lg-5">
                <div className="col-sm-12">
                    <h2 className="mb-10">Other Services We Provide</h2>
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <ul className="row">
                                <li className="col-md-12 col-sm-12 text-left p-2 nav-item">
                                    <Link
                                        to="/writer-services/accounting-writer/"
                                        className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5"
                                    >
                                        Accounting Writers
                                    </Link>
                                </li>
                                <li className="col-md-12 col-sm-12 text-left p-2 nav-item">
                                    <Link
                                        to="/writer-services/seo-content-writing/"
                                        className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5"
                                    >
                                        SEO Content Writing
                                    </Link>
                                </li>
                                <li className="col-md-12 col-sm-12 text-left p-2 nav-item">
                                    <Link
                                        to="/writer-services/saas-content-writer/"
                                        className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5"
                                    >
                                        SaaS Content Writing
                                    </Link>
                                </li>
                                <li className="col-md-12 col-sm-12 text-left p-2 nav-item">
                                    <Link
                                        to="/writer-services/fintech-content-writer/"
                                        className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5"
                                    >
                                        Fintech Content Writing
                                    </Link>
                                </li>
                                <li className="col-md-12 col-sm-12 text-left p-2 nav-item">
                                    <Link
                                        to="/writer-services/casino-content-writing-services/"
                                        className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5"
                                    >
                                        Casino Content Services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <ul className="row">
                                <li className="col-md-12 col-sm-12 text-left p-2 nav-item">
                                    <Link
                                        to="/writer-services/cyber-security-writer/"
                                        className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5"
                                    >
                                        Cyber Security Writing
                                    </Link>
                                </li>
                                <li className="col-md-12 col-sm-12 text-left p-2 nav-item">
                                    <Link
                                        to="/writer-services/b2b-content-writing-services/"
                                        className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5"
                                    >
                                        B2B Content Writing
                                    </Link>
                                </li>
                                <li className="col-md-12 col-sm-12 text-left p-2 nav-item">
                                    <Link
                                        to="/writer-services/human-resources-writer/"
                                        className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5"
                                    >
                                        Human Resources Writers
                                    </Link>
                                </li>
                                <li className="col-md-12 col-sm-12 text-left p-2 nav-item">
                                    <Link
                                        to="/writer-services/fintech-content-writer/"
                                        className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5"
                                    >
                                        Finance Content Writing
                                    </Link>
                                </li>
                                <li className="col-md-12 col-sm-12 text-left p-2 nav-item">
                                    <Link
                                        to="/writer-services/"
                                        className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5"
                                    >
                                        Content writing services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <ul className="row">
                                <li className="col-md-12 col-sm-12 text-left p-2 nav-item">
                                    <Link
                                        to="/copywriting-services/"
                                        className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5"
                                    >
                                        Copywriting Services
                                    </Link>
                                </li>
                                <li className="col-md-12 col-sm-12 text-left p-2 nav-item">
                                    <Link
                                        to="/copywriting-services/website-copywriting/"
                                        className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5"
                                    >
                                        Website Copywriting Service
                                    </Link>
                                </li>
                                <li className="col-md-12 col-sm-12 text-left p-2 nav-item">
                                    <Link
                                        to="/writer-services/product-description-writers/"
                                        className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5"
                                    >
                                        Product Description Writers
                                    </Link>
                                </li>
                                <li className="col-md-12 col-sm-12 text-left p-2 nav-item">
                                    <Link
                                        to="/copywriting-services/landing-page-copywriting/"
                                        className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5"
                                    >
                                        Copywriting for Landing Pages
                                    </Link>
                                </li>
                                <li className="col-md-12 col-sm-12 text-left p-2 nav-item">
                                    <Link
                                        to="/copywriting-services/email-copywriting/"
                                        className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5"
                                    >
                                        Email Copywriting
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default OtherServicesList;