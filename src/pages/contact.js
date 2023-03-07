
import React, { useEffect } from 'react';
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
import AttributorFields from "../components/AttributorFields";
const Contact = () => {
  const { register, handleSubmit, handleChange, control, formState: { errors } } = useForm();
  //
  const netlify = useNetlifyForm({
    name: 'Contact Us New',
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
    console.log('data data', data)
    netlify.handleSubmit(null, data)
  }

  useEffect(() => {
    setInterval(() => {
        document.FlareTrk.repop();
    }, 1000);
  }, []);

  return (
    <>
      <Helmet>
        <title>Get in touch | Strategically</title>
      </Helmet>
      <LeadgenLayout
        title="Get in touch"
        description="Our content experts are on hand and ready to help. "
      >
        <div class="container mx-auto p-0">
          <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
            <AttributorFields returnUrl="https://strategically.co/thank-you/" />

            <div className="form-group position-relative mb-4">
              <input
                id="first_name"
                name="first_name"
                placeholder="First Name"
                type="text" required="true"
                style={{ height: "44px" }}
                className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
              />
            </div>
            <div className="form-group position-relative mb-4">
              <input
                id="last_name"
                name="last_name"
                placeholder="Last Name"
                type="text" required="true"
                style={{ height: "44px" }}
                className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
              />
            </div>
            <div className="form-group position-relative mb-4">
              <input
                id="email"
                name="email"
                placeholder="Email Address"
                type="email" required="true"
                style={{ height: "44px" }}
                className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
              />
            </div>
            <div className="form-group position-relative mb-4">
              <input
                id="company"
                name="company"
                style={{ height: "44px" }}
                placeholder="Company Name"
                type="text"
                required="true"
                className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
              />
            </div>
            <div className="form-group position-relative mb-4">
              <input
                id="phone"
                name="phone"
                style={{ height: "44px" }}
                placeholder="Phone Number"
                type="text" required="true"
                className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
              />
            </div>
            <div className="form-group position-relative mb-4">
              <textarea
                name='description'
                id='description'
                placeholder="Message"
                style={{ height: "80px" }}
                className="mb-4 form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
              ></textarea>
            </div>            
            <div className="button"> 
              <p className="snote">Looking to join our team? Email <a href="mailto:support@strategically.co">support@strategically.co</a> instead</p>
              <input type="submit" value="Continue" className="btn btn-blue-3 w-100 rounded-4 btn-h" />
            </div>
          </form>
        </div>
      </LeadgenLayout>
    </>
  )
}

export default Contact