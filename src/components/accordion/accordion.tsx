import React from "react"
import { useState } from "react"

const Accordion = ({
  title,
  info,
}: {
  title: string
  info: string[]
}): JSX.Element => {
  const [openClick, setOpenClick] = useState(false)

  const onClick = () => setOpenClick(prev => !prev)

  return (
    <>
      <div
        data-testid="accordion-active-btn"
        className={`accordion font-semibold text-[14px] md:text-2xl flex justify-between mb-10  ${
          openClick && "active"
            ? "border-b-4 border-emerald-800"
            : "border-b-4 border-white"
        }`}
        onClick={onClick}
      >
        {title} <span className={openClick ? "arrow" : "arrowClose"}>{">"}</span>
      </div>
      {
        <div
          data-testid="accordion-click-active"
          className={openClick ? "accordionOpen" : "accordionClose"}
        >
          <div className="border-b-4 border-white">
            {info.map((el, idx) => (
              <p key={idx} className="text-white font-normal text-sm mb-5">
                ● {el}
              </p>
            ))}
          </div>
        </div>
      }
    </>
  )
}

export default Accordion
