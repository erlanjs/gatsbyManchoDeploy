import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const About = (): JSX.Element => {

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex pt-[22px] font-[700] mb-[20px] text-[#1F1F1F] ssm:text-[40px] sm:text-[39px] md:text-7xl lg:text-8\ xl:text-8xl  xxl:text-8xl">О компан<div className="bg-[#1F1F1F]  h-[5rem] text-white sm:h-[5rem] md:h-[100px] lg:h-[rem] xl:h-[rem] xxl:h-[9rem] ">ии</div>
          </div>
          <p className="font-[600] text-[33px] ssm:hidden sm:hidden md:hidden lg:block xl:block xxl:block">who a<span className=" bg-[#1F1F1F] text-white py-[3rem]">re we?</span></p>
        </div>
      </div>
      <div className="container mx-auto ">
        <div className="flex justify-between ssm:flex ssm:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row xxl:flex-row">
          <div className="bg-[#1F1F1F] w-[50%] flex justify-center ssm:w-full sm:w-full md:w-full lg:w-full lg:py-3 xl:w-[50%] xl:pt-[55px] xxl:w-[50%] xxl:pt-[55px]">
            <StaticImage
              src={'../../../images/about_img.png'}
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              className="w-9/12 ssm:w-full ssm:h-[200px] sm:w-full sm:h-[190px] md:w-full md:h-[380px] lg:w-10/12  lg:h-[440px] xl:full xl:h-[360px] xxl:9/12 xxl:h-[360px]"/>
          </div>
          <div className="w-[50%] flex justify-center ssm:w-full sm:w-full md:w-full lg:w-full xl:w-[50%] xxl:w-[50%]">
            <div className="w-[80%]">
              <p className="my-12">
                <span className="font-[700] text-[22px] pl-2">Mancho Devs</span> (ОсОО «Прораб») - это стартап, основанный в Бишкеке в феврале 2021 года Эсеном Сагыновым,
                разработчиком одной из крупнейших компаний в мире - Amazon.
              </p>

              <p className="my-12">
                В Mancho Devs работают 18 человек одновременно над тремя разными продуктами и это количество очень быстро
                растёт! Мы не разрабатываем ни для кого, мы создаём свои продукты, которые выводим на рынок.
              </p>

              <p className="my-12">
                Если ты хочешь стать частью нашего движения и сделать вклад в улучшение жизни жителей нашей страны,
                присоединяйся к нам!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
