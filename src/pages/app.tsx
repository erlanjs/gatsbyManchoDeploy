import { Router as MyRouter } from "@reach/router"
import React from "react"

import { GalleryElements } from "../modules/GalleryElements"

const Router = () => {
  return (
    <MyRouter>
      <GalleryElements path="/app/gallery/:results" />
    </MyRouter>
  )
}

export default Router
