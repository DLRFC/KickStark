import React, { FC } from "react"
import { FaCheckCircle } from "react-icons/fa"
// import { CheckIcon, HandThumbUpIcon, UserIcon } from "@heroicons/react/20/solid"
import { Timeline } from "react-twitter-widgets"

const ProgressReport: FC<any> = ({ project, githubMetrics }) => {
    console.log("project", project)
    console.log("metrics", githubMetrics)

    const pullRequests = githubMetrics.pullRequests

    const stats = [
        { name: "Merged Pull Requests", stat: githubMetrics.totalPullRequests },
        { name: "Total Commits", stat: githubMetrics.commits },
        { name: "Total Tweets", stat: "2" }
    ]

    return (
        <div className="w-auto h-auto border-8 border-brand-orange rounded-lg text-brand-green flex flex-col justify-center place-items-center">
            <div className="mt-10 mb-3 text-3xl font-bold">Progress Report</div>
            <div>
                {/* <h3 className="text-lg font-medium leading-6 text-gray-100 text-center">Last 30 days</h3> */}
                <dl className="my-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {stats.map((item) => (
                        <div
                            key={item.name}
                            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 text-center"
                        >
                            <dt className="truncate text-md font-bold text-gray-700">{item.name}</dt>
                            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
                        </div>
                    ))}
                </dl>
            </div>
            <div className="flex flex-row">
                <div className="flow-root my-14 mx-10">
                    <p className="mb-10 text-xl text-center">Github updates</p>
                    {/* <p className="mb-5 text-xl">
                        Merged PRs: {githubMetrics.totalPullRequests} / Total Commits: {githubMetrics.commits}
                    </p> */}
                    {/* <p className="text-center mb-2">Latest:</p> */}
                    <ul role="list" className="-mb-8 pl-4">
                        {pullRequests.map((element: any, elementIdx: number) => (
                            <li key={element.id}>
                                <div className="relative pb-8">
                                    <div className="relative flex space-x-3">
                                        <FaCheckCircle color="#db872e" fontSize="2.5em"/>
                                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                            <div>
                                                <p className="text-sm text-gray-400 mx-3">{element.title} </p>
                                            </div>
                                            <div className="whitespace-nowrap text-right text-sm text-gray-300">
                                                <time dateTime={element.closedAt}>
                                                    {new Date(element.closedAt).toDateString()}
                                                </time>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flow-root mt-14 mb-6 mx-10">
                    <p className="mb-5 text-xl text-center">Twitter Updates</p>
                    <div className="h-[400px] px-2 overflow-y-scroll">
                        <Timeline
                            dataSource={{ sourceType: "profile", screenName: project.twitter }}
                            options={{ width: "350" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressReport
