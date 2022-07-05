import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Contact from "./Contact";


describe("Contact", () => {
  test("iframe test", () => {
    render(<Contact/>)
    const iframe = screen.getByTestId("products-iframe");
    expect(iframe).toHaveStyle(`border: 0`)
  })

})
