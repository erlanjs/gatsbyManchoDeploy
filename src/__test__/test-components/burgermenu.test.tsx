import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import * as ReactDOM from "react-dom"

import Burgermenu from "../../components/burgermenu"

describe("Burger menu Components Test", () => {
  test("Active menu", () => {
    render(<Burgermenu />)
    const btn = screen.getByTestId("menu-btn")
    expect(screen.queryByTestId("menu-elem")).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId("menu-elem")).toBeInTheDocument()
  })
})
