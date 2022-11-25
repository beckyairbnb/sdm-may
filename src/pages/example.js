import React from "react"
import { graphql, Link } from "gatsby"

import PageWrapper from "../components/PageWrapper";
import Example1 from "../components/ExampleSection/example1";
import Example2 from "../components/ExampleSection/example2";
import Helmet from "react-helmet";
import PageContent from '../components/ContentSlices/PageContent'
import Table3Col from '../components/ContentSlices/Table3Col'
import HeaderButton from "../components/Header/HeaderButton";

const Example = (props) => {
    const { data } = props
    const { AllServices, Jobs, PageData } = data
    
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
                            <HeaderButton/>
                        </>
                    ),
                    footerStyle: "style2",
                }}
            >
                <div className="my-20">
                    <div className="container">
                        <div className="row justify-content-center text-center py-lg-5">
                            <div className="col-sm-12">
                                <h2 className="mb-10">Services We Provide</h2>
                                <ul className="row">
                                    {AllServices.edges.map((index) => {
                                        let slug = index.node.uid === 'saas-content-writerr' ? 'saas-content-writer' : index.node.uid
                                        return (
                                            <li className="col-md-4 col-sm-6 text-left p-2 nav-item">
                                                <Link to={`/writer-services/${slug}/`} className="text-capitalize text-stone gr-hover-text-dodger-blue-1 font-size-5">{index.node.data.short_title || index.node.data.title.text}</Link>
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
                <div className="container">
                <h1 className="text-center">{PageData.data.title.text}</h1>

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



                {/* <Example1/>
                <Example2 data={AllServices}/> */}

            </PageWrapper>
        </>
    );
};
export default Example;


export const query = graphql`
query getExampleData {
   AllServices :  allPrismicService {
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

Jobs :  allPrismicWritingjobs {
  edges {
    node {
      uid
      data {
        title {
          text
          html
        }
        job_location
        job_type
        description {
          text
        }
        featuredimage {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
}

PageData : prismicPage {
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
    body {
      ... on PrismicPageDataBodySectionWithHeadingAndContent {
        id
        slice_type
        primary {
          section_heading {
            html
            text
          }
          section_content {
            html
            text
          }
        }
      }
      ... on PrismicPageDataBodyTableWith3Columns {
        id
        slice_type
        items {
          column_1_content {
            html
            text
          }
          column_2_content {
            html
            text
          }
          column_3_content {
            text
            html
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