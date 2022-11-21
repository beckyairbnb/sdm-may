
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
            <LeadgenLayout
                title="Free content audit tool"
                description="Got content that’s not (yet) crushing it in the SERPs? Enter the page URL and keywords you’re targeting, we’ll send you quick tips to improve its performance — for free. "
            >
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
   
                    </NetlifyFormComponent>
                </NetlifyFormProvider>
            </LeadgenLayout>
        </>
    )
}

export default LeadgenPageMaster