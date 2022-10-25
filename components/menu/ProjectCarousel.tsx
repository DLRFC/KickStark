import React, { FC, useState, useEffect } from "react";
import ProjectList from "../projects/List"; 
import { IoIosArrowDropleftCircle } from 'react-icons/io'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

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
        // <div className="w-screen p-5 flex-nowrap owerflow-hidden">
        //     {ProjectList.map((project, index) => {
        //         return (
        //             <div className="w-full grid grid-cols-3 items-center transition hover:scale-130 duration-5000" style={{transform: `translate(-${currentIndex * 100}%)`}} key={index}>
        //                 {project}
        //             </div>
        //         )
        //     })}
        // </div>
        <div className="flex items-center mt-[10%]">
            <div>
                <IoIosArrowDropleftCircle color="#db872e" fontSize="3.5em" />
            </div>
            <div className="flex pt-[10%]">
                <div className="h-[400px] w-[275px] mx-4 bg-brand-gray rounded-lg">Project Card</div>
                <div className="h-[400px] w-[275px] mx-4 bg-brand-gray rounded-lg">Project Card</div>
                <div className="h-[400px] w-[275px] mx-4 bg-brand-gray rounded-lg">Project Card</div>
            </div>
            <div>
                <IoIosArrowDroprightCircle color="#db872e" fontSize="3.5em" />
            </div>
        </div>
        
    )
}

export default ProjectCarousel