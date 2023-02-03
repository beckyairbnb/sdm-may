
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
        name: 'GetFreeContentSamples',
        action: '/success/',
        onSuccess: (response, context) => {
            console.log('Successfully sent form data to Netlify Server')
            navigate("/success/")
        }
    })

    const onSubmit = (data) => netlify.handleSubmit(null, data)

    return (
        <>
            <Helmet>
                <title>Get free sample posts for your industry | Strategically.co</title>
            </Helmet>
            <LeadgenLayout
                title="SEO content and sales copy"
                description=" Want to check out samples specific to your niche? Get free samples for any industry or content type, written by our 5-star writers. ">
                <NetlifyFormProvider {...netlify}>
                    <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group position-relative mb-4">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                id="fullName"
                                {...register("fullName", { required: true })}
                                style={{height:"60px"}}
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
                                style={{height:"60px"}}
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
                                style={{height:"60px"}}
                                className=
                                {
                                    `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${errors.phone && 'error'}`
                                }
                            />
                        </div>
                        <div className="form-group position-relative mb-2">
                        <select name="contenttype" 
                            id="contenttype"
                            {...register("contenttype", { required: true })}
                            style={{height:"60px"}}
                            
                            className=
                                {
                                    `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${errors.contenttype && 'error'}`
                                }
                                >
                            <option disabled={true} value="">--Choose Content Type--</option>
                                <option value="Website sales copy">Website sales copy</option>
                                <option value="Email marketing">Email marketing</option>
                                <option value="Newsletters">Newsletters</option>
                                <option value="SEO blog content">SEO blog content</option>
                                <option value="Landing pages">Landing pages</option>
                                <option value="Other">Other</option>                            
                            </select>
                        </div>
                        <div className="form-group position-relative mb-2">
                            <input
                                type="text"
                                name="industry"
                                placeholder="Enter your industry"
                                id="industry"
                                {...register("industry", { required: true })}
                                style={{height:"60px"}}
                                className=
                                {
                                    `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${errors.industry && 'error'}`
                                }
                            />
                        </div>

                        <div className="button">
                            <input type="submit" value="Continue" className="btn btn-blue-3 w-100 rounded-4 btn-h" style={{height:"60px"}} />
                        </div>
                    </NetlifyFormComponent>
                </NetlifyFormProvider>
            </LeadgenLayout>
        </>
    )
}

export default LeadgenPageMaster