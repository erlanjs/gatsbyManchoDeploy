import { render, screen } from "@testing-library/react"
import React from "react"

import Products from "../../components/pages/home/products"

describe("Products Components test", () => {
  test("Medcheck test", () => {
    render(<Products />)
    const title = screen.getAllByText(/Medcheck/i)
    expect(title).toHaveLength(2)
  })
  test("CarGo test", () => {
    render(<Products />)
    const title = screen.getAllByText(/CarGo/i)
    expect(title).toHaveLength(3)
  })
  test("Depo test", () => {
    render(<Products />)
    const title = screen.getAllByText(/Depo/i)
    expect(title).toHaveLength(2)
  })
})
