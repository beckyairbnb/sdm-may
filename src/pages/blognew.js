import React from "react"
import PageWrapper from "../components/PageWrapper";
import Helmet from "react-helmet";
import BlogSidebar from "../components/blog/blogsidebar";
import BlogIndex from "../components/blog/blogindex";
import styled from 'styled-components';

const BlogNew = () => {
    return (
        <>
            <Helmet>
                <title>Strategically | Content Writing Agency</title>
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
                            <div className="col-lg-4 col-xs-12">
                                <BlogSidebar />
                            </div>
                            <div className="col-lg-8 col-xs-12">
                                <BlogIndex />
                            </div>
                        </div>
                        <Pagination>
                            <ul>
                                <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg></a></li>
                                <li><a href="#" className="active">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>                            
                                <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg></a></li>
                            </ul>
                        </Pagination>
                    </div>
                </BlogContent>
            </PageWrapper>
        </>
    );
};
export default BlogNew;

export const BlogContent = styled.div`
`;
export const Pagination = styled.div`
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