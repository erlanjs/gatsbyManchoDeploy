import React, { useEffect, useState } from "react";
import axios from "axios"
import { Title } from "../components/UI-components";
import Layout from "../components/layout";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { media } from "../components/media";
import { Link } from "gatsby";

const Gallery = () => {
  const [dataAlbums , setDataAlbums] = useState([])
  const [active , setActive] = useState(false)
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const { data } = await axios.get("https://api.flickr.com/services/rest?primary_photo_extras=owner_name%2Cpath_alias%2Crealname%2Csizes%2Curl_sq%2Curl_q%2Curl_t%2Curl_s%2Curl_n%2Curl_w%2Curl_m%2Curl_z%2Curl_c%2Curl_l%2Curl_h%2Curl_k%2Curl_3k%2Curl_4k%2Curl_5k%2Curl_6k%2Cneeds_interstitial&page=1&per_page=25&get_user_info=1&extras=can_share%2Ccan_download&path_alias=manchodevs&viewerNSID=&method=flickr.photosets.getList&csrf=&api_key=dadbe1a6ad1255361246a6b49382d615&format=json&hermes=1&hermesClient=1&reqId=f6707bfe-a0f0-4759-9ce2-3b9590d81ce3&nojsoncallback=1")
    setDataAlbums(data.photosets);
    setActive(true);
  }

  const {photoset}:any = dataAlbums

  return (
    <Layout>
      {active ? <div className="pt-40 pb-[40px]">
        <div className="container mx-auto">
          <Title tag={"h1"} size={media(50, 100)} color="black" indexingBg={"black"} indexing={2} indexingColor={"white"}>Галерея</Title>
          <div className="flex flex-wrap justify-center md:justify-between">
            {
              photoset?.map((el:any) => {
                return (
                  <>
                    <Link to={`/app/gallery/${el.id}`}>
                      <div className="mt-5 mx-2 cursor-pointer">
                        <div className="flex flex-col justify-center">
                          <div className="w-[80%]  h-[2px] bg-[#212124] mb-[1px] ml-6"/>
                          <div className="w-[90%]  h-[2px] bg-[#212124] mb-[1px] ml-3"/>

                        </div>
                        <div style={{background: `url(${el.primary_photo_extras?.url_l})  no-repeat center/cover`}} className="w-[256px] h-[280px]">
                          <div className="w-full h-full flex  items-end " style={{background: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.92))"}}>
                            <Title tag={"h4"} size="16px" color="white" className="mb-3 mx-1">{el.title._content}</Title>

                          </div>
                        </div>
                      </div>
                    </Link>


                  </>

                )
              })
            }
          </div>
        </div>
      </div> : <div className="min-h-screen flex justify-between items-center">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink={"http://www.w3.org/1999/xlink"} style={{margin: "auto", background: "none", display: "block", shapeRendering: "auto" }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle cx="50" cy="50" r="32" strokeWidth="8" stroke="#1f1f1f" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
          </circle>
          <circle cx="50" cy="50" r="23" strokeWidth="8" stroke="#6a6a6a" strokeDasharray="36.12831551628262 36.12831551628262" strokeDashoffset="36.12831551628262" fill="none" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
          </circle>
          </svg></div>}

    </Layout>
  );
};

export default Gallery;
