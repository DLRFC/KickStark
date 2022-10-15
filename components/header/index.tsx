import React, { FC } from 'react'
import Link from 'next/link'
import { FaArrowCircleLeft } from 'react-icons/fa'

type HeaderProps = {
    title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
    return (
        <>
            <div className="flex w-full items-center justify-between pt-12 px-[8%]">
                <Link href="/" >
                    <div className="flex flex-row">
                        <div className="pt-4 pr-3">
                            <FaArrowCircleLeft color="#db872e" fontSize="2em"/>
                        </div>
                        <div className="">
                                <div className="text-brand-orange text-2xl pl-8">Deliverable</div>
                                <hr className="border-1 border-brand-green"></hr>
                        </div>
                    </div>
                </Link>
                <div>
                    <button className="bg-brand-orange text-brand-darkest text-md rounded-md px-4 py-2">connect</button>
                </div>
            </div>

            <div className="w-full pl-12 pr-[20%] pt-[10%] pb-[15%] justify-end">
                <div className="w-full">
                    <div className="text-brand-orange text-6xl text-right pr-[10%]">{title}</div>
                    <hr className="border-1 border-brand-green"></hr>
                    <hr className="border-1 border-brand-green"></hr>
                    <hr className="border-1 border-brand-green mb-1"></hr>
                    <hr className="border-1 border-brand-green"></hr>
                </div>
            </div>    
        </>
    )
}

export default Header