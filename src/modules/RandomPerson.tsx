import { RouteComponentProps } from "@reach/router"
import axios from "axios"
import React, { FC, useEffect, useState } from "react"

import { Title } from "../components/UI-components"
import Layout from "../components/layout"
import { media } from "../components/media"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchAlbumItem } from "../store/reducers/ActionCreators"

type Props = RouteComponentProps<{
  results: string
}>

export const RandomPerson: FC<Props> = ({ results = "" }) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAlbumItem(results))
  }, [])

  const { item, isLoading, error } = useAppSelector(
    state => state.albumItemReducer
  )

  const [model, setModel] = useState(false)
  const [tempimgSrc, setTempimgSrc] = useState("")
  const getImg = (imgSrc: string) => {
    setTempimgSrc(imgSrc)
    setModel(true)
  }
  return (
    <Layout>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="" />
        <span onClick={() => setModel(false)}>
          <i className="fa-solid fa-xmark" />
        </span>
      </div>
      <section className="bg-[#1F1F1F]">
        {
          isLoading ? <div className="min-h-screen flex justify-center items-center">
            <svg width={media(54, 88)} height={media(54, 88)} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
                  <stop stopColor="#fff" stopOpacity="0" offset="0%"/>
                  <stop stopColor="#fff" stopOpacity=".631" offset="63.146%"/>
                  <stop stopColor="#fff" offset="100%"/>
                </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <g transform="translate(1 1)">
                  <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" strokeWidth="2">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="0.9s"
                      repeatCount="indefinite" />
                  </path>
                  <circle fill="#fff" cx="36" cy="18" r="1">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="0.9s"
                      repeatCount="indefinite" />
                  </circle>
                </g>
              </g>
            </svg>
          </div> :
            <div style={{paddingTop: media(60, 100)}}>
              <div className="container mx-auto">
                <div
                  style={{
                    height: media(600, 750),
                    background: `url(${
                      item?.photoset?.photo[
                        Math.floor(Math.random() * item.photoset.photo.length)
                        ]?.url_c
                    })  no-repeat center/cover`,
                  }}
                  className="w-[100%]  text-center my-5"

                >
                  <div
                    style={{
                      background: `linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.92))`,
                    }}
                    className="w-full h-full flex justify-center items-center"
                  >
                    <div className="block">
                      <Title tag={"h1"} color={"white"} size={media(20, 50)}>
                        {item.photoset?.title}
                      </Title>
                      <Title tag={"h4"} color={"white"} className="mt-5" size={media(15,40)}>
                        {item?.photoset?.photo?.length} photos
                      </Title>
                    </div>
                  </div>
                </div>
                <div className=" gallery">
                  {item?.photoset?.photo?.map((el: any) => {
                    return (
                      <>
                        <div className="pics my-4" onClick={() => getImg(el.url_c)}>
                          <img src={el.url_c} alt="" style={{ width: "100%" }} />
                        </div>
                      </>
                    )
                  })}
                </div>
              </div>

              {/*<img src={} alt="" className="w-full h-[900px]" />*/}
            </div>
        }


      </section>
    </Layout>
  )
}
