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
// import "./../../public/index.html";

const IndexPage = () => (

    <Layout>
      <Seo title="Mancho Devs" description="Mancho Devs (ОсОО «Прораб») - это стартап, основанный в Бишкеке в феврале 2021 года Эсеном Сагыновым, разработчиком одной из крупнейших компаний в мире ..."/>
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
