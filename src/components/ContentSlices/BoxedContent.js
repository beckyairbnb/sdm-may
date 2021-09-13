import React from 'react'
import Img from "gatsby-image"
const BoxedContent = ({data})=>{
    console.log('data',data);
    return(
        <div className="d-flex justify-content-center align-items-center mt-10 mb-10">
            {data.map((item,index)=>{
                if(item.id){
                    const { primary, items } = item
                    return(
                        <div className="container">
                            <div className="mb-7 mt-7"><h2>{primary.boxed_content_heading.text}</h2></div>
                            <p>{primary.boxed_content_sub_heading.text}</p>
                            <div className="row mt-12">
                                { items.map((i,key)=>{
                                    return(
                                        <div className="col-lg-3 col-md-6 col-xs-12">
                                            <div className="bg-white shadow rounded p-5 text-center mb-10">
                                            <div className="d-flex justify-content-center mt-4 mb-8">
                                            <Img
                                                fluid={i.image.localFile.childImageSharp.fluid}
                                                className="w-100"
                                            />
                                            </div>
                                            <div className=""> <h4>{i.title1.text}</h4></div>
                                            <div className="d-flex justify-content-center align-items-center mt-7 mb-3 ">
                                                <button className="btn btn btn-blue-3 header-btn-2 font-size-3 shadow rounded-5 p-5 text-uppercase w-25">
                                                {i.button_text}
                                            </button>
                                            </div>
                                            <p className="small text-uppercase">{i.price_text}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }           
            })}
        </div>
    )
}

export default BoxedContent;