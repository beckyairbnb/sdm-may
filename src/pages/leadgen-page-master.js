
import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import LeadgenLayout from "../components/Layout/LeadgenLayout";
const LeadgenPageMaster = () => {
    const [formValid, setFormValid] = useState(false)
    const [inputValues, setInputValue] = useState({
        fullName: '',
        email: '',
        phone: ''
      });
    
      const [validation, setValidation] = useState({
        fullName: '',
        email: '',
        phone: ''
      });    
      
      function handleChange(event) {
        const { name, value } = event.target;
        setInputValue({ ...inputValues, [name]: value });
        handleAfterClick(event)
      }
    
      const handleAfterClick = (e) => {
        e.preventDefault();
        let errors = validation;
        if (inputValues.fullName==='') {
          errors.fullName = 'FullName is required';
        } else {
          errors.fullName = '';
        }

        const emailCond = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
        if (inputValues.email==='') {
          errors.email = 'Email is required';
        } else if (inputValues.email.match(emailCond)) {
          errors.email = 'Please enter a valid email address';
        } else {
          errors.email = '';
        }

        if (inputValues.phone==='') {
            errors.phone = 'Phone Number is required';
          } else {
            errors.phone = '';
          }   
          if(errors.fullName==='' && errors.email==='' && errors.phone===''){
            setFormValid(true)  
          }
          console.log('errors',errors)
        return setValidation(errors);
      };
      useEffect(() => {        
                console.log('formValid 4',formValid)
                console.log('validation 3',validation)
                console.log('inputValues 2',inputValues)
        }, [handleAfterClick, inputValues, validation, formValid]);

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
                    <form name="LeadgenMaster" method="POST" data-netlify="true" action={`/success`}
                        data-aos="fade-up"
                        data-aos-duration={800}
                        data-aos-delay={500}
                    >
                        <input type="hidden" name="form-name" value="LeadgenMaster" />
                        {/* <FormErrors formErrors={this.state.formErrors} /> */}
                        <div className="form-group position-relative mb-6">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="fullName"
                                id="fullName"
                                onBlur={(e) => handleChange(e)}
                                onChange={(e) => handleChange(e)}
                                value={inputValues.fullName}
                                className=
                                {
                                    `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${validation && validation.fullName && 'error'}`
                                }
                            />
                            {validation.fullName && <p>{validation.fullName}</p>}
                            {validation.fullName && console.log(validation)}
                        </div>
                        {/* Email */}
                        <div className="form-group mb-6 position-relative">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                id="email"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.email}
                                className=
                                {
                                    `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${validation && validation.email && 'error'}`
                                }
                            />
                            {validation.email && <p>{validation.email}</p>}
                        </div>

                        <div className="form-group position-relative mb-6">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                id="phone"
                                onChange={(e) => handleChange(e)}
                                value={inputValues.phone}
                                className=
                                {
                                    `form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 ${validation && validation.phone && 'error'}`
                                }
                            />
                            {validation.phone && <p>{validation.phone}</p>}
                        </div>


                        <div className="button">
                        <button type="submit" className="btn btn-blue-3  w-100 rounded-4"
                        disabled={!formValid}
                        onClick={handleAfterClick}>Continue</button>
                        </div>
                    </form>
            </LeadgenLayout>
        </>
    )
}

export default LeadgenPageMaster