import React from "react";
import { useState } from "react";

const Accordion = ({title, info}: {title:string, info: string[]}): JSX.Element => {
  const [active, setActive] = useState(false);

  const onClick = () => setActive(prev => !prev)

  return (
    <>
      <div data-testid="active-btn"  className={`accordion font-semibold text-[14px] md:text-2xl flex justify-between mb-10  ${active && "active" ? "border-b-4 border-emerald-800" : "border-b-4 border-white"}`} onClick={onClick}>{title} <span className={active ? "arrow" : "arrowClose"}>{">"}</span></div>
      { <div data-testid="active-elem" className={active ? "panel" : "panel-close"}>
        <div className="border-b-4 border-white">
          {
            info.map((el,idx) => (
              <p key={idx} className="text-white font-normal text-sm mb-5">◌ {el}</p>
            ))
          }
        </div>
      </div>}

    </>

  );
};

export default Accordion;
