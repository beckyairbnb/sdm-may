import React from 'react'
import Img from "gatsby-image"
const Image = ({data})=>{
    return(
        <div className="d-flex flex-column justify-content-center align-items-center my-1">
                <Img
                    fluid={data.image.localFile.childImageSharp.fluid}
                    className="w-100"
                />
                <p className="text-center"><i>{data.image_description.text}</i></p>
        </div>
    )
}

export default Image;