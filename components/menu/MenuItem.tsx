import React, { FC } from "react";
import { FaArrowCircleRight } from 'react-icons/fa'

type MenuItemProps = {
    title: string;
    content: string;
    icon: JSX.Element;
    link: JSX.Element;
    component: JSX.Element
    Id: number;
    Index: number;
    setIndex: Function
}

const MenuItem: FC<MenuItemProps> = ({ title, content, icon, link, component, Id, Index, setIndex}) => {
    const handleSetIndex = (Id: number) => (Index === Id ? setIndex(0) : setIndex(Id))
    return (
        <>
            {Index !== Id ? (
                <div onClick={() => handleSetIndex(Id)} className="flex flex-row pl-12 pb-2 cursor-pointer">
                    <div className="w-[15%]">
                        <div className="text-brand-orange text-2xl">{title}</div>
                        <hr className="border-1 border-brand-green"></hr>
                    </div>
                    <div className="pt-4 pl-4">
                        <FaArrowCircleRight color="#db872e" fontSize="2em"/>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="w-full pl-12 pr-[20%] justify-end">
                        <div className="w-full">
                            <div className="text-brand-orange text-6xl text-right pr-[10%]">{title}</div>
                            <hr className="border-1 border-brand-green"></hr>
                            <hr className="border-1 border-brand-green"></hr>
                            <hr className="border-1 border-brand-green mb-1"></hr>
                            <hr className="border-1 border-brand-green"></hr>
                        </div>                       
                    </div>

                    <div className="grid py-6">
                        <div className="z-0 col-start-1 row-start-1 h-[350px] w-full mt-16 bg-brand-teal opacity-[40%]">

                        </div>
                        <div className="z-20 col-start-1 row-start-1">
                            <div className="flex flex-row mx-[10%] mt-5 items-center">
                                <div className="pr-8">
                                    {icon}
                                </div>
                                <div className="w-[25%] p-4 bg-brand-gray border-8 border-brand-orange rounded-md shadow-menuInfo shadow-brand-green/80">
                                    <div className="text-brand-dark text-md">{content}</div>
                                </div>
                            </div>                   
                        </div>
                        <div className="z-10 col-start-1 row-start-1 w-[63%] h-[350px] mt-[6%] ml-[30%] flex justify-center place-items-center bg-brand-darker border-4 border-brand-orange rounded-lg text-brand-darkest shadow-menuContent shadow-brand-green/80">
                            {component}
                        </div>
                        {(Id === 2 || Id === 4) && (<div className="pt-10 pl-[45%] text-brand-green text-center">{link}</div>)}
                    </div>

                    
                </div>
            )}
        </>
    )
}

export default MenuItem