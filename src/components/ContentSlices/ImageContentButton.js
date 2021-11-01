import React from 'react'
import Img from "gatsby-image"
const ImageContentButton = ({data})=>{
    return(
        <div className="d-flex flex-md-row flex-sm-column justify-content-between align-items-center my-1 row">
               <div className="col-md-6 col-sm-12">
               <Img
                    fluid={data.section_image.localFile.childImageSharp.fluid}
                    className="w-100"
                />
               </div>
               <div className="col-md-5 col-sm-12">
                   <h2>{data.section_heading.text}</h2>
                   <p>{data.section_content.text}</p>
                   <div className="d-flex flex-column justify-content-start align-items-start">
                    <button className="btn btn btn-blue-3 font-size-3 rounded-5 p-6  mb-5 text-uppercase shadow">
                            {data.button_text}
                        </button>
                   </div>
               </div>
        </div>
    )
}

export default ImageContentButton;