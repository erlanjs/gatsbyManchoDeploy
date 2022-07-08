import React, { useState, useEffect, FC } from "react"
import { RouteComponentProps } from "@reach/router"
import axios from "axios";
import Layout from "../components/layout";
import { media } from "../components/media";
import { Title } from "../components/UI-components";

type Props = RouteComponentProps<{
  results: string
}>

export const RandomPerson: FC<Props> = ({ results = 1 }) => {
  const [photos, setPhotos] = useState({})

  useEffect(() => {
    getData()
  }, [])

const getData = async () => {

    const { data } = await axios.get(`https://api.flickr.com/services/rest?extras=can_addmeta%2Ccan_comment%2Ccan_download%2Ccan_print%2Ccan_share%2Ccontact%2Ccount_comments%2Ccount_faves%2Ccount_views%2Cdate_taken%2Cdate_upload%2Cdescription%2Cicon_urls_deep%2Cisfavorite%2Cispro%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cowner_datecreate%2Cpath_alias%2Cperm_print%2Crealname%2Crotation%2Csafety_level%2Csecret_k%2Csecret_h%2Curl_sq%2Curl_q%2Curl_t%2Curl_s%2Curl_n%2Curl_w%2Curl_m%2Curl_z%2Curl_c%2Curl_l%2Curl_h%2Curl_k%2Curl_3k%2Curl_4k%2Curl_f%2Curl_5k%2Curl_6k%2Curl_o%2Cvisibility%2Cvisibility_source%2Co_dims%2Cpubliceditability%2Csystem_moderation&per_page=25&get_user_info=1&primary_photo_extras=url_c%2C%20url_h%2C%20url_k%2C%20url_l%2C%20url_m%2C%20url_n%2C%20url_o%2C%20url_q%2C%20url_s%2C%20url_sq%2C%20url_t%2C%20url_z%2C%20needs_interstitial%2C%20can_share&jump_to=&photoset_id=${results}&viewerNSID=&method=flickr.photosets.getPhotos&csrf=&api_key=dadbe1a6ad1255361246a6b49382d615&format=json&hermes=1&hermesClient=1&reqId=d4584120-b361-43b6-b1e5-0d8a91d70487&nojsoncallback=1`)
    setPhotos(data.photoset)
}
const [model,setModel] = useState(false)
const [tempimgSrc,setTempimgSrc] = useState('')
const getImg = (imgSrc:string) => {
  setTempimgSrc(imgSrc)
  setModel(true)
}
  const {photo, title, count_photos_all, primary_photo_extras}:any = photos
  return (
    <Layout>
      <div className={model ? "model open": "model"}>
        <img src={tempimgSrc} alt="" />
        <span onClick={() => setModel(false)}><i className="fa-solid fa-xmark"/></span>
      </div>
      <section className="bg-[#1F1F1F]">
          <div className="pt-[100px] ">
            <div className="container mx-auto">
              <div style={{background: `url(${primary_photo_extras?.url_c_cdn})  no-repeat center/cover`}} className="w-[100%] text-center h-[900px] my-5">
                <div style={{background: `linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.92))`}} className="w-full h-full flex justify-center items-center">
                 <div className="block">
                   <Title tag={"h1"} color={"white"} size={media(30,50)}>{title}</Title>
                   <Title tag={"h4"} color={"white"} className="mt-5">{count_photos_all} photos</Title>
                 </div>
                </div>
              </div>
              <div className=" gallery">
                {
                  photo?.map((el:any) => {
                    return(
                      <>
                      <div className="pics my-4" onClick={() => getImg(el.url_c)}>
                        <img src={el.url_c} alt="" style={{width: "100%"}}/>
                      </div>
                      </>
                    )
                  })
                }
              </div>
            </div>

            {/*<img src={} alt="" className="w-full h-[900px]" />*/}
          </div>
      </section>
    </Layout>
  )
}
