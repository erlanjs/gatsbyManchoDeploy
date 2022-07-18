import axios from "axios"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"

import { Title } from "../components/UI-components"
import Layout from "../components/layout"
import { media } from "../components/UI-components/mediaScreen/media"
import Seo from "../components/seo";

const Gallery = () => {
  const [dataAlbums, setDataAlbums] = useState([])
  const [active, setActive] = useState(false)

  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const { data } = await axios.get(
      "https://api.flickr.com/services/rest?primary_photo_extras=owner_name%2Cpath_alias%2Crealname%2Csizes%2Curl_sq%2Curl_q%2Curl_t%2Curl_s%2Curl_n%2Curl_w%2Curl_m%2Curl_z%2Curl_c%2Curl_l%2Curl_h%2Curl_k%2Curl_3k%2Curl_4k%2Curl_5k%2Curl_6k%2Cneeds_interstitial&per_page=25&get_user_info=1&extras=can_share%2Ccan_download&user_id=193653472%40N05&viewerNSID=&method=flickr.photosets.getList&csrf=&api_key=25accdc58fd799ef149db4f321bf4bcd&format=json&hermes=1&hermesClient=1&reqId=65d194d3-90a7-45c8-be4e-22be2efbaef4&nojsoncallback=1"
    )
    setDataAlbums(data.photosets)
    setActive(true)
  }

  const { photoset }: any = dataAlbums

  return (
    <Layout>
      <Seo title={"Галерея"} description="Мы – продуктовая IT компания и наша миссия – оптимизировать процессы, используя технологии, во благо людей." lang="Ru"/>
      {active ? (
        <div className="pt-40 pb-[40px]">
          <div className="container mx-auto">
            <Title
              tag={"h1"}
              size={media(50, 100)}
              color="black"
              indexingBg={"black"}
              indexing={2}
              indexingColor={"white"}
            >
              Галерея
            </Title>
            <p className="flex flex-col text-black font-normal">
              <span className="my-5">
                Мы – продуктовая IT компания и наша миссия – оптимизировать
                процессы, используя технологии, во благо людей.
              </span>{" "}
              <span className="mb-5">
                Mancho Devs (ОсОО «Прораб») - это стартап, основанный в Бишкеке
                в феврале 2021 года Эсеном Сагыновым, разработчиком одной из
                крупнейших компаний в мире - Amazon. Мы используем только
                последние технологии и инструменты для создания собственных IT
                продуктов с целью оптимизации процессов в различных сферах жизни
                людей.
              </span>{" "}
              <span>
                За полгода существования мы уже смогли выйти на рынок и начали
                работать с первыми клиентами. Мы не разрабатываем ни для кого,
                мы создаём свои продукты, которые выводим на рынок. У нас нет
                заказчиков, у нас только наши клиенты и пользователи. Если ты
                хочешь стать частью нашего движения и сделать вклад в улучшение
                жизни жителей нашей страны, присоединяйся к нам!
              </span>{" "}
              <span className="my-5">
                Прояви инициативу и отправляй резюме нам на почту:{" "}
                <a
                  href="mailto:hello@mancho.dev?subject=Резюме&body=Message"
                  className="text-blue-800 font-bold"
                >
                  hire@mancho.dev
                </a>
              </span>
            </p>
            <div className="flex flex-wrap justify-center md:justify-between">
              {photoset?.map((el: any) => {
                return (
                  <div style={{ maxWidth: "100%" }}>
                    <Link to={`/app/gallery/${el.id}`}>
                      <div className="mt-5 mx-2 cursor-pointer w-full">
                        <div className="flex flex-col justify-center">
                          <div className="w-[80%]  h-[3px] bg-[#212124] mb-[1px] ml-6" />
                          <div className="w-[90%]  h-[3px] bg-[#212124] mb-[1px] ml-3" />
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
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex justify-center items-center pt-24">
          <svg
            width={media(54, 88)}
            height={media(54, 88)}
            fill="black"
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="8.042%"
                y1="0%"
                x2="65.682%"
                y2="23.865%"
                id="a"
              >
                <stop stopColor="#000" stopOpacity="0" offset="0%" />
                <stop stopColor="#000" stopOpacity=".631" offset="63.146%" />
                <stop stopColor="#000" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <g transform="translate(1 1)">
                <path
                  d="M36 18c0-9.94-8.06-18-18-18"
                  id="Oval-2"
                  stroke="url(#a)"
                  strokeWidth="2"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite"
                  />
                </path>
                <circle fill="#000" cx="36" cy="18" r="1">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </g>
          </svg>
        </div>
      )}
    </Layout>
  )
}

export default Gallery
