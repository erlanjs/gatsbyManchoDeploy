import React from "react";
import Accordion from "../../accordion/accordion";
import { accordionBD } from "../../accordion/db";


const Vacancy = () => {
  return (
    <section id={"Vacancy"}>
      <div className="container mx-auto">
        <div className="flex justify-between bg-white items-center ssm:hidden sm:hidden  md:hidden lg:block xl:block xxl:block">
          <div className="flex justify-between items-center leading-0 hidden lg:flex">
            <span className="text-[105px] w-[90%]  text-black pb-[0px] font-[700] lg:w-[90%] lg:text-[90px] lg:pb-[1px] xl:text-[95px] xl:w-[90%] xl:pb-[1px] xxl:text-[100px] xxl:pb-[0.5px]">ВАКАН<span className="bg-[#1F1F1F] pr-[42%] lg:pr-[33%] xl:pr-[30%]  xxl:pr-[42%] text-white pt-[8px] pb-[205px]">СИИ</span></span>
            <span className="font-[600] text-[18px] ">Join us</span>
          </div>
        </div>


        <div>

        </div>
      </div>
      <div className="bg-[#1F1F1F] pb-10">

        <div className="container mx-auto">
          <div className="flex flex-col bg-[#1F1F1F] mt-12 pt-5 items-center ssm:block sm:block md:block lg:hidden xl:hidden xxl:hidden">
            <div className="flex  w-full text-white font-[700] text-[50px]  ssm:text-[30px] sm:text-[40px] md:text-[45px]">
              ВАКА<div className="">НСИИ</div>
            </div>
          </div>
          <div className="text-white pt-10 ">
            {
              accordionBD.map(el => (
                <div data-testid="vacancy-item" key={el.id}>
                  <Accordion title={el.name} info={el.info}/>
                </div>
              ))
            }
            <div className="my-5">
              <h4 className="font-normal text-xl	text-white">Нет подходящей вакансии? Прояви инициативу и отправляй резюме нам на почту: <a href="#" className="text-[#086AD9] pl-5 text-xl	">hire@mancho.dev</a></h4>
            </div>
          </div>


        </div>
      </div>
      {/*<div className="container mx-auto">*/}
      {/*  <div className="py-10 flex justify-between flex-wrap ssm:flex ssm:flex-col ssm:justify-center sm:flex sm:flex-col sm:justify-center md:flex md:flex-row md:justify-center lg:flex lg:flex-row lg:justify-between xl:flex xl:flex-row xxl:flex xxl:flex-row xxl:justify-between">*/}
      {/*    <div className="pt-16 w-[40%] ssm:w-[80%] ssm:mt-[-70px] sm:w-[80%] sm:mt-[-70px] md:w-[92%] md:mt-[-70px] lg:w-[50%]  xl:w-[45%] xxl:w-[40%] py-5 ">*/}
      {/*      <p className="font-[400]">+996 997 999 222</p>*/}
      {/*      <p>hello@mancho.dev</p>*/}
      {/*      <p>Бизнес-центр "MONOLIT", 8 этаж 801 кабинет</p>*/}
      {/*      <p>ул. Льва Толстого 36к</p>*/}
      {/*      <p>г. Бишкек, Кыргызстан</p>*/}
      {/*      <div>*/}
      {/*        aaaa*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="flex justify-center w-6/12 ssm:w-full sm:w-full  md:w-full lg:w-6/12 xl:w-6/12 xxl:w-6/12">*/}
      {/*      <iframe*/}
      {/*        className="ssm:w-full sm:w-full md:w-11/12 lg:w-11/12 xl:w-11/12 xxl:w-11/12"*/}
      {/*        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.3444029749044!2d74.6295538153027!3d42.86557441101973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9798995af17%3A0x85ed1489ef4f572!2sMancho%20Devs!5e0!3m2!1sen!2skg!4v1656332331885!5m2!1sen!2skg"*/}
      {/*        width="600" height="450" style={{border:0}}  loading="lazy"*/}
      {/*        referrerPolicy="no-referrer-when-downgrade">*/}
      {/*      </iframe>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </section>
  );
};

export default Vacancy;
