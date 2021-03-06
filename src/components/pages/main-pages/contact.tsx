import React from "react"

const Contact = () => {
  return (
    <section id={"Contact"}>
      <div className="bg-[#1F1F1F] flex pt-12 lg:hidden ">
        <div className="container mx-auto py-5">
          <h1 className="flex text-[100px] font-[700] font-sans text-white ssm:text-4xl sm:text-5xl sm:w-[100%] md:text-6xl  lg:w-[70%] lg:text-7xl">
            <span className="pr-8 hidden sm:hidden md:hidden lg:block xl:block xxl:block">
              Наши
            </span>
            Контакты
          </h1>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="justify-between  items-center hidden lg:flex">
          <h1 className="flex text-[100px] font-[700] font-sans text-black ssm:text-3xl sm:text-4xl sm:w-[100%] md:text-6xl  lg:w-[70%] lg:text-7xl">
            <span className="pr-8 sm:hidden md:hidden lg:block xl:block xxl:block">
              Наши
            </span>
            контакты
          </h1>
          <h1 className="text-2xl text-black font-[600] py-9 ssm:hidden sm:hidden md:hidden lg:block xl:block xxl:block">
            Find <span className="bg-black text-white">us</span>
          </h1>
        </div>

        <div className=" mt-6 flex justify-between  flex-wrap ssm:flex ssm:flex-col ssm:justify-start sm:flex sm:flex-col sm:justify-start md:flex md:flex-row md:justify-center lg:flex lg:flex-row lg:justify-between xl:flex xl:flex-row xxl:flex xxl:flex-row xxl:justify-between">
          <div className="pt-16 w-[40%] ssm:w-[80%] ssm:mt-[-70px] sm:w-[80%] sm:mt-[-70px] md:w-[92%] md:mt-[-70px] lg:w-[50%]  xl:w-[45%] xxl:w-[40%] py-5 ">
            <a href="tel:+996997999222" className="flex items-center">
              <span className="mr-2">
                <i className="fa-solid fa-phone" />
              </span>
              <p className="font-normal text-lg text-black my-5">
                +996 997 999 222
              </p>
            </a>

            <a
              href="mailto:hello@mancho.dev?subject=Feedback&body=Message"
              className="flex items-center"
            >
              <span className="mr-2">
                <i className="fa-solid fa-at" />
              </span>
              <p className="font-normal text-lg text-black my-5">
                hello@mancho.dev
              </p>
            </a>

            <p className="font-normal text-lg text-black my-5">
              Бизнес-центр "MONOLIT", 8 этаж 801 кабинет{" "}
            </p>

            <p className="font-normal text-lg text-black my-5">
              ул. Льва Толстого 36к
            </p>
            <p className="font-normal text-lg text-black my-5">
              г. Бишкек, Кыргызстан
            </p>
            <div className={"my-5 flex"}>
              <a
                href="https://www.facebook.com/ManchoTeam/?hc_ref=ARTZDICEdqkmDEbtR091xp_j5a8uOpvY8tlUasRym1d-Xo0TlinZJAU8_aXcecGgVtY&ref=nf_target&__xts__[0]=68.ARChehutH7ZAp6Z4K_FnbP0PAKw-XRNEnhUZJY7BfRJwnI8D9QHzjHGzGKA5HCHqi5UnqF9mRcQZKKQWlGzTJeFyAAz9KGEgGjhnBO84akvT_VWsO0XYToQtv9B1eP0zh4KnZG7f9cRuaIySfqz9xTUt-c2XZzl80okphxAi0-lwKZJTet4WjPInIiz4DKkOpTRm_9ExI86LOIQZAKX5td5edvdumPGyUTAUJsqv0DJC_eSC2moqSQQkIFTZ-lfw8fE2o7FMffczQcjzFByOhtT6UgJ27TMA5LBkQFMUJTg5npiwaeU1I8uEjxY28BRrmzQALWiByEdIghY8xLMT0vHAn2Cu9FAMqDNhfT6v2pzjIbLaB0oYF_t661IzM3lSSZnK-Q"
                target="_blank"
              >
                <span className="mr-5 text-2xl">
                  <i className="fa-brands fa-facebook-f" />
                </span>
              </a>
              <a
                href="https://kg.linkedin.com/company/manchodevs"
                target="_blank"
              >
                <span className="mr-5 text-2xl">
                  <i className="fa-brands fa-linkedin-in" />
                </span>
              </a>
              <a href="https://t.me/ManchoDevs" target="_blank">
                <span className="mr-5 text-2xl">
                  <i className="fa-brands fa-telegram" />
                </span>
              </a>
              <a href="https://mobile.twitter.com/manchodevs" target="_blank">
                <span className="mr-5 text-2xl">
                  <i className="fa-brands fa-twitter" />
                </span>
              </a>
              <a href="https://www.instagram.com/manchodevs/" target="_blank">
                <span className="mr-5 text-2xl">
                  <i className="fa-brands fa-instagram" />
                </span>
              </a>
              <a href="https://www.youtube.com/c/ManchoDevs" target="_blank">
                <span className="mr-5 text-2xl">
                  <i className="fa-brands fa-youtube" />
                </span>
              </a>
            </div>
          </div>
          <div className="flex justify-center w-6/12 ssm:w-full sm:w-full  md:w-full lg:w-6/12 xl:w-6/12 xxl:w-6/12 ">
            <iframe
              data-testid="products-iframe"
              className=" h-[350px] mb-11 md:h-[450px] lg:h-[400px] ssm:w-full sm:w-full md:w-11/12 lg:w-11/12 xl:w-11/12 xxl:w-11/12"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.3444029749044!2d74.6295538153027!3d42.86557441101973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9798995af17%3A0x85ed1489ef4f572!2sMancho%20Devs!5e0!3m2!1sen!2skg!4v1656332331885!5m2!1sen!2skg"
              width="600"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
