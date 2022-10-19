import React, { FC, useState, useEffect } from "react";
import ProjectList from "../projects/List"; 

const ProjectCarousel: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const carouselInfiniteScroll = () => {
        if (currentIndex === ProjectList.length-1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex+1)
    }

    useEffect(() => {
        const interval = setInterval(() => {carouselInfiniteScroll()}, 5000)
        return () => clearInterval(interval)
    })

    return (
        <div className="w-screen p-5 flex-nowrap owerflow-hidden">
            {ProjectList.map((project, index) => {
                return (
                    <div className="w-full grid grid-cols-3 items-center transition hover:scale-130 duration-5000" style={{transform: `translate(-${currentIndex * 100}%)`}} key={index}>
                        {project}
                    </div>
                )
            })}
        </div>
    )

    // need to have this data created from forms on submit
    // const dummyProjects: { id: number, name: string, network: string, category1: string, category2: string, image: string, description: string, active: boolean }[] = [
    //     {
    //         id: 1,
    //         name: "Deliverable",
    //         network: "Starknet",
    //         category1: "Dev Tools",
    //         category2: "DeFi",
    //         image: "",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //         active: true
    //     },
    //     {
    //         id: 2,
    //         name: "Om",
    //         network: "Ethereum",
    //         category1: "DAO",
    //         category2: "Privacy",
    //         image: "",
    //         description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //         active: false
    //     },
    //     {
    //         id: 3,
    //         name: "Emergence",
    //         network: "Ethereum",
    //         category1: "Privacy",
    //         category2: "Social",
    //         image: "",
    //         description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    //         active: true
    //     },
    //     {
    //         id: 4,
    //         name: "DecentraList",
    //         network: "Ethereum",
    //         category1: "Dev Tools",
    //         category2: "DAO",
    //         image: "",
    //         description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    //         active: true
    //     },
    //     {
    //         id: 5,
    //         name: "MxTape",
    //         network: "Ethereum",
    //         category1: "Social",
    //         category2: "Dev Tools",
    //         image: "",
    //         description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    //         active: true
    //     },
    //     {
    //         id: 6,
    //         name: "Parfait",
    //         network: "Ethereum",
    //         category1: "DeFi",
    //         category2: "Dev Tools",
    //         image: "",
    //         description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    //         active: true
    //     },
    // ]

    // return (
    //     <>
    //         {dummyProjects.map((projects) => {
    //                 return (
    //                     <ProjectCard
    //                     id={projects.id}
    //                     name={projects.name}
    //                     network={projects.network}
    //                     category1={projects.category1}
    //                     category2={projects.category2}
    //                     image={projects.image}
    //                     description={projects.description}
    //                     active={projects.active}
    //                 ></ProjectCard>
    //                 )            
    //             })}
    //     </>
    // )
}

export default ProjectCarousel