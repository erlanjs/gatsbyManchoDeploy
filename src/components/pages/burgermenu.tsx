import * as React from "react";
import { useState } from "react";
import {StaticImage} from  "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX , faBars } from "@fortawesome/free-solid-svg-icons";


const Burgermenu = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div>
        <FontAwesomeIcon data-testid="menu-btn" className="text-white text-3xl mb-[10px] text-end"
                         onClick={() => setMenu(true)} icon={faBars}/>
      {menu && (
        <div data-testid="menu-elem" className="menu">
          <div className="menu-block">
            <div className="w-full flex justify-between px-5 mt-10">
              <div className="w-[70%] flex justify-start">
                <StaticImage
                  src={"../../images/black-logo.svg"}
                  loading="eager"
                  quality={95}
                  width={200}
                  formats={["auto", "webp", "avif"]}
                  alt="img"
                  className="w-[140px] h-[33px] object-contain"/>
              </div>
              <FontAwesomeIcon className="text-[#1F1F1F] text-xl  uppercase"
                                    onClick={() => setMenu(false)} icon={faX}/>
            </div>
            <div className="flex justify-between w-full ">
              <div className="bg-white">
                <h1 className="text-9xl h-[70px] font-[900] pl-3">D</h1>
                <h1 className="text-9xl h-[70px] font-[900] pl-3">E</h1>
                <h1 className="text-9xl h-[70px] font-[900] pl-3">V</h1>
                <div className="text-9xl w-[170%] mt-3 pl-4 mr-5 h-[140px] font-[900] text-white bg-[#1F1F1F] flex justify-between">S
                  <div className="flex justify-between w-[70%] bg-[#1F1F1F] flex-wrap">
                  <p className="text-xl w-[26%]">aza</p>
                  <p className="text-xl w-[26%]">aza</p>
                  <p className="text-xl w-[26%]">aza</p>
                  <p className="text-xl w-[26%]">aza</p>
                  <p className="text-xl w-[26%]">aza</p>
                  <p className="text-xl w-[26%]">aza</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between w-[50%] h-[350px]">
                <div className="flex flex-col mt-7 justify-end h-[250px]">
                  <a href="#" className="text-[24px] leading-[40px] text-[#1F1F1F] pb-5 ">home</a>
                  <a href="#" className="text-[24px] leading-[40px] text-[#1F1F1F] pb-5 ">about</a>
                  <a href="#" className="text-[24px] leading-[40px] text-[#1F1F1F] pb-5 ">sign in</a>
                  <a href="#" className="text-[24px] leading-[40px] text-[#1F1F1F] pb-5 ">register</a>
                </div>
                <div className="flex justify-between font-[700]">
                  <p>En</p>
                  <p>Ru</p>
                  <p>Kg</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>

      )}
    </div>
  );
};

export default Burgermenu;
