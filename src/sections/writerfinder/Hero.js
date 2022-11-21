import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"
import DotImg from "../../assets/images/writer-finder/dot.svg"
import Heroimg from "../../assets/images/home-1/jpg/hero-bg-1.jpg"


const HeroSection = () => {
    return (
        // <HeroBg className="mt-20">
        //     <HeroWrapper>
        //         <HeroBg1 />
        //         <HeroBg2/>
        //     </HeroWrapper>
        //     <div className="container">
        //         <div className="row align-items-center">
        //             <div className="col-xl-12 col-lg-12 col-12">
        //                 <h2 className="font-size-10 mb-8 text-white fw-normal">Hiring writers? We've got you.</h2>
        //                 <p className="font-size-5 mb-10 text-white">We find your perfect writer in days — or your money back.</p>
        //                 <Link to={"/"} className="btn bg-white text-dark px-8 py-4 font-size-2 rounded-pill">
        //                 Find your writer
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </HeroBg>
        <HeroBanner className="mt-20 justify-content-center align-items-center d-flex">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-8 col-lg-8 col-12 text-center">
                        <h2 className="text-white fw-normal">Hiring writers? We've got you.</h2>
                        <p className="mb-10 text-white">We find your perfect writer in days — or your money back.</p>
                        <Link to={"/"} className="btn btn-dodger-blue-2 header-btn rounded-5 text-dark px-8 py-4 font-size-2 ">
                            Find your writer
                        </Link>
                    </div>
                </div>
            </div>
        </HeroBanner>
    );
};

export default HeroSection;


const HeroBanner = styled.div`
background:url(${Heroimg}); 
position: relative;
padding-top: 80px;
padding-bottom: 80px;
background-size:cover;
background-repeat:no-repeat;
background-position:top center;
height:600px;

&:before {
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, .8);
}

h2 {
    text-align: center;
    color: #ffffff;
    font-family: "Oswald", Sans-serif;
    font-size: 70px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 80px;
    letter-spacing: 4px;
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 20px 0px;
}
p{
    align-self: center;
text-align: center;
color: #ffffff;
font-family: "Oswald", Sans-serif;
font-size: 28px;
font-weight: 300;
line-height: 42px;
letter-spacing: 1.4px;
padding: 0px 0px 0px 0px;
margin: 0px 0px 0px 0px;
}
`
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