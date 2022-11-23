import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet";

import PageWrapper from "../components/PageWrapper";
import PageContent from '../components/ContentSlices/PageContent'
import Table3Col from '../components/ContentSlices/Table3Col'


import imgFavicon from "../assets/favicon.png";

const PageTemplate = (props)=>{
    const { data } = props
    const { PageData } = data
    //const siteURL = site.siteMetadata.siteUrl 
    //const stitle = `Read ${PageData.data.title.text} `;
    //const surl = `${siteURL}${props.location.pathname || "/"}`;
    //const stwitterHandle = "_MsLinda";
    const seoTitle = PageData.data.seotitle.text || 'Strategically | Content Writing Agency'
    const seoDescription = PageData.data.metadescription.text || 'Strategically'
  return(
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
   <div className="wrapper mt-4 pt-4">
      <div className="container main-container mb-10 pb-10">
        <div className="row d-flex justify-content-center">
            <div className="col-sm-7 d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-delay={500}
            >
              <h1 className="text-center">{PageData.data.title.text}</h1>
            </div>
        </div>      
      </div>
      <div className="container pb-4">
      <div className="row">
      <div className="col-sm-12 d-flex flex-column justify-content-start align-items-left">
      {PageData.data.description.html && <div dangerouslySetInnerHTML={{ __html: PageData.data.description.html }} className="w-100 float-left overflow-hidden mb-2"></div>}     
      {PageData.data.body.map((item, index)=>{
                const { slice_type, primary, items } = item
                {
                  if(slice_type==='section_with_heading_and_content')
                  {
                    return <PageContent data={primary}/>
                  }
                  if(slice_type==='table_with_3_columns')
                  {
                    return <Table3Col data={items} headings={primary}/>
                  }
                }
                
            })}
      </div>
      
      </div>
      </div>
    </div>
  </PageWrapper>
  </>
)}

export const query = graphql`
query getPagesData($id: String!) {
    site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
  PageData : prismicPage(id: {eq: $id}) {
      id
      data {        
        title {
          html
          text
        }
        description {
          text
          html
        }
        seotitle {
          text
        }
        metadescription {
          text
        }
        body {
          ... on PrismicPageDataBodySectionWithHeadingAndContent {
            id
            slice_type
            primary {
              section_heading {
                text
                html
              }
              section_content {
                text
                html
              }
            }
          }
          ... on PrismicPageDataBodyTableWith3Columns {
              id
              slice_type
              items {
                column_1_content {
                  text
                  html
                }
                column_2_content {
                  html
                  text
                }
                column_3_content {
                  html
                  text
                }
              }
              primary {
                column_1_heading
                column_2_heading
                column_3_heading
              }
            }
          }
        }
      }
}
`
export default PageTemplate