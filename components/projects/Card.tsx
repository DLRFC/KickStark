import React, { FC } from "react";
import Link from "next/link";
import { Project } from "../../Types/Project"

type Props = {
    project: Project
}

const ProjectCard : FC<Props> = ({project}) => {

    return (
        <Link href={`/catalogue/${project.id}`}>
            <div className="w-[275px] h-[400px] text-center bg-brand-gray outline outline-brand-dark border-8 border-brand-orange rounded-lg m-10 shadow-card shadow-brand-green/80 cursor-pointer">
                <div className="px-2 pt-2 text-brand-dark text-2xl">
                    {project.name}
                </div>

                <div className="flex bg-brand-teal text-brand-gray">
                    <div className="px-6 pt-4 pb-1 text-sm">
                    {project.network}
                    </div>
                    <div className="text-left">
                        <div className="px-6 pt-2 text-xs">
                            <span className="text-brand-orange">&bull; </span>{project.category1}
                        </div>
                        <div className="px-6 pb-2 text-xs">
                            <span className="text-brand-orange">&bull; </span>{project.category2}
                        </div>
                    </div>                         
                </div>

                <div className="text-left">
                    <div className="px-2 pt-2 text-brand-darkest text-sm">
                        {project.description}
                    </div>
                </div>        
                
            </div>
        </Link>
    )
}

export default ProjectCard