import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ListGroup, Collapse } from "react-bootstrap";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { useStaticQuery, graphql, Link } from "gatsby";
import GlobalContext from "../../context/GlobalContext";
import { menuItems } from "../../components/Header/menuItems";

const NestedMenuContainer = styled.div`
  a {
    color: #121212 !important;
    transition: all 0.3s ease-out;
    font-weight: 700;
    text-transform:capitalize;

    &:hover,
    &:active {
      color: #121212;
      text-decoration: none;
    }
  }

  .list-group-item {
    font-weight: 700;
    text-transform:capitalize;
    color: #121212;
    &:hover,
    &:active,
    &.active {
      color: #121212;
      text-decoration: none;
      background-color: transparent;
      border-bottom: 1px solid rgba(22, 28, 45, 0.125);
    }

    & + .collapse:not(.show) {
      .list-group-item {
        border: none !important;
        border-width: 0 !important;
      }
    }
    & + .collapse.show {
      .list-group-item {
        &:first-child {
          border-top: none !important;
        }
      }
    }
  }
  .collapse + .list-group-item {
    border-top-width: 0;
  }
  /* .list-group-flush:last-child .list-group-item:last-child {
    border-bottom-width: 1px;
  } */
`;

const MenuItem = ({
  label,
  isExternal = false,
  name,
  items,
  depthStep = 20,
  depth = 0,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const hasSubItems = Array.isArray(items);

  const gContext = useContext(GlobalContext);

  return (
    <>
      {hasSubItems ? (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            padding-right: 0 !important;
            cursor: pointer;
          `}
          onClick={() => setOpen(!open)}
          className={`d-flex align-items-center justify-content-between ${
            open ? "active" : ""
          }`}
        >
          <span>{label}</span>
          <span>{open ? <FaAngleDown /> : <FaAngleRight />}</span>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            padding-right: 0 !important;
          `}
        >
          {isExternal ? (
            <a
              href={`${name}`}
              onClick={() => {
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas();
                }
              }}
            >
              {label}
            </a>
          ) : (
            <Link
              to={`/${name}`}
              onClick={() => {
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas();
                }
              }}
            >
              {label}
            </Link>
          )}
        </ListGroup.Item>
      )}

      {hasSubItems ? (
        <Collapse in={open}>
          <ListGroup>
            {items.map((subItem) => (
              <MenuItem
                key={subItem.name}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
            <Link to ="/writer-services/" className="main-services-link">All Writer Services</Link>
          </ListGroup>
        </Collapse>
      ) : null}
    </>
  );
};

const NestedMenu = () => {
  const { AllServices } = useStaticQuery(
    graphql`
      query {
        AllServices: allPrismicService(filter: {uid: {ne: "writer-services"}}, sort: {fields: data___short_title, order: ASC}) {
          edges {
            node {
              uid
              id
              data {
                short_title
              }
            }
          }
        }
      }
    `
  )
  const ServicesList = AllServices.edges.map((item)=>{
    return(
      { "name": 'writer-services/'+item.node.uid+'/', "label": item.node.data.short_title }
    )
  })
  const menuItems = [
    {
      name: "writing-jobs/",
      label: "We're Hiring!",
  
    },
    {
      name: "content-writing-agency/",
      label: "Why Strategically",
      
    },
    {
      name : "writer-services/",
      label : "Writing Services",
      items : ServicesList
    }  
  ];
  return (
    <NestedMenuContainer>
      <ListGroup variant="flush">
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={`${menuItem.name}${index}`}
            depthStep={20}
            depth={0}
            {...menuItem}
          />
        ))}
      </ListGroup>
    </NestedMenuContainer>
  );
};

export default NestedMenu;
