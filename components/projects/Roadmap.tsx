import React, { FC, useState } from "react";
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
            <div className="w-[85%] bg-brand-orange opacity-[85%] rounded-lg shadow-card shadow-brand-darkest">
                <ol className="items-center text-center text-brand-darkest sm:flex px-10 pt-10 pb-4">
                    <li className="relative max-w-[20%] mb-6 sm:mb-0">
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
                    <li className="relative max-w-[20%] mb-6 sm:mb-0">
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
                    <li className="relative max-w-[20%] mb-6 sm:mb-0">
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
                    <li className="relative max-w-[20%] mb-6 sm:mb-0">
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
                    <li className="relative max-w-[20%] mb-6 sm:mb-0">
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

            <div className="flex w-[70%] px-[12%] py-4 items-center rounded-lg bg-brand-gray border-2 border-brand-orange opacity-[85%] shadow-card shadow-brand-darkest/80">
                {CurrentPhase === SelectedPhase && (
                    <div className="text-xl text-brand-green">
                        <p>CURRENTY</p>
                        <p>UNDER</p>
                        <p>DEVELOPMENT</p>
                    </div>)}
                {CurrentPhase > SelectedPhase && (
                    <div className="text-xl text-red-500">
                        <p>PHASE</p>
                        <p>COMPLETED</p>
                    </div>)}
                {CurrentPhase < SelectedPhase && (
                    <div className="text-xl text-red-500">
                        <p>COMING</p>
                        <p>SOON</p>
                    </div>)}               
                <div className="text-base text-brand-dark pl-[8%]">
                    <p className="pb-2">&bull; {phaseDescriptions[SelectedPhase][0]}</p>
                    <p className="pb-2">&bull; {phaseDescriptions[SelectedPhase][1]}</p>
                    <p>&bull; {phaseDescriptions[SelectedPhase][2]}</p>
                </div>
                
            </div>
        </div>
   )
}

export default Roadmap