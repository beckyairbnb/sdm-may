import React from "react";

import PageWrapper from "../components/PageWrapper";
import Helmet from "react-helmet";

const ThankYouSamples = () => {
    return (
        <>
            <PageWrapper
                themeConfig={{
                    headerClassName: "site-header--menu-right",
                    headerButton: (
                        <>
                            <Helmet>
                                <title>Strategically | Content Writing Agency</title>
                            </Helmet>
                            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/get-a-quote/"}>
                                View Pricing
                            </a>
                        </>
                    ),
                    footerStyle: "style2",
                }}
            >
                <div className="pt-28 pt-lg-34 pb-8 pb-lg-28">
                    <div className="container">
                        <div className="row justify-content-center text-center py-lg-5">
                            <div className="col-sm-12">
                                <h2 className="mb-10">Thank you for requesting your content samples. </h2>
                                <p className="mb-10">Our expert team of writers and SEOs  are working on your request and will be in touch within 12 hours. </p>
                                <div className="btn_outer d-flex gap-5 justify-content-center">
                                    <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/"}>
                                        Visit our website
                                    </a>
                                    <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"https://calendly.com/becky-strategically/intro-meeting"}>
                                        Book a call
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
};
export default ThankYouSamples;
