import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        {/* <meta httpEquiv="x-ua-compatible" content="ie=edge" />   */}
        <meta httpEquiv="Content-type" content="text/html; charset=UTF-8"/>         
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />         
        {props.headComponents}        
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        <script type="text/javascript" src="https://d1b3llzbo1rqxo.cloudfront.net/attributer.js"></script>
        {props.postBodyComponents}
        <script dangerouslySetInnerHTML={{__html:
          `_linkedin_partner_id = "4460818"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id);`
        }} />  
        <script dangerouslySetInnerHTML={{__html:
          `(function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])}; window.lintrk.q=[]} var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})(window.lintrk);`
        }} />          
        <noscript><img height="1" width="1" style={{display:"none"}} alt="" src="https://px.ads.linkedin.com/collect/?pid=4460818&fmt=gif" /></noscript>                
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T35RVN5" height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}