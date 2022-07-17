import { render, screen } from "@testing-library/react"
import React from "react"

import Сondition from "../../components/pages/about-company/Сondition"

describe("Сondition components test", () => {
  test("Title query", () => {
    render(<Сondition />)
    const footerScreen = screen.getByText(/Our terms/i)
    expect(footerScreen).toBeInTheDocument()
  })

  test("Description query", () => {
    render(<Сondition />)
    const footerScreen = screen.getByText(
      /Мы ценим труд каждого и стремимся создавать всё лучшие рабочие условия/i
    )
    expect(footerScreen).toBeInTheDocument()
  })
})
