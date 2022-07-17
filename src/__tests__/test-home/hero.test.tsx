import React from "react"
import * as ReactDOM from "react-dom"

import Hero from "../../components/pages/home/hero"

describe("Hero components test", () => {
  let container: HTMLDivElement
  beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
    ReactDOM.render(<Hero />, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  test("Renders correctly initial document", () => {
    const buttons = container.querySelectorAll("button")
    expect(buttons).toHaveLength(3)
  })
})
