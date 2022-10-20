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

                        <div className="flex flex-row mx-[10%] py-10 items-center">
                            <div className="pr-8">
                                {icon}
                            </div>
                            <div className=" p-4 bg-brand-gray opacity-[70%] border-4 border-brand-orange rounded-md">
                                <div className="text-brand-dark text-lg">{content}</div>
                            </div>
                        </div>
                    </div>

                    <div>{component}</div>                   

                    {(Id === 2 || Id === 4) && (<div className="pb-10 text-brand-green text-center">{link}</div>)}
                    
                </div>
            )}
        </>
    )
}

export default MenuItem