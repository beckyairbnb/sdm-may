import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
//import { menuItems } from "./menuItems";
import styled from "styled-components";


const DropdownMenuUl = styled.ul`
display:flex;
flex-wrap: wrap;
display: flex;
x-justify-content: space-around;
x-align-items: stretch;
right: 0;
left: auto;
padding:1rem;
width:767px !important;
min-width:767px !important;
border-top: 3px solid #091e57;
> .drop-menu-item{
  flex: 0 0 32.5%;
  padding:5px !important;
  margin:3px !important;
}
> .drop-menu-item > a {
  font-size: 14px !important;
  text-transform:capitalize;
}
`
const Menu = () => {
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
    let slug = item.node.uid==='saas-content-writerr' ? 'saas-content-writer' : item.node.uid
    return(
      { "name": 'writer-services/'+slug+'/', "label": item.node.data.short_title }
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
      name : "/writer-services/",
      label : "Writing Services",
      // items : ServicesList
    }  
  ];
  return (
    <>
      <ul className="navbar-nav main-menu d-none d-lg-flex">
        {menuItems.map(
          ({ label, isExternal = false, name, items, ...rest }, index) => {
            const hasSubItems = Array.isArray(items);
            return (
              <React.Fragment key={name + index}>
                {hasSubItems ? (
                  <li className="nav-item dropdown" {...rest}>
                    <a
                      className="nav-link dropdown-toggle gr-toggle-arrow"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      href={name ? name : "#"}
                    >
                      {label}
                      <i className="icon icon-small-down"></i>
                    </a>
                    <DropdownMenuUl className="gr-menu-dropdown dropdown-menu">
                      {items.map((subItem, indexSub) => {
                        const hasInnerSubItems = Array.isArray(subItem.items);
                        return (
                          <React.Fragment key={subItem.name + indexSub}>
                            {hasInnerSubItems ? (
                              <li className="drop-menu-item dropdown">
                                <a
                                  className="dropdown-toggle gr-toggle-arrow"
                                  role="button"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  href="/#"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  {subItem.label}
                                  <i className="icon icon-small-down"></i>
                                </a>
                                <ul className="gr-menu-dropdown dropdown-menu dropdown-right">
                                  {subItem.items.map(
                                    (itemInner, indexInnerMost) => (
                                      <li
                                        className="drop-menu-item"
                                        key={itemInner.name + indexInnerMost}
                                      >
                                        {itemInner.isExternal ? (
                                          <a
                                            href={`${itemInner.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            {itemInner.label}
                                          </a>
                                        ) : (
                                          <Link to={`/${itemInner.name}`}>
                                            {itemInner.label}
                                          </Link>
                                        )}
                                      </li>
                                    )
                                  )}                                  
                                </ul>
                              </li>
                            ) : (
                              <li className="drop-menu-item">
                                {subItem.isExternal ? (
                                  <a
                                    href={`${subItem.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {subItem.label}
                                  </a>
                                ) : (
                                  <Link to={`/${subItem.name}`}>
                                    {subItem.label}
                                  </Link>
                                )}
                              </li>
                            )}
                          </React.Fragment>
                        );
                      })}
                      <li className="drop-menu-item">
                      <Link to ="/writer-services/">All Writer Services</Link>
                      </li>
                    </DropdownMenuUl>
                  </li>
                ) : (
                  <li className="nav-item" {...rest}>
                    {isExternal ? (
                      <a
                        className="nav-link"
                        href={`${name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        className="nav-link"
                        to={`/${name}`}
                        role="button"
                        aria-expanded="false"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                )}
              </React.Fragment>
            );
          }
        )}
      </ul>
    </>
  );
};
export default Menu;
