import About from "../../pages/home/about";
import * as ReactDOM from "react-dom";
import React from "react";
import { render, screen } from "@testing-library/react";


describe("Hero components test", () => {
  let container: HTMLDivElement
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(<About/>, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  test("Renders correctly initial document", () => {
    const span = container.querySelectorAll("span")
    expect(span).toHaveLength(2)
  })
  it("query title " , () => {
    render(<About/>)
    const title = screen.getAllByText(/Mancho Devs/i)
    expect(title.length).toBe(4)
  })
})
