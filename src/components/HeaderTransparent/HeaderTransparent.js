import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";

import { Link } from "gatsby";

import GlobalContext from "../../context/GlobalContext";
import Logo from "../Logo";

const Header = () => {
  const [showResults, setShowResults] = useState(false)
  const gContext = useContext(GlobalContext);
  const onClickHandler = () => setShowResults(!showResults)
  return (
    <>
      <header
        className="site-header blog-header site-header--absolute"
      >
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-start flex-wrap row p-0">
            <div className="col-md-4 col-sm-6 p-0" >
            <div className="menu-btn bg-transparent w-100 p-2">
        <a href="#" class="border py-4 pl-5 pr-5 rounded text-white" onClick={onClickHandler}>Life
            <svg class="svg-icon" viewBox="0 0 20 20">
		        <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
	        </svg>
        </a>
        { showResults ? 
        (
          <div className="dd-menu bg-white border border-bottom-0 rounded shadow overflow-hidden">
            <ul className="list-inline primary-menu d-flex justify-content-space-between align-items-stretch flex-wrap mb-0">
              <li className="text-primary font-size-6"><a href="#" className="text-primary w-100">Blog Home</a></li>
              <li className="text-primary font-size-6"><a href="#" className="text-primary w-100">Strategically101</a></li>
              <li className="text-primary font-size-6"><a href="#" className="text-primary w-100">Home Owners</a></li>
              <li className="text-primary font-size-6"><a href="#" className="text-primary w-100">Renters</a></li>
              <li className="text-primary font-size-6"><a href="#" className="text-primary w-100">Pet</a></li>
              <li className="text-primary font-size-6"><a href="#" className="text-primary w-100">Term Life</a></li>
              <li className="text-primary font-size-6"><a href="#" className="text-primary w-100">Behavioral Econ</a></li>
              <li className="text-primary font-size-6"><a href="#" className="text-primary w-100">News</a></li>
              <li className="text-primary font-size-6"><a href="#" className="text-primary w-100">Transparency</a></li>
              <li className="text-primary font-size-6"><a href="#" className="text-primary w-100">Life Hacks</a></li>
            </ul>
          </div>
        )
        :
        null
        }

</div>
            </div>
            <div className="col-md-4 col-sm-6 d-flex justify-content-center mt-3">
            <div className={`brand-logo ${gContext.theme.headerLogoClassName}`}>
              <Logo />
            </div>
            </div>
            <div className="col-md-4 mobile-hide">
              33
            </div>

            
            
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
