import React from "react";
import { render, screen } from "@testing-library/react";
import AllCommand from "../../components/pages/home/all-comand";


describe("AllCommand Components test", () => {
  test("query title", () => {
    render(<AllCommand/>)
    const title = screen.getByText(/команда/i)
    expect(title).toBeInTheDocument()
  })
  test('AllCommand elements lenght', async () => {
    render(<AllCommand/>)
    const div = await screen.findAllByTestId("AllCommand-elem");
    expect(div.length).toBe(13)
  });
})
