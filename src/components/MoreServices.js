import React from 'react'
import Img from "gatsby-image"
import { Link } from "gatsby"
import postimg1 from "../assets/images/post-img1.jpg";
import stratagicsicon from "../assets/images/stratagic-s.png";
const MoreServices = ({ data })=>{
    console.log('Other Services ', data)
    return(
        <div className="container">
        <div className="text-center mb-10"><h2>Read Other Services</h2></div>
        <div className="row">
            { data.edges.map(({node},index)=>{
                return(
                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <div className="post-block mb-10">
                            <div className="d-flex flex-column">
                                <Link to={`/${node.uid}`}>
                                <Img
                                    fluid={node.data.featuredimage.localFile.childImageSharp.fluid}
                                    className="rounded w-100"
                                />
                                </Link>                               
                                </div>
                                <div className="mt-4 mb-4"><Link to={`/${node.uid}`}><h5>{node.data.title.text}</h5></Link></div>
                                <div className="mb-6"><img src={stratagicsicon} alt="" className="rounded-pill mr-5"/><span>Team Strategically</span></div>
                                <p>{node.data.description.text.substring(0, 175)}</p>
                            </div>
                    </div>
                )
            })}
                
        </div>
        </div>
    )
}
export default MoreServices