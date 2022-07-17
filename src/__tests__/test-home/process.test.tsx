import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"

import Process from "../../components/pages/home/process"

describe("Process", () => {
  test("Process query elements", () => {
    render(<Process />)
    const title = screen.getByText(/How we are working?/i)
    expect(title).toBeInTheDocument()
  })
})
