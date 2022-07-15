import Header from "../../header";
import * as ReactDOM from "react-dom";
import React from "react";
import Hero from "../../pages/home/hero";
import { render, screen } from "@testing-library/react";


describe("Header components test", () => {

  test("renders a name ", () => {
    render(<Header/>)
    const linkElement = screen.getByText(/О компании/i)
    expect(linkElement).toBeInTheDocument()
  })
})
