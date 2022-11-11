
import React, { useState, useEffect } from 'react';
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
        name: 'LeadgenMaster',
        action: '/success',
        onSuccess: (response, context) => {
          console.log('Successfully sent form data to Netlify Server')
        }
      })

      const onSubmit = (data) => netlify.handleSubmit(null, data)

    // const onSubmit = (data, e) => {
    //     const form = e.target
    //     const formData = new FormData(form);
    //     e.preventDefault()
        
    //     fetch('/', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //         body: JSON.stringify({
    //             'form-name': 'LeadgenMaster',
    //             body: data,
    //         }),
    //     })
    //         .then(response => {                
    //             console.log('succes',response)
    //         })
    //         .catch(error => {
    //             console.log('failed',error)
    //         })
    // }
    return (
        <>
            <Helmet>
                <title>Award-Winning Content Writing Agency | Strategically</title>
            </Helmet>
            <LeadgenLayout>
            <div className="mb-10">
                        <h2 className="mb-1 font-size-10 letter-spacing-n83">
                            Welcome back
                        </h2>
                        <p className="text-bali-gray font-size-7 mb-0">
                            Enter your account details below
                        </p>
                    </div>
                    <NetlifyFormProvider {...netlify}>
                    {/* <form
                        onSubmit={handleSubmit(onSubmit)}
                        name="LeadgenMaster"
                        method="POST"
                        data-netlify="true"
                        action="/"
                        id="LeadgenMaster"
                     >
                    <input type="hidden" name="form-name" value="LeadgenMaster" /> */}
                    <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group position-relative mb-6">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="fullName"
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

                        <div className="form-group position-relative mb-6">
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
                        <input type="submit" value="Continue" className="btn btn-blue-3  w-100 rounded-4" />
    
                        </div>
                    </NetlifyFormComponent>
                    </NetlifyFormProvider>
            </LeadgenLayout>
        </>
    )
}

export default LeadgenPageMaster