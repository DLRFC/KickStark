import { FC, useState } from "react"

type ProgressProps = {
    title: string
    desc: string
    percent: number
}

const Progress: FC<ProgressProps> = ({ title, desc, percent }) => {
    return (
        <>
            <div className="bg-brand-gray">
                <div className="m-6">
                    <p className="text-5xl font-semibold leading-10 text-center text-gray-800">
                        {percent}%
                    </p>
                    <p className="text-lg leading-none text-center text-gray-600 mt-6">
                        {title}
                    </p>
                    <p className="text-xs leading-tight text-center text-gray-400 mt-4 px-4 h-10">
                        {desc}
                    </p>
                    <div className="mt-6">
                        <svg
                            className="mx-auto"
                            width={250}
                            height={5}
                            viewBox="0 0 305 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width={250}
                                height={5}
                                rx="2.5"
                                fill="#E5E7EB"
                            />
                            <rect
                                width={250 * (percent / 100)}
                                height={5}
                                rx="2.5"
                                fill={percent > 60 ? "#A2C11C" : "#db872e"}
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Progress
