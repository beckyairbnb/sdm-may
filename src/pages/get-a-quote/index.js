import React, { useEffect, useState } from 'react'
import styled from "styled-components";

import PageWrapper from "../../components/PageWrapper";
import Layout from "../../components/Layout"
import FormHead from '../../components/FormHead'

import Step1 from '../../components/FormSteps/Step1'
import Step2 from '../../components/FormSteps/Step2'
import Step3 from '../../components/FormSteps/Step3'

const FormIndex = () => {
        const [activeStep, setActiveStep] = useState('step1');    
        const [content, setContent] = useState(); 
        const [noOfWords, setNoOfWords] = useState(); 
        const [company, setCompany] = useState(''); 
        const [email, setEmail] = useState(''); 
        const [firstname, setFirstname] = useState(''); 
        const [lastname, setLastname] = useState(''); 

        const handleSubmitRestart = () => {
            setActiveStep('step1')
            setContent('')
            setNoOfWords('')
            setCompany('')
            setEmail('')
            setFirstname('')
            setLastname('')
        }
        const handleSubmitBack = ()=>{
          if(activeStep === 'step3')
          {
            setActiveStep('step2')   
          }
          else if(activeStep === 'step2')
          {
            setActiveStep('step1')   
          }
        }
        
        console.log('Company Name ',company)
        return (
            <>
              <PageWrapper
                themeConfig={{
                  headerClassName: "site-header--menu-right",
                  headerButton: (
                    <>
                    <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/pricing/"}>
                      View Pricing
                    </a>
        
                    </>
                  ),
                  footerStyle: "style2",
                }}
              >
                  <PageContainer>
                  <div className="container overflow-hidden form-container">
                    <div className="row">
                        <div className="col-sm-12">
                        <FormHead step={activeStep} setActiveStep={setActiveStep} handleSubmitBack={handleSubmitBack} handleSubmitRestart={handleSubmitRestart} />
                        </div>
                    </div>                    
                  </div>
                  {activeStep === 'step1' && <Step1 content={content} noOfWords={noOfWords} setContent={setContent} setNoOfWords={setNoOfWords} setActiveStep={setActiveStep}/> }
                  {activeStep === 'step2' && <Step2 company={company} setCompany={setCompany} setActiveStep={setActiveStep}/> }
                  {activeStep === 'step3' && <Step3 content={content} noOfWords={noOfWords} company={company} email={email} setEmail={setEmail} firstname={firstname} setFirstname={setFirstname} lastname={lastname} setLastname={setLastname} setActiveStep={setActiveStep}/> }
                  </PageContainer>              
              </PageWrapper>
            </>
    )
}
const PageContainer = styled.div`
max-width:1170px;
margin:auto;
padding: 120px 0 20px 0px;
`;
export default FormIndex;
