import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

const BlogSidebar = ({data}) => {
    console.log('blog list',data)
    return (
        <>
            <Sidebar>
                <h4>Category</h4>
                <ul>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg><Link to={`/blog/`}>All</Link></li>
                    {data && data.map(({node})=>{
                        return(
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg><Link to={`/blog/${node.uid}`}>{node.data.name.text}</Link></li>
                        )
                    })}
                </ul>
            </Sidebar>
        </>
    )
}
export default BlogSidebar;

export const Sidebar = styled.div`
border: 1px solid #e0e0e0;
padding:20px 20px;
@media (max-width: 991px) {
    margin-bottom:50px;
}
h4{
    margin:10px 0 30px 0;
    text-transform:uppercase;
}
ul {
margin:0;
padding:0;
}
ul > li {
    list-style:none;
    position:relative;
    margin-top: 15px;
    float:none;
    display: inline-block;
    width: 100%;
    svg{
        position:absolute;
        top:7px;
        fill:#111;
    }
&:hover svg{
    fill:#FF0088;
}
&:hover a {
    color: #FF0088;
    padding-left: 30px;
}
&:last-child a{
    border-bottom:none;
    padding-bottom:0;
}
}
ul > li > a{
position: relative;
color: #111;
display: block;
padding:0 20px 10px 20px;
border-bottom: 1px solid #e0e0e0;
transition: all 0.7s ease;
}
`;