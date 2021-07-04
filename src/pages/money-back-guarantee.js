import React from "react";

import PageWrapper from "../components/PageWrapper";
import Helmet from "react-helmet";

const Money = () => {
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
            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/pricing"}>
              View Pricing
            </a>
            </>
          ),
          footerStyle: "style4",
        }}
      >
        <main className="pt-23 pt-md-27 pb-13 pb-md-19 pt-lg-29 pb-lg-27">
          <div className="container">
            <div className="row justify-content-left">
              <div className="col-xl-11">
                {/* job-details-content */}
                <div className="text-left pb-0">
                  {/* job-top-header */}
                  <div className="mb-7 d-inline-flex align-items-center flex-wrap">

                  </div>
                  <h3 className="font-size-11 text-dark-cloud font-weight-bold text-center mb-lg-15 mb-0">
                    Money Back Guarantee
                  </h3>

<p>Strategically offers a money back guarantee policy that lets you trial us for 4,000 words of content. If you're not completey happy (you will be!) you get a full refund. </p>
<p>Sign up and purchase up to 4,000 words of content. Once you receive this content, review it and if it's not up to your expectations, you can then request a full refund. Refunds are only available within your first month. We will refund the initial subscription charge to the payment method you used.</p>
​<p>Please note, if request a refund, you don't get ownership over the content piece completed for you.</p>
<p>Our refund policy is only applicable to the first subscription. If you sign up, and then cancel and ask for a refund. A subsequent activation would result in us debiting your word quota for what was used during the previous free trial, and you wouldn't have the ability to request a refund again.</p>




                </div>
              </div>
              <div className="col-xl-9 col-lg-10 px-xl-0 px-lg-6 px-md-0 px-6 pr-0">
                {/* terms-contents  */}
                <div className="pt-lg-0 pt-10 pl-lg-10 px-xl-15">
                  <div className="article-block mt-11 mt-lg-15">
</div>
</div>
</div>
</div>
              </div>
        </main>
      </PageWrapper>
    </>
  );
};
export default Money;
