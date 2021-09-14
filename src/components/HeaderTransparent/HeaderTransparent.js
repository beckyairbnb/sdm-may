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
            <div className="menu-btn bg-transparent p-2">
        <a href="#" class="border py-3 pl-5 pr-5 text-white d-flex justify-content-between" onClick={onClickHandler}>
          <span>Life</span>
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M455,113a15,15 0 01 19,0l29,29a15,15 0 01 0,19l-235,236a16,16 0 01-24,0l-235-236a15,15 0 01 0-19l29-29a15,15 0 01 19,0l199,199z" />
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
