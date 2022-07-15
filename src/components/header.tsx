<<<<<<< HEAD
import * as React from "react";
import Burgermenu from "./burgermenu";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
=======
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

import Burgermenu from "./burgermenu"
import AllCommand from "./pages/home/all-comand"
import Contact from "./pages/home/contact"
>>>>>>> a35914570b97ca0773c9317087da48f527bdfd62

const Header = () => (
  <div className="bg-[#1F1F1F] py-5 fixed w-full z-50">
    <div className="container mx-auto flex z-50">
      <div className="w-full flex justify-between">
        <div className="w-full ssm:pt-3 sm:pt-3">
          <Link to={"/"}>
            <StaticImage
              src={"../images/logo.svg"}
              loading="eager"
              quality={95}
              width={200}
              formats={["auto", "webp", "avif"]}
              alt="img"
              className=""
            />
          </Link>
        </div>
        <div className="w-[100%] flex justify-end pt-5 ssm:block sm:block md:block lg:hidden xl:hidden xxl:hidden">
          <Burgermenu />
        </div>
      </div>
      <div className="flex justify-center ssm:hidden sm:hidden md:hidden lg:block lg:w-[150%] xl:block xl:w-[200%] xxl:block xxl:w-[100%]">
        <div className="flex justify-between w-full pt-5">
          <Link
            to={"#About"}
            className="text-white no-underline hover:border-white hover:border-b-2"
          >
            О компании
          </Link>
          <Link
            to={"#Products"}
            className="text-white no-underline hover:border-white hover:border-b-2"
          >
            Продукты
          </Link>
          <Link
            to={"#AllCommand"}
            className="text-white no-underline hover:border-white hover:border-b-2"
          >
            Наша команда
          </Link>
          <Link
            to={"#Contact"}
            className="text-white no-underline hover:border-white hover:border-b-2"
          >
            Контакты
          </Link>
          <Link
            to={"/gallery"}
            className="text-white no-underline hover:border-white hover:border-b-2"
          >
            Галерея
          </Link>
        </div>
      </div>
    </div>
  </div>
<<<<<<< HEAD
);

export default Header;
=======
)

export default Header
>>>>>>> a35914570b97ca0773c9317087da48f527bdfd62
