import Hero from "../../pages/home/hero";
import * as ReactDOM from "react-dom";
import React from "react";


describe("Hero components test", () => {
  let container: HTMLDivElement
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(<Hero/>, container)
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
