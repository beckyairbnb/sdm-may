
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
    const Details = data.details
    data.role = Rolevalue
    data.details = Details
    console.log('data data',data)
    netlify.handleSubmit(null, data)
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
          <input type="hidden" id="[attributer-channel]" name="[attributer-channel]" value="[channel]"/>
          <input type="hidden" id="[attributer-channeldrilldown1]" name="[attributer-channeldrilldown1]" value="[channeldrilldown1]"/>
          <input type="hidden" id="[attributer-channeldrilldown2]" name="[attributer-channeldrilldown2]" value="[channeldrilldown2]"/>
          <input type="hidden" id="[attributer-channeldrilldown3]" name="[attributer-channeldrilldown3]" value="[channeldrilldown3]"/>
          <input type="hidden" id="[attributer-channeldrilldown4]" name="[attributer-channeldrilldown4]" value="[channeldrilldown4]"/>
          <input type="hidden" id="[attributer-landingpage]" name="[attributer-landingpage]" value="[landingpage]"/>
          <input type="hidden" id="[attributer-landingpagegroup]" name="[attributer-landingpagegroup]" value="[landingpagegroup]"/>
          <div className="form-group position-relative mb-3">
              <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  id="firstName"
                  style={{height:"42px"}}
                  {...register("firstName", { required: true })}
                  className=
                  {
                      `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${errors.firstName && 'error'}`
                  }
              />
          </div>
          <div className="form-group position-relative mb-3">
              <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  id="lastName"
                  style={{height:"42px"}}
                  {...register("lastName", { required: true })}
                  className=
                  {
                      `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${errors.lastName && 'error'}`
                  }
              />
          </div>
           
            <div className="form-group mb-3 position-relative">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                id="email"
                {...register("email", { required: 'Email is required' })}
                style={{height:"42px"}}
                className=
                {
                  `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${errors.email && 'error'}`
                }
              />
            </div>
            <div className="form-group mb-3 position-relative">
                            <input
                                type="company"
                                name="companyname"
                                placeholder="Company Name"
                                id="company"
                                style={{height:"40px"}}
                                {...register("company", { required: 'company is required' })}
                                className=
                                {
                                    `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${errors.company && 'error'}`
                                }
                            />
                        </div>
            <div className="form-group position-relative mb-3">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                id="phone"
                {...register("phone", { required: true })}
                style={{height:"42px"}}
                className=
                {
                  `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${errors.phone && 'error'}`
                }
              />
            </div>
            <div className="form-group position-relative mb-3">
              <Controller
                name="role"
                control={control}
                defaultValue=""
                rules={registerOptions.role}
                style={{height:"42px"}}
                render={({ field }) => (
                  <Select options={selectOptions} {...field} label="Text field" className=
                  {
                    `form-selct mb-4 form-control line-height-lg form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5'}`
                  } />
                )}
              />
            </div>
            <Honeypot />

            <div className="form-group position-relative mb-3">
              <textarea
                type="text"
                name='details'
                id='details'
                placeholder="Message"
                onChange={handleChange}
                style={{height:"80px"}}
                {...register("details")}
                className=
                {
                  `mb-4 form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5`
                }
              />
              {/* <textarea
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
              /> */}
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