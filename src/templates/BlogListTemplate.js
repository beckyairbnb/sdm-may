import React from "react"
import styled from 'styled-components';
import { graphql } from "gatsby"
import { Helmet } from "react-helmet";
import BlogSidebar from "../components/blog/blogsidebar";
import BlogIndex from "../components/blog/blogindex";
import PageWrapper from "../components/PageWrapper";
import imgFavicon from "../assets/favicon.png";
import Pagination from '../components/Pagination';
const BlogListTemplate = (props) => {
    const { data, pageContext, path, location } = props
    const {
      allPrismicBlog: { edges: blogsData },
    } = data;

    const {
        AllCats: { edges: catsData },
      } = data;

      const seoTitle = 'Strategically Blog'
      const seoDescription = 'Strategically Blog'

    if (!blogsData) return null;
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
                            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/get-a-quote/2/"}>
                                View Pricing
                            </a>
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
                                <BlogIndex data={blogsData} />
                                <Pagination data={pageContext} />
                                {/* <Pagination>
                                    <ul>
                                        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg></a></li>
                                        <li><a href="#" className="active">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg></a></li>
                                    </ul>
                                </Pagination> */}
                            </div>
                        </div>
                        
                    </div>
                </BlogContent>
            </PageWrapper>
        </>
    )
}


export default BlogListTemplate


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
  query($skip: Int!, $limit: Int!) {
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
    allPrismicBlog(
      sort: { fields: last_publication_date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
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
  }
`;
