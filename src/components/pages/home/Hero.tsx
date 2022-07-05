import * as React from 'react';
import {StaticImage} from  "gatsby-plugin-image"

const Hero = () => {

    return (
      <div className="bg-[#FFFFFF]  min-h-[100vh] relative">
          <div className='bg-[#1F1F1F] w-full h-[280px] absolute'/>
          <div className='container flex items-start justify-between w-full relative ssm:max-w-full sm:max-w-full md:max-w-full sm:p-0 md:p-0 sm:flex  md:flex md:items-start md:justify-start xl:max-w-full lg:max-w-full'>
              <div className='mt-32 z-30 flex flex-col pr-3'>

                  <div className=' flexitems-center md:block ssm:block sm:block ssm:pl-2 sm:pl-2 md:pl-10 lg:pl-20 xl:pl-32 xxl:pl-32'>
                      <h1 className='devs-d font-[900] text-[200px] text-black ssm:m-0  sm:m-0 sm:text-[160px] md:m-0  '>D</h1>
                      <h1 className='font-[900] text-[200px] text-black ml-20 ssm:m-0 sm:m-0 md:m-0 sm:text-[160px] sm:pt-1'>E</h1>
                      <h1 className='font-[900] text-[200px] text-black ml-20 ssm:m-0 sm:m-0 md:m-0 sm:text-[160px]'>V</h1>
                    <h1 className='font-[900] text-[200px] text-white  absolute left-[675px] ssm:left-0 sm:left-0 sm:bg-[#1F1F1F] sm:px-4  sm:text-[159px] sm:m-0 md:m-0 md:left-0 md:bg-[#1F1F1F] md:px-14'>S</h1>
                      <h2 className='absolute right-0  left-[638px] top-96 text-xl text-white ssm:hidden sm:hidden md:hidden lg:block xl:block xxl:block'><span className='text-black pr-1'>we</span> are creative</h2>
                  </div>

                  <div className='w-[70%] ssm:hidden pl-56 bg-red-600 sm:hidden md:hidden lg:block xl:block xxl:block'>
                      <p>
                          Наша миссия — оптимизировать процессы, используя технологии, во благо людей.
                      </p>
                      <button className='bg-black p-4 text-white'>Присоединяйся к нам!</button>
                  </div>
              </div>

              <div className='mt-28 relative md:h-[50%] pl-3 md:w-[89%] lg:w-[50%] lg:h-[50%] xl:w-[40%] xl:h-[40px] xxl:h-[10px] xxl:w-[40%]'>
                  <StaticImage
                    src={"../../../images/img1.webp"}
                    loading="eager"
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    className='w-full sm:h-[53rem] md:h-[53rem] md:w-full lg:h-[43rem] xl:h-[30rem] xxl:h-[33rem]'
                  />
                  <div className='ssm:p-1 ssm:block sm:p-1 sm:block xl:hidden absolute bottom-16 z-40 md:p-2'>
                      <p className='text-white'>
                          Наша миссия — оптимизировать процессы, используя технологии, во благо людей.
                      </p>
                      <button className='bg-black p-4 text-white  border rounded border-white'>Присоединяйся к нам!</button>
                  </div>
              </div>

              <div className='w-full h-full  relative  md:hidden lg:hidden xl:hidden'>
                  <StaticImage
                    src={'../../../images/eb-mobile.png'}
                    loading="eager"
                    formats={["auto", "webp", "avif"]}
                    alt="esen bayke image"
                    className='h-[49.2rem] w-full object-contain'
                  />
                  <div className='ssm:p-2 ssm:block sm:p-2 sm:block xl:hidden absolute bottom-16 z-40'>
                      <p className='text-white'>
                          Наша миссия — оптимизировать процессы, используя технологии, во благо людей.
                      </p>
                      <button className='bg-black p-4 text-white border rounded border-white'>Присоединяйся к нам!</button>
                  </div>
              </div>

          </div>
      </div>
    );
};

export default Hero;
