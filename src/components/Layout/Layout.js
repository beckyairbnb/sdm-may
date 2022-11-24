import React, { useState, useEffect, useContext, useRef } from "react";
import { Crisp } from "crisp-sdk-web";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import {CookieNotice} from "gatsby-cookie-notice";

import CookieConsent, { Cookies } from "react-cookie-consent";
import { Link } from "gatsby"
import AOS from "aos";
import Header from "../Header";
import { HeaderMini , HeaderComingSoon } from "../HeaderMini";
import { HeaderTransparent } from "../HeaderTransparent";
import HeaderNoFooter from "../Header/HeaderNoFooter";
import HeaderCenterFooter from "../Header/HeaderCenterFooter";
import Footer from "../Footer";

import ModalVideo from "../ModalVideo";

import GlobalContext from "../../context/GlobalContext";

import FooterCta from "../../sections/footercta";
import FooterCta2 from "../../sections/footercta/footercta2";
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

const Layout = (props) => {

  

  const { children, pageContext } = props


  const gContext = useContext(GlobalContext);


  const [visibleLoader, setVisibleLoader] = useState(true);

  useEffect(() => {
    AOS.init({ once: true });
    setVisibleLoader(false);
    Crisp.configure('baad053f-4aa3-4ba7-81c2-540fe4ea2127', {
      autoload: true
    });
    let segment = "MAIN SITE"
    if(props.path==='/lp/')
    {
      segment = "LP" 
    }
    else if(props.path==='/lpnew/')
    {
      segment = "LP NEW"
    }
    Crisp.session.setSegments([segment])
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
  const schemaOrgJSONLD = [
    {
      "@context": "https://schema.org/",
      "@type": "Review",
      "itemReviewed": {
        "@type": "Restaurant",
        "image": "http://www.example.com/seafood-restaurant.jpg",
        "name": "Strategically Digital Marketing Ltd",
        "servesCuisine": "Content Writing Agency",
        "telephone": "11898834",
        "address" :{
          "@type": "PostalAddress",
          "streetAddress": "London, England, United Kingdom",
          "addressLocality": "London",
          "addressRegion": "GB-LND",
          "postalCode": "CA91016",
          "addressCountry": "UK"
        }
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "name": 'Working with Strategically has been an amazing experience. They are professional, hard-working, and extremely dedicated. I wouldn’t hesitate to recommend.”',
      "author": {
        "@type": "Person",
        "name": "WebsitePlanet"
      },
      "publisher": {
        "@type": "Organization",
        "name": "WebsitePlanet"
      }
    }
  ]
  console.log('pageContext', pageContext)
  console.log('pageContext', pageContext.layout)
  if (pageContext.layout === "noheader") {
    return (
      <>
          <Helmet>
            <title>Finity 4</title>
            <link rel="icon" type="image/png" href={imgFavicon} />
            <body data-theme={gContext.theme.bodyDark ? "dark" : "light"} />
            <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
            <script>window.STONLY_WID = "d4b28c86-9895-11ec-9fb8-0ae9fa2a18a2";</script>                   
            <script>
             {`
              window.__kl__tr__Id='629ae3fb9d9831001ffb4530',function(){var t=document.createElement('script');t.type='text/javascript',t.async=!0,t.src='https://s3-us-west-2.amazonaws.com/kl-website-tracking/klenty_track.js';var e=document.getElementsByTagName('script')[0];e.parentNode.insertBefore(t,e)}();
            `}
          </script>           
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
          <script>
          {`
            !function(){var t,o,c,e=window,n=document,r=arguments,a="script",i=["call","cancelAction","config","identify","push","track","trackClick","trackForm","update","visit"],s=function(){var t,o=this,c=function(t){o[t]=function(){return o._e.push([t].concat(Array.prototype.slice.call(arguments,0))),o}};for(o._e=[],t=0;t<i.length;t++)c(i[t])};for(e.__woo=e.__woo||{},t=0;t<r.length;t++)e.__woo[r[t]]=e[r[t]]=e[r[t]]||new s;(o=n.createElement(a)).async=1,o.src="https://static.woopra.com/js/w.js",(c=n.getElementsByTagName(a)[0]).parentNode.insertBefore(o,c)}("woopra");
            woopra.config({
            domain: "strategically.co",
            outgoing_tracking: true,
            download_tracking: true,
            click_tracking: true
            });
            woopra.track();
            `}
          </script>
          </Helmet>
          <Loader id="loading" className={visibleLoader ? "" : "inActive"} />
          <div className="site-wrapper overflow-hidden" ref={eleRef}>           
            {children}
            <div class="container mt-5 pt-6 ">
          <div class="row">
          <div className="col-lg-12 border-top border-dark-light mt-5 pt-6 pb-0">
          <p className="text-center">Strategically Digital Marketing Ltd. Company Number 11898834 VAT 328 9819 52 | <Link to="/privacy/"  className="text-default-color">Privacy</Link> | <Link to="/terms/" className="text-default-color">Terms</Link></p>
            </div>
            </div>
            </div>
          </div>
  
          <ModalVideo />
        </>
    );
  }
  if (pageContext.layout === "writing-jobs") {
    return (
      <>
          <Helmet>
            <title>Finity 4</title>
            <link rel="icon" type="image/png" href={imgFavicon} />
            <body data-theme={gContext.theme.bodyDark ? "dark" : "light"} />
            <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
            <script>window.STONLY_WID = "d4b28c86-9895-11ec-9fb8-0ae9fa2a18a2";</script>            
            <script>
             {`
              window.__kl__tr__Id='629ae3fb9d9831001ffb4530',function(){var t=document.createElement('script');t.type='text/javascript',t.async=!0,t.src='https://s3-us-west-2.amazonaws.com/kl-website-tracking/klenty_track.js';var e=document.getElementsByTagName('script')[0];e.parentNode.insertBefore(t,e)}();
            `}
          </script>           
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
          <script>
          {`
            !function(){var t,o,c,e=window,n=document,r=arguments,a="script",i=["call","cancelAction","config","identify","push","track","trackClick","trackForm","update","visit"],s=function(){var t,o=this,c=function(t){o[t]=function(){return o._e.push([t].concat(Array.prototype.slice.call(arguments,0))),o}};for(o._e=[],t=0;t<i.length;t++)c(i[t])};for(e.__woo=e.__woo||{},t=0;t<r.length;t++)e.__woo[r[t]]=e[r[t]]=e[r[t]]||new s;(o=n.createElement(a)).async=1,o.src="https://static.woopra.com/js/w.js",(c=n.getElementsByTagName(a)[0]).parentNode.insertBefore(o,c)}("woopra");
            woopra.config({
            domain: "strategically.co",
            outgoing_tracking: true,
            download_tracking: true,
            click_tracking: true
            });
            woopra.track();
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
    );
  }
  if (pageContext.layout === "blog") {
    return (
      <>
        <Helmet>
          <body data-theme={gContext.theme.bodyDark ? "dark" : "light"} />
          <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
          <script>window.STONLY_WID = "d4b28c86-9895-11ec-9fb8-0ae9fa2a18a2";</script>          
          <script>
           {`
            window.__kl__tr__Id='629ae3fb9d9831001ffb4530',function(){var t=document.createElement('script');t.type='text/javascript',t.async=!0,t.src='https://s3-us-west-2.amazonaws.com/kl-website-tracking/klenty_track.js';var e=document.getElementsByTagName('script')[0];e.parentNode.insertBefore(t,e)}();
          `}
        </script>
        <script>
          {`
            !function(s,n,i,t,c,h){s.SnitchObject=i;s[i]||(s[i]=function(){
              (s[i].q=s[i].q||[]).push(arguments)});s[i].l=+new Date;c=n.createElement(t);
              h=n.getElementsByTagName(t)[0];c.src='//snid.snitcher.com/8418208.js';
              h.parentNode.insertBefore(c,h)}(window,document,'snid','script');
              snid('verify', '8418208');
          `}
        </script>
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
            !function(){var t,o,c,e=window,n=document,r=arguments,a="script",i=["call","cancelAction","config","identify","push","track","trackClick","trackForm","update","visit"],s=function(){var t,o=this,c=function(t){o[t]=function(){return o._e.push([t].concat(Array.prototype.slice.call(arguments,0))),o}};for(o._e=[],t=0;t<i.length;t++)c(i[t])};for(e.__woo=e.__woo||{},t=0;t<r.length;t++)e.__woo[r[t]]=e[r[t]]=e[r[t]]||new s;(o=n.createElement(a)).async=1,o.src="https://static.woopra.com/js/w.js",(c=n.getElementsByTagName(a)[0]).parentNode.insertBefore(o,c)}("woopra");
            woopra.config({
            domain: "strategically.co",
            outgoing_tracking: true,
            download_tracking: true,
            click_tracking: true
            });
            woopra.track();
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
          <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
          <script>window.STONLY_WID = "d4b28c86-9895-11ec-9fb8-0ae9fa2a18a2";</script>          
          <script>
           {`
            window.__kl__tr__Id='629ae3fb9d9831001ffb4530',function(){var t=document.createElement('script');t.type='text/javascript',t.async=!0,t.src='https://s3-us-west-2.amazonaws.com/kl-website-tracking/klenty_track.js';var e=document.getElementsByTagName('script')[0];e.parentNode.insertBefore(t,e)}();
          `}
        </script>
        <script>
          {`
            !function(s,n,i,t,c,h){s.SnitchObject=i;s[i]||(s[i]=function(){
              (s[i].q=s[i].q||[]).push(arguments)});s[i].l=+new Date;c=n.createElement(t);
              h=n.getElementsByTagName(t)[0];c.src='//snid.snitcher.com/8418208.js';
              h.parentNode.insertBefore(c,h)}(window,document,'snid','script');
              snid('verify', '8418208');
          `}
        </script>
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
            !function(){var t,o,c,e=window,n=document,r=arguments,a="script",i=["call","cancelAction","config","identify","push","track","trackClick","trackForm","update","visit"],s=function(){var t,o=this,c=function(t){o[t]=function(){return o._e.push([t].concat(Array.prototype.slice.call(arguments,0))),o}};for(o._e=[],t=0;t<i.length;t++)c(i[t])};for(e.__woo=e.__woo||{},t=0;t<r.length;t++)e.__woo[r[t]]=e[r[t]]=e[r[t]]||new s;(o=n.createElement(a)).async=1,o.src="https://static.woopra.com/js/w.js",(c=n.getElementsByTagName(a)[0]).parentNode.insertBefore(o,c)}("woopra");
            woopra.config({
            domain: "strategically.co",
            outgoing_tracking: true,
            download_tracking: true,
            click_tracking: true
            });
            woopra.track();
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
          <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
          <script>window.STONLY_WID = "d4b28c86-9895-11ec-9fb8-0ae9fa2a18a2";</script>          
          <script>
           {`
            window.__kl__tr__Id='629ae3fb9d9831001ffb4530',function(){var t=document.createElement('script');t.type='text/javascript',t.async=!0,t.src='https://s3-us-west-2.amazonaws.com/kl-website-tracking/klenty_track.js';var e=document.getElementsByTagName('script')[0];e.parentNode.insertBefore(t,e)}();
          `}
        </script>
        <script>
          {`
            !function(s,n,i,t,c,h){s.SnitchObject=i;s[i]||(s[i]=function(){
              (s[i].q=s[i].q||[]).push(arguments)});s[i].l=+new Date;c=n.createElement(t);
              h=n.getElementsByTagName(t)[0];c.src='//snid.snitcher.com/8418208.js';
              h.parentNode.insertBefore(c,h)}(window,document,'snid','script');
              snid('verify', '8418208');
          `}
        </script>
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
            !function(){var t,o,c,e=window,n=document,r=arguments,a="script",i=["call","cancelAction","config","identify","push","track","trackClick","trackForm","update","visit"],s=function(){var t,o=this,c=function(t){o[t]=function(){return o._e.push([t].concat(Array.prototype.slice.call(arguments,0))),o}};for(o._e=[],t=0;t<i.length;t++)c(i[t])};for(e.__woo=e.__woo||{},t=0;t<r.length;t++)e.__woo[r[t]]=e[r[t]]=e[r[t]]||new s;(o=n.createElement(a)).async=1,o.src="https://static.woopra.com/js/w.js",(c=n.getElementsByTagName(a)[0]).parentNode.insertBefore(o,c)}("woopra");
            woopra.config({
            domain: "strategically.co",
            outgoing_tracking: true,
            download_tracking: true,
            click_tracking: true
            });
            woopra.track();
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
  if (pageContext.layout === "noheaderabsfooter") {
    return (
      <>
      <Helmet>
          <title>Strategically | Content Writing Agency</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
          <body data-theme={gContext.theme.bodyDark ? "dark" : "light"} />
          <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
          <script>window.STONLY_WID = "d4b28c86-9895-11ec-9fb8-0ae9fa2a18a2";</script>
          <script>
           {`
            window.__kl__tr__Id='629ae3fb9d9831001ffb4530',function(){var t=document.createElement('script');t.type='text/javascript',t.async=!0,t.src='https://s3-us-west-2.amazonaws.com/kl-website-tracking/klenty_track.js';var e=document.getElementsByTagName('script')[0];e.parentNode.insertBefore(t,e)}();
          `}
        </script>
        <script>
          {`
            !function(s,n,i,t,c,h){s.SnitchObject=i;s[i]||(s[i]=function(){
              (s[i].q=s[i].q||[]).push(arguments)});s[i].l=+new Date;c=n.createElement(t);
              h=n.getElementsByTagName(t)[0];c.src='//snid.snitcher.com/8418208.js';
              h.parentNode.insertBefore(c,h)}(window,document,'snid','script');
              snid('verify', '8418208');
          `}
        </script>
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
        <script>
          {`
            !function(){var t,o,c,e=window,n=document,r=arguments,a="script",i=["call","cancelAction","config","identify","push","track","trackClick","trackForm","update","visit"],s=function(){var t,o=this,c=function(t){o[t]=function(){return o._e.push([t].concat(Array.prototype.slice.call(arguments,0))),o}};for(o._e=[],t=0;t<i.length;t++)c(i[t])};for(e.__woo=e.__woo||{},t=0;t<r.length;t++)e.__woo[r[t]]=e[r[t]]=e[r[t]]||new s;(o=n.createElement(a)).async=1,o.src="https://static.woopra.com/js/w.js",(c=n.getElementsByTagName(a)[0]).parentNode.insertBefore(o,c)}("woopra");
            woopra.config({
            domain: "strategically.co",
            outgoing_tracking: true,
            download_tracking: true,
            click_tracking: true
            });
            woopra.track();
            `}
          </script>
        </Helmet>
        <div className="overflow-hidden">   
          {children}
          <ClientsLogos/>
          {/* <FooterCta/> */}
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
  
  if (pageContext.layout === "noheaderfooter") {
    return (
      <>
      <Helmet>
          <title>Strategically | Content Writing Agency</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
          <body data-theme={gContext.theme.bodyDark ? "dark" : "light"} />
          <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
          <script>window.STONLY_WID = "d4b28c86-9895-11ec-9fb8-0ae9fa2a18a2";</script>
          <script>
           {`
            window.__kl__tr__Id='629ae3fb9d9831001ffb4530',function(){var t=document.createElement('script');t.type='text/javascript',t.async=!0,t.src='https://s3-us-west-2.amazonaws.com/kl-website-tracking/klenty_track.js';var e=document.getElementsByTagName('script')[0];e.parentNode.insertBefore(t,e)}();
          `}
        </script>
        <script>
          {`
            !function(s,n,i,t,c,h){s.SnitchObject=i;s[i]||(s[i]=function(){
              (s[i].q=s[i].q||[]).push(arguments)});s[i].l=+new Date;c=n.createElement(t);
              h=n.getElementsByTagName(t)[0];c.src='//snid.snitcher.com/8418208.js';
              h.parentNode.insertBefore(c,h)}(window,document,'snid','script');
              snid('verify', '8418208');
          `}
        </script>
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
        <script>
          {`
            !function(){var t,o,c,e=window,n=document,r=arguments,a="script",i=["call","cancelAction","config","identify","push","track","trackClick","trackForm","update","visit"],s=function(){var t,o=this,c=function(t){o[t]=function(){return o._e.push([t].concat(Array.prototype.slice.call(arguments,0))),o}};for(o._e=[],t=0;t<i.length;t++)c(i[t])};for(e.__woo=e.__woo||{},t=0;t<r.length;t++)e.__woo[r[t]]=e[r[t]]=e[r[t]]||new s;(o=n.createElement(a)).async=1,o.src="https://static.woopra.com/js/w.js",(c=n.getElementsByTagName(a)[0]).parentNode.insertBefore(o,c)}("woopra");
            woopra.config({
            domain: "strategically.co",
            outgoing_tracking: true,
            download_tracking: true,
            click_tracking: true
            });
            woopra.track();
            `}
          </script>
        </Helmet>
        <div className="site-wrapper overflow-hidden">   
          <HeaderNoFooter/>  
          {children}
          <ClientsLogos/>
          {/* <FooterCta/> */}
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
  if (pageContext.layout === "noheadernofooter") {
    return (
      <>
      <Helmet>
          <title>Strategically | Content Writing Agency</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
          <body data-theme={gContext.theme.bodyDark ? "dark" : "light"} />
          <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
          <script>window.STONLY_WID = "d4b28c86-9895-11ec-9fb8-0ae9fa2a18a2";</script>
          <script>
           {`
            window.__kl__tr__Id='629ae3fb9d9831001ffb4530',function(){var t=document.createElement('script');t.type='text/javascript',t.async=!0,t.src='https://s3-us-west-2.amazonaws.com/kl-website-tracking/klenty_track.js';var e=document.getElementsByTagName('script')[0];e.parentNode.insertBefore(t,e)}();
          `}
        </script>
        <script>
          {`
            !function(s,n,i,t,c,h){s.SnitchObject=i;s[i]||(s[i]=function(){
              (s[i].q=s[i].q||[]).push(arguments)});s[i].l=+new Date;c=n.createElement(t);
              h=n.getElementsByTagName(t)[0];c.src='//snid.snitcher.com/8418208.js';
              h.parentNode.insertBefore(c,h)}(window,document,'snid','script');
              snid('verify', '8418208');
          `}
        </script>
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
        <script>
          {`
            !function(){var t,o,c,e=window,n=document,r=arguments,a="script",i=["call","cancelAction","config","identify","push","track","trackClick","trackForm","update","visit"],s=function(){var t,o=this,c=function(t){o[t]=function(){return o._e.push([t].concat(Array.prototype.slice.call(arguments,0))),o}};for(o._e=[],t=0;t<i.length;t++)c(i[t])};for(e.__woo=e.__woo||{},t=0;t<r.length;t++)e.__woo[r[t]]=e[r[t]]=e[r[t]]||new s;(o=n.createElement(a)).async=1,o.src="https://static.woopra.com/js/w.js",(c=n.getElementsByTagName(a)[0]).parentNode.insertBefore(o,c)}("woopra");
            woopra.config({
            domain: "strategically.co",
            outgoing_tracking: true,
            download_tracking: true,
            click_tracking: true
            });
            woopra.track();
            `}
          </script>
        </Helmet>  
        {children}
      </>
    );
  }

  if (pageContext.layout === "headercenterfooter") {
    return (
      <>
      <Helmet>          
          <link rel="icon" type="image/png" href={imgFavicon} />
          <body data-theme={gContext.theme.bodyDark ? "dark" : "light"} />
          <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
          <script>window.STONLY_WID = "d4b28c86-9895-11ec-9fb8-0ae9fa2a18a2";</script>
          <script>
           {`
            window.__kl__tr__Id='629ae3fb9d9831001ffb4530',function(){var t=document.createElement('script');t.type='text/javascript',t.async=!0,t.src='https://s3-us-west-2.amazonaws.com/kl-website-tracking/klenty_track.js';var e=document.getElementsByTagName('script')[0];e.parentNode.insertBefore(t,e)}();
          `}
        </script>
        <script>
          {`
            !function(s,n,i,t,c,h){s.SnitchObject=i;s[i]||(s[i]=function(){
              (s[i].q=s[i].q||[]).push(arguments)});s[i].l=+new Date;c=n.createElement(t);
              h=n.getElementsByTagName(t)[0];c.src='//snid.snitcher.com/8418208.js';
              h.parentNode.insertBefore(c,h)}(window,document,'snid','script');
              snid('verify', '8418208');
          `}
        </script>
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
        <script>
          {`
            !function(){var t,o,c,e=window,n=document,r=arguments,a="script",i=["call","cancelAction","config","identify","push","track","trackClick","trackForm","update","visit"],s=function(){var t,o=this,c=function(t){o[t]=function(){return o._e.push([t].concat(Array.prototype.slice.call(arguments,0))),o}};for(o._e=[],t=0;t<i.length;t++)c(i[t])};for(e.__woo=e.__woo||{},t=0;t<r.length;t++)e.__woo[r[t]]=e[r[t]]=e[r[t]]||new s;(o=n.createElement(a)).async=1,o.src="https://static.woopra.com/js/w.js",(c=n.getElementsByTagName(a)[0]).parentNode.insertBefore(o,c)}("woopra");
            woopra.config({
            domain: "strategically.co",
            outgoing_tracking: true,
            download_tracking: true,
            click_tracking: true
            });
            woopra.track();
            `}
          </script>
        </Helmet>
        <div className="site-wrapper overflow-hidden">   
          <HeaderCenterFooter/>  
          {children}         
          <ClientsLogos/>
          {props.path === '/lp/' ? <FooterCta/> : <FooterCta2/>}
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
          <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
          <script>window.STONLY_WID = "d4b28c86-9895-11ec-9fb8-0ae9fa2a18a2";</script>
          <script>
           {`
            window.__kl__tr__Id='629ae3fb9d9831001ffb4530',function(){var t=document.createElement('script');t.type='text/javascript',t.async=!0,t.src='https://s3-us-west-2.amazonaws.com/kl-website-tracking/klenty_track.js';var e=document.getElementsByTagName('script')[0];e.parentNode.insertBefore(t,e)}();
          `}
        </script>
        <script>
          {`
            !function(s,n,i,t,c,h){s.SnitchObject=i;s[i]||(s[i]=function(){
              (s[i].q=s[i].q||[]).push(arguments)});s[i].l=+new Date;c=n.createElement(t);
              h=n.getElementsByTagName(t)[0];c.src='//snid.snitcher.com/8418208.js';
              h.parentNode.insertBefore(c,h)}(window,document,'snid','script');
              snid('verify', '8418208');
          `}
        </script>
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
        <script>
          {`
            !function(){var t,o,c,e=window,n=document,r=arguments,a="script",i=["call","cancelAction","config","identify","push","track","trackClick","trackForm","update","visit"],s=function(){var t,o=this,c=function(t){o[t]=function(){return o._e.push([t].concat(Array.prototype.slice.call(arguments,0))),o}};for(o._e=[],t=0;t<i.length;t++)c(i[t])};for(e.__woo=e.__woo||{},t=0;t<r.length;t++)e.__woo[r[t]]=e[r[t]]=e[r[t]]||new s;(o=n.createElement(a)).async=1,o.src="https://static.woopra.com/js/w.js",(c=n.getElementsByTagName(a)[0]).parentNode.insertBefore(o,c)}("woopra");
            woopra.config({
            domain: "strategically.co",
            outgoing_tracking: true,
            download_tracking: true,
            click_tracking: true
            });
            woopra.track();
            `}
          </script>
        </Helmet>     
          {children}
      </>
    );
  }
  if (props.path === "/writing-jobs/") {
    return (
      <>
          <Helmet>
            <title>Finity 4</title>
            <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
            <link rel="icon" type="image/png" href={imgFavicon} />
            <body data-theme={gContext.theme.bodyDark ? "dark" : "light"} />
            <script>window.STONLY_WID = "d4b28c86-9895-11ec-9fb8-0ae9fa2a18a2";</script>
            <script>
             {`
              window.__kl__tr__Id='629ae3fb9d9831001ffb4530',function(){var t=document.createElement('script');t.type='text/javascript',t.async=!0,t.src='https://s3-us-west-2.amazonaws.com/kl-website-tracking/klenty_track.js';var e=document.getElementsByTagName('script')[0];e.parentNode.insertBefore(t,e)}();
            `}
          </script>           
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
          <script>
          {`
            !function(){var t,o,c,e=window,n=document,r=arguments,a="script",i=["call","cancelAction","config","identify","push","track","trackClick","trackForm","update","visit"],s=function(){var t,o=this,c=function(t){o[t]=function(){return o._e.push([t].concat(Array.prototype.slice.call(arguments,0))),o}};for(o._e=[],t=0;t<i.length;t++)c(i[t])};for(e.__woo=e.__woo||{},t=0;t<r.length;t++)e.__woo[r[t]]=e[r[t]]=e[r[t]]||new s;(o=n.createElement(a)).async=1,o.src="https://static.woopra.com/js/w.js",(c=n.getElementsByTagName(a)[0]).parentNode.insertBefore(o,c)}("woopra");
            woopra.config({
            domain: "strategically.co",
            outgoing_tracking: true,
            download_tracking: true,
            click_tracking: true
            });
            woopra.track();
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
    );
  }
  else
  {
    return (
      <>
        <>
          <Helmet>
            <title>Finity 4</title>
            <link rel="icon" type="image/png" href={imgFavicon} />
            <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
            <body data-theme={gContext.theme.bodyDark ? "dark" : "light"} />
            <script>window.STONLY_WID = "d4b28c86-9895-11ec-9fb8-0ae9fa2a18a2";</script>
            <script>
             {`
              window.__kl__tr__Id='629ae3fb9d9831001ffb4530',function(){var t=document.createElement('script');t.type='text/javascript',t.async=!0,t.src='https://s3-us-west-2.amazonaws.com/kl-website-tracking/klenty_track.js';var e=document.getElementsByTagName('script')[0];e.parentNode.insertBefore(t,e)}();
            `}
          </script>
            <script>
              {`
                !function(s,n,i,t,c,h){s.SnitchObject=i;s[i]||(s[i]=function(){
                  (s[i].q=s[i].q||[]).push(arguments)});s[i].l=+new Date;c=n.createElement(t);
                  h=n.getElementsByTagName(t)[0];c.src='//snid.snitcher.com/8418208.js';
                  h.parentNode.insertBefore(c,h)}(window,document,'snid','script');
                  snid('verify', '8418208');
              `}
            </script>   
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
          <script>
          {`
            !function(){var t,o,c,e=window,n=document,r=arguments,a="script",i=["call","cancelAction","config","identify","push","track","trackClick","trackForm","update","visit"],s=function(){var t,o=this,c=function(t){o[t]=function(){return o._e.push([t].concat(Array.prototype.slice.call(arguments,0))),o}};for(o._e=[],t=0;t<i.length;t++)c(i[t])};for(e.__woo=e.__woo||{},t=0;t<r.length;t++)e.__woo[r[t]]=e[r[t]]=e[r[t]]||new s;(o=n.createElement(a)).async=1,o.src="https://static.woopra.com/js/w.js",(c=n.getElementsByTagName(a)[0]).parentNode.insertBefore(o,c)}("woopra");
            woopra.config({
            domain: "strategically.co",
            outgoing_tracking: true,
            download_tracking: true,
            click_tracking: true
            });
            woopra.track();
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
          <CookieConsent
            location="bottom"
            buttonText="Accept"
            enableDeclineButton
            declineButtonText="Decline"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#2B373B" }}
            buttonWrapperClasses="ccbuttons"
            buttonStyle={{ background: "#ffffff", color: "#FF0088" }}
            expires={150}
          >
            <div className="container pb-5">
              <div className="row pb-10">
                <div className="col-sm-11">
                Cookies are essentially pieces of code saved by websites onto the user’s web browser when a session is initiated. Cookies have a lot of uses but the most important ones are session management, user personalization, and tracking.
          
                </div>
              </div>
            </div>
            
          </CookieConsent>

        </>
      </>
    );
  }  
};

export default Layout;
