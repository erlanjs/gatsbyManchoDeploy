import * as React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import Command from "../components/pages/about-company/command"
import FounderSeo from "../components/pages/about-company/founder-seo"
import Vacancy from "../components/pages/about-company/vacancy"
import Сondition from "../components/pages/about-company/Сondition"
import About from "../components/pages/home/about"
import Contact from "../components/pages/home/contact"
import Products from "../components/pages/home/products"
import Seo from "../components/seo"

const SecondPage = () => (
  <>
    <Layout>
      {/*<Seo title={'Mancho Devs'}/>*/}
      <Command />
      <About />
      <FounderSeo />
      <Products />
      <Сondition />
      <Vacancy />
      <Contact />
    </Layout>
  </>
)

export default SecondPage
