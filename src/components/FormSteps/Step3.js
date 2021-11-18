import React, { useState, useEffect } from 'react'
import styled from "styled-components";

const Step3 = ({content, noOfWords, company, email, setEmail, firstname, setFirstname, lastname, setLastname, setActiveStep}) => {
      const [errors, setErrors] = useState('');
      const [formIsValid, setFormIsValid] = useState(false)
      useEffect(() => {
        if(email!==''){
            setFormIsValid(true) 
        }
     },[email, setFormIsValid]);

      const handleChangeHanlder = (e,setFormIsValid,setErrors) => {
        let action_name = ''
        if (e.target.name==='email'){            
            let pattern = new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(e.target.value)) {
                setFormIsValid(false)
                setErrors('*Please enter valid email')
            }
            else
            {
                setFormIsValid(true)
                setErrors(null)   
            }
            setEmail(e.target.value)            
        }
      }
        return (
            <>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 col-sm-10 text-center">
                    <Heading2 className="form-sub-heading display-5 mb-3 w-100">I’ll get you an awesome price in minutes. Ready to go?</Heading2> 
                    </div>
                </div>  
                <form name="getquoteform" method="POST" data-netlify="true" action={ `/get-a-quote/success` }>
                <input type="hidden" name="form-name" value="getquoteform"/>  
                <input type="hidden" name="Type of content you are looking for" value={content}/>
                <input type="hidden" name="How many words per month would you like to order" value={noOfWords}/> 
                <input type="hidden" name="Company Name" value={company}/>  
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5 col-sm-9 col-xs-12">
                        <div className="row">
                        <div className="col-sm-12 mb-3">
                            <InputBox
                            type="text"
                            placeholder="Email Address"
                            label="Email Address"
                            name="email"
                            onChange={e=>handleChangeHanlder(e,setFormIsValid,setErrors)}
                            defaultValue={email}
                            className="w-100 bg-white py-5 px-6 mb-2 rounded-1 border border-info"
                            />
                            { errors && <span className="w-100 text-danger-text">{errors}</span>}
                        </div>
                        <div className="col-sm-12 mb-3">
                            <InputBox
                            type="text"
                            placeholder="First Name"
                            label="First Name"
                            name="firstname"
                            onChange={e => setFirstname(e.target.value)}
                            defaultValue={firstname}
                            className="w-100 bg-white py-5 px-6 mb-2 rounded-1 border border-info"
                            />                            
                        </div>
                        <div className="col-sm-12 mb-3">
                        <InputBox
                            type="text"
                            placeholder="Last Name"
                            label="Last Name"
                            name="lastname"
                            onChange={e => setLastname(e.target.value)}
                            defaultValue={lastname}
                            className="w-100 bg-white py-5 px-6 mb-2 rounded-1 border border-info"
                            />
                        </div>
                        </div>
                        <div className="col-sm-12 py-1 d-flex justify-content-center align-items-center">
                        {formIsValid && email!=='' && firstname!=='' && lastname!=='' && <button type="submit" className="my-6 btn btn btn-dodger-blue-2 header-btn rounded-5 text-uppercase fs-6 fw-bolder text">Get Quote</button>}
                        </div>
                    </div>
                </div>  
                </form>     
            </>
    )
}
const Heading2 = styled.h2`
padding: 20px 0px;
font-size:2.2rem;
`;
const Heading3 = styled.h3`
padding: 10px 0px;
font-size:1.2rem;
width:100%;
text-align:center;
`;
const InputBox = styled.input`
border:1px solid #091e57 !important;
-webkit-border-radius: 5px !important;
-moz-border-radius: 5px !important;
border-radius: 5px !important;
`;
export default Step3;
