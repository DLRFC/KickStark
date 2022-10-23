import React, { FC, useState } from "react";
import { FaArrowCircleDown } from 'react-icons/fa'
import { FaArrowCircleUp } from 'react-icons/fa'
import { BsLightningFill } from 'react-icons/bs'
import { TbLayersLinked } from 'react-icons/tb'
import { BsGearWideConnected } from 'react-icons/bs'
import { GiBugleCall } from 'react-icons/gi'
import { FaPaperPlane } from 'react-icons/fa'
import { SlArrowDown } from 'react-icons/sl'

type RoadmapProps = {
    phaseSummaries: string[];
    phaseDescriptions: string[][];
}

// this will create roadmap component from MapForm inputs
const Roadmap: FC<RoadmapProps> = ({ phaseSummaries, phaseDescriptions}) => {
    const [CurrentPhase, setCurrentPhase] = useState(2)
    const [SelectedPhase, setSelectedPhase] = useState(CurrentPhase)
    const handleSetSelectedPhase = (Id: number) => (SelectedPhase === Id ? setSelectedPhase(0) : setSelectedPhase(Id))

   return (
        <div className="flex flex-col items-center">
            <div className="w-[85%] bg-brand-orange opacity-[80%] rounded-lg">
                <ol className="items-center text-center text-brand-darkest sm:flex px-10 pt-10 pb-4">
                    <li className="relative mb-6 sm:mb-0">
                        <h3 className="pb-4 text-lg font-semibold">Phase 1</h3>
                        <div className="flex items-center">
                            <div className="hidden sm:flex w-full bg-white h-0"></div>
                            {CurrentPhase === 0 ? (
                              <div className="flex z-10 justify-center items-center w-10 h-10 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                                <BsLightningFill color="#A2C11C" fontSize="1.5em" />
                                </div>  
                            ) : (
                                <div className="flex z-10 justify-center items-center w-10 h-10 rounded-full ring-0 ring-brand-dark sm:ring-8 shrink-0">
                                <BsLightningFill color="white" fontSize="1.5em" />
                                </div>
                            )}                           
                            <div className="hidden sm:flex w-full bg-white h-1"></div>
                        </div>
                        <div className="mt-3 mx-4 sm:pr-8">
                            <p className="text-sm font-normal">{phaseSummaries[0]}</p>
                        </div> 
                        <div className="flex justify-center pt-6">
                            <button onClick={() => handleSetSelectedPhase(0)} >
                                {SelectedPhase === 0 ? (<SlArrowDown color="#053a42" fontSize="2em"/>) : (<SlArrowDown color="white" fontSize="2em"/>)}                       
                            </button>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <h3 className="pb-4 text-lg font-semibold">Phase 2</h3>
                        <div className="flex items-center">
                            <div className="hidden sm:flex w-full bg-white h-1"></div>
                            {CurrentPhase === 1 ? (
                                <div className="flex z-10 justify-center items-center w-10 h-10 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                                <TbLayersLinked color="#A2C11C" fontSize="2em" />
                            </div>
                            ) : (
                                <div className="flex z-10 justify-center items-center w-10 h-10 rounded-full ring-0 ring-brand-dark sm:ring-8 shrink-0">
                                <TbLayersLinked color="white" fontSize="2em" />
                            </div>
                            )}
                            <div className="hidden sm:flex w-full bg-white h-1"></div>
                        </div>
                        <div className="mt-3 mx-4 sm:pr-8">
                            <p className="text-sm font-normal">{phaseSummaries[1]}</p>
                        </div>
                        <div className="flex justify-center pt-6">
                            <button onClick={() => handleSetSelectedPhase(1)} >
                                {SelectedPhase === 1 ? (<SlArrowDown color="#053a42" fontSize="2em"/>) : (<SlArrowDown color="white" fontSize="2em"/>)}
                            </button>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <h3 className="pb-4 text-lg font-semibold">Phase 3</h3>
                        <div className="flex items-center">
                            <div className="hidden sm:flex w-full bg-white h-1"></div>
                            {CurrentPhase === 2 ? (
                                <div className="flex z-10 justify-center items-center w-10 h-10 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                                <BsGearWideConnected color="#A2C11C" fontSize="1.5em" />
                            </div>
                            ) : (
                                <div className="flex z-10 justify-center items-center w-10 h-10 rounded-full ring-0 ring-brand-dark sm:ring-8 shrink-0">
                                <BsGearWideConnected color="white" fontSize="1.5em" />
                            </div>
                            )}                    
                            <div className="hidden sm:flex w-full bg-white h-1"></div>
                        </div>
                        <div className="mt-3 mx-4 sm:pr-8">
                            <p className="text-sm font-normal">{phaseSummaries[2]}</p>
                        </div>
                        <div className="flex justify-center pt-6">
                            <button onClick={() => handleSetSelectedPhase(2)} >
                                {SelectedPhase === 2 ? (<SlArrowDown color="#053a42" fontSize="2em"/>) : (<SlArrowDown color="white" fontSize="2em"/>)}
                            </button>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <h3 className="pb-4 text-lg font-semibold">Phase 4</h3>
                        <div className="flex items-center">
                            <div className="hidden sm:flex w-full bg-white h-1"></div>
                            {CurrentPhase === 3 ? (
                                <div className="flex z-10 justify-center items-center w-10 h-10 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                                    <GiBugleCall color="#A2C11C" fontSize="1.5em" />
                                </div>
                            ) : (
                                <div className="flex z-10 justify-center items-center w-10 h-10 rounded-full ring-0 ring-brand-dark sm:ring-8 shrink-0">
                                    <GiBugleCall color="white" fontSize="1.5em" />
                                </div>
                            )}       
                            <div className="hidden sm:flex w-full bg-white h-1"></div>
                        </div>
                        <div className="mt-3 mx-4 sm:pr-8">
                            <p className="text-sm font-normal">{phaseSummaries[3]}</p>
                        </div>
                        <div className="flex justify-center pt-6">
                            <button onClick={() => handleSetSelectedPhase(3)} >
                                {SelectedPhase === 3 ? (<SlArrowDown color="#053a42" fontSize="2em"/>) : (<SlArrowDown color="white" fontSize="2em"/>)}
                            </button>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <h3 className="pb-4 text-lg font-semibold">Phase 5</h3>
                        <div className="flex items-center">
                            <div className="hidden sm:flex w-full bg-white h-1"></div>
                            {CurrentPhase === 4 ? (
                                <div className="flex z-10 justify-center items-center w-10 h-10 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                                    <FaPaperPlane color="#A2C11C" fontSize="1.5em" />
                                </div>
                            ) : (
                                <div className="flex z-10 justify-center items-center w-10 h-10 rounded-full ring-0 ring-brand-dark sm:ring-8 shrink-0">
                                    <FaPaperPlane color="white" fontSize="1.5em" />
                                </div>
                            )}                     
                            <div className="hidden sm:flex w-full bg-white h-0"></div>
                        </div>
                        <div className="mt-3 mx-4 sm:pr-8">
                            <p className="text-sm font-normal">{phaseSummaries[4]}</p>
                        </div>
                        <div className="flex justify-center pt-6">
                            <button onClick={() => handleSetSelectedPhase(4)} >
                                {SelectedPhase === 4 ? (<SlArrowDown color="#053a42" fontSize="2em"/>) : (<SlArrowDown color="white" fontSize="2em"/>)}
                            </button>
                        </div>
                    </li>                 
                </ol>
            </div>

            <div className="w-[70%] p-5 items-center rounded-lg text-lg text-brand-dark bg-brand-gray opacity-[75%]">
                <p className="pb-2">&bull; {phaseDescriptions[SelectedPhase][0]}</p>
                <p className="pb-2">&bull; {phaseDescriptions[SelectedPhase][1]}</p>
                <p>&bull; {phaseDescriptions[SelectedPhase][2]}</p>
            </div>
        </div>
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