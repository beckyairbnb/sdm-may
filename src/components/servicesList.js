import React from "react";
import { Link } from "gatsby"
const ServicesList = ({ title, items }) => {
return(
    <div className="container py-lg-10 bg-white">
            <div className="row justify-content-center text-center py-lg-5">
               <div className="col-sm-12">
                <h2 className="mb-10">{title}</h2>
                    <ul className="row">
                        { items.map(({service},index)=>{
                           let slug = service.document.uid==='saas-content-writerr' ? 'saas-content-writer' : service.document.uid
                            return(
                                <li className="col-md-4 col-sm-6 text-left p-2 nav-item">
                                  <Link to={`/writer-services/${slug}/`} className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5">{service.document.data.short_title || service.document.data.title.text}</Link>  
                                </li>
                            )
                        })}
                        <li className="col-md-4 col-sm-6 text-left p-2 nav-item">
                        <Link to ="/writer-services/" className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5">All Writer Services</Link>
                        </li>
                    </ul>
               </div>
            </div>
         </div>
)
}

export default ServicesList;