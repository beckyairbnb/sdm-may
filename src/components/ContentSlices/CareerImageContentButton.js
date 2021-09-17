import React from 'react'
import Img from "gatsby-image"
import AnchorLink from 'react-anchor-link-smooth-scroll'
const ImageContentButton = ({data})=>{
    console.log('contntent data ',data.section_image.localFile)
    return(
        <div className="d-flex flex-md-row flex-sm-column justify-content-between align-items-center my-1 row">
               <div 
               className="rounded-8 col-md-6 col-sm-12"
                data-aos="fade-right"
                data-aos-duration={500}
               >
               <Img
                    fluid={data.section_image.localFile.childImageSharp.fluid}
                    className="w-100"
                />
               </div>
               <div className="col-md-5 col-sm-12">
                    <h2
                        className="font-size-10 mb-8 letter-spacing-n83"
                        data-aos="fade-up"
                        data-aos-duration={600}
                    >
                    {data.section_heading.text}
                    </h2>
                    <p
                        className="font-size-6 mb-0 pr-xs-15 pr-sm-10 pr-xl-15"
                        data-aos="fade-up"
                        data-aos-duration={900}
                    >
                    {data.section_content.text}
                    </p>
                   <div className="d-flex flex-column justify-content-start align-items-start"
                   data-aos="fade-up"
                   data-aos-duration={1200}
                   >
                        <AnchorLink href='#joblisting' className="mt-8 mb-8 btn btn btn-blue-3 font-size-3 rounded-5 pt-4 pb-4 pl-9 pr-9  text-uppercase shadow">
                            {data.button_text}
                        </AnchorLink>
                   </div>
               </div>
        </div>
    )
}

export default ImageContentButton;