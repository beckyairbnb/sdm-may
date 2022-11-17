
import React from 'react';
import { navigate } from "gatsby"
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import {
    useNetlifyForm,
    NetlifyFormProvider,
    NetlifyFormComponent,
    Honeypot
} from 'react-netlify-forms'
import LeadgenLayout from "../components/Layout/LeadgenLayout";
const LeadgenPageMaster = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const netlify = useNetlifyForm({
        name: 'FreeSeoAudit',
        action: '/thank-you-audit/ ',
        onSuccess: (response, context) => {
            console.log('Successfully sent form data to Netlify Server')
            navigate("/thank-you-audit/")
        }
    })

    const onSubmit = (data) => netlify.handleSubmit(null, data)

    return (
        <>
            <Helmet>
                <title>Find missed SEO opportunities with our free audit tool | Strategically.co</title>
            </Helmet>
            <LeadgenLayout>
                <div className="mb-5">
                    <h2 className="mb-1 font-size-8 letter-spacing-n83">Free content audit tool</h2>
                    <p className="text-bali-gray font-size-6 mb-0">Got content that’s not (yet) crushing it in the SERPs? Enter the page URL and keywords you’re targeting, we’ll send you quick tips to improve its performance — for free. </p>
                </div>
                <NetlifyFormProvider {...netlify}>
                    <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group position-relative mb-2">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                id="fullName"
                                {...register("fullName", { required: true })}
                                style={{height:"50px"}}
                                className=
                                {
                                    `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${errors.fullName && 'error'}`
                                }
                            />
                        </div>
                        {/* Email */}
                        <div className="form-group mb-2 position-relative">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                id="email"
                                {...register("email", { required: 'Email is required' })}
                                style={{height:"50px"}}
                                className=
                                {
                                    `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${errors.email && 'error'}`
                                }
                            />
                        </div>

                        <div className="form-group position-relative mb-2">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                id="phone"
                                {...register("phone", { required: true })}
                                style={{height:"50px"}}
                                className=
                                {
                                    `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${errors.phone && 'error'}`
                                }
                            />
                        </div>
                        <div className="form-group position-relative mb-2">
                            <input
                                type="text"
                                name="pageurl"
                                placeholder="Enter page URL"
                                id="pageurl"
                                {...register("pageurl", { required: true })}
                                style={{height:"50px"}}
                                className=
                                {
                                    `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${errors.pageurl && 'error'}`
                                }
                            />
                        </div>
                        <div className="form-group position-relative mb-2">
                            <input
                                type="text"
                                name="keywords"
                                placeholder="Enter your target keywords"
                                id="keywords"
                                {...register("keywords", { required: true })}
                                style={{height:"50px"}}
                                className=
                                {
                                    `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${errors.keywords && 'error'}`
                                }
                            />
                        </div>


                        <div className="button">
                            <input type="submit" value="Continue" className="btn btn-blue-3 w-100 rounded-4 btn-h" style={{height:"50px"}} />

                        </div>
                        <div className="d-flex flex-row mt-8 align-items-center justify-content-center reviews-container">
                            
                            <div className='font-size-6 mb-0'><a href="https://g.page/strategically?share"  className='font-size-6 mb-0' target="_blank" rel="noopener noreferrer">Excellent</a></div>
                            <div className='d-flex flex-row px-3'>
                            <a href="https://g.page/strategically?share" target="_blank" rel="noopener noreferrer">
                                <svg clip-rule="evenodd" fill-rule="evenodd" width="22" height="22" fill='#fff' className='bg-green p-1 mr-1' stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero" /></svg>
                                <svg clip-rule="evenodd" fill-rule="evenodd" width="22" height="22" fill='#fff' className='bg-green p-1 mr-1' stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero" /></svg>
                                <svg clip-rule="evenodd" fill-rule="evenodd" width="22" height="22" fill='#fff' className='bg-green p-1 mr-1' stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero" /></svg>
                                <svg clip-rule="evenodd" fill-rule="evenodd" width="22" height="22" fill='#fff' className='bg-green p-1 mr-1' stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero" /></svg>
                                <svg clip-rule="evenodd" fill-rule="evenodd" width="22" height="22" fill='#fff' className='bg-green p-1' stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero" /></svg>
                            </a>
                            </div>
                            <div className='font-size-6 pr-3 mb-0'><a href="https://g.page/strategically?share"  className='font-size-6 mb-0' target="_blank" rel="noopener noreferrer">29 Google Reviews</a></div>
                           
                        </div>

                    </NetlifyFormComponent>
                </NetlifyFormProvider>
            </LeadgenLayout>
        </>
    )
}

export default LeadgenPageMaster