import React from 'react'

const CTA = ({data})=>{
    return(
        <div className="d-flex justify-content-center align-items-center mt-10 mb-10">
            <button className="btn btn btn-blue-3 header-btn-2 font-size-3 rounded-5 pt-10 pb-10 p-5 text-uppercase shadow">
                   {data.button_text}
              </button>
        </div>
    )
}

export default CTA;