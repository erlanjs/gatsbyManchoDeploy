import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const About = (): JSX.Element => {

  return (
    <section id="About">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className=" flex font-[700] mb-[20px] text-[#1F1F1F] ssm:text-[40px] sm:text-[39px] md:text-[70px] lg:text-[100px] xl:text-[92px]  xxl:text-[120px]">О компан<div className="bg-[#1F1F1F] h-[5rem] text-white sm:h-[4rem] md:h-[110px] lg:h-[140px] xl:h-[150px] xxl:h-[170px] ">ии</div></div>
          <p className="font-[600] text-[33px] hidden lg:block lg:mt-[-18px]">who a<span className=" bg-[#1F1F1F] text-white py-[3rem]">re we?</span></p>
        </div>
      </div>
      <div className="container mx-auto xl:mt-[-21px] xxl:mt-[-29px]  ">
        <div className="flex justify-between ssm:flex ssm:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-col-reverse xl:flex-row xxl:flex-row">
          <div className="bg-[#1F1F1F] w-[50%] flex justify-center ssm:w-full sm:w-full md:w-full lg:w-full lg:py-3 lg:pb-11 lg:mt-16 xl:mt-0 xl:w-[50%] xl:h-[460px] xl:pt-[55px] xxl:w-[50%] xxl:pt-[55px] xxl:ml-1">
            <StaticImage
              src={'../../../images/about_img.HEIC'}
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              className="w-9/12 ssm:w-full ssm:h-[200px] sm:w-full sm:h-[190px] md:w-full md:h-[380px] lg:w-[90%] lg:mt-[-50px]  lg:h-[440px] xl:mt-0 xl:full xl:h-[360px] xxl:9/12 xxl:h-[360px]"/>
          </div>
          <div className=" flex justify-start w-full xl:justify-center xl:w-[50%] xxl:w-[50%]">
            <div className="w-[100%] xl:w-[80%]">
              <p className="my-12 text-[15px]">
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
