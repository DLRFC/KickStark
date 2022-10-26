import React, { FC } from "react"
import Link from "next/link"
import { FaArrowCircleLeft } from "react-icons/fa"
import Wallet from "../wallet"

type HeaderProps = {
    title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
    return (
        <>
            <div className="flex w-full items-center justify-between pt-12 px-[8%]">
                <Link href="/">
                    <div className="flex flex-row">
                        <div className="pt-4 pr-3">
                            <FaArrowCircleLeft color="#db872e" fontSize="2em" />
                        </div>
                        <div className="">
                            <div className="text-brand-orange text-2xl pl-8">
                                KickStark
                            </div>
                            <hr className="border-1 border-brand-green"></hr>
                        </div>
                    </div>
                </Link>
                <Wallet />
            </div>

            <div className="w-full pl-12 pr-[15%] pt-[5%] justify-end">
                <div className="w-full">
                    <div className="text-brand-orange text-6xl text-right pr-[17%]">
                        {title}
                    </div>
                    <hr className="border-1 border-brand-green"></hr>
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
