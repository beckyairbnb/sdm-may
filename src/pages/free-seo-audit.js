
import React from 'react';
import { Helmet } from "react-helmet";
import LeadgenLayout from "../components/Layout/LeadgenLayout";
const LeadgenPageMaster = () => {
    return (
        <>
            <Helmet>
                <title>Find missed SEO opportunities with our free audit tool | Strategically.co</title>
            </Helmet>
            <LeadgenLayout
                title="Free content audit tool"
                description="Got content that’s not (yet) crushing it in the SERPs? Enter the page URL and keywords you’re targeting, we’ll send you quick tips to improve its performance — for free. "
            >
                <div class="container mx-auto p-0">
                <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
                        <input type="hidden" name="oid" value="00D8d000009pkmx"/>
                        <input type="hidden" name="retURL" value="https://strategically.co/thank-you-audit/"/>

                        <div className="form-group position-relative mb-4">
                            <input
                                id="first_name"
                                name="first_name"
                                placeholder="First Name"
                                type="text" required="true"
                                style={{ height: "52px" }}
                                className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
                            />
                        </div>
                        <div className="form-group position-relative mb-4">
                            <input
                                id="last_name"
                                name="last_name"
                                placeholder="Last Name"
                                type="text" required="true"
                                style={{ height: "52px" }}
                                className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
                            />
                        </div>
                        <div className="form-group position-relative mb-4">
                            <input
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                type="email" required="true"
                                style={{ height: "52px" }}
                                className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
                            />
                        </div>
                        <div className="form-group position-relative mb-4">
                            <input
                                id="company"
                                name="company"
                                style={{ height: "52px" }}
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
                                style={{ height: "52px" }}
                                placeholder="Phone Number"
                                type="text" required="true"
                                className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
                            />
                        </div>
                        <div className="button">
                            <input type="hidden" name="00N8d00000QN3Qa" id="00N8d00000QN3Qa" value="[channel]" />
                            <input type="hidden" name="00N8d00000QN3Qf" id="00N8d00000QN3Qf" value="[channeldrilldown1]" />
                            <input type="hidden" name="00N8d00000QN3Qk" id="00N8d00000QN3Qk" value="[channeldrilldown2]" />
                            <input type="hidden" name="00N8d00000QN3Qp" id="00N8d00000QN3Qp" value="[channeldrilldown3]" />
                            <input type="hidden" name="00N8d00000QN4dw" id="00N8d00000QN4dw" value="[channeldrilldown4]" />
                            <input type="hidden" name="00N8d00000QN3Qu" id="00N8d00000QN3Qu" value="[landingpage]" />
                            <input type="hidden" name="00N8d00000QN3Qz" id="00N8d00000QN3Qz" value="[landingpagegroup]" />
                            <p className="snote">Looking to join our team? Email <a href="mailto:support@strategically.co">support@strategically.co</a> instead</p>
                            <input type="submit" value="Get a quote" className="btn btn-blue-3 w-100 rounded-4 btn-h" />
                        </div>
                    </form>
                </div>
            </LeadgenLayout>
        </>
    )
}

export default LeadgenPageMaster