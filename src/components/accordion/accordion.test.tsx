import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import * as ReactDOM from "react-dom";
import Accordion from "./accordion";

test('Accordion CLICK event', () => {
 render(<Accordion title={""} info={[""]}/>)
  const btn = screen.getByTestId("active-btn");
  expect(screen.queryByTestId("active-elem")).toBeNull()
 fireEvent.click(btn)
  expect(screen.queryByTestId("active-elem")).toBeInTheDocument()
});
