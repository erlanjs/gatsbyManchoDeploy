// import "./../../public/index.html";
// @ts-ignore
import AOS from "aos"
import * as React from "react"
import { useEffect } from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import About from "../components/pages/main-pages/about"
import AllCommand from "../components/pages/main-pages/all-comand"
import Contact from "../components/pages/main-pages/contact"
import Gallery from "../components/pages/main-pages/gallery"
import Hero from "../components/pages/main-pages/hero"
import HeroTwo from "../components/pages/main-pages/hero-two"
import Process from "../components/pages/main-pages/process"
import Products from "../components/pages/main-pages/products"
import Seo from "../components/seo"

const IndexPage = () => {
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);

  return (
    <Layout>
      <Seo
        lang="Ru"
        title="Mancho Devs"
        description="Mancho Devs (ОсОО «Прораб») - это стартап, основанный в Бишкеке в феврале 2021 года Эсеном Сагыновым, разработчиком одной из крупнейших компаний в мире ..."
      />
      {/*<HeroTwo />*/}
      <Hero />
      <About />
      <Products />
      <AllCommand />
      <Process />
      <Gallery />
      <Contact />
    </Layout>
  )
}

export default IndexPage
