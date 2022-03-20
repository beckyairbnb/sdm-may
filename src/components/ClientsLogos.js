import React from "react";
import styled from "styled-components";
import flogo1 from '../assets/images/flogos/google-reviews.png'
import flogo2 from '../assets/images/flogos/contentmarketing-min.png'
import flogo3 from '../assets/images/flogos/contentmarketing.png'
import flogo4 from '../assets/images/flogos/top-marketing-comp.png'
import flogo5 from '../assets/images/flogos/writing.svg'
const ClientsLogos = (props) => {
    return (
        <div className="container">
            <LogosRow className="row">
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 my-3" onClick={() => window.open("https://g.page/strategically?share", "_blank")}><img className="w-100 opacity-9" src={flogo1} /></div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 my-3" onClick={() => window.open("https://superbcompanies.com/categories/content-marketing-companies/", "_blank")}><img className="w-100 opacity-9" src={flogo2} /></div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 my-3"><img className="w-100 opacity-9" src={flogo3} /></div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 my-3" onClick={() => window.open("https://www.designrush.com/agency/content-marketing", "_blank")}><img className="w-100 opacity-9" src={flogo4} /></div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 my-3" onClick={() => window.open("https://www.goodfirms.co/writing", "_blank")}><img className="w-100 opacity-9" src={flogo5} /></div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 my-3">
                    <img className="w-100 opacity-9" src="https://core.sortlist.com//_/apps/core/images/badges-en/badge-flag-blue-light-xl.svg" />
                </div>
            </LogosRow>
        </div>
    )

}

export default ClientsLogos

const LogosRow = styled.div`
display: flex;
align-items: stretch;
& > div{
  display: flex;
  flex-direction: row;
  align-items: center;
}
& > div > a{
  width:100%;
  cursor:pointer;
  
}
& > div > a > img{
  width:100%;
  cursor:pointer;
}
& > div > a > svg{
  width:100%;
  cursor:pointer;
}
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-between;
align-items: stretch;
@media (max-width: 480px) {
  .col-xs-4 {
    flex: 0 0 50% !important;
    max-width: 50% !important;
  }
}
`;