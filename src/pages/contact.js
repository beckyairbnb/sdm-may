
import React from 'react';
import { navigate } from "gatsby"
import { Helmet } from "react-helmet";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot
} from 'react-netlify-forms'
import LeadgenLayout from "../components/Layout/LeadgenLayout";
const Contact = () => {
  const { register, handleSubmit, handleChange, control, formState: { errors } } = useForm();
//
  const netlify = useNetlifyForm({
    name: 'Contact Us',
    action: '/success',
    onSuccess: (response, context) => {
      console.log('Successfully sent form data to Netlify Server')
      navigate("/thank-you/")
    }
  })

  const selectOptions = [
    { value: "sales", label: "Sales" },
    { value: "applytobeawriter", label: "Apply to be a writer" },
    { value: "guestposts", label: "Guest posts" }
  ];
  const registerOptions = {
    // ...
    role: { required: "Role is required" }
  };

  const onSubmit = (data) => {
    const Rolevalue = data.role.label
    data.role = Rolevalue
    console.log('data data',data)
    //netlify.handleSubmit(null, data)
  }

  return (
    <>
      <Helmet>
        <title>Get in touch | Strategically</title>
      </Helmet>
      <LeadgenLayout
        title="Get in touch"
        description="Our content experts are on hand and ready to help. "
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
                style={{height:"50px"}}
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
                style={{height:"50px"}}
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
                style={{height:"50px"}}
                className=
                {
                  `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${errors.phone && 'error'}`
                }
              />
            </div>
            <div>
              <Controller
                name="role"
                control={control}
                defaultValue=""
                rules={registerOptions.role}
                style={{height:"50px"}}
                render={({ field }) => (
                  <Select options={selectOptions} {...field} label="Text field" className=
                  {
                    `form-selct mb-4 form-control line-height-lg form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5'}`
                  } />
                )}
              />
            </div>
            <Honeypot />

            <div>
              <textarea
                name='details'
                id='details'
                placeholder="Message"
                rows='4'
                {...register("details")}
                onChange={handleChange}
                style={{height:"80px"}}
                className=
                {
                  `mb-4 form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5`
                }
              />
            </div>

            <div className="button">
              <input type="submit" value="Continue" className="btn btn-blue-3 w-100 rounded-4 btn-h" />
            </div>
          </NetlifyFormComponent>
        </NetlifyFormProvider>
      </LeadgenLayout>
    </>
  )
}

export default Contact