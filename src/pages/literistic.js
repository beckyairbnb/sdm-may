import React from "react";
import { Link } from "gatsby"
import Helmet from "react-helmet";

import PageWrapper from "../components/PageWrapper";

import AuthorImg from "../assets/images/josh.png"

import Logo from "../assets/images/logo-white.png"


const Literistic = () => {

    return (
        <>
            <div className="">
                <Helmet>
                    <title>Strategically | Content Writing Agency</title>
                </Helmet>

                <PageWrapper
                    themeConfig={{
                        headerClassName: "site-header--menu-right",
                        headerButton: (
                            <>
                                <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/get-a-quote//"}>
                                    View Pricing
                                </a>
                            </>
                        ),
                        footerStyle: "style2",
                    }}
                >

                    <div className="w-100 literistic_bg py-10 border-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <img src={Logo} alt="" width={207} height={46} pt-10 />
                                    <div className="literistic_hero pt-10 pb-10">
                                        <h4 className="text-white text-uppercase">the literistic list</h4>
                                        <h4 className="text-white my-5">Our newsletter brings the opportunities to you</h4>
                                        <p className="fs-6 text-white">Every month, we email you the best writing contests, unique magazines, presses, grants, residencies, and fellowships</p>
                                        <p className="fs-6 text-uppercase text-white fw-light">pricing</p>
                                        <h2 className="fs-2 text-white">$ 7 /month</h2>
                                        <p className="fs-6 text-white">cancel anytime</p>
                                        <Link
                                            to="/get-a-quote//"
                                            className="btn btn btn-purple header-btn-2 mt-5 mb-3 fs-3 rounded-5 text-capitalize w-auto border-0">get literistic</Link>
                                        <ul className="col-lg-4 mx-auto text-left my-10">
                                            <li className="text-white fw-bold fs-4 py-1">Save hours of searching for opportunities</li>
                                            <li className="text-white fs-6 py-1">Bring the best contests to your inbox</li>
                                            <li className="text-white fs-6 py-1">Customizable to your specific needs</li>
                                            <li className="text-white fs-6 py-1">Membership in our private Facebook group</li>
                                            <li className="text-white fs-6 py-1">We seek out the very best literary opportunities, including magazines, presses, grants and more</li>
                                        </ul>
                                        <div className="d-flex flex-lg-row flex-column mt-10">
                                            <div className="col-lg-4 col-sm-12 flex flex-col">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#fff" className="pb-2"><path d="M13.473 9.196c-.425-.439-.401-1.127.035-1.552l4.461-4.326c.218-.211.498-.318.775-.318.282 0 .563.11.776.331l-6.047 5.865zm-7.334 11.021c-.092.089-.139.208-.139.327 0 .25.204.456.456.456.114 0 .229-.042.317-.128l.749-.729-.633-.654-.75.728zm6.33-8.425l-2.564 2.485c-1.378 1.336-2.081 2.63-2.73 4.437l1.132 1.169c1.825-.593 3.14-1.255 4.518-2.591l2.563-2.486-2.919-3.014zm7.477-7.659l-6.604 6.405 3.326 3.434 6.604-6.403c.485-.469.728-1.093.728-1.718 0-2.088-2.53-3.196-4.054-1.718zm-19.946 16.867h4v-1h-4v1z" /></svg>
                                                <h4 className="fs-4 text-white pb-4">Write more, search less</h4>
                                                <p className="text-white">Our editors scour the web finding the best places to submit your work so you don't spend hours doing the  same.</p>
                                            </div>
                                            <div className="col-lg-4 col-sm-12 flex flex-col">
                                                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill="#fff" className="pb-2" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></svg>
                                                <h4 className="fs-4 text-white pb-4">Get increased joy from writing</h4>
                                                <p className="text-white">Relax with a cup of coffee and our monthly email and decide where to submit your wrinting.</p>
                                            </div>
                                            <div className="col-lg-4 col-sm-12 flex flex-col">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#fff" className="pb-2"><path d="M20.586 3.417l-6.938 6.934-6.932-1.733 13.87-5.201zm3.414-3.417l-24 9 12 3 3.014 12 8.986-24z" /></svg>
                                                <h4 className="fs-4 text-white pb-4">Publish more of your work</h4>
                                                <p className="text-white">Leave behind  that guilt of having your work left unread on the hard drive. Our monthly email makes it easier to spot the right places to submit your work.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container py-10">
                        <div className="row">
                            <div className="col-lg-10 col-sm-12 mx-auto">
                                <h3 className="text-center pb-10">How it works</h3>
                                <p>Every Concierge clients first goes through an in-depth onboarding process where our editors get the chance to learn all about you. We'll learn your style of writing, your favorite authors, your dream publications, ect. This will help us design not just the best submission schedule for you, but also a killer cover leeter that'll draw the right attention from the publication's editors.</p>
                                <p>Every client then chooses from a curated list just how many regular submissions vs contest submissions, as well as the rare of prestige vs established vs new magazines or presses.</p>
                                <p>Based on all of this info, our editors design the ideal submission calendar, looking ahead over the next 12 months.</p>
                                <p>We submit on your behalf for the rest of the year! Just sit back and forger the anxiety of checking in on submission status--we'll do it for you, and we'll regularly update you directly with any news.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light py-10 mb-20">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h3 className="text-center pb-10">What other writers are saying about Literistic</h3>
                                </div>
                                <div className="w-100 d-flex flex-row flex-wrap justify-between gap-10">
                                    <div className="col-lg-4 mb-10">
                                        <div className="bg-gray-400 p-10 d-flex flex-column justify-content-between h-100">
                                            <p className="fst-italic">"Perhaps my favorite resource out there, what sets Literistic apart is that it takes that massive list of journals, contests, and deadlines and tailors it to you and your interests and aesthetics."</p>
                                            <div className="d-flex justify-content-center flex-column mt-2">
                                                <h6 className="mb-0">New South Journal</h6>
                                                <p className="fst-normal">Paige Sulivan</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-10">
                                        <div className="bg-gray-400 p-10 d-flex flex-column justify-content-between h-100">
                                            <p className="fst-italic">"Super excited about getting organized & efficiently submitting my work using @literistic, which keeps you updated on everything from retreats to submission deadlines, sending monthly, tailored lists on where to submit! A must for both emergin & veterans in the #WritingCommunity"</p>
                                            <div className="d-flex justify-content-center flex-column mt-2">
                                                <h6 className="mb-0">Sheana Ochoa</h6>
                                                <p className="fst-normal">@SheanaOchoa</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-10">
                                        <div className="bg-gray-400 p-10 d-flex flex-column justify-content-between h-100">
                                            <p className="fst-italic">"...@literistic is one of my favorite things in my inbox every month. If you consider yourself a writer, you should check it out!"</p>
                                            <div className="d-flex justify-content-center flex-column mt-2">
                                                <h6 className="mb-0">Allie Van Duyne</h6>
                                                <p className="fst-normal">@alliekvd</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-10">
                                        <div className="bg-gray-400 p-10 d-flex flex-column justify-content-between h-100">
                                            <p className="fst-italic">"Thanks @literistic and team for your charismatic and singular response to writing in a wayward cosmos. Bless you, and may all of your visions for a better writer-verse come true in a timely manner and with useful feedback."</p>
                                            <div className="d-flex justify-content-center flex-column mt-2">
                                                <h6 className="mb-0">Jeffrey Patrick Bennet</h6>
                                                <p className="fst-normal">@jpatrick_actual</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-10">
                                        <div className="bg-gray-400 p-10 d-flex flex-column justify-content-between h-100">
                                            <p className="fst-italic">"I used to use (Duotrope) but find it too expensive now. It can also get overwhelming (so many options) and if you are a data person you can get obsessive about checking %of acceptances, response time etc. I've shifted to @literistic, which curates a monthly list. Best decision ever.."</p>
                                            <div className="d-flex justify-content-center flex-column mt-2">
                                                <h6 className="mb-0">Sam Tetangco</h6>
                                                <p className="fst-normal">@SamTetangco</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-10">
                                        <div className="bg-gray-400 p-10 d-flex flex-column justify-content-between h-100">
                                            <p className="fst-italic">"the email newsletter at @literistic is always great!"</p>
                                            <div className="d-flex justify-content-center flex-column mt-2">
                                                <h6 className="mb-0">George Oliver Kowalik</h6>
                                                <p className="fst-normal">@kowalik_george</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="px-lg-10">
                            <div className="row my-12 d-flex align-items-center">
                                <div className="col-lg-4 d-flex align-items-center">
                                    <h4 className="fs-5">Save hours of searching for the right places to submit your work</h4>
                                </div>
                                <div className="col-lg-8">
                                    <div className="d-flex flex-row gap-4">
                                        <svg width="40" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" className="mr-6" clip-rule="evenodd" fill="#blue"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" /></svg>
                                        <p>We email you a curated list of over 60 open submissions on the 1st of every month (over 4000 sent and counting!)</p>
                                    </div>
                                    <div className="d-flex flex-row gap-4">
                                        <svg width="40" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" className="mr-8" clip-rule="evenodd" fill="#blue"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" /></svg>
                                        <p>We find the best contests worth submitting to, including opportunities from magzines, presses, contests, grants and residencies that don't show up in traditional indexes</p>
                                    </div>
                                    <div className="d-flex flex-row gap-4">
                                        <svg width="40" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" className="mr-6" clip-rule="evenodd" fill="#blue"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" /></svg>
                                        <p>We rigorously filter through hundreds of opportunities down to the best 20% that  offer the most value to writers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-12">
                                <div className="col-lg-4 d-flex align-items-center">
                                    <h4 className="fs-5">Reduce the stress of deciding where to submit</h4>
                                </div>
                                <div className="col-lg-8">
                                    <div className="d-flex flex-row gap-4">
                                        <svg width="40" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" className="mr-6" clip-rule="evenodd" fill="#blue"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" /></svg>
                                        <p>Use our unique filters to only see calls for submissions that best fit your needs</p>
                                    </div>
                                    <div className="d-flex flex-row gap-4">
                                        <svg width="40" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" className="mr-6" clip-rule="evenodd" fill="#blue"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" /></svg>
                                        <p>Fiction, Poetry, CNF, Flash--we've got you covered</p>
                                    </div>
                                    <div className="d-flex flex-row gap-4">
                                        <svg width="40" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" className="mr-6" clip-rule="evenodd" fill="#blue"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" /></svg>
                                        <p>We send you the contests that fit your wallet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-12">
                                <div className="col-lg-4 d-flex align-items-center">
                                    <h4 className="fs-5">Never miss a submission deadline</h4>
                                </div>
                                <div className="col-lg-8">
                                    <div className="d-flex flex-row gap-4">
                                        <svg width="40" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" className="mr-6" clip-rule="evenodd" fill="#blue"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" /></svg>
                                        <p>We create a deadline calendar that does the work for you</p>
                                    </div>
                                    <div className="d-flex flex-row gap-4">
                                        <svg width="40" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" className="mr-6" clip-rule="evenodd" fill="#blue"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" /></svg>
                                        <p>View deadlines weeks and months ahead on your iPhone/Google calendar</p>
                                    </div>
                                    <div className="d-flex flex-row gap-4">
                                        <svg width="40" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" className="mr-6" clip-rule="evenodd" fill="#blue"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" /></svg>
                                        <p>Get reminders and notifications for the deadlines you're excited about</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="work_bg py-20">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <h2 className="text-white">We give you back hours to spend writing</h2>
                                    <p className="fst-italic text-white">Here's how Literistic works:</p>
                                    <ul className="p-0">
                                        <li className="d-flex flex-row gap-10 my-2">
                                            <div className="col-2"><span className="worknum">1</span></div>
                                            <div className="col-10 d-flex flex-column">
                                                <h4 className="text-white">Receive a customized email with submission opportunities</h4>
                                                <p className="text-white">You receive an email on the 1st of every month that brings to your inbox a customized list of writing opportunities including magazines, presses, contests, grants and residencies.</p>
                                            </div>
                                        </li>
                                        <li className="d-flex flex-row gap-10 my-2">
                                            <div className="col-2"><span className="worknum">2</span></div>
                                            <div className="col-10 d-flex flex-column">
                                                <h4 className="text-white">Pursue your interests</h4>
                                                <p className="text-white">Click on any of the contest links in the monthly email to read more about and submit to contests and calls for submission that interest you.</p>
                                            </div>
                                        </li>
                                        <li className="d-flex flex-row gap-10 my-2">
                                            <div className="col-2"><span className="worknum">3</span></div>
                                            <div className="col-10 d-flex flex-column">
                                                <h4 className="text-white">Click to add dealines to your calendar</h4>
                                                <p className="text-white">Easily add our contest list directly to your device calendar so you never miss a deadline.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                                    <div className="w-100 d-flex items-content-center justify-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" fill="#fff" viewBox="0 0 24 24"><path d="M24 1l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-13 8.63c1.013-1.574 1.955-2.256 2.938-2.55l.234 1.448c-.663.256-1.215.806-1.965 1.971l-1.207-.869zm11-4.729c-.928 1.473-1.748 2.104-2.566 2.322l.254 1.436c.746-.176 1.521-.583 2.312-1.391v-2.367zm-3.855 2.385c-.883-.103-1.92-.365-2.938-.376l.236 1.462c.873.068 1.931.345 2.963.395l-.261-1.481z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-10">
                        <div className="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8 col-md-12">
                                    <h6 className="text-uppercase text-center mb-6 text-orange">About Us</h6>
                                    <h2 className="text-center fs-4">We're passionate about serving writers</h2>
                                    <p>Literistic was originally founded by Liam Sarsfield and Jessie Jones all the way back in what feels like a previous age--their very first Literistic lists were compiled in 2015 and sent out to the intrepid writers who joined that year.</p>

                                    <p>Since then, the list has only grown to be more robust, more equitable, and more useful with every year that passes. Now Literistic is run by Josh and Ben--two authors whose professional lives are wrapped up in the mad literary enterprise of writing and submitting and sharing resources with community. We work hard to bring you what we consider the very best opportunities available each month. Contests to cut your teeth on. Fellowships to give you that extra support and room of your own. Journals to bring your lovely words into the world. And more. There's always more, and you can bet we'll find the best new opportunities and share them with you each and every month.</p>

                                    <p>Our newsletter List goes out on the 1st of every month, 12 months a year, with opportunities for fiction, poetry, and creative non-fiction authors. We also provide a function to easily add deadlines from our newsletter to your own personal calender, so you''ll never miss that favourite contest again.</p>

                                    <p>Our Concierge service runs for a full calender year, and includes everything with the List as well. After a robust onboarding process where we learn who you are as a writer, our editors will serve as a personal submission concierge. We'll write your cover letter, we'll discover the best magazines and presses that want work like yours, and we'll halp you take those hard steps toward your publication journey.</p>

                                    <p><b>Your can contact us with any questions at help (at) literistic (dot) com.</b></p>
                                    <h6 className="text-uppercase text-center my-10 text-orange">Our Editors</h6>
                                    <div class="row justify-content-center">
                                        <div class="col-12 d-flex justify-content-center flex-row gap-8" >
                                            <div className="pr-8">
                                                <img src={AuthorImg} alt="" width={180} height={180} />
                                                <h5 className="text-center mt-8 mb-3 text-orange">Josh Roark</h5>
                                                <h6 className="text-orange text-center">Editor</h6>
                                            </div>
                                            <p>Josh Roark (he/him) is a poet and editor. He received his MFA from Antioch University Los Angeles, and he currently lives in the desert of Southern California with his filmmaker wife. He is the editor and founder of Frontier Poetry and Paletter Poetry and author of Put One Hand Up, Lean Back from Unsolicited Press. He gratefully relies on Literistic to find the home for his current poetry manuscript. @joshuaroarkpoet</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-5 pb-10">
                        <div className="container">
                            <h6 className="text-uppercase text-center my-4 text-orange">Frequently Asked Questions</h6>
                            <h2 className="text-center fs-4 mb-10">FAQs</h2>
                            <div class="row justify-content-center mb-10">
                                <div class="col-8 align-items-center d-flex justify-content-center">
                                    <Link className="btn bg-orange px-8 py-5 mx-2 mb-3 fs-2 text-white text-capitalize w-auto border border-transparent ">Get Your Concierge</Link>
                                    {/* <Link className="btn px-8 py-5 text-purple mx-2 mb-3 fs-2 text-capitalize w-auto border border-purple">Get Your Literistic List</Link> */}

                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-12 justify-content-center">
                                    <h4 className="">What's the main difference between the List and the Concierge?</h4>
                                    <p>The Concierge? submits on your behalf! The List provides a curated group of opportunities with upcoming deadlines, but the effort of submitting still remains with the author.</p>

                                    <h4>I am a new author. Is Literistic right for me?</h4>
                                    <p>Absolutely. Our Concierge service can be a great introduction to the submission and publication process, and our editors will be happy to inform you of the why's behind all of our submission decision s. And if you have more experience, our Concierge will work entirely with your hard earned routines and preferences around where you'd like to be published.</p>
                                    <p>And if you choose our List instead, we are excited to introduce you to great magazines and presses through the monthly newsletter, and we make sure that it's full populated with opportunities both for newer writers and ones more experienced.</p>

                                    <h4>When will I receive my first List?</h4>
                                    <p>Shortly after subscribing either to the List or the Concierge, you'll receive the most recent Literistic issue. Thereafter, you will receive Literistic via emaol on the 1st day of every month. We're as excited to get it in your hands as you are to receive it!</p>

                                    <h4>How do I change my subscriber preferemces?</h4>
                                    <p>In the footer of our monthly email are the words 'your preferences'. Click that link to customize your experience by genre, category, fees, and geography.</p>
                                    <h4>What's your cancellation policy?</h4>
                                    <p>We unfortunately can't offer refunds on our services. However, you may cancel your plan at any time to avoid the next auto-renewal at end of term, by unsubscribing at the bottom of the monthly email, or by reaching out to us directly.</p>
                                    <h4>Can I recommend a publication, contest or fellowship?</h4>
                                    <p>Absolutely! We/d love to hear from you. By the  nature of our service we only publish a select subset of what we see. We can be reached at help@literistic.com.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mb-10">
                        <h6 className="text-uppercase text-center my-4 text-orange">Pricing Plans</h6>
                        <h2 className="text-center fs-4 mb-10">Sign Up Now to Start Your Submission Journey</h2>
                        <div class="row justify-content-center">
                            <div class="col-md-5 col-12 p-10 border border-orange d-flex justify-content-center flex-column">
                                <h6 className="text-uppercase text-orange text-center">the literistic list</h6>
                                <div className="display-2 text-black border-bottom mb-10 pb-10 text-center py-4"><span className="pricetag">$</span> 7<span className="pricetag"> /month</span></div>
                                <div className="d-flex flex-row gap-2">
                                    <svg width="40" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" className="mr-4" clip-rule="evenodd" fill="#blue"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" /></svg>
                                    <p>Curated Opportunities Every Month</p>
                                </div>
                                <div className="d-flex flex-row gap-2">
                                    <svg width="40" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" className="mr-4" clip-rule="evenodd" fill="#blue"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" /></svg>
                                    <p>Membership in Private FB Group</p>
                                </div>
                                <div className="d-flex flex-row gap-2">
                                    <svg width="40" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" className="mr-4" clip-rule="evenodd" fill="#blue"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" /></svg>
                                    <p>Customizable to Your Needs</p>
                                </div>
                                <Link className="btn bg-orange mt-10 w-auto px-8 py-5 text-white mx-2 mb-3 fs-2 text-capitalize w-auto border border-purple">Get Your Literistic List</Link>
                            </div>
                        </div>
                    </div>


                    <div className="work_bg py-20 text-center">
                        <div className="container">
                            <h2 className="text-white">You do the writing, We'll bring you the publishers.</h2>
                            <p className="text-white">Literistic delivers a timelly, robust, and tailored list of writing opportunites-including magazines, presses, contests, grants and residencies-to your inbox and your calendar.</p>
                        </div>
                    </div>
                </PageWrapper>
            </div >
        </>
    )
}

export default Literistic