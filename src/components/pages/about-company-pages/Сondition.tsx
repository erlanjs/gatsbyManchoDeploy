import { StaticImage } from "gatsby-plugin-image"
import React from "react"

// @ts-ignore
import bg from "../../../images/condition-bg.png"

const Сondition = (): JSX.Element => {
  return (
    <section>
      <div className="bg-[#1F1F1F] pt-24   lg:pb-0 xl:pb-5">
        <div className="container mx-auto">
          <div className="text-end hidden xl:block">
            <h4 className="text-3xl	text-white font-semibold">Our terms</h4>
          </div>
          <div className="">
            <h1 className="text-8xl	text-white font-bold hidden lg:text-8xl md:text-6xl sm:text-4xl xl:block">
              УСЛОВИЯ РАБОТЫ
            </h1>
            <h1 className="text-8xl	text-white pb-3 font-bold block ssm:text-5xl lg:text-8xl md:text-6xl sm:text-5xl xl:hidden">
              УСЛОВИЯ
            </h1>
            <p className="text-3xl text-white font-normal max-w-[800px] hidden xl:block">
              Мы ценим труд каждого и стремимся создавать всё лучшие рабочие
              условия
            </p>
          </div>
        </div>
      </div>
      <div
        className="min-h-[250px]"
        style={{ background: `url(${bg}) no-repeat` }}
      >
        <div className="container mx-auto">
          <h1 className="text-8xl	text-black mt-[0px] font-bold block ssm:text-5xl lg:text-8xl md:text-6xl sm:text-5xl xl:hidden">
            РАБОТЫ
          </h1>
          <div className="mt-5 ">
            <div className="flex flex-wrap-reverse justify-between">
              <div className="block my-5 max-w-[420px] text-end lg:text-start">
                <StaticImage src={"../../../images/podarok.svg"} alt={""} />
                <h4 className="text-black font-semibold text-2xl my-5">
                  Компенсация участия в конференциях
                </h4>
                <p className="text-black font-light text-[15px]">
                  Помимо того, что ты будешь работать в потрясающей команде без
                  токсичной атмосферы и культуры (что очень важно), мы готовы
                  вкладывать в твоё образование путём компенсации участия в
                  конференциях.
                </p>
              </div>
              <div className="block my-5 max-w-[420px]">
                <StaticImage src={"../../../images/clock.svg"} alt={""} />
                <h4 className="text-black font-semibold text-2xl my-5">
                  Гибкий график работы
                </h4>
                <p className="text-black font-light text-[15px]">
                  Обеспечение здорового баланса между личной и профессиональной
                  жизнью имеет решающее значение для счастья и успеха на работе.
                  Поэтому мы рады предложить гибкий график, чтобы ты смог вести
                  более продуктивную и сбалансированную жизнь.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap-reverse justify-between">
              <div className="block my-5 max-w-[420px] text-end lg:text-start">
                <StaticImage src={"../../../images/star.svg"} alt={""} />
                <h4 className="text-black font-semibold text-2xl my-5">
                  Нет бюрократии
                </h4>
                <p className="text-black font-light text-[15px]">
                  Мы работаем очень быстро. Никакой бюрократии и максимально
                  адекватное руководство с прозрачным процессом принятия
                  решений.
                </p>
              </div>
              <div className="block my-5 max-w-[420px] ">
                <StaticImage src={"../../../images/wifi.svg"} alt={""} />
                <h4 className="text-black font-semibold text-2xl my-5">
                  Комфортный офис
                </h4>
                <p className="text-black font-light text-[15px]">
                  У нас достаточно просторный офис в 5 микрорайоне города Бишкек
                  со всеми условиями для комфортной работы и постоянной
                  поддержкой в виде снэков, напитков, фруктов и перекусов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Сondition
