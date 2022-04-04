import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby'
import styled from 'styled-components';
import BlogItem from "./blogItem";

const BlogIndex = ({data}) => {
    return (
        <>
            <div className="row">                
                    { data && data.map((item, index)=> <BlogItem key={index} data={item}/> )}  
            </div>
        </>
    )
}
export default BlogIndex;

