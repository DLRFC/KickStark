import React, { FC } from "react";
import { FaArrowCircleDown } from 'react-icons/fa'
import { FaArrowCircleUp } from 'react-icons/fa'
import { BsLightningFill } from 'react-icons/bs'
import { TbLayersLinked } from 'react-icons/tb'
import { BsGearWideConnected } from 'react-icons/bs'
import { GiBugleCall } from 'react-icons/gi'
import { FaPaperPlane } from 'react-icons/fa'
import { SlArrowDown } from 'react-icons/sl'

type RoadmapProps = {
    numCheckpoints: number;
    checkpoints: string[];
}

// this will create roadmap component from MapForm inputs
const Roadmap: FC<RoadmapProps> = ({ numCheckpoints, checkpoints}) => {
   return (
        <ol className="items-center text-center text-brand-darkest sm:flex px-10 pt-10 pb-4">
            <li className="relative mb-6 sm:mb-0">
                <h3 className="pb-4 text-lg font-semibold">Phase 1</h3>
                <div className="flex items-center">
                    <div className="hidden sm:flex w-full bg-white h-1"></div>
                    <div className="flex z-10 justify-center items-center w-10 h-10 rounded-full ring-0 ring-brand-dark sm:ring-8 shrink-0">
                        <BsLightningFill color="white" fontSize="1.5em" />
                    </div>
                    <div className="hidden sm:flex w-full bg-white h-1"></div>
                </div>
                <div className="mt-3 mx-4 sm:pr-8">
                    <p className="text-sm font-normal">This text will be a summary of items included in Phase 1.</p>
                </div>
                <div className="flex justify-center pt-6">
                    <SlArrowDown color="white" fontSize="2em"/>
                </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
                <h3 className="pb-4 text-lg font-semibold">Phase 2</h3>
                <div className="flex items-center">
                    <div className="hidden sm:flex w-full bg-white h-1"></div>
                    <div className="flex z-10 justify-center items-center w-10 h-10 rounded-full ring-0 ring-brand-dark sm:ring-8 shrink-0">
                        <TbLayersLinked color="white" fontSize="2em" />
                    </div>
                    <div className="hidden sm:flex w-full bg-white h-1"></div>
                </div>
                <div className="mt-3 mx-4 sm:pr-8">
                    <p className="text-sm font-normal">This text will be a summary of items included in Phase 2.</p>
                </div>
                <div className="flex justify-center pt-6">
                    <SlArrowDown color="white" fontSize="2em"/>
                </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
                <h3 className="pb-4 text-lg font-semibold">Phase 3</h3>
                <div className="flex items-center">
                    <div className="hidden sm:flex w-full bg-white h-1"></div>
                    <div className="flex z-10 justify-center items-center w-10 h-10 rounded-full ring-0 ring-brand-dark sm:ring-8 shrink-0">
                        <BsGearWideConnected color="white" fontSize="1.5em" />
                    </div>
                    <div className="hidden sm:flex w-full bg-white h-1"></div>
                </div>
                <div className="mt-3 mx-4 sm:pr-8">
                    <p className="text-sm font-normal">This text will be a summary of items included in Phase 3.</p>
                </div>
                <div className="flex justify-center pt-6">
                    <SlArrowDown color="white" fontSize="2em"/>
                </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
                <h3 className="pb-4 text-lg font-semibold">Phase 4</h3>
                <div className="flex items-center">
                    <div className="hidden sm:flex w-full bg-white h-1"></div>
                    <div className="flex z-10 justify-center items-center w-10 h-10 rounded-full ring-0 ring-brand-dark sm:ring-8 shrink-0">
                        <GiBugleCall color="white" fontSize="1.5em" />
                    </div>
                    <div className="hidden sm:flex w-full bg-white h-1"></div>
                </div>
                <div className="mt-3 mx-4 sm:pr-8">
                    <p className="text-sm font-normal">This text will be a summary of items included in Phase 4.</p>
                </div>
                <div className="flex justify-center pt-6">
                    <SlArrowDown color="white" fontSize="2em"/>
                </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
                <h3 className="pb-4 text-lg font-semibold">Phase 5</h3>
                <div className="flex items-center">
                    <div className="hidden sm:flex w-full bg-white h-1"></div>
                    <div className="flex z-10 justify-center items-center w-10 h-10 rounded-full ring-0 ring-brand-dark sm:ring-8 shrink-0">
                        <FaPaperPlane color="white" fontSize="1.5em" />
                    </div>
                    <div className="hidden sm:flex w-full bg-white h-1"></div>
                </div>
                <div className="mt-3 mx-4 sm:pr-8">
                    <p className="text-sm font-normal">This text will be a summary of items included in Phase 5.</p>
                </div>
                <div className="flex justify-center pt-6">
                    <SlArrowDown color="white" fontSize="2em"/>
                </div>
            </li>
            
        </ol>

    // </div>
   )
   
    // return (
    //     <div className="w-[700px] h-[500px] relative flex justify-center place-itemsorange border-4 border-brand-green rounded-lg text-brand-gray">
    //         <div>
    //             <div className="absolute top-[10%] left-[10%] text-brand-darkest">
    //                 <FaArrowCircleDown color="#db872e" fontSize="2em" />
    //             </div>
    //             {/* top vertical line */}
    //             <div className="absolute top-[17%] left-[12%] h-[34%] w-[5px] bg-brand-orange" ></div>
    //             {/* 1st stage */}
    //             <div className="absolute top-[22%] left-[12%] h-[3px] w-[10%] bg-brand-orange" ></div>
    //             <div className="absolute top-[21%] left-[22%] h-[14px] w-[14px] rounded-full bg-brand-green ring-2 ring-brand-orange"></div>
    //             <div className="absolute top-[20%] left-[26%]">
    //                 {checkpoints[0]}
    //                 <p className="text-xs">&bull; item</p>
    //                 <p className="text-xs">&bull; item</p>
    //                 <p className="text-xs">&bull; item</p>
    //             </div>
    //             {/* horizontal line */}
    //             <div className="absolute top-[50%] left-[12%] w-[76%] h-[5px] bg-brand-orange"></div>
    //             {/* 2nd stage */}
    //             <div className="absolute top-[50%] left-[32%] h-[10%] w-[3px] bg-brand-orange" ></div>
    //             <div className="absolute top-[60%] left-[31%] h-[14px] w-[14px] rounded-full bg-brand-green ring-2 ring-brand-orange"></div>
    //             <div className="absolute top-[64%] left-[24%]">
    //                 {checkpoints[1]}
    //                 <p className="text-xs">&bull; item</p>
    //                 <p className="text-xs">&bull; item</p>
    //                 <p className="text-xs">&bull; item</p>
    //             </div>
    //             {/* 3rd stage  */}
    //             <div className="absolute top-[30%] left-[62%] h-[20%] w-[3px] bg-brand-orange" ></div>
    //             <div className="absolute top-[27%] left-[61%] h-[14px] w-[14px] rounded-full bg-brand-green ring-2 ring-brand-orange"></div>
    //             <div className="absolute top-[26%] left-[65%]">
    //                 {checkpoints[2]}
    //                 <p className="text-xs">&bull; item</p>
    //                 <p className="text-xs">&bull; item</p>
    //                 <p className="text-xs">&bull; item</p>
    //             </div>
    //             {/* bottom vertical line */}
    //             <div className="absolute bottom-[17%] right-[12%] h-[32%] w-[5px] bg-brand-orange"></div>
    //             {/* 4th stage line */}
    //             <div className="absolute bottom-[26%] right-[12%] h-[3px] w-[12%] bg-brand-orange" ></div>
    //             <div className="absolute bottom-[25%] right-[24%] h-[14px] w-[14px] rounded-full bg-brand-green ring-2 ring-brand-orange"></div>
    //             <div className="absolute bottom-[14%] right-[32%]">
    //                 {checkpoints[3]}
    //                 <p className="text-xs">&bull; item</p>
    //                 <p className="text-xs">&bull; item</p>
    //                 <p className="text-xs">&bull; item</p>

    //             </div>
    //             <div className="absolute bottom-[10%] right-[10%]">
    //                 <FaArrowCircleUp color="#db872e" fontSize="2em" />
    //             </div>
    //         </div>
            
    //     </div>
    // )
}

export default Roadmap