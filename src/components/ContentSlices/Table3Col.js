import React from "react"
import styled from 'styled-components';
const Table3Col = ({ data, headings }) => {
    return(
        <>
        <div className="w-100 d-flex flex-column justify-content-start align-items-left text-left mt-1 mb-1"
              data-aos="fade-up"
              data-aos-duration={500}
              data-aos-delay={500}
        >
        <StyledTable>
            <thead>
                <tr>
                <StyledTableTH scope="col">{headings.column_1_heading}</StyledTableTH>
                <StyledTableTH scope="col">{headings.column_2_heading}</StyledTableTH>
                <StyledTableTH scope="col">{headings.column_3_heading}</StyledTableTH>
                </tr>
            </thead>
            <tbody>
            {
                data.map((item, index)=>{
                    return(
                    <StyledTableTR key={index}>
                        <StyledTableTD dangerouslySetInnerHTML={{ __html: item.column_1_content.html }}></StyledTableTD>
                        <StyledTableTD dangerouslySetInnerHTML={{ __html: item.column_2_content.html }}></StyledTableTD>
                        <StyledTableTD dangerouslySetInnerHTML={{ __html: item.column_3_content.html }}></StyledTableTD>
                    </StyledTableTR>
                )})
            }
            </tbody>                
        </StyledTable> 
        </div>
        </>
    )        
}

export const StyledTable = styled.table`
border: 1px solid #cccccc;
  border-collapse: collapse;
  width: 100%;
  padding:5px;  
  margin:12px 0px;
  & > thead > tr {
    background-color:#ffffff;
    line-height:25px;
    border: 1px solid #cccccc;
}

`;
export const StyledTableTR = styled.tr`
    padding:0px;
    margin:0px;
    border-bottom:1px solid #cccccc;
`;
export const StyledTableTH = styled.th`
font-size: 16px;
color: black;
text-align: left;  
padding:10px;
border:1px solid #cccccc;
`;
export const StyledTableTD = styled.td`
padding:10px;
margin:2px;
text-align:left; 
font-weight: 500;
border:1px solid #cccccc;
& > p {
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.43;
    text-align:left;
    padding: 2px;
    margin:2px;
    vertical-align: top;
    border-top: 0;
  }
`;
export default Table3Col;