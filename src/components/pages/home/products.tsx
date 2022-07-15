import React from 'react';
import { media } from "../../media";
// @ts-ignore
import bg from "../../../images/products-bg.png"

const Products = (): JSX.Element => {
    return (
      <section id="Products">
        <div className="container mx-auto mt-[100px]">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-bold text-black lg:text-9xl xl:text-8xl md:text-7xl">Product<span className="text-white bg-black pr-8">s</span></h1>
            <h1 className="font-semibold hidden text-3xl xl:block">What are <span className="text-white py-3 bg-black py-10">we creating?</span></h1>
          </div>
        </div>
        <div style={{background: `url(${bg}) no-repeat `, padding: `${media(10, 110)} 0`}} className="py-[110px]">
          <div  className="container mx-auto ">
            <div className="flex justify-between items-start flex-wrap xl:justify-between">
              <div className="text-[#212121] w-full py-7 sm:w-[346px]">
                <div className="flex items-center">
                  <h1 className="w-9 h-[2px] bg-[#212121] mr-3"/>
                  <h1 className="text-3xl font-semibold ">CarGo</h1>
                </div>
                <p className="font-light text-[16px] mt-2">это готовое решение для оптимизации процессов на таможенных терминалах и в логистических центрах.</p>
                <div className="mt-2">
                  <p className="font-light text-[16px]"><span className="font-bold">CarGo</span> помогает убрать большу́ю часть бумажной работы, ускорить процессы, собрать данные, показать статистику по работе, уменьшить расходы и многое другое.</p>
                  <p className="font-light text-[16px] mt-2"><span className="font-bold">Цель CarGo</span>  — помочь оптимизировать и автоматизировать процессы на таможенных и логистических терминалах насколько позволяют технологии, работая как с ПО, так и с железом.</p>
                </div>
              </div>
              <div className="text-[#212121] w-full py-7 sm:w-[346px]">
                <div className="flex items-center">
                  <h1 className="w-9 h-[2px] bg-[#212121] mr-3"/>
                  <h1 className="text-3xl font-semibold mt-2">Medcheck</h1>
                </div>
                <p className="font-light text-[16px]">это мобильное приложение для оптимизации процессов в сфере медицины.</p>
                <div className="mt-2">
                  <p className="font-light text-[16px]">В <span className="font-bold">Medcheck.kg</span> мы публикуем актуальный и качественный контент как в видео, так и в текстовом форматах от лучших специалистов в сфере медицины.</p>
                  <p className="font-light text-[16px] mt-2">Мы помогаем людям найти нужного врача, клинику и работаем над тем, чтобы сократить дистанцию между врачами и пациентами.</p>
                </div>
              </div>
              <div className="text-[#212121] w-full py-7 sm:w-[346px]">
                <div className="flex items-center">
                  <h1 className="w-9 h-[2px] bg-[#212121] mr-3"/>
                  <h1 className="text-3xl font-semibold">Depo</h1>
                </div>
                <p className="font-light text-[16px] mt-2">это решение для оптимизации процессов в коммерческой сфере.</p>
                <div className="mt-2">
                  <p className="font-light text-[16px]"><span className="font-bold">Depo</span> убирает барьеры, ускоряет и упрощает работу между поставщиками/производителями товаров и продуктов и владельцами магазинов и точек розничной торговли, предоставляя мобильное и веб приложения для работы с товарами, подписками и отчётностью.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
};

export default Products;
