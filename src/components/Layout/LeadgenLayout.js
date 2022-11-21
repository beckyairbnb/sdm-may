import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"

import imgBg from "../../assets/image/inner-page/jpg/sign-up-right-img.jpg";

import PageWrapper from "../PageWrapper";

const LeadgenLayout = ({ title, description, children }) => {
  const { siteLogo } = useStaticQuery(
    graphql`
      query {
        siteLogo: file(relativePath: {eq: "sitelogo.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 251)
          }
        }

      }
    `
  )
  return (
    <PageWrapper
      themeConfig={{
        headerClassName: "pt-13 pt-lg-11 px-14 px-xl-24",
        headerLogoClassName: "mx-auto mx-lg-0"
      }}
    >

      <div className="min-height-100vh d-flex align-items-center bg-default-3 position-relative">
        <div className="container-fluid h-100 ">

          <div className="row no-gutters justify-content-center align-items-center h-100">

            <div className="col-xl-4 col-lg-6 col-md-10 mb-14">
              <div
                className="max-w-413 mx-auto"
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-delay={500}
              >

                <div className="pb-0 leadgenlogo position-absolute">
                  <GatsbyImage
                    image={getImage(siteLogo)}
                    width={251} height={60}
                    className="light-version-logo"
                  />
                </div>
                <div className="w-100 align-items-center d-flex flex-column leadgencontent">
                  <div className="">
                    <div className="mb-5">
                      <h2 className="mb-1 font-size-8 letter-spacing-n83">
                        {title && title}
                      </h2>
                      <p className="text-bali-gray font-size-6 mb-0">
                        {description && description}
                      </p>
                    </div>


                    {children}


                    <div className="d-flex flex-row mt-8 align-items-center justify-content-center reviews-container">

                      <div className='font-size-6 mb-0'><a href="https://g.page/strategically?share" className='font-size-6 mb-0' target="_blank" rel="noopener noreferrer">Excellent</a></div>
                      <div className='d-flex flex-row px-3'>
                        <a href="https://g.page/strategically?share" target="_blank" rel="noopener noreferrer">
                          <svg clip-rule="evenodd" fill-rule="evenodd" width="22" height="22" fill='#fff' className='bg-green p-1 mr-1' stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero" /></svg>
                          <svg clip-rule="evenodd" fill-rule="evenodd" width="22" height="22" fill='#fff' className='bg-green p-1 mr-1' stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero" /></svg>
                          <svg clip-rule="evenodd" fill-rule="evenodd" width="22" height="22" fill='#fff' className='bg-green p-1 mr-1' stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero" /></svg>
                          <svg clip-rule="evenodd" fill-rule="evenodd" width="22" height="22" fill='#fff' className='bg-green p-1 mr-1' stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero" /></svg>
                          <svg clip-rule="evenodd" fill-rule="evenodd" width="22" height="22" fill='#fff' className='bg-green p-1' stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero" /></svg>
                        </a>
                      </div>
                      <div className='font-size-6 pr-3 mb-0'><a href="https://g.page/strategically?share" className='font-size-6 mb-0' target="_blank" rel="noopener noreferrer">29 Google Reviews</a></div>

                    </div>
                  </div>
                </div>


              </div>
            </div>
            {/* Right Image */}
            <div className="col-lg-8 col-md-10 min-height-lg-100vh">
              <div
                className="bg-images min-h-107 min-height-100vh d-none d-lg-block"
                css={`
                    background-image: url(${imgBg});
                  `}
              />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default LeadgenLayout;
