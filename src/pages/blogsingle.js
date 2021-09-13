import React from "react";
import "../layout/blog-styles.css"
// import logoB from "../assets/image/logo.png";


import blogbanner from "../assets/images/blog-banner.jpg";
import foodimage from "../assets/images/food-img.jpg";
import homeicon from "../assets/images/home-icon.png";
import termlifeicon from "../assets/images/term-life-icon.png";
import rentorsicon from "../assets/images/rentors-icon.png";
import peticon from "../assets/images/pet-icon.png";
import postimg1 from "../assets/images/post-img1.jpg";
import stratagicsicon from "../assets/images/stratagic-s.png";


import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"

const BlogSingle = () => {
  return (
    <div className="wrapper">
        <div className="container-fluid p-0 overflow-hidden">
        <div className="blog-banner d-flex flex-column align-items-center text-center">
          <div className="w-100 position-relative ban-img">
              <img src={blogbanner} className="w-100 ban-img"/>              
           </div>
            <div className="position-absolute pl-2 pr-2 text-container">
                <div className="d-flex justify-content-center mt-4 mb-5">
                      <Img fluid={stratagicsicon} />
                    </div>
                    <div className="text-white text-center w-100 mt-20"> <h1>What Happens in a Life Insurance <br/>Medical Exam?</h1></div>
                    <div className=" text-center w-100 mb-10 mt-10"> <h5>Let's get physical, physical</h5></div>
                        <button className="btn btn btn-blue-3 header-btn-2 pt-10 pb-10 pl-12 pr-12 font-size-3 rounded-5 text-uppercase w-auto border-0">
                            Get Your Quote in Seconds
                        </button>
            </div>
        </div>
   </div>
    

    {/* <div className="menu-btn bg-dark w-100 p-2">
        <a href="#" class="border pt-4 pb-4 pl-5 pr-5 rounded text-white">Life
            <svg class="svg-icon" viewBox="0 0 20 20">
		        <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
	        </svg>
        </a>
<div className="dd-menu bg-white border border-bottom-0 rounded shadow overflow-hidden">
<ul className="list-inline primary-menu d-flex justify-content-space-between align-items-stretch flex-wrap mb-0">
<li className="text-primary font-size-6"><a href="#" className="text-primary w-100">Blog Home</a></li>
<li className="text-primary font-size-6"><a href="#" className="text-primary w-100">Strategically101</a></li>
<li className="text-primary font-size-6"><a href="#" className="text-primary w-100">Home Owners</a></li>
<li className="text-primary font-size-6"><a href="#" className="text-primary w-100">Renters</a></li>
<li className="text-primary font-size-6"><a href="#" className="text-primary w-100">Pet</a></li>
<li className="text-primary font-size-6"><a href="#" className="text-primary w-100">Term Life</a></li>
<li className="text-primary font-size-6"><a href="#" className="text-primary w-100">Behavioral Econ</a></li>
<li className="text-primary font-size-6"><a href="#" className="text-primary w-100">News</a></li>
<li className="text-primary font-size-6"><a href="#" className="text-primary w-100">Transparency</a></li>
<li className="text-primary font-size-6"><a href="#" className="text-primary w-100">Life Hacks</a></li>
</ul>
</div>
</div>  */}


    <div className="pt-10 pb-10">

        <div className="container position-relative">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 col-xs-12">

                    <p>Life insurance can help give your loved ones financial protection if you were to pass away. </p>
                    <p>When applying for life insurance, the insurance company basically calculates your life expectancy. </p>
                    <p>That might sound a little morbid, but this gives the life insurance company a better idea of approximately when they might need to pay out a <a href="#">death benefit</a> to your <a href="#">beneficiaries</a>, or if they’ll need to pay one out at all (in the case of a <a href="#">term life insurance</a> policy, which—if all goes well—you’ll outlive).</p> 
                    <p>For some life insurance policies (but not Lemonade’s offering!) a required medical exam is a crucial part of the underwriting process. The exam helps give the insurance company a basic snapshot of your health, so they can decide if you qualify for coverage—and how much that coverage will cost you.</p> 
                    <p>Below, we’ll break down the basics of a life insurance medical exam, so you can know what to expect. </p>
                    <p>Just so you know, Lemonade now offers term life insurance without a medical exam. The application process is 100% digital, and you could get coverage for between 10 and 30 years and up to $1.5 million in coverage.</p>
                    <p>No needles, no in-person doctor visits, and absolutely no peeing in a cup. So, if you’d like to skip the physical and get on with your life… just click below to get a <a href="#">quote</a>.</p>
                    <div className="d-flex justify-content-center align-items-center mt-10 mb-10">
                    <button className="btn btn btn-blue-3 header-btn-2 font-size-3 rounded-5 pt-10 pb-10 p-5 text-uppercase shadow">
                    Apply Now
                    </button>
                </div>
                    <h4 className="mb-10">Before the exam </h4>
                    <h5 className="mb-10">Scheduling the appointment </h5>
                    <p> Some life insurance companies partner with paramedical companies that test and examine individuals who might want to take out a life insurance policy.</p>
                    <p>You’ll likely get a phone call from the medical service company to set up the appointment. You can choose to have the exam at home or at work, or you can try to make an appointment at the paramedical company’s offices. The exam takes around 15 to 45 minutes. </p>
                    <p>Good news: The insurance company covers the cost of the exam. </p>
                    <div className="mb-8 mt-8"><h4>Before the exam</h4></div>
                    <p> The day before the exam, try to avoid high-cholesterol or salty foods, over-the-counter medication, alcohol, or strenuous exercise. Drink lots of water. When scheduling your appointment, ask if you need to fast for the 12 hours before the exam. </p>
                    <p>Arrive at your appointment in short sleeves, or a shirt that you can easily roll up (for the blood test), and comfortable clothes (don’t worry, you won’t have to get undressed). Arrive at your appointment with a photo ID and your application documents at the ready. </p>
                    <div className="w-100 d-flex justify-content-center text-center mb-5 mt-10"><img src={foodimage} alt="" className="w-100" /></div>
                    <p className="text-center"><i>Tempting, but should probably wait until *after* your exam</i></p>
                    <div className="mb-8 mt-12"> <h3>The exam</h3></div>
                    <div className="mb-7 mt-7"><h4>The medical questionnaire</h4></div>
                    <p>The technician, nurse, or physician will get things going by asking you a series of questions about your medical history. </p>
                    <p>This includes information about what medications you take, and the dosages. They will also ask you if you have been hospitalized recently, and for what reasons, as well as inquiring about any psychiatric or medical conditions you may have been diagnosed with in the past 5 years.</p> 
                    <p>This should maybe go without saying, but we’re saying it anyway—it’s really important that you’re honest. If the insurer finds out you lied or left out information at this stage, the insurance company can discontinue your coverage down the line, or deny any claims.</p> 
                    <div className="mb-7 mt-7">  <h4> The physical exam</h4></div>
                    <p>This is where the “fun” starts! The medical professional will record your weight and height and take your blood pressure. You will be asked to provide a urine sample and a blood sample to test your cholesterol, blood sugar, and check for nicotine or drug use (including things like marijuana, even if it’s legal where you live). </p>
                    <p>Depending on your age and your desired coverage amount, the insurance company might ask for you to have an electrocardiogram (EKG), to check your heart health. On rare occasions, insurers might also ask for an X-ray, saliva sample, or a treadmill stress test. </p>
                    <div className="mb-7 mt-7"><h3>After the exam</h3></div>
                    <p>Your life insurance company will probably take a few weeks to process your medical exam results. You can usually get a copy of your test results within 5 to 6 weeks, which you can submit to other life insurance companies if you’re denied coverage, or if you’re looking to shop around. </p>
                    <div className="mb-8 mt-7"><h3> Apply for coverage without the needles</h3></div>
                    <p>  If you’re between the ages of 18-60, you could qualify for a term life insurance policy offered by Lemonade. </p>
                    <p>Applying is simple on desktop or through our mobile app. Lemonade’s friendly chatbot Maya will ask you a series of questions about your age, lifestyle, and medical history—and voila! You can apply for the coverage you need without getting up from the couch… and without having to bother with any invasive tests or exams. </p>
                    <div className="d-flex justify-content-center align-items-center mt-10 mb-10">
                    <button className="btn btn btn-blue-3 header-btn-2 font-size-3 pt-10 pb-10 p-5 rounded-5 text-uppercase shadow">
                    Apply Now
                    </button>
                    </div>


  {/* <div className="post-share text-center">
    <p>Share</p>
    <ul className="s-icon list-inline">
        <li>
            <a href="#" className="border mb-3 border w-100 rounded p-1">
                <svg class="svg-icon" viewBox="0 0 20 20">
                    <path fill="none" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
                </svg>
            </a>
        </li>
        <li>
            <a href="#" className="border mb-3 border w-100 rounded p-1">
            <svg class="svg-icon" viewBox="0 0 20 20">
			<path fill="none" d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
			</svg>
            </a>
        </li>
        <li>
            <a href="#" className="border mb-3 border w-100 rounded p-1">
            <svg class="svg-icon" viewBox="0 0 20 20">
			<path fill="none" d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
			</svg>
            </a>
        </li>
    </ul>
</div>  */}

   </div>  
           </div>

        </div>
    </div>


<div className="d-flex justify-content-center align-items-center text-center bg-light pt-10 pb-8 border-top border-bottom">
<div className="container">
<div className="mb-7 mt-7">  <h2>Forget everything you know about insurance</h2></div>
    <p>Incredible prices, monthly subscription</p>
    <div className="row mt-12">
    <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="bg-white shadow rounded p-5 text-center mb-10">
            <div className="d-flex justify-content-center mt-4 mb-8">
                
                <StaticImage src="../assets/images/logo.png" className="border"/> 
                </div>
           <div className=""> <h4>Renters</h4></div>
            <div className="d-flex justify-content-center align-items-center mt-7 mb-3 ">
                <button className="btn btn btn-blue-3 header-btn-2 font-size-3 shadow p-5 rounded-5 text-uppercase w-25">
             Check Our Prices
              </button>
              </div>
              <p className="small text-uppercase"> From $5/mo </p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="bg-white shadow rounded p-5 text-center mb-10">
            <div className="d-flex justify-content-center mt-4 mb-8"><img src={homeicon} alt="" className="w-100" /></div>
           <div className=""> <h4>Homeowners</h4></div>
            <div className="d-flex justify-content-center align-items-center mt-7 mb-3 ">
                <button className="btn btn btn-blue-3 header-btn-2 font-size-3 shadow rounded-5 p-5 text-uppercase w-25">
             Check Our Prices
              </button>
              </div>
              <p className="small text-uppercase"> From $25/mo </p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="bg-white shadow rounded p-5 text-center mb-10">
            <div className="d-flex justify-content-center mt-4 mb-8"><img src={termlifeicon} alt="" className="w-100" /></div>
           <div className=""> <h4>Term Life</h4></div>
            <div className="d-flex justify-content-center align-items-center mt-7 mb-3 ">
                <button className="btn btn btn-blue-3 header-btn-2 font-size-3 shadow rounded-5 p-5 text-uppercase w-25">
             Check Our Prices
              </button>
              </div>
              <p className="small text-uppercase"> From $9/mo </p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="bg-white shadow rounded p-5 text-center mb-10">
            <div className="d-flex justify-content-center mt-4 mb-8"><img src={peticon} alt="" className="w-100" /></div>
           <div className=""> <h4>Pet</h4></div>
            <div className="d-flex justify-content-center align-items-center mt-7 mb-3 ">
                <button className="btn btn btn-blue-3 header-btn-2 font-size-3 shadow rounded-5 p-5 text-uppercase w-25">
             Check Our Prices
              </button>
              </div>
              <p className="small text-uppercase"> From $10/mo </p>
            </div>
        </div>

    </div>
</div>
</div>
<div className="d-flex pt-20 pb-8">
<div className="container">
    <div className="text-center mb-10"><h2>Continue Reading</h2></div>
    <div className="row">
        <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="post-block mb-10">
                <div className=""><a href="#"><img src={postimg1} alt="" className="w-100 rounded"/></a></div>
                    <div className="mt-8 mb-8"> <h4>All the Reasons to Get Life Insurance</h4></div>
                    <div className="mb-6"><img src={stratagicsicon} alt="" className="rounded-pill mr-5"/><span>Team Strategically</span></div>
                    <p>Everyone’s situation is unique, but here are some things to keep in mind when pondering life insurance.</p>
                </div>
         </div>
         <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="post-block mb-10">
                <div className=""><a href="#"><img src={postimg1} alt="" className="w-100 rounded"/></a></div>
                    <div className="mt-8 mb-8"> <h4>Why Did I Get Denied for Life Insurance?</h4></div>
                    <div className="mb-6"><img src={stratagicsicon} alt="" className="rounded-pill mr-5"/><span>Team Strategically</span></div>
                    <p>Everyone’s situation is unique, but here are some things to keep in mind when pondering life insurance.</p>
                </div>
         </div>
         <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="post-block mb-10">
                <div className=""><a href="#"><img src={postimg1} alt="" className="w-100 rounded"/></a></div>
                    <div className="mt-8 mb-8"> <h4>How Much Does a Funeral Cost?</h4></div>
                    <div className="mb-6"><img src={stratagicsicon} alt="" className="rounded-pill mr-5"/><span>Team Strategically</span></div>
                    <p>Everyone’s situation is unique, but here are some things to keep in mind when pondering life insurance.</p>
                </div>
         </div>

    </div>
    </div>
</div>


    </div>

  );
};
export default BlogSingle;


