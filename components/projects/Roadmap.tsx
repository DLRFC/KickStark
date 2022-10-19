import React, { FC } from "react";
import { FaArrowCircleDown } from 'react-icons/fa'
import { FaArrowCircleUp } from 'react-icons/fa'

type RoadmapProps = {
    numCheckpoints: number;
    checkpoints: string[];
}

// this will create roadmap component from MapForm inputs
const Roadmap: FC<RoadmapProps> = ({ numCheckpoints, checkpoints}) => {
    return (
        <div className="w-[700px] h-[500px] relative flex justify-center place-items-center bg-brand-green opacity-[80%] border-4 border-brand-green rounded-lg text-brand-darkest">
            <div>
                <div className="absolute top-[10%] left-[10%] text-brand-darkest">
                    <FaArrowCircleDown color="#01090a" fontSize="2em" />
                </div>
                {/* top vertical line */}
                <div className="absolute top-[17%] left-[12%] h-[34%] w-[5px] bg-brand-darkest" ></div>
                {/* 1st stage */}
                <div className="absolute top-[22%] left-[12%] h-[3px] w-[10%] bg-brand-darkest" ></div>
                <div className="absolute top-[21%] left-[22%] h-[14px] w-[14px] rounded-full bg-brand-orange ring-2 ring-brand-darkest"></div>
                <div className="absolute top-[20%] left-[26%]">
                    {checkpoints[0]}
                    <p className="text-xs">&bull; item</p>
                    <p className="text-xs">&bull; item</p>
                    <p className="text-xs">&bull; item</p>
                </div>
                {/* horizontal line */}
                <div className="absolute top-[50%] left-[12%] w-[76%] h-[5px] bg-brand-darkest"></div>
                {/* 2nd stage */}
                <div className="absolute top-[50%] left-[32%] h-[10%] w-[3px] bg-brand-darkest" ></div>
                <div className="absolute top-[60%] left-[31%] h-[14px] w-[14px] rounded-full bg-brand-orange ring-2 ring-brand-darkest"></div>
                <div className="absolute top-[64%] left-[24%]">
                    {checkpoints[1]}
                    <p className="text-xs">&bull; item</p>
                    <p className="text-xs">&bull; item</p>
                    <p className="text-xs">&bull; item</p>
                </div>
                {/* 3rd stage  */}
                <div className="absolute top-[30%] left-[62%] h-[20%] w-[3px] bg-brand-darkest" ></div>
                <div className="absolute top-[27%] left-[61%] h-[14px] w-[14px] rounded-full bg-brand-orange ring-2 ring-brand-darkest"></div>
                <div className="absolute top-[26%] left-[65%]">
                    {checkpoints[2]}
                    <p className="text-xs">&bull; item</p>
                    <p className="text-xs">&bull; item</p>
                    <p className="text-xs">&bull; item</p>
                </div>
                {/* bottom vertical line */}
                <div className="absolute bottom-[17%] right-[12%] h-[32%] w-[5px] bg-brand-darkest"></div>
                {/* 4th stage line */}
                <div className="absolute bottom-[26%] right-[12%] h-[3px] w-[12%] bg-brand-darkest" ></div>
                <div className="absolute bottom-[25%] right-[24%] h-[14px] w-[14px] rounded-full bg-brand-orange ring-2 ring-brand-darkest"></div>
                <div className="absolute bottom-[14%] right-[32%]">
                    {checkpoints[3]}
                    <p className="text-xs">&bull; item</p>
                    <p className="text-xs">&bull; item</p>
                    <p className="text-xs">&bull; item</p>

                </div>
                <div className="absolute bottom-[10%] right-[10%]">
                    <FaArrowCircleUp color="#01090a" fontSize="2em" />
                </div>
            </div>
            
        </div>
    )
}

export default Roadmap