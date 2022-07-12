import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../footer";

describe("Footer components test", () => {
  test("Title" , () => {
    render(<Footer/>)
    const footerScreen = screen.getByText(/Все права защищены./i)
    expect(footerScreen).toBeInTheDocument()
  })
})
