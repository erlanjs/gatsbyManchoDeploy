import { render, screen } from "@testing-library/react"
import React from "react"
import * as ReactDOM from "react-dom"

import About from "../../components/pages/main-pages/about"

describe("Hero components test", () => {
  let container: HTMLDivElement
  beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
    ReactDOM.render(<About />, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  test("Renders correctly initial document", () => {
    const span = container.querySelectorAll("span")
    expect(span).toHaveLength(2)
  })
  it("query title ", () => {
    render(<About />)
    const title = screen.getAllByText(/Mancho Devs/i)
    expect(title.length).toBe(4)
  })
})
