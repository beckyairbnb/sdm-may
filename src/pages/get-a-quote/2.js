import React, { useEffect, useState, useContext } from 'react'
import { navigate } from 'gatsby'
import styled from "styled-components";
import FormHead from '../../components/FormHead'
import PageWrapper from "../../components/PageWrapper";
import HappyClients from '../../components/happyClients';
import { GlobalDispatchContext, GlobalStateContext } from "../../context/GlobalContext";
const Step2 = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  const [errors, setErrors] = useState('');
  const [formIsValid, setFormIsValid] = useState(false)
  useEffect(() => {
    if (state.step < 3) {
      navigate('/get-a-quote/');
    }
    if (state.email !== '') {
      setFormIsValid(true)
    }
  }, [state.step, state.email, setFormIsValid]);

  const handleChangeHanlder = (e, setFormIsValid, setErrors) => {
    let action_name = ''
    if (e.target.name === 'email') {
      let pattern = new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(e.target.value)) {
        setFormIsValid(false)
        setErrors('*Please enter valid email')
      }
      else {
        setFormIsValid(true)
        setErrors(null)
      }
      dispatch({
        type: 'ADD_EMAIL',
        payload: e.target.value
      })
    }
  }
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
              <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/get-a-quote//"}>
                View Pricing
              </a>

            </>
          ),
          footerStyle: "style2",
        }}
      >
        <PageContainer className=" d-flex justify-content-center flex-column">
          <div className="row">
            <div className="col-sm-12">
              <FormHead />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-md-12 col-sm-12 text-center">
              <Heading2 className="form-sub-heading display-5 mb-3 w-100">I’ll get you price in minutes. Ready?</Heading2>
            </div>
          </div>
          <form name="Strategicallygetquoteformnew" method="POST" data-netlify="true" action={`/success`}>
            <input type="hidden" name="form-name" value="Strategicallygetquoteformnew" />
            <input type="hidden" name="Type of content you are looking for" value={state.content} />
            <input type="hidden" name="How many words per month would you like to order" value={state.words} />
            <div className="d-flex justify-content-center">
              <div className="col-md-5 col-sm-9 col-xs-12">
                <div className="row">
                  <div className="col-sm-12 mb-3">
                    <InputBox
                      type="text"
                      placeholder="Email Address"
                      label="Email Address"
                      name="email"
                      onChange={e => handleChangeHanlder(e, setFormIsValid, setErrors)}
                      defaultValue={state.email}
                      className="w-100 bg-white py-5 px-6 mb-2 rounded-1 border border-info"
                    />
                    {errors && <span className="w-100 text-danger-text">{errors}</span>}
                  </div>
                  <div className="col-sm-12 mb-3">
                    <InputBox
                      type="text"
                      placeholder="Full Name"
                      label="Full Name"
                      name="firstname"
                      onChange={e => {
                        dispatch({
                          type: 'ADD_FIRSTNAME',
                          payload: e.target.value
                        })
                      }}
                      defaultValue={state.firstname}
                      className="w-100 bg-white py-5 px-6 mb-2 rounded-1 border border-info"
                    />
                  </div>
                  <div className="col-sm-12 mb-3">
                    <InputBox
                      type="text"
                      placeholder="Phone Number"
                      label="Phone Number"
                      name="phone"
                      className="w-100 bg-white py-5 px-6 mb-2 rounded-1 border border-info"
                    />
                  </div>
                  {/* <div className="col-sm-12 mb-3">
                    <InputBox
                      type="text"
                      placeholder="Company Name"
                      label="Company Name"
                      name="Company Name"
                      className="w-100 bg-white py-5 px-6 mb-2 rounded-1 border border-info"
                    />
                  </div>
                  <div className="col-sm-12 mb-3">
                    <SelectBox
                      name="How did you find us?"
                      className="w-100 bg-white py-5 px-6 mb-2 rounded-1 border border-info"
                    >
                      <option value="" disabled selected hidden>How did you find us?</option>
                      <option value="Google search">Google search</option>
                      <option value="Word of mouth">Word of mouth</option>
                      <option value="Upwork">Upwork</option>
                      <option value="Surfer SEO">Surfer SEO</option>
                      <option value="Clutch">Clutch</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Other">Other</option>
                    </SelectBox>
                  </div>
                  <div className="col-sm-12 mb-3">
                    <label className="d-flex flex-row justify-content-start items-center"><input type="checkbox" name="Agree for Promotional Emails" className="mt-2 mb-6" /><span className="pl-3">I agree to receive occasional marketing and promotional emails from Strategically.
                    </span></label>
                  </div> */}
                </div>
                <div className="col-sm-12 py-1 d-flex justify-content-center align-items-center">
                  {/* {formIsValid && state.email !== '' && state.firstname !== '' && <button type="submit" className="my-6 btn btn btn-dodger-blue-2 header-btn rounded-5 text-uppercase fs-6 fw-bolder text">Get Quote</button>} */}
                  <button type="submit" disabled={!formIsValid || state.email === '' || state.firstname === ''} className="my-6 btn btn btn-dodger-blue-2 header-btn rounded-5 text-uppercase fs-6 fw-bolder text">Get Quote</button>
                </div>
              </div>
            </div>
          </form>

        </PageContainer>
        <div className="container-fluid mt-20 pt-20 mb-10">
          <HappyClients />
        </div>
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
const SelectBox = styled.select`
border:1px solid #091e57 !important;
-webkit-border-radius: 5px !important;
-moz-border-radius: 5px !important;
border-radius: 5px !important;
`;
export default Step2;
