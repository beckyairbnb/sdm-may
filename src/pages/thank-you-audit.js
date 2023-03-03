import React from "react";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import HappyClients from '../components/happyClients';
import HeaderButton from "../components/Header/HeaderButton";
import Helmet from "react-helmet";

const ThankYouAudit = () => {
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
                <div className="pt-28 pt-lg-34 pb-8 pb-lg-28">
                    <div className="container">
                        <div className="row justify-content-center text-center py-lg-5">
                            <div className="col-sm-12">
                                <h2 className="mb-10">Thank you for requesting your content audit. </h2>
                                <p className="mb-10">Our expert team of writers and SEOs  are working on your request and will be in touch within 12 hours. </p>
                                <div className="btn_outer d-flex gap-5 justify-content-center">
                                    <Link className="btn btn btn-dodger-blue-2 header-btn rounded-5" to={"/"}>
                                        Visit our website
                                    </Link>
                                    <Link className="btn btn btn-dodger-blue-2 header-btn rounded-5" to={"/book-a-demo/"}>
                                        Book a call
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageWrapper>
            <div className="container-fluid mt-20 pt-20 mb-10">
          <HappyClients />
        </div>
        </>
    );
};
export default ThankYouAudit;
