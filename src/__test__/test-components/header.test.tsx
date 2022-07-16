import { render, screen } from "@testing-library/react"
import React from "react"
import * as ReactDOM from "react-dom"

import Header from "../../components/header"
import Hero from "../../components/pages/home/hero"

describe("Header components test", () => {
  test("renders a name ", () => {
    render(<Header />)
    const linkElement = screen.getByText(/О компании/i)
    expect(linkElement).toBeInTheDocument()
  })
})
