import React, { FC, useState, useEffect } from "react";
import { supabase } from "../../../utils/supabase";
import { Project } from "../../../Types/Project"; 
import Card from "../../projects/Card"
import { IoIosArrowDropleftCircle } from 'react-icons/io'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const ProjectCarousel: FC = () => {
    const [projects, setProjects] = useState<Project[] | null>(null)


    const fetchProjects = async() => {
        const { data } = await supabase.from("projects").select()
        setProjects(data)
    }

    useEffect(() => {
        fetchProjects()
    }, [])
    
    const ProjectList: JSX.Element[] = projects ? projects.map((project) => {
        return (
            <Card
                project={project}
            ></Card>
        )          
    }) : []

    var lastIndex = ProjectList.length -1
    const [Featured, setFeatured] = useState(0)
    const handleViewPrev = () => (Featured === 0 ? (setFeatured(lastIndex)) : (setFeatured(Featured - 1)))
    const handleViewNext = () => (Featured === lastIndex ? (setFeatured(0)) : (setFeatured(Featured + 1)))

    return (   
        <div className="flex items-center mt-[6%] ml-[5%]">
            <div onClick={() => handleViewPrev()} className="pt-[6%]">
                <IoIosArrowDropleftCircle color="#db872e" fontSize="3.5em" />
            </div>

            <ul className="flex">
                <li>
                    {Featured === 0 ? (
                        <div className="opacity-[70%] pt-[25%] px-3">{ProjectList[ProjectList.length - 1]}</div> 
                    ) : (
                        <div className="opacity-[70%] pt-[25%] px-3">{ProjectList[Featured - 1]}</div>
                    )}
                </li>
                <li>
                    <div className="h-[525px] w-[350px] pt-[13%] flex justify-center bg-brand-darker opacity-[90%] border-2 border-brand-green rounded-lg shadow-card shadow-brand-green/80">{ProjectList[Featured]}</div>
                </li>
                <li>
                    {Featured === lastIndex ? (
                        <div className="opacity-[70%] pt-[25%] px-3">{ProjectList[0]}</div>
                    ) : (
                        <div className="opacity-[70%] pt-[25%] px-3">{ProjectList[Featured + 1]}</div>
                    )}
                </li>
            </ul>

            <div onClick={() => handleViewNext()} className="pt-[6%] pl-4">
                <IoIosArrowDroprightCircle color="#db872e" fontSize="3.5em" />
            </div>        

        </div>        
    )
}

export default ProjectCarousel
 