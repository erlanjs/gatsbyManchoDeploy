import * as React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import Command from "../components/pages/about-company-pages/command"
import FounderSeo from "../components/pages/about-company-pages/founder-seo"
import Vacancy from "../components/pages/about-company-pages/vacancy"
import Сondition from "../components/pages/about-company-pages/Сondition"
import About from "../components/pages/main-pages/about"
import Contact from "../components/pages/main-pages/contact"
import Products from "../components/pages/main-pages/products"
import Seo from "../components/seo"

const SecondPage = () => (
  <>
    <Layout>
      <Seo title={'Mancho Devs'} description={"Если ты хочешь стать частью нашего движения и сделать вклад в улучшение жизни жителей нашей страны, присоединяйся к нам!"} lang={"Ru"}/>
      <Command />
      <About />
      <FounderSeo />
      <Сondition />
      <Vacancy />
      <Contact />
    </Layout>
  </>
)

export default SecondPage
