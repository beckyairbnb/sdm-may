import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"
import amazon from "../../assets/images/writer-finder/amazon-logo.png";
import Thebalance from "../../assets/images/writer-finder/thebalance-logo.png";
import Ask from "../../assets/images/writer-finder/ask-logo.svg";
import SEOlogo from "../../assets/images/writer-finder/SEO-logo.png";
import Motleyfool from "../../assets/images/writer-finder/motley-logo.svg";
import Casino from "../../assets/images/writer-finder/888casino-logo.png";
import Nikelogo from "../../assets/images/writer-finder/nike-logo.png";
import Guinness from "../../assets/images/writer-finder/guinness-logo.png";
import Microsoft from "../../assets/images/writer-finder/microsoft-logo.png";
import BBC from "../../assets/images/writer-finder/BBC-Logo.png";
import Johnlewis from "../../assets/images/writer-finder/john-lewis-logo.svg";
import HMlogo from "../../assets/images/writer-finder/HM-logo.png";
import Ikea from "../../assets/images/writer-finder/ikea-logo.svg";
import Etoro from "../../assets/images/writer-finder/etoro-logo.png";
import IBM from "../../assets/images/writer-finder/ibm-logo.png";
import Blackberry from "../../assets/images/writer-finder/blackberry-logo.webp";
import THlogo from "../../assets/images/writer-finder/th-logo.png";
import Channel from "../../assets/images/writer-finder/channel-logo.png";
import Puma from "../../assets/images/writer-finder/puma-logo.png";
import adidas from "../../assets/images/writer-finder/adidas-logo.webp";







// import Time from "../../assets/images/writer-finder/time.png";
// import Playboy from "../../assets/images/writer-finder/playboy.png";
// import Cosmopolitan from "../../assets/images/writer-finder/cosmopolitan.png";
// import Inc from "../../assets/images/writer-finder/inc.png";
// import Shopify from "../../assets/images/writer-finder/shopify.png";

// import Redbull from "../../assets/images/writer-finder/redbull.png";
// import Theguardian from "../../assets/images/writer-finder/theguardian.png";
// import Nbc from "../../assets/images/writer-finder/nbc.png";
// import Thoughtcatalog from "../../assets/images/writer-finder/thoughtcatalog.png";
// import Newyorktimes from "../../assets/images/writer-finder/newyorktimes.png";

// import Sumo from "../../assets/images/writer-finder/sumo.png";
// import Spire from "../../assets/images/writer-finder/spire.png";
// import Perfectketo from "../../assets/images/writer-finder/perfectketo.png";
// import Kettlefire from "../../assets/images/writer-finder/kettlefire.png";
// import Yummly from "../../assets/images/writer-finder/yummly.png";
// import Foursigmatic from "../../assets/images/writer-finder/foursigmatic.png";
// import Patreon from "../../assets/images/writer-finder/patreon.png";


import logo1 from "../../assets/images/clients/logo-1.jpg";
import logo2 from "../../assets/images/clients/logo-2.jpg";
import logo3 from "../../assets/images/clients/logo-3.jpg";
import logo4 from "../../assets/images/clients/logo-4.jpg";
import logo5 from "../../assets/images/clients/logo-5.jpg";

import logo7 from "../../assets/images/clients/logo-7.jpg";
import logo9 from "../../assets/images/clients/logo-9.jpg";
import logo10 from "../../assets/images/clients/logo-10.jpg";


import Contentimg from "../../assets/images/home-2/png/content-2-img.png";
import Dotimg from "../../assets/images/home-2/png/patterns-dot-green.png";
import Circlehalf from "../../assets/images/home-2/png/right-circlehalf-shape.png";

import Contentimg2 from "../../assets/images/home-2/png/meeting-2.png";
import Dotimg2 from "../../assets/images/home-2/png/dot-pattern-black.png";
import Circlehalf2 from "../../assets/images/home-2/png/left-circlehalf-shape.png";

const WritersContent = () => {
    return (
        <div className="container text-center">
            <div className="py-lg-24 pt-14 pb-5">
                <div className="row text-left align-items-center">
                    <div className="col-lg-6 col-12">
                        <h2 className="font-size-9">We get it, hiring writers is hard. But it doesn't have to be.</h2>
                        <Spacer2 />
                        <p className="font-size-7">At <Link to="/">Strategically</Link>, we’ve worked with 300+ companies and written more than 8 million words. With only <Link to="https://g.page/strategically?share">5-star Google reviews</Link>, we know how to match you with a writer that will nail your content — every time.
                        </p>
                    </div>
                    <div className="col-lg-6 col-12">
                        {/* <img src={Contentimg} alt=""/> */}

                        <div className="l2-content-image-group-2 mb-10 mb-md-0 rounded-10">
                            <div className="img-1 position-relative text-right rounded-10 border-2">
                                <img src={Contentimg}
                                    width={475} height={593}
                                    className="w-100 w-lg-auto"
                                />
                                <div className="img-2">
                                    <img src={Dotimg}
                                        width={176} height={191}
                                        className="w-100"
                                    />
                                </div>
                                <div className="img-3">
                                    <img src={Circlehalf}
                                        width={303} height={430}
                                        className="w-100 opacity-7"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-8 col-lg-10 col-12">
                        <h2 className="font-size-9">We’ve matched writers with companies like yours:</h2>
                    </div>
                </div>
            </div>

            <div className="py-2 mb-4">
                <div className="container my-1">
                    <div className="row my-1 client-logo">
                        <div className="col-md-6 col-sm-12 d-flex flex-row justify-content-md-end justify-content-sm-center align-items-center m-0 p-0">
                            <div className="client-item"><img src={logo1} alt="Client 1" /></div>
                            <div className="client-item"><img src={logo2} alt="Client 2" /></div>
                            <div className="client-item"><img src={logo3} alt="Client 3" /></div>
                            <div className="client-item"><img src={logo4} alt="Client 4" /></div>

                        </div>
                        <div className="col-md-6 col-sm-12 d-flex flex-row justify-content-md-start justify-content-sm-center align-items-center m-0 p-0">
                            <div className="client-item"><img src={logo5} alt="Client 5" /></div>
                            <div className="client-item"><img src={logo7} alt="Client 7" /></div>
                            <div className="client-item"><img src={logo9} alt="Client 9" /></div>
                            <div className="client-item"><img src={logo10} alt="Client 10" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-lg-20 py-5">
                <div className="row text-left align-items-center">
                    
                    <div className="col-lg-6 col-12">
                        {/* <img src={Contentimg} alt=""/> */}

                        <div className="content-image-group-3 mb-17 mb-lg-0 mr-xl-16">
                <div className="img-1">
                <img src={Contentimg2}
                            width={475} height={593}
                            className="w-100"
                        />
                  {/* <img className="w-100" src={imgM} alt="" /> */}
                  <div className="img-2">
                  <img src={Dotimg2}
                            width={176} height={191}
                            className="w-100" 
                        />
                    {/* <img className="w-100" src={imgDP} alt="" /> */}
                  </div>
                  <div className="img-3 rounded-10">
                  <img src={Circlehalf2}
                            width={395} height={209}
                            className="w-100 opacity-7" 
                        />
                    {/* <img className="w-100 opacity-7" src={imgLC} alt="" /> */}
                  </div>
                </div>
              </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <h2 className="font-size-9">Our money-back guarantee</h2>
                        <Spacer2 />
                        <p className="font-size-7">We’re so confident in our writers, if we don’t find the perfect fit straight away, we’ll keep looking or give you a full refund.</p>
                    </div>
                </div>

                {/* <div className="row justify-content-center align-items-center">
                    <div className="col-xl-7 col-lg-10 col-12">
                        <h2 className="font-size-9">Our money-back guarantee</h2>
                        <p>We’re so confident in our writers, if we don’t find the perfect fit straight away, we’ll keep looking or give you a full refund.</p>
                    </div>
                </div> */}
            </div>
            <div className="py-10">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-7 col-lg-10 col-12">
                        <h2 className="font-size-9">Writers for any budget or niche</h2>
                        <Spacer />
                        <p>Our database is jam-packed with experienced writers. From SEO to sales copy, or AI to yoga, we’ve got you covered. Our writers are experts in creating content that attracts, delights, and converts your audience.</p>
                    </div>
                    <div className="col-xl-8 col-lg-10 col-12">
                        <div className="d-flex flex-wrap justify-content-center align-items-center">
                            <img src={amazon} alt="" height={50} className="my-8 mx-7" />
                            <img src={Thebalance} alt="" height={80} className="my-8 mx-7" />
                            <img src={Ask} alt="" height={60} className="my-8 mx-7" />
                            <img src={SEOlogo} alt="" height={32} className="my-8 mx-7" />
                            <img src={Motleyfool} alt="" height={32} className="my-8 mx-7" />
                            <img src={Casino} alt="" height={60} className="my-8 mx-7" />
                            <img src={Nikelogo} alt="" height={60} className="my-8 mx-7" />
                            <img src={Guinness} alt="" height={60} className="my-8 mx-7" />
                            <img src={Microsoft} alt="" height={32} className="my-8 mx-7" />
                            <img src={BBC} alt="" height={32} className="my-8 mx-7" />
                            <img src={Johnlewis} alt="" height={32} className="my-8 mx-7" />
                            <img src={HMlogo} alt="" height={50} className="my-8 mx-7" />
                            <img src={Ikea} alt="" height={60} className="my-8 mx-7" />
                            <img src={Etoro} alt="" height={60} className="my-8 mx-7" />
                            <img src={IBM} alt="" height={50} className="my-8 mx-7" />
                            <img src={Blackberry} alt="" height={60} className="my-8 mx-7" />
                            <img src={THlogo} alt="" height={32} className="my-8 mx-7" />
                            <img src={Channel} alt="" height={60} className="my-8 mx-7" />
                            <img src={Puma} alt="" height={60} className="my-8 mx-7" />
                            <img src={adidas} alt="" height={60} className="my-8 mx-7" />


                                                       
                            {/* <img src={Healthline} alt="" height={32} className="my-8 mx-7" />

                            <img src={Time} alt="" height={32} className="my-8 mx-7" />
                            <img src={Playboy} alt="" height={32} className="my-8 mx-7" />
                            <img src={Cosmopolitan} alt="" height={32} className="my-8 mx-7" />
                            <img src={Inc} alt="" height={32} className="my-8 mx-7" />
                            <img src={Shopify} alt="" height={32} className="my-8 mx-7" />

                            <img src={Redbull} alt="" height={32} className="my-8 mx-7" />
                            <img src={Theguardian} alt="" height={32} className="my-8 mx-7" /> */}
                        </div>
                        {/* <div className="d-flex flex-wrap justify-content-center align-items-center">
                            <img src={Nbc} alt="" height={64} className="my-8 mx-7" />
                            <img src={Thoughtcatalog} alt="" height={64} className="my-8 mx-7" />
                            <img src={Newyorktimes} alt="" height={64} className="my-8 mx-7" />
                        </div> */}

                    </div>
                </div>
            </div>

        </div>

    );
};

export default WritersContent;

const Spacer = styled.div` 
    width: 40px;
    height: 4px;
    margin: 30px auto 40px;
    background-color: #cbd0df;
    `;
const Spacer2 = styled.div` 
    width: 40px;
    height: 4px;
    margin: 30px 0 40px;
    background-color: #cbd0df;
    `;