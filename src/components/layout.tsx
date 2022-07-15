/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer";

const Layout = ({ children }:any) => {

  return (
    <>
      <Header />
              <main>{children}</main>
        <Footer/>
    </>
  )
}


export default Layout
