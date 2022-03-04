import React, { useEffect, useState, useContext } from 'react'
import { graphql, navigate } from "gatsby"
import styled from 'styled-components';
import { Helmet } from "react-helmet";

import PageWrapper from "../components/PageWrapper";
import PageContent from '../components/ContentSlices/PageContent'
import imgFavicon from "../assets/favicon.png";

import { GlobalDispatchContext, GlobalStateContext } from "../context/GlobalContext";

const JobTemplate = (props)=>{
    const { data } = props
    const { PageData } = data
    const seoTitle = PageData.data.seotitle.text || 'Strategically'
    const seoDescription = PageData.data.metadescription.text || 'Strategically'
    let badgeColor = ''
    if(PageData.data.job_type==='Full-time')
    {
      badgeColor = 'dark-green'
    }
    else if(PageData.data.job_type==='Part-time')
    {
      badgeColor = 'buttercup'
    }
    else if(PageData.data.job_type==='Remote')
    {
      badgeColor = 'blue-2'
    }

    const dispatch = useContext(GlobalDispatchContext)
    const state = useContext(GlobalStateContext)
    const [errors, setErrors] = useState('');
      const [formIsValid, setFormIsValid] = useState(false)
      useEffect(() => {
        
     },[state.email, setFormIsValid]);

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
            dispatch({
                type: 'ADD_EMAIL',
                payload: e.target.value
            })          
        }
      }
  return(
    <>
    <Helmet>
          <title>{seoTitle}</title>
          <meta name="description" content={seoDescription} />
          <link rel="icon" type="image/png" href={imgFavicon} />
    </Helmet>
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
   <main className="pt-23 pt-md-27 pb-13 pb-md-19 pt-lg-29 pb-lg-27">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-11">
                {/* job-details-content */}
                <div className="text-center pb-0">
                  {/* job-top-header */}
                  <div className="mb-7 d-inline-flex align-items-center flex-wrap">
                    <span className="d-block d-inline-flex align-items-center mr-sm-6 text-bali-gray">
                      <i className="icon icon-pin-3 mr-1 text-bali-gray position-relative" />
                      {PageData.data.job_location}
                    </span>
                    <p
                    className={`badge bg-${badgeColor}-op1  font-size-3 font-weight-medium badge mb-0 py-2 px-4 ml-8`}
                    >
                      <span className="text-dark-green"
                      className={`text-${badgeColor}`}>{PageData.data.job_type}</span>
                    </p>
                  </div>
                  <h2 className="font-size-11 font-weight-bold text-center mb-lg-15 mb-0">
                    {PageData.data.title.text}
                  </h2>
                </div>
              </div>
              <div className="col-xl-9 col-lg-10 px-xl-0 px-lg-6 px-md-0 px-6 pr-0 job-content">

                <div className="pt-lg-0 pt-10 pl-lg-10 px-xl-15">
                {PageData.data.description.html && <div dangerouslySetInnerHTML={{ __html: PageData.data.description.html }} className="w-100 float-left overflow-hidden mb-2"></div>}     
                {PageData.data.body.map((item, index)=>{
                    const { slice_type, primary } = item
                    {
                      if(slice_type==='section_with_heading_and_content')
                      {
                        return <PageContent data={primary}/>
                      }
                    }
                    
                })}
                 
                  </div>
                  <form name="applyforwriter" method="POST" data-netlify="true" action={ `/success/` }>
                <input type="hidden" name="form-name" value="applyforwriter"/>  
                <div className="d-flex justify-content-center">
                <h3>Apply to be a writer</h3>
                </div>
                <div className="d-flex justify-content-center">
                  
                    <div className="col-md-6 col-sm-9 col-xs-12">
                        <div className="row">
                            <div className="col-sm-12 mb-3">
                                <InputBox
                                type="text"
                                placeholder="Email Address"
                                label="Email Address"
                                name="email"
                                onChange={e=>handleChangeHanlder(e,setFormIsValid,setErrors)}
                                defaultValue={state.email}
                                className="w-100 bg-white py-5 px-6 mb-2 rounded-1 border border-info"
                                />
                                { errors && <span className="w-100 text-danger-text">{errors}</span>}
                            </div>
                            <div className="col-sm-12 mb-3">
                                <InputBox
                                type="text"
                                placeholder="Full Name"
                                label="Full Name"
                                name="firstname"
                                onChange={e=> {
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
                            </div>
                            <div className="col-sm-12 py-1 d-flex justify-content-center align-items-center">
                            {<button disabled={!formIsValid || state.email==='' || state.firstname===''} type="submit" className="my-6 btn btn btn-dodger-blue-2 header-btn rounded-5 text-uppercase fs-6 fw-bolder text">Apply Now</button>}
                            </div>
                        </div>
                    </div>  
                    </form> 
              </div>
            </div>
          </div>
        </main>
  </PageWrapper>
  </>
)}

export const query = graphql`
query getJobData($id: String!) {
    site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
  PageData : prismicWritingjobs(id: {eq: $id}) {
      id
      data {
        featuredimage {
          localFile {
            childImageSharp {
              fluid(quality: 100) {
                src
                srcWebp
              }
            }
          }
        }
        title {
          text
          html
        }
        description {
          text
          html
        }
        job_type
        job_location
        seotitle {
          text
        }
        metadescription {
          text
        }
        body {
          ... on PrismicWritingjobsDataBodySectionWithHeadingAndContent {
            id
            slice_type
            primary {
              section_heading {
                text
                html
              }
              section_content {
                text
                html
              }
            }
          }
        }
        
      }
    }
}
`
export default JobTemplate

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