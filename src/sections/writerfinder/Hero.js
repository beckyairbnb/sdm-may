import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"
import DotImg from "../../assets/images/writer-finder/dot.svg"

const HeroSection = () => {
    return (
        <HeroBg className="mt-20">
            <HeroWrapper>
                <HeroBg1 />
                <HeroBg2/>
            </HeroWrapper>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-8 col-12">
                        <h2 className="font-size-10 mb-8 text-white fw-normal">Hire the perfect freelance writer for your blog</h2>
                        <p className="font-size-5 mb-10 text-white">
                            We'll match you with three skilled writers for your niche in 3 business days or less. If none of them are right for you, we'll keep looking, or give you your money back.</p>
                        <Link to={"/"} className="btn bg-white text-dark px-8 py-4 font-size-2 rounded-pill">
                            Find your writers
                        </Link>
                    </div>
                </div>
            </div>
        </HeroBg>
    );
};

export default HeroSection;

const HeroBg = styled.div`  
background-color: #161a25;
    background-image: linear-gradient(120deg,#f723c4,#4b6bf5,#ff2951 100%,#ff2951 101%);
    position: relative;
    padding-top: 80px;
    padding-bottom: 250px;
    @media screen and (max-width: 991px){
        padding-bottom: 200px;
    }

    a{ height:auto !important;min-width: auto;}
`;

const HeroWrapper = styled.div`  
position: absolute;
left: 0;
top: 0;
right: 0;
bottom: 0;
background-image: linear-gradient(145deg,rgba(255,159,46,.38),#ff3e5c,#4268ff);

`;
const HeroBg1 = styled.div`  
background:url(${DotImg}); 
background-size: 8px;
opacity: .16;
will-change: transform;
transform: translate3d(0px, -10.6745%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
transform-style: preserve-3d;
position: absolute;
left: 0;
bottom: 20%;
width: 20%;
height: 144px;
`;

const HeroBg2 = styled.div`  
background:url(${DotImg}); 

    background-size: 8px;
    opacity: .16;
    will-change: transform;
    transform: translate3d(0px, 15.4395%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    position: absolute;
    right:12%;
    top: -88px;
    width: 248px;
    height: 248px;
    border-radius: 50%;
`;