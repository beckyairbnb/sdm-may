import React from 'react'
const PageContent = ({data})=>{
    //console.log('data',data);
    return(
        <div className="w-100 d-flex flex-column justify-content-start align-items-left text-left mt-1 mb-1"
              data-aos="fade-up"
              data-aos-duration={500}
              data-aos-delay={500}
        >
            <h5 className="text-dark-cloud">{data.section_heading.text}</h5>
            {data.section_content.html && <div dangerouslySetInnerHTML={{ __html: data.section_content.html }} className="w-100 float-left overflow-hidden mb-2" ></div>}     
        </div>
    )
}

export default PageContent;