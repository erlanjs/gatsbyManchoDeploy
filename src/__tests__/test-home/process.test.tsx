import {render, screen } from "@testing-library/react"
import React from "react"

import Process from "../../components/pages/home/process"

describe("Process", () => {
  const {container} = render(<Process />)
  test("Process query elements", () => {
    const title = screen.getByText(/How we are working?/i)
    expect(title).toBeInTheDocument()
  })
  test("number of h1 tag", () => {
    const tagTitleH1 = container.getElementsByTagName('h1')
    expect(tagTitleH1.length).toBe(1)
    screen.debug()
  })
  test("number of h4 tag", () => {
    const tagTitleH4 = container.getElementsByTagName('h4')
    expect(tagTitleH4.length).toBe(1)
  })
  test("number of h5 tag", () => {
    const tagTitleH5 = container.getElementsByTagName('h5')
    expect(tagTitleH5.length).toBe(13)
  })
  test("number of div tag", () => {
    const tagDiv = container.getElementsByTagName('div')
    expect(tagDiv.length).toBe(37)
  })
})
