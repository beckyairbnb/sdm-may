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
    const { data, pageContext } = props
    const {
      allPrismicBlog: { edges: blogsData },
    } = data;

    const {
        AllCats: { edges: catsData },
      } = data;

    const { HighlightBlogs } = data

    console.log('HighlightBlogs',HighlightBlogs.data.body[0].items)
    console.log('blogsData',blogsData)

    const result = blogsData.map((item)=>{      
      return HighlightBlogs.data.body[0].items.map((hitem)=>{
        if(item.node.id===hitem.blog.node.id){
          return item
        }
      })
    })

    console.log('result',result)

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
                            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/get-a-quote/"}>
                            Get a quote
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
