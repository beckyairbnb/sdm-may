import React, { useEffect, useState, useContext } from 'react'
import styled from "styled-components";
import { navigate } from 'gatsby'
import PageWrapper from "../../components/PageWrapper";
import FormHead from '../../components/FormHead'

import { GlobalDispatchContext, GlobalStateContext } from "../../context/GlobalContext";
const Step2 = () => {
    const [btnstatus, setBtnstatus] = useState(false);
    const dispatch = useContext(GlobalDispatchContext)
    const state = useContext(GlobalStateContext)

    useEffect(() => {
      if(state.step<2){
          navigate('/get-a-quote/1');
      }
      if(state.company!==''){
        setBtnstatus(true) 
      }
   },[state.step, state.company, setBtnstatus]);
   const handleSubmit = () => {
    dispatch({
        type: 'NEXT_STEP',
        payload: 1,
    });
    return navigate('/get-a-quote/3/')
  }  
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
                  <div className="row">
                  <div className="col-sm-12">
                    <FormHead />
                  </div>
                </div>
                  <div className="row d-flex justify-content-center">
                <div className="col-md-8 col-sm-10 text-center">
                <Heading2 className="form-sub-heading display-5 mb-3 w-100">What is the name of your company?</Heading2> 
                </div>
            </div>    
            <div className="row d-flex justify-content-center">
                  <div className="col-md-5 col-sm-9 col-xs-10">
                      <div className="row">
                      <div className="col-sm-12 mb-3">
                          <InputBox
                          type="text"
                          placeholder="Company"
                          label="Company"
                          name="company"
                          onChange={e=> {
                            dispatch({
                                type: 'ADD_COMPANY',
                                payload: e.target.value
                            })
                            if(e.target.value!==''){ setBtnstatus(true) } else {setBtnstatus(false)} 
                          }}
                          defaultValue={state.company}
                          className="w-100 bg-white py-5 px-6 mb-2"
                          />
                      </div>                  
                      
                      </div>
                      <div className="col-sm-12 py-1 d-flex justify-content-center align-items-center">
                      {btnstatus && <button onClick={handleSubmit} className="my-6 btn btn btn-dodger-blue-2 header-btn rounded-5 text-uppercase fs-6 fw-bolder text">Next</button>}
                      </div>
                      

                  </div>
              </div>  
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
const InputBox = styled.input`
border:1px solid #091e57 !important;
-webkit-border-radius: 5px !important;
-moz-border-radius: 5px !important;
border-radius: 5px !important;
`;
export default Step2;
