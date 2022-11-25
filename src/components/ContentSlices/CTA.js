import React from "react";
import { Link } from "gatsby";

const CTA = ({data})=>{
    return(
        <div className="d-flex justify-content-center align-items-center mt-10 mb-10">
            {/* <a href={data.button_link} className="btn btn btn-blue-3 header-btn-2 font-size-3 rounded-5 pt-10 pb-10 p-5 text-uppercase shadow">
                {data.button_text}
            </a> */}
            <Link to={"/get-a-quote/"} className="btn btn btn-blue-3 header-btn-2 font-size-3 rounded-5 pt-10 pb-10 p-5 text-uppercase shadow">
            Get a quote
            </Link>
        </div>
    )
}

export default CTA;