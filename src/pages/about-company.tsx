import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import Header from "../components/header";
import Command from "../components/pages/about-company/command";
import Contact from "../components/pages/home/Contact";
import Products from "../components/pages/home/Products";
import About from "../components/pages/home/About";
import FounderSeo from "../components/pages/about-company/founder-seo";
import Сondition from "../components/pages/about-company/Сondition";
import Vacancy from "../components/pages/about-company/vacancy";


const SecondPage = () => (
  <>
    <Layout>
      <Seo title={'Mancho Devs'}/>
      <Header/>
      <Command/>
      <About/>
      <FounderSeo/>
      <Products/>
      <Сondition/>
      <Vacancy/>
    </Layout>
  </>
)

export default SecondPage
