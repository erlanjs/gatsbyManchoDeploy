import React from "react"

// @ts-ignore
import bg from "../../../images/products-bg.png"

const Process = (): JSX.Element => {
  return (
    <section>
      <div className="bg-[#1F1F1F]  pt-24 pb-1 lg:pb-5">
        <div className="container mx-auto w-full">
          <div className="text-end hidden xl:block">
            <h4 className="text-3xl	text-white font-semibold">
              How we are working?
            </h4>
          </div>
          <div className="">
            <h1 className="text-8xl	text-white font-bold lg:text-7xl md:text-6xl sm:text-4xl">
              Процесс создания
            </h1>
            <p className="text-2xl my-4  text-white font-normal max-w-[800px] hidden md:block">
              Для достижения своих целей мы используем передовые технологии и
              методологии. В нашем арсенале:
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ background: `url(${bg}) no-repeat left/contain fixed` }}
        className="py-8"
      >
        <div className="container mx-auto w-full  ">
          <p className="text-lg text-black mt-[-30px] font-semibold md:text-2xl md:hidden">
            Мы используем передовые технологии и методологии. В нашем арсенале:
          </p>

          <div className="flex flex-wrap mt-8 justify-center xxl:justify-between">
            <div className=" max-w-[500px] py-5">
              <div className="flex items-center">
                <div className="w-5 h-9 border-2 border-black mr-5" />
                <h5 className="text-black text-2xl font-medium lg:font-semibold">
                  DDD
                </h5>
              </div>
              <h5 className="text-lg font-medium lg:font-semibold text-black mt-3">
                (Design-Driven Development)
              </h5>
              <p className="text-lg text-black font-light mt-3">
                Разработка на основе дизайна: мы не начинаем программировать
                пока не отшлифуем дизайн.
              </p>
            </div>
            <div className=" max-w-[500px] py-5">
              <div className="flex items-center">
                <div className="w-5 h-9 border-2 border-black mr-5" />
                <h5 className="text-black text-2xl font-medium lg:font-semibold">
                  AWS
                </h5>
              </div>
              {/*<h5 className="text-lg font-semibold text-black mt-3">(Design-Driven Development)</h5>*/}
              <p className="text-lg text-black font-light mt-3">
                Облачные Web сервисы Амазон (AWS): у нас нет серверов и нет
                системных администраторов.
              </p>
            </div>
            <div className=" max-w-[500px] py-5 ">
              <div className="flex items-center">
                <div className="w-5 h-9 border-2 border-black mr-5" />
                <h5 className="text-black text-2xl font-medium lg:font-semibold">
                  IaC
                </h5>
              </div>
              <h5 className="text-lg font-medium lg:font-semibold text-black mt-3">
                (Infrastructure as Code)
              </h5>
              <p className="text-lg text-black font-light mt-3">
                Инфраструктура как код (IaC): все наши сервисы структурно
                поднимаются через код и тестируются, что позволяет нам с
                уверенностью делать изменения в системе.
              </p>
            </div>
            <div className=" max-w-[500px] py-5">
              <div className="flex items-center">
                <div className="w-5 h-9 border-2 border-black mr-5" />
                <h5 className="text-black text-2xl font-medium lg:font-semibold">
                  GraphQL
                </h5>
              </div>
              {/*<h5 className="text-lg font-semibold text-black mt-3">(Design-Driven Development)</h5>*/}
              <p className="text-lg text-black font-light mt-3">
                Единый программный интерфейс на всех фронтах. GraphQL — это язык
                запросов данных и манипулирования ими с открытым исходным кодом
                для API, а также среда выполнения для выполнения запросов с
                существующими данными.
              </p>
            </div>
            <div className=" max-w-[500px] py-5">
              <div className="flex items-center">
                <div className="w-5 h-9 border-2 border-black mr-5" />
                <h5 className="text-black text-2xl font-medium lg:font-semibold">
                  CI and CD
                </h5>
              </div>
              <h5 className="text-lg font-medium lg:font-semibold text-black mt-3">
                (Continuous Integration and Continuous Delivery)
              </h5>
              <p className="text-lg text-black font-light mt-3">
                Многоступенчатая непрерывная интеграция и доставка кода в
                продакшн (Full CI/CD): нет человеческого вмешательства при
                выкатке нового функционала пользователям.
              </p>
            </div>
            <div className=" max-w-[500px] py-5">
              <div className="flex items-center">
                <div className="w-5 h-9 border-2 border-black mr-5" />
                <h5 className="text-black text-2xl font-medium lg:font-semibold">
                  Тестирование на всех уровнях
                </h5>
              </div>
              {/*<h5 className="text-lg font-semibold text-black mt-3">(Design-Driven Development)</h5>*/}
              <p className="text-lg text-black font-light mt-3">
                Тестирование на всех уровнях: юнит тесты, функциональные,
                интеграционные и canary тесты, поэтому мы уверены в надежности
                наших новых сервисов.
              </p>
            </div>
            <div className=" max-w-[500px] py-5">
              <div className="flex items-center">
                <div className="w-5 h-9 border-2 border-black mr-5" />
                <h5 className="text-black text-2xl font-medium lg:font-semibold">
                  TypeScript & Dart
                </h5>
              </div>
              {/*<h5 className="text-lg font-semibold text-black mt-3">(Design-Driven Development)</h5>*/}
              <p className="text-lg text-black font-light mt-3">
                Только TypeScript (Web, backend, инфраструктура) и Dart (iOS,
                Android) на всех уровнях системы: более эффективный обмен
                знаниями и опытом.
              </p>
            </div>
            <div className=" max-w-[500px] py-5">
              <div className="flex items-center">
                <div className="w-5 h-9 border-2 border-black mr-5" />
                <h5 className="text-black text-2xl font-medium lg:font-semibold">
                  Лучшие практики программирования
                </h5>
              </div>
              {/*<h5 className="text-lg font-semibold text-black mt-3">(Design-Driven Development)</h5>*/}
              <p className="text-lg text-black font-light mt-3">
                Только TypeScript (Web, backend, инфраструктура) и Dart (iOS,
                Android) на всех уровнях системы: более эффективный обмен
                знаниями и опытом.
              </p>
            </div>
            <div className=" max-w-[500px] py-5">
              <div className="flex items-center">
                <div className="w-5 h-9 border-2 border-black mr-5" />
                <h5 className="text-black text-2xl font-medium lg:font-semibold">
                  Agile Management
                </h5>
              </div>
              {/*<h5 className="text-lg font-semibold text-black mt-3">(Design-Driven Development)</h5>*/}
              <p className="text-lg text-black font-light mt-3">
                Гибкие методологии создания продукта Scrum: у нас штатный
                scrum-master и проектный менеджер.
              </p>
            </div>
            <div className=" max-w-[500px] py-5">
              <div className="flex items-center">
                <div className="w-5 h-9 border-2 border-black mr-5" />
                <h5 className="text-black text-2xl font-medium lg:font-semibold">
                  MVP подход к работе
                </h5>
              </div>
              {/*<h5 className="text-lg font-semibold text-black mt-3">(Design-Driven Development)</h5>*/}
              <p className="text-lg text-black font-light mt-3">
                Короткие и частые выкатки нового функционала, начиная с
                минимального жизнеспособного продукта (MVP).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
