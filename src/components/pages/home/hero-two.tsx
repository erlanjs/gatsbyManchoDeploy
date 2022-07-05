import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeroTwo = () => {
  return (
   <div>
     <div className="bg-white mb-[500px] ssm:hidden sm:hidden md:hidden lg:hidden xl:block xxl:block">
       <div className="bg-[#1F1F1F] h-[250px]">
         <div className="container mx-auto ">
           <div className="flex justify-between pt-56 ">
             <div className="w-[50%]">
               <div className='flex justify-between mt-[-80px] ssm:flex ssm:flex-col sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-row'>
                 <h1 className='font-[900] text-[200px] text-black ssm:m-0 sm:m-0 ssm:text-[160px] sm:text-[160px] md:text-[170px] lg:text-[180px] xl:text-[200px] xxl:text-[240px] md:m-0'>D</h1>
                 <h1 className='font-[900] text-[200px] text-black ml-20 ssm:m-0 sm:m-0 md:m-0 ssm:text-[160px] sm:text-[160px] md:text-[170px] lg:text-[180px] xl:text-[200px] xxl:text-[240px] '>E</h1>
                 <h1 className='font-[900] text-[200px] text-black ml-20 ssm:m-0 sm:m-0 md:m-0 ssm:text-[160px] sm:text-[160px] md:text-[170px] lg:text-[180px] xl:text-[200px] xxl:text-[240px] '>V</h1>
                 <h1 className='font-[900] text-[240px] text-white absolute z-10 left-[51%] top-[144px] ssm:text-[160px] sm:text-[160px]  md:text-[170px] lg:text-[180px]  xl:text-[200px]  xxl:text-[240px]'>S</h1>
                 <h2 className='absolute z-10 left-[48.7%] top-[435px] lg:top-[500px] xl:top-[435px] xxl:top-[470px] text-xl text-white ssm:hidden sm:hidden md:hidden lg:hidden xl:block xxl:block'><span className='text-black pr-1'>we</span> are creative</h2>
               </div>
               <div className='w-[70%] ssm:hidden  ssm:hidden sm:hidden md:hidden lg:hidden xl:block xxl:block'>
                 <p>
                   Наша миссия — оптимизировать процессы, используя технологии, во благо людей.
                 </p>
                 <button className='bg-black p-4 text-white'>Присоединяйся к нам!</button>
               </div>
             </div>
             <div className="w-[49%] mt-[-80px]">
               <div className='w-full'>
                 <StaticImage
                   src={"../../../images/img1.webp"}
                   loading="eager"
                   quality={95}
                   formats={["auto", "webp", "avif"]}
                   alt=""
                   className='w-full '
                 />
                 <div className='ssm:p-1 ssm:block sm:p-1 sm:block xl:hidden absolute bottom-16 z-10 md:p-2'>
                   <p className='text-white'>
                     Наша миссия — оптимизировать процессы, используя технологии, во благо людей.
                   </p>
                   <button className='bg-black p-4 text-white  border rounded border-white'>Присоединяйся к нам!</button>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div className="bg-[#FFFFFF] min-h-[100vh] relative ssm:block sm:block md:block lg:block xl:hidden xxl:hidden">
       <div className='bg-[#1F1F1F] w-full h-[240px] absolute'/>
       <div className='container flex items-start justify-between w-full relative ssm:max-w-full ssm:max-w-full ssm:p-0 sm:max-w-full md:max-w-full sm:p-0 md:p-0 sm:flex  md:flex md:items-start md:justify-start xl:max-w-full lg:max-w-full'>
         <div className='h-[100vh] z-30 flex flex-col ssm:mt-20 ssm:w-[34%] sm:mt-20 sm:w-[34%] md:pr-2 md:mt-20'>
           <div className='flex items-center justify-between ssm:pt-3 sm:pt-3 md:pt-3 lg:pt-3 xl:pt-3 xxl:pt-3 ssm:block sm:block sm:pl-2 md:pl-10 md:block'>
             <h1 className=' h-[109px] devs-d font-[900] text-black ssm:m-0 sm:m-0 ssm:text-[120px] sm:text-[140px] md:m-0'>D</h1>
             <h1 className=' h-[130px] font-[900] text-black ml-20 ssm:m-0 sm:m-0 md:m-0 ssm:text-[120px] sm:text-[160px] sm:pt-1'>E</h1>
             <h1 className=' h-[140px] font-[900] text-black ml-20 ssm:m-0 sm:m-0 md:m-0 ssm:text-[120px] sm:text-[140px]'>V</h1>
             <h1 className=' h-[148px] ssm:pr-[0px] ssm:w-[34%] sm:w-[112px] sm:pr-[70px] md:pr-[89px] md:w-[174px] lg:w-[26%] lg:pr-[150px] font-[900] text-[200px] text-white z-10 absolute left-[675px] ssm:text-[120px] ssm:px-2.7 ssm:left-0 ssm:bg-[#1F1F1F] sm:left-0 sm:bg-[#1F1F1F] sm:px-4 sm:text-[140px] sm:m-0 md:m-0 md:left-0 md:bg-[#1F1F1F] md:px-16'>S</h1>
           </div>
           <div className='w-2/3 ssm:hidden sm:hidden md:hidden'>
             <p>
               Наша миссия — оптимизировать процессы, используя технологии, во благо людей.
             </p>
             <button className='bg-black p-4 text-white'>Присоединяйся к нам!</button>
           </div>
         </div>

         <div className='bg-green-700  mt-28 relative h-[70vh]'>
           <StaticImage
             src={"../../../images/img1.webp"}
             loading="eager"
             quality={95}
             formats={["auto", "webp", "avif"]}
             alt=""
             className='w-full h-[85vh] ssm:z-10 sm:z-10 md:z-10 md:w-full lg:z-10 xl:z-10 xxl:z-10'/>

           <div className='mb-[-140px]  sm:p-1 ssm:block sm:block md:block xl:hidden absolute bottom-16 z-20 md:p-2'>
             <p className='text-white ssm:text-[12px] ssm:font-[500] sm:text-[12px] sm:font-[500] md:text-[16px] md:font-[600] lg:text-[16px] lg:font-[600] '>
               Наша миссия — оптимизировать процессы, используя технологии, во благо людей.
             </p>
             <button className='bg-black p-4 text-white  border rounded border-white ssm:w-[90%] sm:w-[162px] md:w-[220px] lg:w-[300px]  ssm:text-[12px] ssm:font-[500] sm:text-[12px] sm:font-[500] md:text-[16px] md:font-[600] lg:text-[16px] lg:font-[600]'>Присоединяйся к нам!</button>
           </div>
         </div>

       </div>
     </div>
   </div>
  );
};

export default HeroTwo;