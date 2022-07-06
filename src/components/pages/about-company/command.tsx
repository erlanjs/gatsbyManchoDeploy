import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Command = (): JSX.Element => {
  return (
    <div className="bg-[#FFFFFF] pb-[240px] ssm:mb-[260px] sm:mb-[260px] md:mb-[440px] lg:mb-[140px] xl:mb-[170px] xxl:mb-[260px]">
      <div className="bg-[#1F1F1F] w-full h-[180px] ssm:h-[220px] sm:h-[220px] md:h-[200px] lg:h-[280px]  xl:h-[280px] xxl:h-[280px]">
        <div className="container mx-auto">
          <div className="flex justify-between ssm:flex ssm:flex-col sm:flex sm:flex-col md:flex-col lg:flex-row xl:flex-row xxl:flex-row">
            <div className=" w-[100%] mt-[60px] block  lg:hidden xl:hidden xxl:hidden">
              <p className="font-black text-[21px] text-white mt-[90px]">Присоединяйся к команде Mancho Devs!</p>
              <p className="font-[500] text-[12px] text-black ssm:mt-3 sm:mt-3 md:mt-10">Мы всегда в поисках талантливых людей, готовых работать над сложными и интересными задачами вместе с нами</p>
              <button className="rounded py-2 px-4 border-[2px] mt-5 border-black text-[11px] font-[700] text-black">Открытые вакансии</button>
            </div>
            <div className="pt-72 w-[50%] hidden lg:block xl:block xxl:block">
              <p className="font-[900] text-[34px] ">Присоединяйся к команде Mancho Devs!</p>
              <p className="font-[700] my-12 text-[15px]">Мы всегда в поисках талантливых людей, готовых работать над сложными и интересными задачами вместе с нами</p>
              <button className="rounded py-3 px-6 border-[3px] border-black text-[12px] font-[700]">Открытые вакансии</button>
            </div>

            <div className="w-[50%] bg-[#1F1F1F] mt-44 ssm:w-[100%] ssm:mt-10  sm:w-[100%] sm:mt-10 md:w-[100%] md:mt-10 lg:w-[50%] lg:mt-44 xl:w-[50%] xl:mt-44 xxl:w-[50%] xxl:mt-44">
              <StaticImage
                src={'../../../images/mancho_devs.png'}
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                className="w-full h-full"
              />
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Command;
