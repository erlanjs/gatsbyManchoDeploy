import Gallery from "./Gallery";
import {render, screen } from "@testing-library/react";
import React from "react";


describe("Gallery components test", () => {
 test("Query title", () => {
   render(<Gallery/>)
   const title = screen.getByText(/Присоединяйся к команде Mancho Devs!/i)
   expect(title).toBeInTheDocument()
 })
})
