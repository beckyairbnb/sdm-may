import React from "react";


const CopyWritingServices = ({data}) => {
    const { items, primary } = data
    return (
        <div className="container my-20">
            <h2 className="text-center mb-4">{primary.section_heading.text}</h2>
            {primary?.description && <div dangerouslySetInnerHTML={{ __html: primary.description.html }} className="text-center mb-10 service-sub-title" ></div>}     
            <div class="row d-flex gap-5">
                {items && items.map((item, index)=>{
                    return(
                        <div key={index} className="col-lg-4 col-md-6 col-12 border p-6 justify-content-center d-flex flex-column text-center align-items-center">
                            <div className="rounded-circle lpcircle bg-dodger-blue-1 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm1.437 9.396c-.439.44-1.031.636-1.621.577l-3.816 2.027 2.028-3.818c-.059-.578.134-1.177.575-1.619.445-.445 1.05-.642 1.649-.572l3.748-1.992-1.99 3.748c.073.632-.151 1.226-.573 1.649zm-1.437-13.396c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm.854-10.021c-.001.46-.374.833-.833.833-.46 0-.834-.373-.834-.833 0-.461.373-.834.834-.833.459 0 .833.374.833.833z" /></svg>
                            </div>
                            {item.service_title.text && <h4 className="py-2">{item.service_title.text}</h4>}
                            {item?.service_description && <p dangerouslySetInnerHTML={{ __html: item.service_description.html }} ></p>}                                 
                        </div>
                    )
                })}  
            </div>
        </div>
    );
};

export default CopyWritingServices;
