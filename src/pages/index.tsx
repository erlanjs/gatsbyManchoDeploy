import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import About from "../components/pages/home/About";
import Products from "../components/pages/home/Products";
import AllCommand from "../components/pages/home/allComand";
import Gallery from "../components/pages/home/Gallery";
import Contact from "../components/pages/home/Contact";
import Header from "../components/header";
import Process from "../components/pages/home/Process";
import HeroTwo from "../components/pages/home/hero-two";

const IndexPage = () => (
  <Layout>
    <Seo title="Mancho Devs" />
    <HeroTwo />
    <About />
    <Products />
    <AllCommand />
    <Process />
    <Gallery />
    <Contact />
  </Layout>
);

export default IndexPage;
