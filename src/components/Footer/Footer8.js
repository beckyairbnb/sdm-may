import React from "react";
import { Link } from "gatsby";
import ClientsLogos from "../ClientsLogos";
import FooterCta2 from "../../sections/footercta/footercta2";


const Footer8 = ({ className, ...rest }) => {
  console.log('restrest',rest)
  return (
    <>

      <div className={`pt-13 ${className}`} {...rest}>
        <ClientsLogos />
        <FooterCta2 />

       
            <div className="col-lg-12 border-top border-dark-light mt-5 pt-6 pb-0">
              <p className="text-center">22 Strategically Digital Marketing Ltd. Company Number 11898834 VAT 328 9819 52 | <Link to="/privacy/" className="text-default-color">Privacy</Link> | <Link to="/terms/" className="text-default-color">Terms</Link></p>
            </div>
          </div>
        
     
    </>
  );
};

export default Footer8;
