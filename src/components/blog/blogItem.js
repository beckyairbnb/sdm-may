import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const BlogItem = ({ data }) => {
    const { title, description, featuredimage, category } = data.node.data
    const BlogImage = getImage(featuredimage)
    return (
        <div className="col-lg-4 col-md-6 col-xs-12">
        <Item>
            <ItemImage>
            <Link to={`/blog/${category.document.uid}/${data.node.uid}`}>
                <img src={featuredimage.fluid.src}/>
                {/* <GatsbyImage image={BlogImage} alt={title.text} className="w-100" /> */}
            </Link>
            </ItemImage>
            <h4 className="mt-6 mb-1"><Link to={`/blog/${category.document.uid}/${data.node.uid}`}>{title.text}</Link></h4>            
            <p>{description.text.substring(1, 100)}</p>
            <Category><Link to={`/blog/${category.document.uid}`}>{category.document.data.name.text}</Link></Category>
        </Item>
        </div>
    )

}

export default BlogItem


export const ItemImage = styled.div`
width:100%;
overflow:hidden;
img{
    width:100%;
}
`
export const Item = styled.div`
margin-bottom:50px;
h4{
    font-size: 26px;
    line-height: 32px;
    color: #4a4a4a;
    @media (max-width:1199px) {
        font-size: 24px;
    }
    @media (min-width:992px) {
        min-height: 58px;
    }
    a{
        color: #4a4a4a;   
    }
}
p{
    margin: 0 0 25px;
    font-size: 17px;
    line-height: 28px;
}
img{
    border-radius: 5px;
}
`;
export const Author = styled.div`
margin-top: 30px;
display: flex;
img{
    width:30px !important;
    height:30px !important;
    margin-right:10px;
    border-radius:50%;
}
p{
    color: #4a4a4a;
    font-size: 16px;
}
`;
export const Category = styled.div`
float:left;
margin-right:6px;
a{
    color: #929292; 
    background-color: #ececec;
    border:1px solid #ececec;
    font-size: 12px;
    color: #929292;
    border-radius: 100px;
    padding: 2px 8px 3px;
    display: inline-block;
    transition: all .2s ease-in;
    &:hover{
        background-color: #FF0088;
        border-color:#FF0088;
        color:#fff;
    }
}
`;