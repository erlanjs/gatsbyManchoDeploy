import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"

import Contact from "../../components/pages/main-pages/contact"

describe("Contact", () => {
  test("iframe test", () => {
    render(<Contact />)
    const iframe = screen.getByTestId("products-iframe")
    expect(iframe).toHaveStyle(`border: 0`)
  })
})
