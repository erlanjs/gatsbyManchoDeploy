import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Gallery = () => {
  return (
    <section className="">
      <div className=" py-10 bg-white ssm:bg-[#1F1F1F] ssm:py-[1px] sm:bg-[#1F1F1F] sm:py-[70px] md:bg-[#1F1F1F] md:py-1 lg:bg-white lg:py-2 xl:bg-white xl:py2  xxl:bg-white xxl:py-5">
        <div className="bg-[#1F1F1F] pt-5 pb-40 ssm:pt-1 sm:pt-1 md:pt-1 lg:pt-3 xl:pt-4 xxl:pt-5 ">
          <div className="flex items-center justify-between  container mx-auto">
            <div className="flex text-[100px] font-[700] font-sans text-white ssm:text-4xl sm:text-4xl sm:w-[100%] md:text-6xl  lg:w-[70%] lg:text-7xl xl:text-8xl xxl:text-8xl">
              Галер
              <div className="bg-white h-[5rem] text-white ssm:h-[3rem] sm:h-[3rem] md:h-[5rem] bg-white lg:h-[100px] xl:h-[110px] xxl:h-[120px] text-[#1F1F1F]">
                ея
              </div>
            </div>
            <a className="font-[600] text-3xl text-white ssm:hidden sm:hidden md:hidden lg:block xl:block xxl:block">
              see all photos
            </a>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex justify-between h-full mt-[-140px] ssm:flex ssm:flex-col sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row ">
            <div className="px-2.5 w-full">
              <StaticImage
                src={"../../../images/gallery_img_1.jpeg"}
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="images"
                className="w-[100%] h-[398px] my-2 ssm:h-[187px] sm:h-[287px] md:h-[329px]"
              />
              <div className="mt-[-50px] lg:mt-[-40px] mb-[50px]">
                <h1 className="font-[900] text-black text-2xl pt-20 ssm:text-white sm:text-white md:text-white lg:text-black xl:text-black xxl:text-black">
                  Присоединяйся к команде Mancho Devs!
                </h1>
                <p className="font-[300] text-[#1F1F1F] mt-3 text-[15px] ssm:text-white sm:text-white md:text-white lg:text-black xl:text-[#1F1F1F] xxl:text-[#1F1F1F]">
                  Мы всегда в поисках талантливых людей, готовых работать над
                  сложными и интересными задачами вместе с нами
                </p>
                <div className="my-4">
                  <Link to={"/join-us"}>
                    <button className="bg-black px-8 py-3 rounded text-white font-[700] text-[12px] ssm:bg-white ssm:text-black sm:bg-white sm:text-black md:bg-white md:text-black lg:bg-black lg:text-white xl:bg-black xl:text-white xxl:bg-black xxl:bg-black">
                      Присоединяйся к нам!
                    </button>
                  </Link>
                  <div className="hidden lg:block">
                    <Link to={"/gallery"}>
                      <button className="bg-none px-8 py-3 border-2 border-black rounded text-black font-[700] text-[12px] mt-5">
                        Больше фотографий из жизни компании
                      </button>
                    </Link>
                  </div>

                  <span></span>
                </div>
              </div>
            </div>

            <div className="px-2.5 w-full">
              <StaticImage
                src={"../../../images/gallery_img_2.jpg"}
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="images"
                className="w-[100%] h-[258px] my-2 ssm:h-[187px] sm:h-[287px] md:h-[329px]"
              />
              <StaticImage
                src={"../../../images/gallery_img_3.HEIC"}
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="images"
                className="w-[100%] h-[535px] my-2 ssm:h-[187px] sm:h-[287px] md:h-[329px]"
              />
            </div>

            <div className="px-2.5 w-full">
              <StaticImage
                src={"../../../images/gallery_img_44.jpg"}
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="images"
                className="w-[100%] h-[258px] my-2 ssm:h-[187px] sm:h-[287px] md:h-[329px]"
              />
              <StaticImage
                src={"../../../images/gallery_img_4.jpg"}
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="images"
                className="w-[100%] h-[258px] my-2 ssm:h-[187px] sm:h-[287px] md:h-[329px]"
              />
              <StaticImage
                src={"../../../images/gallery_img_5.jpg"}
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="images"
                className="w-[100%] block  h-[258px] my-2 ssm:h-[187px] sm:h-[287px] md:h-[329px] lg:hidden"
              />
            </div>
          </div>
          <div className="text-center block lg:hidden">
            <Link to={"/gallery"}>
              <button className="py-3 px-5 bg-none border-2 border-white text-white mt-8 font-semibold ">
                Больше фотографий из жизни компании
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Gallery
