import React from 'react'

const Heading = ({data})=>{
    return(
        <div className="d-flex justify-content-start align-items-start my-1">
        {data.heading_text.text && <div className="w-100 d-flex" ><h2>{data.heading_text.text}</h2></div>}
        </div>
    )
}

export default Heading;