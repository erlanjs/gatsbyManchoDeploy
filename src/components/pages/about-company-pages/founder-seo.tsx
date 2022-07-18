import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import { media } from "../../UI-components/mediaScreen/media"

const FounderSeo = () => {
  return (
    <section>
      <div className="bg-[#1F1F1F] pb-10 mt-24">
        <div className="container mx-auto w-full ">
          <div className="flex justify-between bg-white items-center ssm:hidden sm:hidden  md:hidden lg:block xl:block xxl:block">
            <div className="bg-white flex justify-between items-center leading-0 hidden xxl:flex">
              <span className="text-[105px] text-white bg-[#1F1F1F] pb-[0px] font-[700] lg:text-[90px] lg:pb-[1px] xl:text-[95px] xl:pb-[1px] xxl:text-[100px] xxl:pb-[0.5px]">
                ЭСЕН СА
                <span className="text-black py-[20px] bg-white">ГЫНОВ</span>
              </span>
              <span className="font-[600] text-[17px]">
                Founder &{" "}
                <span className="bg-[#1F1F1F]text-white py-[91px]"> CEO</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col bg-white items-center ssm:block sm:block md:block lg:block xl:block xxl:hidden">
            <div className="flex justify-between bg-[#1F1F1F] text-white font-[700] text-[55px] mb-[-50px] ssm:text-[50px] sm:text-[50px] md:text-[55px]">
              ЭСЕН<div className="text-[15px] pt-10">Founder & CEO </div>
            </div>
            <p className="bg-[#1F1F1F] text-white text-[50px] font-[700] pt-12 ssm:text-[48px] sm:text-[48px] md:text-[55px]">
              САГЫНОВ
            </p>
          </div>
          <div className="flex justify-between  text-white ssm:flex ssm:flex-col sm:flex sm:flex-col md:flex-col lg:flex-row xl:flex-row xxl:flex-row ">
            <div className="w-[48%] ssm:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[48%] xxl:w-[48%] p-3">
              <p style={{ marginTop: media(0, 50) }}>
                {" "}
                В Mancho Devs работают{" "}
                <span className="font-[700]">18 человек</span> одновременно над{" "}
                <span className="font-[700]">тремя разными продуктами</span> и
                это количество очень быстро растёт!
              </p>
              <p className="pb-5 pt-[60px] ssm:pt-[10px] sm:pt-[10px] md:pt-[20px] lg:pt-[40px] xl:pt-[50px] xxl:pt-[60px]">
                {" "}
                Более того,{" "}
                <span className="font-[700]">присоединившись к нам</span>, у
                тебя будет возможность поработать бок о бок с Эсеном Сагыновым,
                разносторонним программистом с Амазон, который непосредственно
                участвует в разработке автомасштабирования AWS
              </p>
            </div>
            <div className="w-[61%] bg-[#1F1F1F] ssm:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[58%] xxl:w-[61%]">
              <StaticImage
                src={"../../../images/esen-sagynov.png"}
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="no img"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default FounderSeo
