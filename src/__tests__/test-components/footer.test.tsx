import { render, screen } from "@testing-library/react"
import React from "react"

import Footer from "../../components/footer"

describe("Footer components test", () => {
  test("Title", () => {
    render(<Footer />)
    const footerScreen = screen.getByText(/Все права защищены./i)
    expect(footerScreen).toBeInTheDocument()
  })
})
