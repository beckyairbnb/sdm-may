import React from "react";
import { Link } from 'gatsby';
import styled from "styled-components";

export default function Paginate({ page, pageCount, pageIndex, setPageIndex }) {
    let pages = [];
    for (let i = 0; i < pageCount; i++) {
        pages.push({
            label: i + 1
        });
    }
    return (
        <div>
            <PagiNation>
                <button
                    className="nextprevbtn"
                    onClick={() => setPageIndex(pageIndex - 1)}
                    disabled={page === 1}
                >Previous</button>
                {pages.map((item, index) => (
                    <button key={index}
                    className={`${pageIndex===item.label && 'active'}`}
                    onClick={() => setPageIndex(item.label)}
                    >
                         {page == item.label ? (
                            <span>{item.label}</span>
                        ) : (
                            <span>{item.label}</span>
                        )}
                     </button>
                ))}


               

                <button
                    onClick={() => setPageIndex(pageIndex + 1)}
                    disabled={page === pageCount}
                    className="nextprevbtn"
                >Next</button>
            </PagiNation>
        </div>
    )
}


const PagiNation = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align:center;
margin:30px 0;
@media (max-width: 767px) {
   margin:40px 0 20px 0;
}
a{
    border:none;
  padding:7px 12px;
  color:#999 !important;
  border-radius:3px;
  margin:0px 0px 0px 15px;
  @media (max-width: 535px) {
      margin-left:9px;
  }
   &:hover{
    background-color: #FF0088;
    color:#fff !important;
    margin:0px 0px 0px 15px;
      padding:7px 12px !important;
   }
}
button.active{
    background-color: #FF0088;
    color:#fff !important;    
}
button{
    border:none;
    background-color:#ffffff;
    border:none;
    padding:6px 12px;
    color:#999 !important;
    border-radius:3px;
    margin:0px 0px 0px 15px;
    @media (max-width: 535px) {
        margin-left:9px;
    }    

    span{
        border:none;
        padding:0px;
         &:hover{
          
         }  
    }
}
a.active{
  padding:7px 12px;
  background-color: #FF0088;
  color:#fff !important;
  line-height: 20px;
  font-size: 16px;
  &:hover{
    margin:0px 0px 0px 15px;
    color:#fff;
 }
}
.nextprevbtn{
  background-color: #FF0088;
  color:#fff !important;
  padding:7px 12px;
        line-height: 20px;
        font-size: 16px;
        &:hover{
          padding:7px 12px;
          color:#fff !important;
       }
}
`;
