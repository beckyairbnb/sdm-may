import React from "react";
import styled from "styled-components";
import Collapsible from "react-collapsible";

const FaqAccordion = ({data}) => {
  console.log('data', data)
  if(data){
    return (
      <>
        <FaqBlock>
          <div className="w-100 p-5">
            <h2 className="font-size-9 text-dark-cloud text-center mb-6 mt-4">
              Frequently asked questions
            </h2>  
            {data && data.length>0 && data.map(({faq})=>{
              if(faq && faq.document && faq.document.data){
                console.log('FAQ single item', faq)
                return(
                  <Collapsible trigger={faq.document.data.question.text} id={faq.document.data.id}>
                    {faq.document.data.answer.html && <div dangerouslySetInnerHTML={{ __html: faq.document.data.answer.html }} ></div>}
                  </Collapsible>
                )
              }
            })}           
          </div>
        </FaqBlock>
      </>
    );
  }
  else
  {
    return null;
  }
  
};

export default FaqAccordion;

const FaqBlock = styled.div`
  background-color: #f4f8f9;
  border-radius: 20px;
  height:100%;
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
