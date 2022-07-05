import React from "react";
import { useState } from "react";

const Accordion = ({title, info}: {title:string, info: string[]}): JSX.Element => {
  const [active, setActive] = useState(false);

  const onClick = () => setActive(prev => !prev)

  return (
    <>
      <div data-testid="active-btn"  className={`accordion font-semibold text-xl flex justify-between mb-10  ${active && "active" ? "border-b-4 border-emerald-800" : "border-b-4 border-white"}`} onClick={onClick}>{title} <span className={active ? "arrow" : "arrowClose"}>{">"}</span></div>
      {active && <div data-testid="active-elem" className={ "panel"}>
        <div className="border-b-4 border-white">
          {
            info.map((el,idx) => (
              <p key={idx} className="text-white font-normal text-lg">{el}</p>
            ))
          }
        </div>
      </div>}

    </>

  );
};

export default Accordion;
