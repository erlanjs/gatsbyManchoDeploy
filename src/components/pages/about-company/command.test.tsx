import React from "react";
import { render, screen } from "@testing-library/react";
import Command from "./command";

describe("Command components test", () => {
  test("Title query" , async () => {
    render(<Command/>)
    const footerScreen = await screen.findAllByText(/Присоединяйся к команде Mancho Devs!/i)
    expect(footerScreen.length).toBe(2)
  })
})
