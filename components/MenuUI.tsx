import React, { FC } from "react";
import { FaArrowCircleRight } from 'react-icons/fa'

interface MenuUIProps {
    title: string;
    content: string;
    icon: JSX.Element;
    link: JSX.Element;
    Id: number;
    Index: number;
    setIndex: Function
}

const MenuUI: FC<MenuUIProps> = ({ title, content, icon, link, Id, Index, setIndex}) => {
    const handleSetIndex = (Id: number) => (Index === Id ? setIndex(0) : setIndex(Id))
    return (
        <>
            <div  className="">
                {Index !== Id ? (
                    <div onClick={() => handleSetIndex(Id)} className="flex flex-row pl-12 pb-2 cursor-pointer">
                        <div className="w-[12%]">
                            <div className="text-brand-orange text-xl">{title}</div>
                            <hr className="border-1 border-brand-green"></hr>
                            {/* <hr className="border-1 border-brand-green"></hr> */}
                        </div>
                        <div className="pt-4 pl-4">
                            <FaArrowCircleRight color="#db872e" fontSize="1.5em"/>
                        </div>
                    </div>
                ) : (
                    <div className="w-full pl-12 pr-[20%] pt-[8%] pb-[15%] justify-end">
                        <div className="w-full">
                            <div className="text-brand-orange text-4xl text-right pr-[10%]">{title}</div>
                            <hr className="border-1 border-brand-green"></hr>
                            <hr className="border-1 border-brand-green"></hr>
                            <hr className="border-1 border-brand-green mb-1"></hr>
                            <hr className="border-1 border-brand-green"></hr>
                        </div>

                        <div className="flex flex-row mx-[10%] py-6 items-center">
                            <div className="pr-8">
                                {icon}
                            </div>
                            <div className=" p-4 bg-brand-gray opacity-[70%] border-4 border-brand-orange rounded-md">
                                <div className="text-brand-dark text-lg">{content}</div>
                            </div>
                        </div>

                        <div className="text-brand-green text-center">{link}</div>
                        
                    </div>
                )}
            </div>
        </>
    )
}

export default MenuUI