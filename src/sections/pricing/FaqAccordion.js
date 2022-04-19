import React from "react";
import styled from "styled-components";
import Collapsible from "react-collapsible";

const FaqAccordion = ({data}) => {
  console.log('FAQ accordin', data)
  return (
    <>
      <FaqBlock>
        <div className="w-100 mt-15 p-10">
          <h2 className="font-size-9 text-dark-cloud mb-0 text-center">
            Frequently asked questions
          </h2>

          <h4 className="font-size-7 text-dark-cloud mb-5 text-center">
            Do you offer revisions?
          </h4>

          <p className="font-size-5 pr-md-10 pr-lg-0 mb-4 text-center">
            We want you to love your content. Our clients rarely use them, but
            we do offer unlimited free revisions that don't count against your
            word count for the month.
          </p>

          {data && data.map((item, index)=>{
            return(
              <Collapsible trigger={item.faq.document.data.question.text}>
                {item.faq.document.data.answer.html && <div dangerouslySetInnerHTML={{ __html: item.faq.document.data.answer.html }} ></div>}
              </Collapsible>
            )
          })}
        </div>
      </FaqBlock>
    </>
  );
};

export default FaqAccordion;

const FaqBlock = styled.div`
  background-color: #f4f8f9;
  border-radius: 32px;

  .Collapsible {
    background-color: #fff;
    padding: 20px;
    padding-left: 50px;
    position: relative;
    border-radius: 5px;
    margin-bottom: 15px;
    span {
      color: #1d293f;
      font-size: 21px;
      :after {
        content: "+";
        position: absolute;
        left: 25px;
        top: 18px;
        width: 15px;
        height: 15px;
        background-image: none;
      }
    }
    span.is-open:after {
      content: "-";
      top: 18px;
      background-image: none;
    }

    p {
      font-size: 16px;
      line-height: 28px;
      margin-top: 10px;
    }
  }
`;
