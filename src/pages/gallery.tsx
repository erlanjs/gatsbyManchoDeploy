<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import axios from "axios"
import { Title } from "../components/UI-components";
import Layout from "../components/layout";
import { media } from "../components/media";
import { Link } from "gatsby";
=======
import { Link } from "gatsby"
import React, { useEffect } from "react"

import { Title } from "../components/UI-components"
import Layout from "../components/layout"
import { media } from "../components/media"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchAlbums } from "../store/reducers/ActionCreators"
>>>>>>> a35914570b97ca0773c9317087da48f527bdfd62

const Gallery = () => {
  const { albums, isLoading, error } = useAppSelector(
    state => state.albumReducer
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAlbums())
  }, [])
<<<<<<< HEAD
  const getData = async () => {
    const { data } = await axios.get("https://api.flickr.com/services/rest?primary_photo_extras=owner_name%2Cpath_alias%2Crealname%2Csizes%2Curl_sq%2Curl_q%2Curl_t%2Curl_s%2Curl_n%2Curl_w%2Curl_m%2Curl_z%2Curl_c%2Curl_l%2Curl_h%2Curl_k%2Curl_3k%2Curl_4k%2Curl_5k%2Curl_6k%2Cneeds_interstitial&per_page=25&get_user_info=1&extras=can_share%2Ccan_download&user_id=193653472%40N05&viewerNSID=&method=flickr.photosets.getList&csrf=&api_key=b5bfddabcc7dbda91f8d5111bca73b30&format=json&hermes=1&hermesClient=1&reqId=65d194d3-90a7-45c8-be4e-22be2efbaef4&nojsoncallback=1")
    setDataAlbums(data.photosets);
    setActive(true);
  }
  const {photoset}:any = dataAlbums
=======
>>>>>>> a35914570b97ca0773c9317087da48f527bdfd62

  return (
    <Layout>
      {!isLoading ? (
        <div className="pt-40 pb-[40px]">
          <div className="container mx-auto">
            <Title
              tag={"h1"}
              size={media(50, 90)}
              color="black"
              indexingBg={"black"}
              indexing={2}
              indexingColor={"white"}
            >
              Галерея
            </Title>
            <p className="flex flex-col text-black font-normal"><span className="my-5">Мы – продуктовая IT компания и наша миссия – оптимизировать процессы, используя технологии, во благо людей.</span> <span className="mb-5">Mancho Devs (ОсОО «Прораб») - это стартап, основанный в Бишкеке в феврале 2021 года Эсеном Сагыновым, разработчиком одной из крупнейших компаний в мире - Amazon. Мы используем только последние технологии и инструменты для создания собственных IT продуктов с целью оптимизации процессов в различных сферах жизни людей.</span> <span>За полгода существования мы уже смогли выйти на рынок и начали работать с первыми клиентами. Мы не разрабатываем ни для кого, мы создаём свои продукты, которые выводим на рынок. У нас нет заказчиков, у нас только наши клиенты и пользователи. Если ты хочешь стать частью нашего движения и сделать вклад в улучшение жизни жителей нашей страны, присоединяйся к нам!</span> <span className="my-5">Прояви инициативу и отправляй резюме нам на почту: <a
              href="mailto:hello@mancho.dev?subject=Резюме&body=Message" className="text-blue-800 font-bold">hire@mancho.dev</a></span></p>
            <div className="flex flex-wrap justify-center md:justify-between">
              {albums.photosets?.photoset.map((el: any) => {
                return (
                  <>
                    <Link to={`/app/gallery/${el.id}`}>
                      <div className="mt-5 mx-2 cursor-pointer">
                        <div className="flex flex-col justify-center">
                          <div className="w-[80%]  h-[2px] bg-[#212124] mb-[1px] ml-6" />
                          <div className="w-[90%]  h-[2px] bg-[#212124] mb-[1px] ml-3" />
                        </div>
<<<<<<< HEAD
                        <div style={{background: `url(${el.primary_photo_extras?.url_l})  no-repeat center/cover`}} className="w-[256px] h-[280px]">
                          <div className="w-full h-full flex  items-end " style={{background: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.92))"}}>
                            <Title tag={"h4"} size="16px" color="white" className="mb-3 mx-1">{el.title._content}</Title>
=======
                        <div
                          style={{
                            background: `url(${el.primary_photo_extras?.url_l})  no-repeat center/cover`,
                          }}
                          className="w-[256px] h-[280px]"
                        >
                          <div
                            className="w-full h-full flex  items-end "
                            style={{
                              background:
                                "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.92))",
                            }}
                          >
                            <Title
                              tag={"h4"}
                              size="16px"
                              color="white"
                              className="mb-3 mx-1"
                            >
                              {el.title._content}
                            </Title>
>>>>>>> a35914570b97ca0773c9317087da48f527bdfd62
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen pt-24 flex justify-center items-center">
          <svg
            width={media(80, 135)}
            height={media(85, 140)}
            viewBox="0 0 135 140"
            xmlns="http://www.w3.org/2000/svg"
            fill="#1f1f1f"
          >
            <rect y="10" width="15" height="120" rx="6">
              <animate
                attributeName="height"
                begin="0.5s"
                dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                begin="0.5s"
                dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="30" y="10" width="15" height="120" rx="6">
              <animate
                attributeName="height"
                begin="0.25s"
                dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                begin="0.25s"
                dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="60" width="15" height="140" rx="6">
              <animate
                attributeName="height"
                begin="0s"
                dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                begin="0s"
                dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="90" y="10" width="15" height="120" rx="6">
              <animate
                attributeName="height"
                begin="0.25s"
                dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                begin="0.25s"
                dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="120" y="10" width="15" height="120" rx="6">
              <animate
                attributeName="height"
                begin="0.5s"
                dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                begin="0.5s"
                dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        </div>
      )}
    </Layout>
  )
}

export default Gallery
