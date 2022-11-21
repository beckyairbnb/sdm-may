import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"
import FaqIcon from "../../assets/images/writer-finder/iconfaq.svg";
import Masonry from 'react-masonry-css'

const Faq = () => {
    const breakpointColumnsObj = {
        default: 2,
        500: 1
    };
    return (

        <div class="container pt-lg-20 pt-10 pb-10">
            <div class="row">
                <div class="col-lg-12">

                    <h2 className="font-size-9 text-center">Frequently Asked Questions</h2>
                    <Spacer />
                    {/* <LargeTitle>Questions</LargeTitle> */}

                    <AllFaqs>
                        {/* <div className="row">
                            <div class="col-lg-4 col-md-6 col-xs-12 d-flex justify-content-stretch">
                                <FaqItem className="bg-white mb-8 p-12 d-flex align-items-start flex-column">
                                    <div className="faq-icon faq-purple d-flex justify-content-center align-items-center rounded-pill mb-8 mx-auto"><img src={FaqIcon} alt="" /></div>
                                    <h5 className="text-center mb-8">Can't I find someone for free on Upwork?</h5>
                                    <p className="font-size-5 mb-0">Sure, you could, but you'll have to sort through all the writers yourself. You'll have to wait much longer to get candidates. And you might not have as much experience selecting good writers as we do. If you want guaranteed good writers in 3 business days without the headache of sourcing talent yourself, this is the best place to get it.</p>
                                </FaqItem>

                            </div>
                            <div class="col-lg-4 col-md-6 col-xs-12 d-flex justify-content-stretch">
                                <FaqItem className="bg-white mb-8 p-12 d-flex align-items-start flex-column">
                                    <div className="faq-icon faq-orange d-flex justify-content-center align-items-center rounded-pill mb-8 mx-auto"><img src={FaqIcon} alt="" /></div>
                                    <h5 className="text-center mb-8">What if I'm not satisfied with the writers you send me?</h5>
                                    <p className="font-size-5 mb-0">Let us know and based on that feedback, we'll send you more writers until you find one you're satisfied with! If we absolutely can't find someone who meets your expectations, we'll happily refund you the finders fee.</p>
                                </FaqItem>

                            </div>
                            <div class="col-lg-4 col-md-6 col-xs-12 d-flex justify-content-stretch">
                                <FaqItem className="bg-white mb-8 p-12 d-flex align-items-start flex-column">
                                    <div className="faq-icon faq-green d-flex justify-content-center align-items-center rounded-pill mb-8 mx-auto"><img src={FaqIcon} alt="" /></div>
                                    <h5 className="text-center mb-8">Do you help with planning out the content for the writer?</h5>
                                    <p className="font-size-5 mb-0">We can! If you want to ask us about planning out your content for you, just include that in the "extra information" part of the form, or let us know once we reach out with your writer candidates.</p>
                                </FaqItem>

                            </div>
                            <div class="col-lg-4 col-md-6 col-xs-12 d-flex justify-content-stretch">
                                <FaqItem className="bg-white mb-8 p-12 d-flex align-items-start flex-column">
                                    <div className="faq-icon faq-green d-flex justify-content-center align-items-center rounded-pill mb-8 mx-auto"><img src={FaqIcon} alt="" /></div>

                                    <h5 className="text-center mb-8">Why should I trust you to find a good writer for me?</h5>
                                    <p className="font-size-5 mb-0">We've worked with dozens of different companies in practically every niche imaginable to help them find skilled writers, create great content, and get those articles on the front page of Google. We know what to look for when picking a writer who can make your blog stand out, instead of getting another writer who just churns out articles.</p>
                                </FaqItem>

                            </div>
                            <div class="col-lg-4 col-md-6 col-xs-12 d-flex justify-content-stretch">
                                <FaqItem className="bg-white mb-8 p-12 d-flex align-items-start flex-column">
                                    <div className="faq-icon faq-purple d-flex justify-content-center align-items-center rounded-pill mb-8 mx-auto"><img src={FaqIcon} alt="" /></div>
                                    <h5 className="text-center mb-8">Do you have writers who can cover [your niche]?</h5>
                                    <p className="font-size-5 mb-0">Almost certainly. We have yet to find a niche that we don't have writers for. We have relationships with over 1,900 writers, so odds are good that we have someone who can help you.</p>
                                </FaqItem>

                            </div>
                            <div class="col-lg-4 col-md-6 col-xs-12 d-flex justify-content-stretch">
                                <FaqItem className="bg-white mb-8 p-12 d-flex align-items-start flex-column">
                                    <div className="faq-icon faq-orange d-flex justify-content-center align-items-center rounded-pill mb-8 mx-auto"><img src={FaqIcon} alt="" /></div>
                                    <h5 className="text-center mb-8">Who are your writers? Are they US-based? How much do they cost to work with?</h5>
                                    <p className="font-size-5 mb-0">We have writers from every experience level and from all over the world. We'll find the writers who are the best fit for you depending on your budget, which you specify in the signup form.</p>
                                </FaqItem>

                            </div>
                            <Link to={"/"} className="btn bg-blue text-white px-8 py-4 mt-10 font-size-2 rounded-pill mx-auto">
                                Find your writers
                            </Link>

                        </div> */}



                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                            <div>
                                <FaqItem className="bg-white mb-8 p-12 d-flex align-items-start flex-column">
                                    <h5 className="mb-8">Why do I need to pay you to find me a writer? Can’t I use Fiverr or Upwork?</h5>
                                    <p className="font-size-5 mb-0">Yes, you can. Lots of people use freelance writers from platforms like Upwork or Fiverr. The challenge is you will get 100s of applications, many of which send a generic copy-and-paste proposal with little thought. This means tons of wasted time searching through generic applications that may or may not have even read your whole job post. </p>
                                </FaqItem>
                            </div>
                            <div>
                                <FaqItem className="bg-white mb-8 p-12 d-flex align-items-start flex-column">
                                    <h5 className="mb-8">What if you don’t find me a writer that I like?</h5>
                                    <p className="font-size-5 mb-0">Hiring the perfect writer can be hard. We’ll send you three to five writers to choose from, along with their samples. If you’re not completely satisfied, let us know and we’ll keep looking or return the fee.</p>
                                </FaqItem>
                            </div>
                            <div>
                                <FaqItem className="bg-white mb-8 p-12 d-flex align-items-start flex-column">
                                    <h5 className="mb-8">Why shouldn’t I hire an agency?</h5>
                                    <p className="font-size-5 mb-0">You definitely could. As a <a href="#">content writing agency,</a> we know the value we can bring to companies. We manage the process end-to-end, delivering high-quality content at scale. But that doesn’t mean it’s the right answer for everyone. If you prefer a more hands-on approach or have a tighter budget, hiring a writer might be a better choice. </p>
                                </FaqItem>
                            </div>
                            <div>
                                <FaqItem className="bg-white mb-8 p-12 d-flex align-items-start flex-column">
                                    <h5 className="mb-8">How do I know you will find a good writer?</h5>
                                    <p className="font-size-5 mb-0">We have over a decade of experience in content writing and we’ve worked with clients in a wide range of industries. We know exactly what it takes to find a writer that creates great content that resonates with your audience and meets your business goals. </p>
                                </FaqItem>
                            </div>
                            <div>
                                <FaqItem className="bg-white mb-8 p-12 d-flex align-items-start flex-column">
                                    <h5 className="mb-8">Do you have writers who can do X,Y,Z?</h5>
                                    <p className="font-size-5 mb-0">Yes, we do. We have more than 2000 writers on our books, so it’s highly likely that we can find a fit. Whatever your niche or content type, you can bet your bottom dollar, we got a match.</p>
                                </FaqItem>
                            </div>
                            <div>
                                <FaqItem className="bg-white mb-8 p-12 d-flex align-items-start flex-column">
                                    <h5 className="mb-8">How much do your writers cost?</h5>
                                    <p className="font-size-5 mb-0">The real upside of hiring a writer this way is that you can specify your budget. From budget to luxe, we have writers at every level, so you benefit from one that’s not only a fit for your niche, but also for your wallet, too. The best bit — apart from our finders fee, we don’t charge a dime. </p>
                                </FaqItem>
                            </div>
                        </Masonry>
                        <div className="d-flex justify-content-center"><Link to={"/"} className="btn btn-dodger-blue-2 header-btn rounded-5 text-dark px-8 py-4 font-size-2">
                            Find your writers
                        </Link>
                        </div>
                    </AllFaqs>




                </div>
            </div>
        </div>

    );
};

export default Faq;

const Spacer = styled.div` 
width: 40px;
height: 4px;
margin: 30px auto 40px;
background-color: #cbd0df;
`;

const LargeTitle = styled.div` 
margin-top: 10px;
margin-bottom: 10px;   
color: rgba(230,232,239,.5);
font-size: 128px;
line-height: 96px;
font-weight: 700;
text-align: center;   
@media screen and (max-width: 991px){
    font-size: 80px;
    line-height: 80px;
}
@media screen and (max-width: 599px){
    font-size:45px;
    line-height:55px;
}
`;
const AllFaqs = styled.div` 
margin-top:-30px;
a{ height:auto !important;min-width: auto;}
`;

const FaqItem = styled.div` 
box-shadow: 0 10px 24px 0 rgb(82 91 115 / 12%);
border-radius:10px;
.faq-icon{width: 72px;   height: 72px;}
.faq-purple{background-image: linear-gradient(135deg,#ff4dae,#4268ff);}
.faq-orange{background-image: linear-gradient(135deg,#ff9f2e,#f723c4);}
.faq-green{background-image: linear-gradient(135deg,#00f2aa,#0083ff);}
`;


