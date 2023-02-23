import React from "react";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";

import imgE from "../assets/image/inner-page/png/404-error-img.png";

const TestPage = () => {
    return (
        <>
            <PageWrapper
                themeConfig={{
                    headerClassName: "site-header--menu-right",
                    headerButton: (
                        <>
                            <button className="btn btn btn-blue-3 header-btn-2 font-size-3 rounded-5">
                                Start 14 Days Free Trial
                            </button>
                        </>
                    ),
                    footerStyle: "style2",
                }}
            >
                <div className="pt-24 pt-md-26 pb-15 pt-lg-33 pb-md-19 pb-lg-25">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-11">
                                <div className="text-center">
                                    <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

                                        <input type="hidden" name="oid" value="00D8d000009pkmx" />
                                        <input type="hidden" name="retURL" value="https://strategically.co/success" />
                                        <label for="first_name">First Name</label><input id="first_name" maxlength="40" name="first_name" size="20" type="text" />
                                        <label for="last_name">Last Name</label><input id="last_name" maxlength="80" name="last_name" size="20" type="text" />
                                        <label for="email">Email</label><input id="email" maxlength="80" name="email" size="20" type="text" />
                                        <label for="phone">Phone</label><input id="phone" maxlength="40" name="phone" size="20" type="text" />
                                        <input type="hidden" name="00N8d00000QN3Qa" id="00N8d00000QN3Qa" value="[channel]"/>
                                        <input type="hidden" name="00N8d00000QN3Qf" id="00N8d00000QN3Qf" value="[channeldrilldown1]"/>
                                        <input type="hidden" name="00N8d00000QN3Qk" id="00N8d00000QN3Qk" value="[channeldrilldown2]"/>
                                        <input type="hidden" name="00N8d00000QN3Qp" id="00N8d00000QN3Qp" value="[channeldrilldown3]"/>
                                        <input type="hidden" name="00N8d00000QN4dw" id="00N8d00000QN4dw" value="[channeldrilldown4]"/>
                                        <input type="hidden" name="00N8d00000QN3Qu" id="00N8d00000QN3Qu" value="[landingpage]"/>
                                        <input type="hidden" name="00N8d00000QN3Qz" id="00N8d00000QN3Qz" value="[landingpagegroup]"/>
                                        <input type="submit" value="Get a quote" className="btn btn-blue-3 w-100 rounded-4 btn-h" />
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
 </>
);
};
export default TestPage;



// Channel:<input id="00N8d00000QN3Qa" maxlength="255" name="00N8d00000QN3Qa" size="20" type="text" value="[channel]" />
// Channel Drilldown 1:<input id="00N8d00000QN3Qf" maxlength="255" name="00N8d00000QN3Qf" size="20" type="text" value="[channel]" />
// Channel Drilldown 2:<input id="00N8d00000QN3Qk" maxlength="255" name="00N8d00000QN3Qk" size="20" type="text" value="[channeldrilldown2]" />
// Channel Drilldown 3:<input id="00N8d00000QN3Qp" maxlength="255" name="00N8d00000QN3Qp" size="20" type="text" value="[channeldrilldown3]"/>
// Landing Page:<input id="00N8d00000QN3Qu" maxlength="255" name="00N8d00000QN3Qu" size="20" type="text" value="[channeldrilldown4]" />
// Landing Page Group:<input id="00N8d00000QN3Qz" maxlength="255" name="00N8d00000QN3Qz" size="20" type="text" value="[landingpage]" />
// Channel Drilldown 4:<input id="00N8d00000QN4dw" maxlength="255" name="00N8d00000QN4dw" size="20" type="text" value="[landingpagegroup]" />