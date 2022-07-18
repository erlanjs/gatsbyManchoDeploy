import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title={"404: Not found"}/>
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="font-bold text-4xl text-black">404</h1> <br/>
      <p className="font-bold text-2xl text-black">Page not found</p>
    </div>
  </Layout>
)

export default NotFoundPage
