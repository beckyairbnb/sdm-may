import React from "react";
import { GlobalProvider } from "./src/context/GlobalContext";
import Layout from "./src/components/Layout";

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
);

export const onPreRenderHTML = ({ pathname, getHeadComponents, replaceHeadComponents }) => {
  if (pathname !== '/calculator/') return

  const headComponents = getHeadComponents()

  headComponents.filter(c => {
    console.log("All Plugins", c)
  }
  )
  // plugins often have identifiable props such as 'key' or 'id', or in worse cases, try matching 'href' or 'src'
  headComponents.filter(c => c.key !== 'gatsby-plugin-crisp-chat')
  replaceHeadComponents(headComponents)
}
