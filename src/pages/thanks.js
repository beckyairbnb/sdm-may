import React, { useEffect } from "react";
import {navigate } from 'gatsby'
import PageWrapper from "../components/PageWrapper";
import HappyClients from '../components/happyClients';
import HeaderButton from "../components/Header/HeaderButton";
import Helmet from "react-helmet";

const Thanks = () => {
    useEffect(() => {
        setTimeout(() => {        
            navigate('/');
        }, 1);
     });
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
                                <h2 className="mb-10">Thank you for booking a call.</h2>
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
            <div className="container-fluid mt-20 pt-20 mb-10">
          <HappyClients />
        </div>
        </>
    );
};
export default Thanks;
