import React from "react";

const Contact = () => {
  return (
    <section className="py-10 p-3">
      <div className="container mx-auto">
          <div className="flex justify-between align-middle items-end">
            <h1 className="flex text-[100px] font-[700] font-sans text-black ssm:text-3xl sm:text-4xl sm:w-[100%] md:text-6xl  lg:w-[70%] lg:text-7xl"><span className="pr-8 sm:hidden md:hidden lg:block xl:block xxl:block">Наши</span>контакты</h1>
            <p className="text-2xl text-black font-[600] py-9 ssm:hidden sm:hidden md:hidden lg:block xl:block xxl:block">Find <span className="bg-black text-white">us</span></p>
          </div>

        <div className="flex justify-between flex-wrap ssm:flex ssm:flex-col ssm:justify-center sm:flex sm:flex-col sm:justify-center md:flex md:flex-row md:justify-center lg:flex lg:flex-row lg:justify-between xl:flex xl:flex-row xxl:flex xxl:flex-row xxl:justify-between">
          <div className="pt-16 w-[40%] ssm:w-[80%] ssm:mt-[-70px] sm:w-[80%] sm:mt-[-70px] md:w-[92%] md:mt-[-70px] lg:w-[50%]  xl:w-[45%] xxl:w-[40%] py-5 ">
            <p className="font-[400]">+996 997 999 222</p>
            <p>hello@mancho.dev</p>
            <p>Бизнес-центр "MONOLIT", 8 этаж 801 кабинет</p>
            <p>ул. Льва Толстого 36к</p>
            <p>г. Бишкек, Кыргызстан</p>
            <div>
              aaaa
            </div>
          </div>
          <div className="flex justify-center w-6/12 ssm:w-full sm:w-full  md:w-full lg:w-6/12 xl:w-6/12 xxl:w-6/12">
            <iframe
              data-testid="products-iframe"
              className="ssm:w-full sm:w-full md:w-11/12 lg:w-11/12 xl:w-11/12 xxl:w-11/12"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.3444029749044!2d74.6295538153027!3d42.86557441101973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9798995af17%3A0x85ed1489ef4f572!2sMancho%20Devs!5e0!3m2!1sen!2skg!4v1656332331885!5m2!1sen!2skg"
              width="600" height="450" style={{border:0}}  loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
