import React, { useState, useEffect } from 'react'
import styled from "styled-components";

const Step2 = ({company, setCompany, setActiveStep}) => {
    const [btnstatus, setBtnstatus] = useState(false);
    useEffect(() => {
      if(company!==''){
        setBtnstatus(true) 
      }
   },[company, setBtnstatus]);
      const handleSubmit = () => {
        setActiveStep('step3')
      }
        return (
            <>
            <div className="row d-flex justify-content-center mt-20">
            <div className="col-md-7 col-sm-10 text-center">               
                <div className="d-flex justify-content-center">  
                <div className="col-sm-8">            
                    <InputBox
                        type="text"
                        placeholder="Company"
                        label="Company"
                        name="company"
                          onChange={e => {
                            setCompany(e.target.value) 
                            if(e.target.value!==''){ setBtnstatus(true) } else {setBtnstatus(false)}                 
                          }}
                        defaultValue={company}
                        className="w-100 bg-white py-5 px-6 mb-2"
                    />
                  </div> 
                 
                  </div>
                  <div className="d-flex justify-content-center">  
                  <div className="col-sm-8 py-1 d-flex justify-content-center align-items-center">
                  {btnstatus && <button onClick={handleSubmit} className="my-6 btn btn btn-dodger-blue-2 header-btn rounded-5 text-uppercase fs-6 fw-bolder text">Next</button>}
                  </div>  
                  </div>      
            </div>
            </div>   
            </>
    )
}
const Heading2 = styled.h2`
padding: 20px 0px;
font-size:2.2rem;
`;
const InputBox = styled.input`
border:1px solid #091e57 !important;
-webkit-border-radius: 5px !important;
-moz-border-radius: 5px !important;
border-radius: 5px !important;
`;
export default Step2;
