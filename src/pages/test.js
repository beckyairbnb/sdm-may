import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/about/Hero";
import Masonry from "../sections/about/Masonry";
import Content from "../sections/about/Content";
import Team from "../sections/about/Team";
import Stats from "../sections/about/Stats";

const Test = () => {
  return (
    <>
        <Masonry />
        <Content />
        <Team />
        <Stats />
    </>
  );
};
export default Test;
