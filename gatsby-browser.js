/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
// You can delete this file if you're not using it
import React from "react"
import { Provider } from "react-redux"

import { setupStore } from "./src/store/store"
import "./src/styles/global.css"

const store = setupStore()

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
