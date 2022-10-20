import React from "react";
import { Link } from "gatsby"
import Helmet from "react-helmet";

import PageWrapper from "../components/PageWrapper";

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
                                <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/get-a-quote/2/"}>
                                    View Pricing
                                </a>
                            </>
                        ),
                        footerStyle: "style1",
                    }}
                >

                    <div className="w-100 mt-60 literistic_bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="literistic_hero py-10">
                                        <h4 className="text-white text-uppercase">the literistic list</h4>
                                        <h4 className="text-white my-5">Our newsletter brings the opportunities to you</h4>
                                        <p className="fs-6 text-white">Every month, we email you the best writing contests, unique magazines, presses, grants, residencies, and fellowships</p>
                                        <p className="fs-6 text-uppercase text-white fw-light">pricing</p>
                                        <h2 className="fs-2 text-white">$ 7 /month</h2>
                                        <p className="fs-6 text-white">cancel anytime</p>
                                        <Link
                                            to="/get-a-quote/2/"
                                            className="btn btn btn-purple header-btn-2 mt-5 mb-3 fs-3 rounded-5 text-capitalize w-auto border-0">get literistic</Link>
                                        <ul className="col-lg-4 mx-auto text-left my-10">
                                            <li className="text-white fw-bold fs-4 py-1">Save hours of searching for opportunities</li>
                                            <li className="text-white fs-6 py-1">Bring the best contests to your inbox</li>
                                            <li className="text-white fs-6 py-1">Customizable to your specific needs</li>
                                            <li className="text-white fs-6 py-1">Membership in our private Facebook group</li>
                                            <li className="text-white fs-6 py-1">We seek out the very best literary opportunities, including magazines, presses, grants and more</li>
                                        </ul>
                                        <div className="d-flex flex-row mt-10">
                                            <div className="col-lg-4 flex flex-col">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#fff" className="pb-2"><path d="M13.473 9.196c-.425-.439-.401-1.127.035-1.552l4.461-4.326c.218-.211.498-.318.775-.318.282 0 .563.11.776.331l-6.047 5.865zm-7.334 11.021c-.092.089-.139.208-.139.327 0 .25.204.456.456.456.114 0 .229-.042.317-.128l.749-.729-.633-.654-.75.728zm6.33-8.425l-2.564 2.485c-1.378 1.336-2.081 2.63-2.73 4.437l1.132 1.169c1.825-.593 3.14-1.255 4.518-2.591l2.563-2.486-2.919-3.014zm7.477-7.659l-6.604 6.405 3.326 3.434 6.604-6.403c.485-.469.728-1.093.728-1.718 0-2.088-2.53-3.196-4.054-1.718zm-19.946 16.867h4v-1h-4v1z" /></svg>
                                                <h4 className="fs-4 text-white pb-4">Write more, search less</h4>
                                                <p className="text-white">Our editors scour the web finding the best places to submit your work so you don't spend hours doing the  same.</p>
                                            </div>
                                            <div className="col-lg-4 flex flex-col">
                                                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill="#fff" className="pb-2" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></svg>
                                                <h4 className="fs-4 text-white pb-4">Get increased joy from writing</h4>
                                                <p className="text-white">Relax with a cup of coffee and our monthly email and decide where to submit your wrinting.</p>
                                            </div>
                                            <div className="col-lg-4 flex flex-col">
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
                            <div className="col-lg-10 mx-auto">
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
    <div className="px-10">
    <div className="row">
    <div className="col-lg-4">
    <h3 className="fs-5">Save hours of searching for the right places to submit your work</h3>
        </div>
        <div className="col-lg-8">

<p><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg>
We email you a curated list of over 60 open submissions on the 1st of every month (over 4000 sent and counting!)</p>

<p><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg>
We find the best contests worth submitting to, including opportunities from magzines, presses, contests, grants and residencies that don't show up in traditional indexes</p>

<p><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg>
We rigorously filter through hundreds of opportunities down to the best 20% that  offer the most value to writers</p>
   

        </div>
        </div>
    </div>

</div>


                </PageWrapper>
            </div>
        </>
    )
}

export default Literistic