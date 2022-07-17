import { render, screen } from "@testing-library/react"
import React from "react"

import Header from "../../components/header"

describe("Header components test", () => {
  test("renders a name ", () => {
    render(<Header />)
    const linkElement = screen.getByText(/О компании/i)
    expect(linkElement).toBeInTheDocument()
  })
})
