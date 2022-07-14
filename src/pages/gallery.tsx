import { Link } from "gatsby"
import React, { useEffect } from "react"

import { Title } from "../components/UI-components"
import Layout from "../components/layout"
import { media } from "../components/media"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchAlbums } from "../store/reducers/ActionCreators"

const Gallery = () => {
  const { albums, isLoading, error } = useAppSelector(
    state => state.albumReducer
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAlbums())
  }, [])

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
