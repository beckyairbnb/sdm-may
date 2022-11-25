
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
const GetAQuote = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const netlify = useNetlifyForm({
        name: 'GetAQuote',
        action: '/success',
        onSuccess: (response, context) => {
            console.log('Successfully sent form data to Netlify Server')
            navigate('https://calendly.com/becky-strategically/intro-meeting?month=2022-02');
        }
    })

    const onSubmit = (data) => netlify.handleSubmit(null, data)

    return (
        <>
            <Helmet>
                <title>Get A Quote | Strategically</title>
            </Helmet>
            <LeadgenLayout
                title="Get your quote"
                description="We’ve written more than 8 million words, for 300+ customers."
            >
                <NetlifyFormProvider {...netlify}>
                    <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group position-relative mb-4">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                id="fullName"
                                {...register("fullName", { required: true })}
                                className=
                                {
                                    `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${errors.fullName && 'error'}`
                                }
                            />
                        </div>
                        {/* Email */}
                        <div className="form-group mb-6 position-relative">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                id="email"
                                {...register("email", { required: 'Email is required' })}
                                className=
                                {
                                    `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${errors.email && 'error'}`
                                }
                            />
                        </div>

                        <div className="form-group position-relative mb-4">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                id="phone"
                                {...register("phone", { required: true })}
                                className=
                                {
                                    `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${errors.phone && 'error'}`
                                }
                            />
                        </div>
                        <div className="button">
                            <input type="submit" value="Get a quote" className="btn btn-blue-3 w-100 rounded-4 btn-h" />
                        </div>
                    </NetlifyFormComponent>
                </NetlifyFormProvider>
            </LeadgenLayout>
        </>
    )
}

export default GetAQuote