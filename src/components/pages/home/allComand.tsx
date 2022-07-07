import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import {StaticImage, GatsbyImage, getImage} from "gatsby-plugin-image";
import {inspect} from "util";




const AllCommand = (): JSX.Element => {
    // const {data} = useStaticQuery(query)
    const {allMarkdownRemark} = useStaticQuery(graphql`
    query MainPage {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    name
                    role
                    image {
                        childImageSharp {
                            gatsbyImageData(formats: [AUTO, AVIF], placeholder: BLURRED)
                        }
                    }
                }
                id
             }
        }
}
  `);
    console.log(allMarkdownRemark, "data")


    return (
      <section id={"AllCommand"}>
        <div id="AllCommand">
          <div className="container mx-auto py-3 w-full block mt-24 xxl:hidden">
            <span className="text-5xl font-bold text-[#1F1F1F] md:text-7xl">Наша </span>
          </div>

          <div className="bg-[#1F1F1F] ">
            <div className="container mx-auto w-full ">
              <h1 className="text-5xl	font-bold bg-[#1F1F1F] text-white block xxl:hidden md:text-7xl">команда</h1>

              {/*<div className="bg-white  items-center justify-between hidden xxl:flex">*/}
              {/*  <span className="text-8xl	font-bold bg-[#1F1F1F] text-white ">Наша ко<span className=" text-white py-0 xl:bg-white xl:text-black xxl:py-0">манда</span></span>*/}
              {/*  <span className="text-3xl	font-semibold hidden lg:block">Our comp<span className="bg-[#1F1F1F] text-white pt-[55px] pb-[56px]">osition</span></span>*/}
              {/*</div>*/}
              <div className="hidden items-center justify-between bg-white xxl:flex">
                <span className="text-[100px] bg-[#1F1F1F] font-bold text-white">Наша ко<span className="bg-white pt-[20px] pb-[19px] text-black">манда</span></span>
                <span className="text-[30px] bg-white font-semibold ">Our comp<span className="bg-[#1F1F1F] pt-[57px] pb-[60px] text-white">osition</span></span>
              </div>
              <div className="flex flex-wrap  justify-center md:justify-between mt-6">
                {
                  allMarkdownRemark.nodes.map((post:any) => {
                    const {name, role, image} = post.frontmatter
                    const img = getImage(image)
                    return (
                      <>
                        <div key={post.id} className="w-[256px]  mt-7" data-testid="AllCommand-elem">

                          <GatsbyImage image={img} alt={name}/>
                          <h3 className="font-bold text-xl text-white mt-5 ">{name}</h3>
                          <h4 className="font-normal text-xs text-white mt-5">{role}</h4>
                        </div>

                      </>

                    )
                  })
                }
              </div>

            </div>

          </div>

        </div>
      </section>

    );
};

export default AllCommand;
