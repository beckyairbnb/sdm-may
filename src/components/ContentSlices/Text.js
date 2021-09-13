import React from 'react'

const Text = ({data})=>{
    return(
        <div className="w-100 my-1 d-flex flex-column">
        {data.heading_text.text && <div className="w-100 d-flex" ><h3>{data.heading_text.text}</h3></div>}
        {data.content.html && <div dangerouslySetInnerHTML={{ __html: data.content.html }} className="w-100" ></div>}
        </div>
    )
}

export default Text;