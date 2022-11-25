import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import {Link, graphql } from "gatsby"
import { Helmet } from "react-helmet";
import BlogSidebar from "../components/blog/blogsidebar";
import BlogIndex from "../components/blog/blogindex";
import PageWrapper from "../components/PageWrapper";
import imgFavicon from "../assets/favicon.png";
import Pagination from '../components/Pagination';
import Paginate from "../components/blog/Paginate";
import HeaderButton from "../components/Header/HeaderButton";
const Blog = (props) => {
  const [pageIndex, setPageIndex] = useState(1);
  const { data } = props


  const {
    AllCats: { edges: catsData },
  } = data;

  const { HighlightBlogs, Blogs } = data

  Blogs.edges.map((item)=>{
    item.node.order=100
  })

  const result = Blogs.edges.filter((item, index) => {
    return HighlightBlogs.data.body[0].items.find((hitem, hindex) => {
      if(item.node.id === hitem.blog.node.id){
        item.node.order=hindex+1
        return item
      }
    })
  })
  
  const difference = Blogs.edges.filter((object1) => {
    return !result.some((object2) => {
      if(object1.node.id === object2.node.id){
        return object1    }
    });
  });


  const blogs = [...result, ...difference]
  blogs.sort((a, b) => (a.node.order > b.node.order) ? 1 : -1)

  const seoTitle = 'Strategically Blog'
  const seoDescription = 'Strategically Blog'

  const limit = 6

  const pageCount = Math.ceil(blogs.length / limit);

  useEffect(() => {
    console.log('pageIndex',pageIndex)
  }, [pageIndex]);

  if (!blogs) return null;
  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="icon" type="image/png" href={imgFavicon} />
      </Helmet>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
             <HeaderButton/>
            </>
          ),
          footerStyle: "style2",
        }}
      >
        <BlogContent className="pt-25 pb-10">
          <div className="container">
            <h1 className="text-center mb-15">Our Blog</h1>
            <div className="row">
              <div className="col-lg-3 col-xs-12">
                <BlogSidebar data={catsData} />
              </div>
              <div className="col-lg-9 col-xs-12">
                <BlogIndex data={blogs.slice((pageIndex - 1) * limit, pageIndex * limit)} />
                {/* <BlogIndex data={blogsData} />
                <Pagination data={pageContext} /> */}
                <Paginate
                    page={pageIndex}
                    pageCount={pageCount}
                    pageIndex={pageIndex}
                    setPageIndex={setPageIndex}
                />
              </div>
            </div>

          </div>
        </BlogContent>
      </PageWrapper>
    </>
  )
}


export default Blog


export const BlogContent = styled.div`
`;
export const Pagination2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align:center;
margin:30px 0;
ul{
    margin:0;
    padding:0;
}
ul > li{
    list-style:none;
    display: inline-block;
    margin-bottom:10px;
    &:hover a,  a.active{
        background-color: #FF0088;
        color:#fff;
        line-height: 20px;
        font-size: 16px;
    }  
    &:hover svg{
        fill:#fff;
    }
}
ul > li > a{
    padding:7px 12px;
    color:#999;
    border-radius:3px;
    margin-left:15px;
    @media (max-width: 535px) {
        margin-left:9px;
    }
    svg{
        fill:#a0a5bd;
    }
}
`;

export const data = graphql`
  query {
    Blogs: allPrismicBlog {
      edges {
        node {
          uid
          id
          data {
            title {
              html
              text
            }
            description {
              text
            }
            seotitle
            metadescription
            featuredimage {
              gatsbyImageData(layout: FULL_WIDTH)
              fluid {
                src
              }
            }
            category {
                document {
                  ... on PrismicBlogCategory {
                    id
                    uid
                    data {
                      name {
                        text
                        html
                      }
                    }
                  }
                }
              }
          }
        }
      }
    }
    HighlightBlogs : prismicBlogListingPage(uid: {eq: "blog"}) {
      data {
        body {
          ... on PrismicBlogListingPageDataBodyHighlightBlogs {
            id
            items {
              blog {
                node: document {
                  ... on PrismicBlog {
                    uid
                    id
                    
                  }
                }
              }
            }
          }
        }
      }
    }
    AllCats : allPrismicBlogCategory {
        edges {
          node {
            uid
            data {
              name {
                text
              }
            }
          }
        }
      }    
  }
`;
