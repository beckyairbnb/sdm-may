import React from "react";
import { Link } from "gatsby"
import FeaturedImg5 from "../../assets/images/post_img1.jpg"
import FeaturedImg6 from "../../assets/images/post_img2.jpg"
import FeaturedImg7 from "../../assets/images/post_img3.jpg"

const ReadOurBlog = ({bgColor='bg-default-3'})=>{
    return(
    <div
    className={`py-lg-18 py-10 text-center ${bgColor}`}
    class="bg-default-1 py-lg-18 py-10 text-center">
        <div className="container">
            <h2 className="font-size-10 mb-md-12 mb-8">Read our blog</h2>
            <div class="row">
                <div class="col-md-4 mb-md-0 mb-4">
                    <Link to="/blog/think-tank/increase-website-authority">
                        <img className="w-100 mb-6" src={FeaturedImg5} alt="" />
                        <h3 className="font-size-8">How to increase your website authority</h3>
                    </Link>
                </div>
                <div class="col-md-4 mb-md-0 mb-4">
                    <Link to="/blog/writing-tips/how-to-write-a-blog-post-outline">
                        <img className="w-100 mb-6" src={FeaturedImg6} alt="" />
                        <h3 className="font-size-8">How to write a blog post outline</h3>
                    </Link>
                </div>
                <div class="col-md-4 mb-md-0 mb-4">
                    <Link to="/blog/writing-tips/seo-content-strategy">
                        <img className="w-100 mb-6" src={FeaturedImg7} alt="" />
                        <h3 className="font-size-8">The 7 steps to a killer SEO strategy</h3>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ReadOurBlog