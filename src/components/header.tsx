import * as React from "react";
import Burgermenu from "./pages/burgermenu";
import { StaticImage } from "gatsby-plugin-image";


const Header = () => (
  <div className="bg-[#1F1F1F] py-5 fixed w-full z-50">
    <div className="mx-auto ssm:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[80%] xxl:w-[70%] flex justify-between z-50">
      <div className="w-[100%] flex justify-between ">
        <div className="w-[50%]  ssm:pt-3 sm:pt-3">
          <StaticImage
            src={"../images/logo.svg"}
            loading="eager"
            quality={95}
            width={200}
            formats={["auto", "webp", "avif"]}
            alt="img"
            className="" />
        </div>
        <div className="ssm:w-[50%] pt-3 ssm:pl-[40%] sm:pl-[40%] md:pl-[45%]  ssm:block sm:block sm:w-[50%] md:block md:w-[50%] lg:hidden xl:hidden xxl:hidden">
          <Burgermenu />
        </div>
      </div>
      <div className="w-[70%] flex justify-center ssm:hidden sm:hidden md:hidden lg:block xl:block xxl:block">
        <div className="flex justify-between w-full pt-5">
          <a href="#" className="text-white no-underline">О компании</a>
          <a href="#" className="text-white no-underline">Products</a>
          <a href="#" className="text-white no-underline">Наша команда</a>
          <a href="#" className="text-white no-underline">Contacts</a>
        </div>
      </div>
    </div>
  </div>
);


export default Header;
