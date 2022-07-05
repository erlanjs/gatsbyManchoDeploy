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
        <div>
            <div className="container mx-auto py-3 w-full block mt-24 xxl:hidden">
                <span className="text-5xl font-bold text-[#1F1F1F] md:text-7xl">Наша </span>
            </div>

            <div className="bg-[#1F1F1F] ">
                <div className="container mx-auto w-full ">
                    <h1 className="text-5xl	font-bold bg-[#1F1F1F] text-white block xxl:hidden md:text-7xl">команда</h1>

                    <div className="bg-white  items-center justify-between hidden xxl:flex">
                        <span className="text-8xl	font-bold bg-[#1F1F1F] text-white py-6">Наша ко<span className="bg-[#1F1F1F] text-white py-0 xl:bg-white xl:text-black xl:py-5">манда</span></span>
                        <h3 className="text-3xl	font-semibold hidden lg:block">Our comp<span className="bg-[#1F1F1F] text-white pt-[55px] pb-[56px]">osition</span></h3>
                    </div>
                    <div className="flex flex-wrap justify-between mt-6">
                        {
                            allMarkdownRemark.nodes.map((post:any) => {
                                const {name, role, image} = post.frontmatter
                                const img = getImage(image)
                                return (
                                    <>
                                        <div key={post.id} className="w-[256px]  mt-7" data-testid="AllCommand-elem">

                                            {/*<GatsbyImage image={img} alt={name}/>*/}
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
    );
};

export default AllCommand;
