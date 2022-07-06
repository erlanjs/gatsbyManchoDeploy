import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import Header from "../components/header";
import Command from "../components/pages/about-company/command";
import Products from "../components/pages/home/Products";
import About from "../components/pages/home/About";
import FounderSeo from "../components/pages/about-company/founder-seo";
import Сondition from "../components/pages/about-company/Сondition";
import Vacancy from "../components/pages/about-company/vacancy";
import Contact from "../components/pages/home/Contact";


const SecondPage = () => (
  <>
    <Layout>
      {/*<Seo title={'Mancho Devs'}/>*/}
      <Command/>
      <About/>
      <FounderSeo/>
      <Products/>
      <Сondition/>
      <Vacancy/>
      <Contact/>
    </Layout>
  </>
)

export default SecondPage
