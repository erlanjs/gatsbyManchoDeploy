import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import * as ReactDOM from "react-dom"

import Burgermenu from "../../components/burgermenu"

describe("Burger menu Components Test", () => {
  test("Active menu", () => {
    render(<Burgermenu />)

    const openMenuBtn = screen.getByTestId("openMenu-btn")
    expect(screen.queryByTestId("menu-elements")).toBeNull()

    fireEvent.click(openMenuBtn)

    expect(screen.queryByTestId("menu-elements")).toBeInTheDocument()
  })
})
