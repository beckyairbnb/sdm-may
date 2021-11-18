import React from 'react'
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";

const Success = (props) => {     
    return(
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
        <PageContainer className="container d-flex flex-column justify-content-center text-center">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-sm-9 col-xs-12 d-flex flex-column">            
                        <h6 className="display-6 mb-5 fw-bolder">Quote Price</h6>
                        <p>This quote is based upon the information that you have given us and an average number of transactions</p>
                        <p className="gray">Your monthly subscription will cost, excluding VAT, this is for our basic package. If you’d like sign up simply book a call with an advisor below. The onboarding process is quick and easy.</p>                        
                    </div>
                </div>
            </PageContainer>
        </PageWrapper>
    )
}
const PageContainer = styled.div`
max-width:1170px;
margin:auto;
padding: 160px 0 20px 0px;
h6,p{ text-align:center;}
`;
export default Success;