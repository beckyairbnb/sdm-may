
import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import LeadgenLayout from "../components/Layout/LeadgenLayout";
import AttributorFields from "../components/AttributorFields";

const LeadgenPageMaster = () => {
    useEffect(() => {
        setInterval(() => {
            document.FlareTrk.repop();
        }, 1000);
      }, []);
    return (
        <>
            <Helmet>
                <title>Get ten free topic ideas | Strategically.co</title>
            </Helmet>
            <LeadgenLayout
                title="Get 10 free topic ideas"
                description="Struggling to come up with unique topic ideas? Submit your details and we’ll send you ten topic ideas for free, saving you $149!"
            >
                <div class="container mx-auto p-0">
                <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
                    <AttributorFields returnUrl="https://strategically.co/thank-you-topic-ideation/" />

                        <div className="form-group position-relative mb-4">
                            <input
                                id="first_name"
                                name="first_name"
                                placeholder="First Name"
                                type="text" required="true"
                                style={{ height: "46px" }}
                                className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
                            />
                        </div>
                        <div className="form-group position-relative mb-4">
                            <input
                                id="last_name"
                                name="last_name"
                                placeholder="Last Name"
                                type="text" required="true"
                                style={{ height: "46px" }}
                                className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
                            />
                        </div>
                        <div className="form-group position-relative mb-4">
                            <input
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                type="email" required="true"
                                style={{ height: "46px" }}
                                className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
                            />
                        </div>
                        <div className="form-group position-relative mb-4">
                            <input
                                id="company"
                                name="company"
                                style={{ height: "46px" }}
                                placeholder="Company Name"
                                type="text"
                                required="true"
                                className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
                            />
                        </div>
                        <div className="form-group position-relative mb-4">
                            <input
                                id="phone"
                                name="phone"
                                style={{ height: "46px" }}
                                placeholder="Phone Number"
                                type="text" required="true"
                                className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
                            />
                        </div>
                       
                        <div className="button"> 
                            <p className="snote">Looking to join our team? Email <a href="mailto:support@strategically.co">support@strategically.co</a> instead</p>
                            <input type="submit" value="Continue" className="btn btn-blue-3 w-100 rounded-4 btn-h" />
                        </div>
                    </form>
                </div>
            </LeadgenLayout>
        </>
    )
}

export default LeadgenPageMaster