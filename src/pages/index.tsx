<<<<<<< HEAD
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
=======
import * as React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import About from "../components/pages/home/about"
import AllCommand from "../components/pages/home/all-comand"
import Contact from "../components/pages/home/contact"
import Gallery from "../components/pages/home/gallery"
import HeroTwo from "../components/pages/home/hero-two"
import Process from "../components/pages/home/process"
import Products from "../components/pages/home/products"
import Seo from "../components/seo"

// import "./../../public/index.html";

const IndexPage = () => {
  return (
    <Layout>
      <Seo
        lang="Ru"
        title="Mancho Devs"
        description="Mancho Devs (ОсОО «Прораб») - это стартап, основанный в Бишкеке в феврале 2021 года Эсеном Сагыновым, разработчиком одной из крупнейших компаний в мире ..."
      />
      <HeroTwo />
>>>>>>> a35914570b97ca0773c9317087da48f527bdfd62
      <About />
      <Products />
      <AllCommand />
      <Process />
      <Gallery />
      <Contact />
    </Layout>
<<<<<<< HEAD
);
export default IndexPage;
=======
  )
}

export default IndexPage
>>>>>>> a35914570b97ca0773c9317087da48f527bdfd62
