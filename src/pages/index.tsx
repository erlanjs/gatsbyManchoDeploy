// import "./../../public/index.html";
// @ts-ignore
import AOS from "aos"
import * as React from "react"
import { useEffect } from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import About from "../components/pages/home/about"
import AllCommand from "../components/pages/home/all-comand"
import Contact from "../components/pages/home/contact"
import Gallery from "../components/pages/home/gallery"
import Hero from "../components/pages/home/hero"
import HeroTwo from "../components/pages/home/hero-two"
import Process from "../components/pages/home/process"
import Products from "../components/pages/home/products"
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
