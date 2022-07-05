import Prosess from "./Prosess"
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";



describe("Prosess", () => {
  test("Prosess query elements", () => {
   render(<Prosess/>)
    const title = screen.getByText(/How we are working?/i)
    expect(title).toBeInTheDocument()
  })
})
