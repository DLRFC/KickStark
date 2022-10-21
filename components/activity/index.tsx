import React, { useEffect, FC } from "react"
import { Helmet } from "react-helmet"
import Chart from "chart.js/auto"

const Activity: FC = () => {
    useEffect(() => {
        const config: any = {
            type: "line",
            redraw: true,
            data: {
                labels: ["June", "July", "August", "September", "October"],
                datasets: [
                    {
                        label: "Commits",
                        borderColor: "rgb(219,135,46)",
                        data: [0, 3, 14, 45, 24],
                        fill: true,
                        pointBackgroundColor: "#4A5568",
                        borderWidth: 3,
                        pointBorderWidth: 4,
                        pointHoverRadius: 6,
                        pointHoverBorderWidth: 8,
                        pointHoverBorderColor: "rgb(219,135,46,0.2)"
                    },
                    {
                        label: "Pull Requests",
                        borderColor: "rgb(162,193,28)",
                        data: [0, 1, 3, 12, 7],
                        fill: true,
                        pointBackgroundColor: "#4A5568",
                        borderWidth: 3,
                        pointBorderWidth: 4,
                        pointHoverRadius: 6,
                        pointHoverBorderWidth: 8,
                        pointHoverBorderColor: "rgb(74,85,104,0.2)"
                    }
                ]
            },
            options: {
                legend: {
                    position: false
                },
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                display: false
                            },
                            display: false
                        }
                    ]
                }
            }
        }

        const chartElem: any = document.getElementById("myChart")
        const chart = new Chart(chartElem, config)

        return () => {
            chart.destroy()
        }
    }, [])
    return (
        <>
            <Helmet>
                {/* <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script> */}
                <script
                    defer
                    src="https://cdn.tuk.dev/dev/light-dark-switch.js"
                ></script>
            </Helmet>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="w-11/12 lg:w-2/3">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <div className="lg:flex w-full justify-between">
                                <h3 className="text-gray-600 dark:text-gray-400 leading-5 text-base md:text-xl font-bold">
                                    Repo Activity
                                </h3>
                                <div className="flex items-center justify-between lg:justify-start mt-2 md:mt-4 lg:mt-0">
                                    {/* <div className="flex items-center">
                                        <button className="py-2 px-4 bg-gray-100 dark:bg-gray-700 focus:outline-none ease-in duration-150 text-xs text-gray-600 dark:text-gray-400 hover:bg-gray-200">
                                            Dollars
                                        </button>
                                        <button className="py-2 px-4 bg-indigo-500 focus:outline-none text-white ease-in duration-150 text-xs hover:bg-indigo-600">
                                            Tickets
                                        </button>
                                    </div>
                                    <div className="lg:ml-14">
                                        <div className="bg-gray-100 dark:bg-gray-700 ease-in duration-150 hover:bg-gray-200 pb-2 pt-1 px-3 rounded-sm">
                                            <select className="text-xs text-gray-600 dark:text-gray-400 bg-transparent focus:outline-none">
                                                <option className="leading-1">
                                                    Year
                                                </option>
                                                <option className="leading-1">
                                                    2020
                                                </option>
                                                <option className="leading-1">
                                                    2019
                                                </option>
                                            </select>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="flex items-end mt-6">
                                {/* <h3 className="text-indigo-500 leading-5 text-lg md:text-2xl">
                                    $65,875
                                </h3> */}
                                <div className="flex items-center">
                                    <p className="text-brand-dark text-xs md:text-base">
                                        22 Total Merged PRs
                                    </p>
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                    >
                                        <path
                                            d="M6 2.5V9.5"
                                            stroke="#DB872E "
                                            strokeWidth="0.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M8 4.5L6 2.5"
                                            stroke="#DB872E "
                                            strokeWidth="0.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M4 4.5L6 2.5"
                                            stroke="#DB872E "
                                            strokeWidth="0.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg> */}
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <canvas id="myChart" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Activity
