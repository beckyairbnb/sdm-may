import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"
const CareerJobs = ({siteURL, title, subtitle, items})=>{
    console.log('Joob items', items)
    return(
        <div className="bg-default-3 pt-12 pt-md-18 pb-md-19 pb-15 pt-lg-22 pb-lg-26">
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div
              className="text-center mb-7"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <h2 className="font-size-10 mb-7 letter-spacing-n83">
                {title}
              </h2>
              <p className="font-size-6 font-weight-light mb-0 px-md-5 px-lg-0">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-lg-9">
          {items.edges.map(({node}, index) => {
              console.log('Items', node)
              const { data } = node
              let badgeColor = ''
              if(data.job_type==='Full-time')
              {
                badgeColor = 'dark-green'
              }
              else if(data.job_type==='Part-time')
              {
                badgeColor = 'buttercup'
              }
              else if(data.job_type==='Remote')
              {
                badgeColor = 'blue-2'
              }
              return(
            <div className="col-lg-4 col-md-6 mt-9" key={index}>            
              <div className="pt-9 pb-9 pl-11 pr-10 bg-white d-block rounded-0 shadow-2"
                data-aos="fade-up"
                data-aos-duration={900}>
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="d-flex align-items-center mb-5 mr-5">
                        <i className="icon icon-pin-3 mr-2 text-bali-gray position-relative" />
                        <span className="text-bali-gray font-size-5">{data.job_location}</span>
                        </div>
                        {/* dark-green dark-green
                        buttercup text-buttercup
                        blue-2 text-blue-2
                         */}
                        <span
                        className={`badge bg-${badgeColor}-op1 d-inline-block text-${badgeColor} py-4 px-2 min-w-76 d-block line-height-reset mb-5 rounded-5 font-size-3 font-weight-normal`}
                        >
                        {data.job_type}
                        </span>
                    </div>
                    <h5 className="pt-6 text-dark-cloud font-size-7 font-weight-medium line-height-reset mb-5">
                        <Link to={`${siteURL}/writing-jobs/${node.uid}`} className="text-dark-cloud font-size-7 font-weight-medium line-height-reset ">{data.title.text}</Link>
                    </h5>
                </div>
            </div>
          )})}
        </div>
      </div>
    </div>
    )
}

export default CareerJobs;