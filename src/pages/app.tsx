import { Router as MyRouter } from "@reach/router"
import React from "react"

import { RandomPerson } from "../modules/RandomPerson"

const Router = () => {
  return (
    <MyRouter>
      <RandomPerson path="/app/gallery/:results" />
    </MyRouter>
  )
}

export default Router
