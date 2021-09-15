import React, { useContext, useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import styled from 'styled-components';
import { Link } from "gatsby";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import GlobalContext from "../../context/GlobalContext";
import { useStaticQuery, graphql } from "gatsby"
const Header = () => {
  const eleAny = useRef(false);
  const [showResults, setShowResults] = useState(false)
  const gContext = useContext(GlobalContext);
  const onClickHandler = () => setShowResults(!showResults)

  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });

  useEffect(() => {
    function handleClickOutside(event) {
        if (eleAny.current && !eleAny.current.contains(event.target)) {
          setShowResults(false)
        }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [eleAny,setShowResults]);

  const { SiteLogo, SiteLogoPng } = useStaticQuery(
    graphql`
      query {
        SiteLogo: file(relativePath: {eq: "logo.svg"}) {
         publicURL
       }
       SiteLogoPng: file(relativePath: {eq: "logo.png"}) {
        publicURL
      }
      }
    `
  )
  return (
    <>
      <SiteHeader
        className={`site-header ${
          gContext.theme.headerClassName
        } site-header blog-header site-header--absolute site-header--sticky

        ${showScrolling ? "scrolling" : ""} ${
          showReveal ? "reveal-header bg-white" : ""
        }`}
      >
        <div className="container-fluid">
           
        
        <div
        className={showScrolling && showReveal ?
          "row d-flex justify-content-start align-items-center pb-3 pt-1 px-10"
          :
          "d-flex justify-content-center align-items-center flex-wrap row p-0 position-relative"}
        >
        { !showScrolling && (
          <div className="menu-btn bg-transparent p-2 position-absolute"  ref={eleAny}>
          <a href="#" class="border click-btn py-3 pl-5 pr-5 text-white d-flex justify-content-between" onClick={onClickHandler}>
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
        )}
        
           
            <div
            className={showScrolling && showReveal ?
              "col-md-6 col-sm-7 d-flex justify-content-start pt-1 pb-2"
              :
              "col-md-8 col-sm-7 d-flex justify-content-center"}
            >
            <div className="brand-logo mt-0 mt-md-0">
            <Logo src={showScrolling && showReveal ? SiteLogoPng.publicURL : SiteLogo.publicURL} className="light-version-logo" />
            </div>
            </div>
            { showScrolling && showReveal && (
              <div className="col-md-6 col-sm-5 d-flex justify-content-end">
              {gContext.theme.headerButton && (
                <div className="header-btn ml-auto ml-lg-0 d-none d-xs-block">
                  {gContext.theme.headerButton}
                </div>
              )}
              </div>
            )
            }
            
            

            
            
          </div>
        </div>
      </SiteHeader>
    </>
  );
};
export const Logo = styled.img`
@media (min-width: 541px) {
  width:216px
}
@media (max-width: 540px) {
  width: 180px;
}
@media (max-width: 360px) {
  width: 160px;
}
`;
export const SiteHeader = styled.div`

`;
export default Header;
