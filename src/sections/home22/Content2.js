import React from "react";

import img1 from "../../assets/image/home-2/png/explore.png";
import img2 from "../../assets/image/home-2/png/interview.png";
import img3 from "../../assets/image/home-2/png/card-favorite.png";
import imgC from "../../assets/image/home-2/png/content-2-img.png";
import imgP from "../../assets/image/home-2/png/patterns-dot-green.png";
import imgH from "../../assets/image/home-2/png/right-circlehalf-shape.png";

const Content2 = ({ className, ...rest }) => {
  const contentWidgetData = [
    {
      icon: img1,
      title: "01. Site Traffic Analysis",
      text: "Who is your strongest audience and how are they learning about you? Our first order of business: finding solid, actionable answers.",
    },
    {
      icon: img2,
      title: "02. Competitive Review",
      text: "Where and how are you winning? What keywords are you owning and how can we add more feathers to that cap? Let’s talk about what your competitors’ site traffic, content, and website experience looks like so we can identify gaps and step right in.",
    },
    {
      icon: img3,
      title: "03. Keyword Gap Analysis",
      text: "We’ll look at tens of thousands of keywords to see how our audience is searching, who’s currently doing the best job at capturing their attention, and how we can show up in the right place at the right time.",
    },
    {
      icon: img1,
      title: "04. SEO Content Strategy",
      text: "Using the site traffic analysis, competitive review, and keyword gap analysis, we create a strategy for building content that’s always helpful, engaging, informative, and gives you a timeline and projections that put the future in focus.",
    },
    {
      icon: img1,
      title: "05. Execution",
      text: "Even the best plans won’t get done if you don’t have the resources to execute them. With limited time, money, and people, you can trust Tuff to join as an embedded member to your team to create content that works.",
    },
  ];
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
          <h2 className="font-size-11">A proven content strategy starts with focused research.</h2>

          <div
            className="col-xl-8 col-lg-5 col-md-6 col-xs-8 order-2 order-md-1"

          >
              <ul className="list-unstyled mt-9 mt-lg-14">
              {contentWidgetData.map(({ icon, title, text }, index) => {
                return (
                  <li className="media align-items-center mb-12" key={index}>
                    <div className="border square-83 rounded-10 mr-9">
                      <img src={icon} alt="" />
                    </div>
                    <div className="content">
                      <h5>{title}</h5>
                      <p className="font-size-5 line-height-28 mb-0">
                        {text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Content2;
