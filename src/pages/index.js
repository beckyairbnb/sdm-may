import React from "react";
import { graphql, Link } from "gatsby"
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home2/Hero";
import Counter from "../sections/home2/Counter";
import Progress from "../sections/home2/Progress";

import Content2 from "../sections/home2/Content2";
import Content3 from "../sections/home2/Content3";
import Testimonial from "../sections/home2/Testimonial";
import Helmet from "react-helmet";



const Index = (props) => {
  const { data } = props
  const { AllServices } = data
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
            <a className="btn btn btn-dodger-blue-2 header-btn rounded-5" href={"/get-a-quote/1/"}>
              View Pricing
            </a>
            </>
          ),
          footerStyle: "style2",
        }}
      >
        <Hero className="pt-11 pt-lg-34 pb-8 pb-lg-33" />
        <Counter className="pt-lg-5 pb-8 pb-lg-27" />
        <Progress className="pb-lg-21 border-top border-default-color-1" />

        <Content2 className="pb-0 pb-lg-31" />
        <Content3 className="pb-12 pb-lg-25" />
        <Testimonial className="pt-lg-19 pb-12 pb-lg-17" title={true} />
        <div className="py-6">
         <div className="container-fluid py-lg-10 bg-white">
           <div className="container">
            <div className="row justify-content-center text-center py-lg-5">
               <div className="col-sm-12">
                <h2 className="mb-10">Services We Provide</h2>
                    <ul className="row">
                        { AllServices.edges.map((item,index)=>{
                          let slug = item.node.uid==='saas-content-writerr' ? 'saas-content-writer' : item.node.uid
                            return(
                                <li className="col-md-4 col-sm-6 text-left p-2 nav-item">
                                  <Link to={`/writer-services/${slug}/`} className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5">{item.node.data.short_title || item.node.data.title.text}</Link>  
                                </li>
                            )
                        })}
                        <li className="col-md-4 col-sm-6 text-left p-2 nav-item">
                        <Link to ="/writer-services/" className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5">All Writer Services</Link>
                        </li>
                    </ul>
               </div>
            </div>
            </div>
         </div>
      </div>
        {/* <CTA className="bg-images" /> */}
      </PageWrapper>
    </>
  );
};



export const query = graphql`
query HomePage {
  AllServices: allPrismicService(
    filter: {uid: {ne: "writer-services", in: ["b2b-content-writing-services", "blog-article-writing", "fintech-content-writer", "saas-content-writerr","seo-content-writing"]}, id: {}}
    sort: {fields: data___short_title, order: ASC})
    {
        edges {
          node {
            uid
            id
            data {
              title {
                text
              }
              short_title
            }
          }
        }
      }
}
`
export default Index;
