import Process from "../../pages/home/process"
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";



describe("Process", () => {
  test("Process query elements", () => {
   render(<Process/>)
    const title = screen.getByText(/How we are working?/i)
    expect(title).toBeInTheDocument()
  })
})
