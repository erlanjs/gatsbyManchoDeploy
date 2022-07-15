<<<<<<< HEAD
import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {

  return (
    <section className="bg-white min-h-[100vh]">
      <div className="bg-[#1F1F1F] ssm:h-[300px] sm:h-[300px] md:h-[350px] lg:h-[350px] xl:h-[300px] xl:h-[300px]">
        <div className="lg:container xl:container xxl:container mx-auto relative ">
          <div className="flex justify-between pt-44">
            <div
              className="w-full z-10 ssm:h-[100vh] ssm::mt-[-70px] sm:mt-[-70px] sm:h-[100vh] md:mt-[-70px] md:h-[100vh] lg:mt-[-70px] lg:h-[100vh] xl:mt-[-70px] xxl:mt-[0px]">
              <h1
                className="text-center ssm:h-[100vh] sm:h-[100vh] md:h-[100vh] lg:h-[100vh] xl:h-[45vh] xxl:h-[50vh] ssm:flex ssm:flex-col sm:flex sm:flex-col md:flex md:mt-[-170x] md:flex-col lg:flex lg:mt-[-170x] lg:flex-col xl:w-[100%] xl:flex xl:flex-row xl:justify-between xxl:flex-row xxl:flex xxl:justify-between xxl:mt-[0px] xxl:w-[126%]">
                <span
                  className=" h-[25%] font-[900] text-[200px] text-black ssm:w-[100%] ssm:text-[120px] sm:text-[140px] sm:w-[100%] md:w-[100%] md:h-[25%] md:text-[180px] lg:w-[100%] lg:text-[180px] xl:w-[50%] xl:text-[190px] xxl:w-[100%] xxl:text-[200px]">D</span>
                <span
                  className=" h-[25%] font-[900] text-[200px] text-black ssm:w-[100%] ssm:text-[120px] sm:text-[140px] sm:w-[100%] md:w-[100%] md:h-[25%] md:text-[180px] lg:w-[100%] lg:text-[180px] xl:w-[50%] xl:text-[190px] xxl:w-[100%] xxl:text-[200px]">E</span>
                <span
                  className=" h-[25%] font-[900] text-[200px] text-black ssm:w-[100%] ssm:text-[120px] sm:text-[140px] sm:w-[100%] md:w-[100%] md:h-[25%] md:text-[180px] lg:w-[100%] lg:text-[180px] xl:w-[50%] xl:text-[190px] xxl:w-[100%] xxl:text-[200px]">V</span>
                <span
                  className=" h-[25%] font-[900] text-[200px] text-white ssm:w-[100%] ssm:text-[120px] ssm:w-[100%] ssm:bg-[#1F1F1F] sm:text-[140px] sm:bg-[#1F1F1F] sm:w-[100%] md:w-[100%] md:bg-[#1F1F1F] md:w-[100%] md:h-[25%] md:text-[180px] lg:w-[100%] lg:bg-[#1F1F1F] lg:text-[180px] xl:w-[100%] xl:bg-transparent xl:text-[200px] xxl:w-[100%] xxl:bg-transparent xxl:text-[200px]">S</span>
              </h1>
              <p
                className="text-white w-[125%] xl:mt-[-5%] xl:pl-[73%] xxl:pl-[96%] xxl:mt-[-25%] ssm:hidden sm:hidden md:hidden lg:hidden xl:block xxl:block">
                <span className="text-black">we</span> are creative</p>
              <div className="ssm:hidden sm:hidden md:hidden lg:hidden xl:block xxl:block">
                <p className="w-[70%] pb-[45px] xl:mt-[5%] xxl:mt-[10%]">
                  Наша миссия — оптимизировать процессы, используя технологии, во благо людей.
                </p>
                <Link to={"/join-us"}>
                  <button className="bg-black py-3 px-5 text-white rounded">
                    Присоединяйся к нам!
                  </button>
                </Link>
              </div>
            </div>
            <div
              className="ssm:w-[170%] sm:w-[170%] md:w-[200%] lg:w-[100%] xl:w-[150%] xxl:w-[100%] top-[-70px] relative z-0">
              <StaticImage
                src={"../../../images/img1.webp"}
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                className="absolute right-0 z-10 ssm:w-[100%] ssm:h-[100vh] sm:w-[100%] sm:h-[100vh] md:w-[100%] md:h-[100vh] lg:w-[100%] lg:h-[100vh] xl:w-[143%] xl:h-[455px] xxl:w-[100%] xxl:h-[555px] "
              />
              <div className="sm:p-1 ssm:block sm:block md:block xl:hidden absolute bottom-[-70px] z-20 md:p-2">
                <p
                  className="z-20 text-white ssm:text-[12px] ssm:font-[500] sm:text-[12px] sm:font-[500] md:text-[16px] md:font-[600] lg:text-[16px] lg:font-[600] ">
                  Наша миссия — оптимизировать процессы, используя технологии, во благо людей.
                </p>
                <Link to={"/join-us"}>
                <button
                  className="mt-6 bg-transparent p-4 text-white  border rounded border-white ssm:w-[100%] sm:w-[100%] ssm:text-[12px] ssm:font-[500] sm:text-[12px] sm:font-[500] md:text-[16px] md:w-[60%] md:font-[600] lg:text-[16px] lg:font-[600] lg:w-[50%]">Присоединяйся
                  к нам!
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
=======
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const Hero = () => {
  return (
    <div className="bg-[#FFFFFF]  min-h-[100vh] relative">
      <div className="bg-[#1F1F1F] w-full h-[280px] absolute" />
      <div
        className="container flex items-start justify-between
           w-full relative ssm:max-w-full sm:max-w-full md:max-w-full
            sm:p-0 md:p-0 sm:flex  md:flex md:items-start md:justify-start xl:max-w-full lg:max-w-full"
      >
        <div className="mt-32 z-30 flex flex-col pr-3">
          <div className=" flexitems-center md:block ssm:block sm:block ssm:pl-2 sm:pl-2 md:pl-10 lg:pl-20 xl:pl-32 xxl:pl-32">
            <h1 className="devs-d font-[900] text-[200px] text-black ssm:m-0  sm:m-0 sm:text-[160px] md:m-0  ">
              D
            </h1>
            <span className="font-[900] text-[200px] text-black ml-20 ssm:m-0 sm:m-0 md:m-0 sm:text-[160px] sm:pt-1">
              E
            </span>
            <span className="font-[900] text-[200px] text-black ml-20 ssm:m-0 sm:m-0 md:m-0 sm:text-[160px]">
              V
            </span>
            <span
              className="font-[900] text-[200px] text-white  absolute left-[675px]
                     ssm:left-0 sm:left-0 sm:bg-[#1F1F1F] sm:px-4  sm:text-[159px] sm:m-0 md:m-0 md:left-0 md:bg-[#1F1F1F] md:px-14"
            >
              S
            </span>
            <span
              className="absolute right-0  left-[638px] top-96 text-xl text-white
                      ssm:hidden sm:hidden md:hidden lg:block xl:block xxl:block"
            >
              <span className="text-black pr-1">we</span> are creative
            </span>
          </div>
          <div className="w-[70%] ssm:hidden pl-56 bg-red-600 sm:hidden md:hidden lg:block xl:block xxl:block">
            <p>
              Наша миссия — оптимизировать процессы, используя технологии, во
              благо людей.
            </p>
            <button className="bg-black p-4 text-white">
              Присоединяйся к нам!
            </button>
          </div>
        </div>

        <div
          className="mt-28 relative md:h-[50%] pl-3 md:w-[89%]
               lg:w-[50%] lg:h-[50%] xl:w-[40%] xl:h-[40px] xxl:h-[10px] xxl:w-[40%]"
        >
          <StaticImage
            src={"../../../images/img1.webp"}
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            className="w-full sm:h-[53rem] md:h-[53rem]
                     md:w-full lg:h-[43rem] xl:h-[30rem] xxl:h-[33rem]"
          />
          <div className="ssm:p-1 ssm:block sm:p-1 sm:block xl:hidden absolute bottom-16 z-40 md:p-2">
            <p className="text-white">
              Наша миссия — оптимизировать процессы, используя технологии, во
              благо людей.
            </p>
            <button className="bg-black p-4 text-white  border rounded border-white">
              Присоединяйся к нам!
            </button>
          </div>
        </div>

        <div className="w-full h-full  relative  md:hidden lg:hidden xl:hidden">
          <StaticImage
            src={"../../../images/eb-mobile.png"}
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt="esen bayke image"
            className="h-[49.2rem] w-full object-contain"
          />
          <div className="ssm:p-2 ssm:block sm:p-2 sm:block xl:hidden absolute bottom-16 z-40">
            <p className="text-white">
              Наша миссия — оптимизировать процессы, используя технологии, во
              благо людей.
            </p>
            <button className="bg-black p-4 text-white border rounded border-white">
              Присоединяйся к нам!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
>>>>>>> a35914570b97ca0773c9317087da48f527bdfd62

export default Hero
