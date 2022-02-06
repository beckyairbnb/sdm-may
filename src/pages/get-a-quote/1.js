import React, { useState, useContext } from 'react'
import { navigate } from 'gatsby'
import styled from "styled-components";

import PageWrapper from "../../components/PageWrapper";
import FormHead from '../../components/FormHead'
import Testimonial from "../../sections/home2/Testimonial";
import { GlobalDispatchContext, GlobalStateContext } from "../../context/GlobalContext";



const Step1 = () => {
    const dispatch = useContext(GlobalDispatchContext)
    const state = useContext(GlobalStateContext)

    const content_options = [
        { "name":"SEO blog content", "value":"SEO blog content" },
        { "name":"Blog content", "value":"Blog content" },
        { "name":"Website copy", "value":"Website copy" },
        { "name":"eBook or white paper", "value":"eBook or white paper" },
        { "name":"Product description", "value":"Product description" }
      ]
      const words_options = [
        { "name":"4000 words", "value":"4000 words" },
        { "name":"8000 words", "value":"8000 words" },
        { "name":"10000 words", "value":"10000 words" },
        { "name":"20000 words", "value":"20000 words" },
        { "name":"50000 words", "value":"50000 words" },
        { "name":"Don’t know yet", "value":"Don’t know yet" }
      ]
      const handleSubmit = () => {
        dispatch({
            type: 'NEXT_STEP',
            payload: 1,
        });
        return navigate('/get-a-quote/2/')
      }
      console.log('Words', state.words)
      console.log('Content Words', state.step)        
        return (
            <>
              <PageWrapper
                themeConfig={{
                  headerClassName: "site-header--menu-right",
                  headerButton: (
                    <>
                    <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/get-a-quote/1/"}>
                      View Pricing
                    </a>
        
                    </>
                  ),
                  footerStyle: "style2",
                }}
              >
                  <PageContainer>
                  <div className="row">
                  <div className="col-sm-12">
                    <FormHead />
                  </div>
                </div>
                  <div className="row d-flex justify-content-center mb-0">
                    <div className="col-md-7 col-sm-10 text-center">
                        <Heading2 className="form-sub-heading display-5 mb-3 w-100">
                            Hi, I’m Becky! Please select the type of content you are looking for.
                        </Heading2> 
                <div className="d-flex justify-content-center">  
                <div className="col-sm-8">            
                    <SelectBox name="payslips"
                      className="w-100 bg-white py-5 px-5 mb-2"
                      onChange={e=> {
                        dispatch({
                            type: 'ADD_CONTENT',
                            payload: e.currentTarget.value
                        })
                      }}>
                      {content_options.map((item,index)=>{
                          return (<option key={index} value={item.value} selected={item.value===state.content}>{item.name}</option> )                            
                      }) }
                    </SelectBox>
                  </div> 
                 
                  </div>
                  <div className="d-flex justify-content-center">  
                  <div className="col-sm-10">    
                      <Heading3>How many words per month would you like to order?</Heading3>   
                  </div>
                  </div>
                  <div className="d-flex justify-content-center">  
                  <div className="col-sm-8">         
                      <SelectBox
                      className="w-100 bg-white py-5 px-5 mb-2"
                      onChange={e=> {
                        dispatch({
                            type: 'ADD_WORDS',
                            payload: e.currentTarget.value
                        })
                      }}>
                        {words_options.map((item,index)=>{
                            return (<option key={index} value={item.value} selected={item.value===state.words}>{item.name}</option> )                            
                        }) }
                    </SelectBox>
                  </div> 
                 
                  </div>
                  <div className="d-flex justify-content-center">  
                  <div className="col-sm-8 py-1 d-flex justify-content-center align-items-center">
                  <button onClick={handleSubmit} className="my-6 btn btn btn-dodger-blue-2 header-btn rounded-5 text-uppercase fs-6 fw-bolder text">Next</button>
                  </div>  
                  </div>      
            </div>
            </div> 
            <Testimonial className="pt-lg-5 pb-12 pb-lg-5" title={false} />
                  </PageContainer>              
              </PageWrapper>
            </>
    )
}
const PageContainer = styled.div`
max-width:1170px;
margin:auto;
padding: 60px 0 20px 0px;
`;
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
const SelectBox = styled.select`
border:1px solid #091e57 !important;
-webkit-border-radius: 5px !important;
-moz-border-radius: 5px !important;
border-radius: 5px !important;
`;
export default Step1;
