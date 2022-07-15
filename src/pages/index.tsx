import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import About from "../components/pages/home/about";
import Products from "../components/pages/home/products";
import AllCommand from "../components/pages/home/all-comand";
import Gallery from "../components/pages/home/gallery";
import Contact from "../components/pages/home/contact";
import Process from "../components/pages/home/process";
import Hero from "../components/pages/home/hero";

const IndexPage = () => (
    <Layout>
      <Seo lang="Ru" title="Mancho Devs" description="Mancho Devs (ОсОО «Прораб») - это стартап, основанный в Бишкеке в феврале 2021 года Эсеном Сагыновым, разработчиком одной из крупнейших компаний в мире ..."/>
      <Hero/>
      <About />
      <Products />
      <AllCommand />
      <Process />
      <Gallery />
      <Contact />
    </Layout>
);
export default IndexPage;
