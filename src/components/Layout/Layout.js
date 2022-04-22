import React, { useState, useEffect, useContext, useRef } from "react";

import styled from "styled-components";
import { Helmet } from "react-helmet";

import { Link } from "gatsby"
import AOS from "aos";
import Header from "../Header";
import { HeaderMini , HeaderComingSoon } from "../HeaderMini";
import { HeaderTransparent } from "../HeaderTransparent";
import HeaderNoFooter from "../Header/HeaderNoFooter";
import Footer from "../Footer";

import ModalVideo from "../ModalVideo";

import GlobalContext from "../../context/GlobalContext";

import FooterCta from "../../sections/footercta";
import ClientsLogos from "../ClientsLogos";

import imgFavicon from "../../assets/favicon.png";

import "../../assets/fonts/fontawesome-5/webfonts/fa-brands-400.ttf";
import "../../assets/fonts/fontawesome-5/webfonts/fa-regular-400.ttf";
import "../../assets/fonts/fontawesome-5/webfonts/fa-solid-900.ttf";

import "../../assets/fonts/typography-font/CircularStd-Bold.ttf";
import "../../assets/fonts/typography-font/CircularStd-BoldItalic.ttf";
import "../../assets/fonts/typography-font/CircularStd-Book.ttf";
import "../../assets/fonts/typography-font/CircularStd-BookItalic.ttf";
import "../../assets/fonts/typography-font/CircularStd-Medium.ttf";

import "../../assets/fonts/icon-font/fonts/avasta.ttf";
import "../../assets/fonts/icon-font/css/style.css";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/aos/dist/aos.css";

import "../../assets/fonts/icon-font/css/style.css";
import "../../assets/fonts/typography-font/typo.css";
// import "../../assets/fonts/fontawesome-5/css/all.css";

import "../../assets/scss/bootstrap.scss";
import "../../assets/scss/main.scss";
import "../../layout/custom-css.css"


const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 0.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;

const Layout = ({ children, pageContext }) => {

  const gContext = useContext(GlobalContext);

  const [visibleLoader, setVisibleLoader] = useState(true);

  useEffect(() => {
    AOS.init({ once: true });
    setVisibleLoader(false);
  }, []);

  // Navbar style based on scroll
  const eleRef = useRef();

  useEffect(() => {
    window.addEventListener(
      "popstate",
      function(event) {
        // The popstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas();
      },
      false
    );
    window.addEventListener(
      "pushState",
      function(event) {
        // The pushstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas();
      },
      false
    );

    return () => {};
  }, [gContext]);
  if (pageContext.layout === "blog") {
    return (
      <>
        <Helmet>
          <body data-theme={gContext.theme.bodyDark ? "dark" : "light"} />
          <script>window.STONLY_WID = "d4b28c86-9895-11ec-9fb8-0ae9fa2a18a2";</script>
          <script>
          {`
            !function(s,t,o,n,l,y,w,g){s.StonlyWidget||((w=s.StonlyWidget=function(){
              w._api?w._api.apply(w,arguments):w.queue.push(arguments)}).scriptPath=n,w.queue=[],(y=t.createElement(o)).async=!0,
              (g=new XMLHttpRequest).open("GET",n+"version?v="+Date.now(),!0),g.onreadystatechange=function(){
              4===g.readyState&&(y.src=n+"stonly-widget.js?v="+(200===g.status?g.responseText:Date.now()),
              (l=t.getElementsByTagName(o)[0]).parentNode.insertBefore(y,l))},g.send())
              }(window,document,"script","https://stonly.com/js/widget/v2/");
          `}
        </script>
          <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T35RVN5');
          `}
        </script>
        <script>
          {`
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T35RVN5"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          `}
        </script>
        </Helmet>
        <Loader id="loading" className={visibleLoader ? "" : "inActive"} />

        <div className="site-wrapper" ref={eleRef}>
          <HeaderTransparent />
          {children}
        </div>
        <Footer
            className={gContext.theme.footerClassName}
            style={gContext.theme.footerStyle}
          />
      </>
    )
  }
  if (pageContext.layout === "mini") {
    return (
      <>
        <Helmet>
          <title>Finity 2</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
          <body data-theme={gContext.theme.bodyDark ? "dark" : "light"} />
          <script>window.STONLY_WID = "d4b28c86-9895-11ec-9fb8-0ae9fa2a18a2";</script>
          <script>
          {`
            !function(s,t,o,n,l,y,w,g){s.StonlyWidget||((w=s.StonlyWidget=function(){
              w._api?w._api.apply(w,arguments):w.queue.push(arguments)}).scriptPath=n,w.queue=[],(y=t.createElement(o)).async=!0,
              (g=new XMLHttpRequest).open("GET",n+"version?v="+Date.now(),!0),g.onreadystatechange=function(){
              4===g.readyState&&(y.src=n+"stonly-widget.js?v="+(200===g.status?g.responseText:Date.now()),
              (l=t.getElementsByTagName(o)[0]).parentNode.insertBefore(y,l))},g.send())
              }(window,document,"script","https://stonly.com/js/widget/v2/");
          `}
        </script>
          <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T35RVN5');
          `}
        </script>
        <script>
          {`
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T35RVN5"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          `}
        </script>
        <script>
          {`
            (function(e,a){
              var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol;
              t=e.createElement("script");t.type="text/javascript";
              t.charset="utf-8";t.async=!0;t.defer=!0;
              t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t);
              })(document,"157096");
          `}
        </script>
        </Helmet>
        <Loader id="loading" className={visibleLoader ? "" : "inActive"} />

        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          <HeaderMini />
          {children}
        </div>

        <ModalVideo />
      </>
    );
  }
  if (pageContext.layout === "coming") {
    return (
      <>
        <Helmet>
          <title>Finity 3</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
          <body data-theme={gContext.theme.bodyDark ? "dark" : "light"} />
          <script>window.STONLY_WID = "d4b28c86-9895-11ec-9fb8-0ae9fa2a18a2";</script>
          <script>
          {`
            !function(s,t,o,n,l,y,w,g){s.StonlyWidget||((w=s.StonlyWidget=function(){
              w._api?w._api.apply(w,arguments):w.queue.push(arguments)}).scriptPath=n,w.queue=[],(y=t.createElement(o)).async=!0,
              (g=new XMLHttpRequest).open("GET",n+"version?v="+Date.now(),!0),g.onreadystatechange=function(){
              4===g.readyState&&(y.src=n+"stonly-widget.js?v="+(200===g.status?g.responseText:Date.now()),
              (l=t.getElementsByTagName(o)[0]).parentNode.insertBefore(y,l))},g.send())
              }(window,document,"script","https://stonly.com/js/widget/v2/");
          `}
        </script>
          <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T35RVN5');
          `}
        </script>
        <script>
          {`
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T35RVN5"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          `}
        </script>
        <script>
          {`
            (function(e,a){
              var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol;
              t=e.createElement("script");t.type="text/javascript";
              t.charset="utf-8";t.async=!0;t.defer=!0;
              t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t);
              })(document,"157096");
          `}
        </script>
        </Helmet>
        <Loader id="loading" className={visibleLoader ? "" : "inActive"} />

        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          <HeaderComingSoon />
          {children}
        </div>
        <ModalVideo />
      </>
    );
  }
  if (pageContext.layout === "noheaderfooter") {
    return (
      <>
      <Helmet>
          <title>Strategically | Content Writing Agency</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
          <body data-theme={gContext.theme.bodyDark ? "dark" : "light"} />
          <script>window.STONLY_WID = "d4b28c86-9895-11ec-9fb8-0ae9fa2a18a2";</script>
          <script>
          {`
            !function(s,t,o,n,l,y,w,g){s.StonlyWidget||((w=s.StonlyWidget=function(){
              w._api?w._api.apply(w,arguments):w.queue.push(arguments)}).scriptPath=n,w.queue=[],(y=t.createElement(o)).async=!0,
              (g=new XMLHttpRequest).open("GET",n+"version?v="+Date.now(),!0),g.onreadystatechange=function(){
              4===g.readyState&&(y.src=n+"stonly-widget.js?v="+(200===g.status?g.responseText:Date.now()),
              (l=t.getElementsByTagName(o)[0]).parentNode.insertBefore(y,l))},g.send())
              }(window,document,"script","https://stonly.com/js/widget/v2/");
          `}
        </script>
          <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T35RVN5');
          `}
        </script>
        <script>
          {`
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T35RVN5"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          `}
        </script>
        <script>
          {`
            (function(e,a){
              var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol;
              t=e.createElement("script");t.type="text/javascript";
              t.charset="utf-8";t.async=!0;t.defer=!0;
              t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t);
              })(document,"157096");
          `}
        </script>
        <script>
          {`
          (function(e,t,o,n,p,r,i){e.visitorGlobalObjectAlias=n;e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){(e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)};e[e.visitorGlobalObjectAlias].l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");
          vgo('setAccount', '800828951');
          vgo('setTrackByDefault', true);
  
          vgo('process');
          `}        
        </script>
        </Helmet>
        <div className="site-wrapper overflow-hidden">   
          <HeaderNoFooter/>  
          {children}
          <ClientsLogos/>
          <FooterCta/>
          <div class="container mt-5 pt-6 ">
          <div class="row">
          <div className="col-lg-12 border-top border-dark-light mt-5 pt-6 pb-0">
          <p className="text-center">Strategically Digital Marketing Ltd. Company Number 11898834 VAT 328 9819 52 | <Link to="/privacy/"  className="text-default-color">Privacy</Link> | <Link to="/terms/" className="text-default-color">Terms</Link></p>
            </div>
            </div>
            </div>
        </div>
      </>
    );
  }

  if (pageContext.layout === "hideheaderfooter") {
    return (
      <>   
          <Helmet>
          <script>window.STONLY_WID = "d4b28c86-9895-11ec-9fb8-0ae9fa2a18a2";</script>
          <script>
          {`
            !function(s,t,o,n,l,y,w,g){s.StonlyWidget||((w=s.StonlyWidget=function(){
              w._api?w._api.apply(w,arguments):w.queue.push(arguments)}).scriptPath=n,w.queue=[],(y=t.createElement(o)).async=!0,
              (g=new XMLHttpRequest).open("GET",n+"version?v="+Date.now(),!0),g.onreadystatechange=function(){
              4===g.readyState&&(y.src=n+"stonly-widget.js?v="+(200===g.status?g.responseText:Date.now()),
              (l=t.getElementsByTagName(o)[0]).parentNode.insertBefore(y,l))},g.send())
              }(window,document,"script","https://stonly.com/js/widget/v2/");
          `}
        </script>
          <script>
          {`
            (function(e,a){
              var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol;
              t=e.createElement("script");t.type="text/javascript";
              t.charset="utf-8";t.async=!0;t.defer=!0;
              t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t);
              })(document,"157096");
          `}
        </script>
        <script>
          {`
          (function(e,t,o,n,p,r,i){e.visitorGlobalObjectAlias=n;e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){(e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)};e[e.visitorGlobalObjectAlias].l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");
          vgo('setAccount', '800828951');
          vgo('setTrackByDefault', true);
  
          vgo('process');
          `}        
        </script>
        </Helmet>     
          {children}
      </>
    );
  }

  return (
    <>
      <>
        <Helmet>
          <title>Finity 4</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
          <body data-theme={gContext.theme.bodyDark ? "dark" : "light"} />
          <script>window.STONLY_WID = "d4b28c86-9895-11ec-9fb8-0ae9fa2a18a2";</script>
          <script>
          {`
            !function(s,t,o,n,l,y,w,g){s.StonlyWidget||((w=s.StonlyWidget=function(){
              w._api?w._api.apply(w,arguments):w.queue.push(arguments)}).scriptPath=n,w.queue=[],(y=t.createElement(o)).async=!0,
              (g=new XMLHttpRequest).open("GET",n+"version?v="+Date.now(),!0),g.onreadystatechange=function(){
              4===g.readyState&&(y.src=n+"stonly-widget.js?v="+(200===g.status?g.responseText:Date.now()),
              (l=t.getElementsByTagName(o)[0]).parentNode.insertBefore(y,l))},g.send())
              }(window,document,"script","https://stonly.com/js/widget/v2/");
          `}
        </script>
          <script>
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T35RVN5');
            `}
          </script>
          <script>
            {`
              <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T35RVN5"
              height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            `}
          </script>
          <script>
          {`
            (function(e,a){
              var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol;
              t=e.createElement("script");t.type="text/javascript";
              t.charset="utf-8";t.async=!0;t.defer=!0;
              t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t);
              })(document,"157096");
          `}
        </script>
        <script>
          {`
          (function(e,t,o,n,p,r,i){e.visitorGlobalObjectAlias=n;e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){(e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)};e[e.visitorGlobalObjectAlias].l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");
          vgo('setAccount', '800828951');
          vgo('setTrackByDefault', true);  
          vgo('process');
          `}        
        </script>
        </Helmet>
        <Loader id="loading" className={visibleLoader ? "" : "inActive"} />
        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          <Header />
          {children}
          <Footer
            className={gContext.theme.footerClassName}
            style={gContext.theme.footerStyle}
          />
        </div>

        <ModalVideo />
      </>
    </>
  );
};

export default Layout;
