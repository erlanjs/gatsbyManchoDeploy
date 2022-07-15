import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";




const AllCommand = (): JSX.Element => {
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
        <div >
          <div className="container mx-auto py-3 w-full block mt-24 xxl:hidden">
            <span className="text-5xl font-bold text-[#1F1F1F] md:text-7xl">Наша </span>
          </div>
          <div className="bg-[#1F1F1F] ">
            <div className="container mx-auto w-full ">
              <h1 className="text-5xl	font-bold bg-[#1F1F1F] text-white block xxl:hidden md:text-7xl">команда</h1>
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
                        <div className="hidden lg:block">
                          <div key={post.id} className=" box " data-testid="AllCommand-elem">
                            <div className="boxIcons opacity-0 absolute z-40 right-0 mt-2">
                              <span className="text-2xl text-white mr-3 cursor-pointer"><i className="fab fa-instagram"/></span>
                              <span className="text-2xl mr-3 text-white cursor-pointer"><i className="fab fa-linkedin-in"/></span>
                            </div>
                            <div className="imgBox">
                              <GatsbyImage image={img} alt={name} className="imgBoxImg"/>
                            </div>
                            <h3 className="font-bold text-xl text-white ml-1 mt-5 absolute imgBoxTitle whitespace-nowrap">{name}</h3>
                            <h4 className="font-normal text-xs text-white ml-1 mt-14 absolute imgBoxTitleDesc">{role}</h4>
                          </div>
                        </div>
                        <div className="block lg:hidden">
                          <div className=" w-[256px] h-[280px] relative mt-12">
                            <GatsbyImage image={img} alt={name} className="h-full"/>
                            <div className="absolute top-0 right-0 mt-3">
                              <span className="text-2xl text-white mr-3 cursor-pointer"><i className="fab fa-instagram"/></span>
                              <span className="text-2xl mr-3 text-white cursor-pointer"><i className="fab fa-linkedin-in"/></span>
                            </div>
                            <div className="absolute bottom-0">
                              <h3 className="font-bold text-xl text-white ml-1 mt-5 ">{name}</h3>
                              <h4 className="font-normal text-xs text-white ml-1 mt-2 mb-2 ">{role}</h4>
                            </div>
                          </div>
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
