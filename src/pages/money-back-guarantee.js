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
            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/pricing/"}>
              View Pricing
            </a>
            </>
          ),
          footerStyle: "style2",
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

                  <p>We are so confident that you’ll love our work, Strategically offers a 2000 word money back guarantee policy. This means you can purchase up to 2000 words of content and if you’re not completely satisfied, you can get a full refund.</p>

                  <p>First, sign up with one of our monthly content plans. Next, order up to 2000 words of content. Finally, receive and review your content written by our expert writers.</p>

                  <p>If you are not 100% happy, get in touch. We will either offer unlimited free revisions until you are happy, or we will offer a full refund.</p>

                  <p>Please note, the refund is only available within the first month of working with us, within your first 2000 words of content, and it is only applicable on your first subscription with us.</p>

                  <p>If you sign up with us, then cancel and ask for a refund, a subsequent subscription would result in us charging you for the number of words used during your free trial. You will not be able to request a refund a second time. </p>

                  <p>Refunds will be returned to your original payment method and if you request a refund, Strategically retains ownership over the content created, and you are not permitted to use the content in any way. </p>




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
