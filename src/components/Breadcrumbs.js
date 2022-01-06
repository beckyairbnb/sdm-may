import React from "react"
import styled from 'styled-components';
import { Link } from "gatsby"
const LandingBreadcrumbs = (props) => {
    const { makemodels, partname, bcrumb } = props
    console.log('Brrmdjcd', bcrumb)
    return(
        <Container>
            <div className="container">
            <div className="row">
            <Breadcrumbs vocab="https://schema.org/" typeof="BreadcrumbList">
            { bcrumb.map((item, index)=>{
                return(
                <>
                { item.link != null &&  (
                    <Crumb property="itemListElement" typeof="ListItem">
                    {item.itemtype && (<Link
                        property="item" typeof="WebPage"
                        to={item.link}                                               
                    ><span itemprop="name" property="name">{item.name}</span></Link>)}     
                    {!item.itemtype && (<Link
                        property="item" typeof="WebPage"
                        to={item.link}                        
                    ><span property="name">{item.name}</span></Link>)}     
                    <meta property="position" content={index+1} />
                    </Crumb>
                    ) } 
                    { item.link === null &&  (
                        <Crumb property="itemListElement" typeof="ListItem">
                        <span property="name">{item.name}</span>
                        <meta property="position" content={index+1} />
                        </Crumb>
                    )}
                    </>
                )
            })}
            </Breadcrumbs>
            </div>
            </div>
        </Container>
    )
}
export const Container = styled.div`
  width:100%;
  float:left;
  padding:15px;
  background-color:#f8f9fa;
  margin:80px 0px 10px;
  border:2px solid #f8f9fa;
  .container{
      padding:0px;
  }
  .container .row{
    padding:0px;
    margin:0px;
}
`;
const Breadcrumbs = styled.ol`
  list-style: none;
  border:2px solid #f8f9fa;
  padding: 0;
  margin:0;
  & > li:after {
    content: "${props => props.separator || ">"}";
    padding: 8px;
  }
`;

const Crumb = styled.li`
  display: inline-block;

  &:last-of-type:after {
    content: "";
    padding: 0;
  }

  a {
    color: #1d293f;
    text-decoration: none;
    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
`;
export default LandingBreadcrumbs