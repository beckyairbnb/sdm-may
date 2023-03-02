import React from "react";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import HappyClients from '../components/happyClients';
import HeaderButton from "../components/Header/HeaderButton";
import Helmet from "react-helmet";

const BookADemo = () => {
    return (
        <PageWrapper
            themeConfig={{
                headerClassName: "site-header--menu-right",
                headerButton: (
                    <>
                        <Helmet>
                            <title>Strategically | Content Writing Agency</title>
                        </Helmet>
                        <HeaderButton />
                    </>
                ),
                footerStyle: "style2",
            }}
        >
            <div className="pt-15 pt-lg-25 pb-8 pb-lg-20">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-sm-12">
                            <div class="row-container">
                                <iframe
                                src={`https://calendly.com/becky-strategically/intro-meeting?month=${(new Date().getFullYear())}-${(new Date().getMonth())}`}
                                class="second-row"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};
export default BookADemo;
