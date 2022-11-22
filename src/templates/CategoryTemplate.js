import React from "react"
import styled from 'styled-components';
import { graphql } from "gatsby"
import { Helmet } from "react-helmet";
import BlogSidebar from "../components/blog/blogsidebar";
import BlogIndex from "../components/blog/blogindex";
import PageWrapper from "../components/PageWrapper";
import Pagination from '../components/Pagination';

import imgFavicon from "../assets/favicon.png";

const CategoryTemplate = (props) => {
    const { data, pageContext } = props
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
                            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/get-a-quote/"}>
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
                            </div>
                        </div>
                        
                    </div>
                </BlogContent>
            </PageWrapper>
        </>
    )
}


export default CategoryTemplate


export const BlogContent = styled.div`
`;

export const data = graphql`
  query($skip: Int!, $limit: Int!, $uid: String!) {
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
      filter: {data: {category: {uid: {eq: $uid}}}}
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
