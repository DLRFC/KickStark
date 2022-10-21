import React, { FC } from "react";
import Link from "next/link";

type ProjectCardProps = {
    id: number;
    name: string;
    network: string;
    category1: string;
    category2: string;
    image: string;
    description: string;
    active: boolean
}

const ProjectCard : FC<ProjectCardProps> = ({ id, name, network, category1, category2, image, description, active}) => {
    return (
        <Link href={`/catalogue/${id}`}>
            <div className="w-[275px] h-[400px] bg-brand-gray opacity-[70%] text-xs outline outline-brand-dark border-8 border-brand-orange rounded-lg m-10 shadow-card shadow-brand-green/80 cursor-pointer">
                <div className="flex">
                        <img className="w-[50%]" src={image}></img>
                    <div>
                        <div className="p-2 pb-1 text-brand-dark text-lg underline">
                            {name}
                        </div>
                        <div className="px-6 pb-1 text-brand-darkest text-sm">
                            {network}
                        </div>
                        <div className="px-6 text-brand-darkest text-xs">
                            <span className="text-brand-orange">&bull; </span>{category1}
                        </div>
                        <div className="px-6 pb-2 text-brand-darkest text-xs">
                            <span className="text-brand-orange">&bull; </span>{category2}
                        </div>
                    </div>
                </div>
                <div className="px-2 pt-3 text-brand-darkest text-sm">
                    {description}
                </div>
                {/* find out why this does not evaluate to 'false' when {active} is false */}
                {/* {{active} ? (
                    <div className="text-brand-green text-center absolute bottom-2 left-[28%]">currently active</div>
                ) : (
                    <div className="text-red-200">not active</div>
                )} */}
            </div>
        </Link>
    )
}

export default ProjectCard