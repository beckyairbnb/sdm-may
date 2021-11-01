import React from 'react'
import Img from "gatsby-image"
const CareerFeatures = ({data, items})=>{
    return(
        <div className="mt-10 pt-10 pb-9 pb-md-13 pb-lg-15">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6 col-md-7 col-xs-8">
                    <div
                    className="text-center mb-7 mb-lg-17"
                    data-aos="fade-up"
                    data-aos-duration={600}
                    >
                    <h2 className="font-size-10 letter-spacing-n83">
                    {data.work_with_us_heading.text}
                    </h2>
                    </div>
                </div>
                </div>
                <div className="row justify-content-center">
                {items.map((item, index) => (
                    <div
                    className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-xs-11 mb-7 mb-lg-15"
                    data-aos="fade-up"
                    data-aos-duration={900}
                    key={index}
                    >
                        <div className="d-xs-flex">
                            <div className="square-83 d-flex rounded-10 border mt-2">
                            <Img
                                fixed={item.features_image.localFile.childImageSharp.fixed}
                            />
                            </div>
                            <div className="mt-5 mt-xs-0 pl-xs-6">
                                <h3 className="font-size-7 mb-1">{item.feature_heading.text}</h3>
                                <p className="font-size-5 line-height-28 mb-0 pr-sm-10 pr-md-0 pr-xs-17 pr-lg-8 pr-xl-5">
                                {item.features_description.text}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default CareerFeatures;