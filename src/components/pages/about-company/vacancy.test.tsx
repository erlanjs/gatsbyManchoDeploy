import Vacancy from "./vacancy";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";


describe("Vacancy Components Test", () => {
  test("query test", () => {
    render(<Vacancy/>)
    const queryElem = screen.getByText(/Join us/i)
    expect(queryElem).toBeInTheDocument()

  })
  test('Vacancy elements', async () => {
    render(<Vacancy/>)
    const div = await screen.findAllByTestId("vacancy-item");
    expect(div.length).toBe(4)
  });

})
