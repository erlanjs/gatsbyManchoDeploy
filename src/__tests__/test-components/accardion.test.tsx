import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import Accordion from "../../components/accordion/accordion";



test('Accordion CLICK event', () => {
  const {container} = render(<Accordion title={""} info={[""]}/>)

  const accordionActiveBtn = screen.queryByTestId("accordion-active-btn")
  const accordionOpen = container.getElementsByClassName('accordionOpen');
  const accordionClose = container.getElementsByClassName('accordionClose');

  expect(accordionOpen.length).toBe(0)
  expect(accordionClose.length).toBe(1)

  // @ts-ignore
  fireEvent.click(accordionActiveBtn)

  expect(accordionClose.length).toBe(0)
  expect(accordionOpen.length).toBe(1)
});
