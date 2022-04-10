import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from "styled-components";

const Pagination = ({ data }) => {
  const {
    previousPagePath,
    nextPagePath,
    numberOfPages,
    paginationPath,
  } = data;

  if (numberOfPages > 1) {
    let pages = [];
    for (let i = 0; i < numberOfPages; i++) {
      pages.push({
        label: i + 1,
        linkURL: i === 0 ? paginationPath : `${paginationPath}/${i + 1}`,
      });
    }

    return (
      <div>
         <PagiNation>
        {previousPagePath ? (
          <Link to={previousPagePath} className="nextprevbtn"> Previous</Link>
        ) : null}
        {pages.map((page) => (
          <Link
            to={page.linkURL}
            activeClassName="active"
          >
            {page.label}
          </Link>
        ))}
       {nextPagePath ? <Link to={nextPagePath} className="nextprevbtn">Next </Link> : null}
        </PagiNation>
      </div>
    );
  }

  return null;
};

Pagination.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Pagination;

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
