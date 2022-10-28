import React, { FC } from "react"
import { CheckIcon, HandThumbUpIcon, UserIcon } from "@heroicons/react/20/solid"
import { Timeline } from "react-twitter-widgets"

const ProgressReport: FC<any> = ({ project, githubMetrics }) => {
    console.log("project", project)
    console.log("metrics", githubMetrics)

    const stats = [
        { name: "Total Subscribers", stat: "71,897" },
        { name: "Avg. Open Rate", stat: "58.16%" },
        { name: "Avg. Click Rate", stat: "24.57%" }
    ]

    const timeline = [
        {
            id: 1,
            content: "Applied to",
            target: "Front End Developer",
            href: "#",
            date: "Sep 20",
            datetime: "2020-09-20",
            icon: UserIcon,
            iconBackground: "bg-gray-400"
        },
        {
            id: 2,
            content: "Advanced to phone screening by",
            target: "Bethany Blake",
            href: "#",
            date: "Sep 22",
            datetime: "2020-09-22",
            icon: HandThumbUpIcon,
            iconBackground: "bg-blue-500"
        },
        {
            id: 3,
            content: "Completed phone screening with",
            target: "Martha Gardner",
            href: "#",
            date: "Sep 28",
            datetime: "2020-09-28",
            icon: CheckIcon,
            iconBackground: "bg-green-500"
        },
        {
            id: 4,
            content: "Advanced to interview by",
            target: "Bethany Blake",
            href: "#",
            date: "Sep 30",
            datetime: "2020-09-30",
            icon: HandThumbUpIcon,
            iconBackground: "bg-blue-500"
        },
        {
            id: 5,
            content: "Completed interview with",
            target: "Katherine Snyder",
            href: "#",
            date: "Oct 4",
            datetime: "2020-10-04",
            icon: CheckIcon,
            iconBackground: "bg-green-500"
        }
    ]

    function classNames(...classes: any) {
        return classes.filter(Boolean).join(" ")
    }
    return (
        <div className="w-[100%] h-auto border-8 border-brand-orange rounded-lg text-brand-green flex flex-col justify-center place-items-center">
            <div className="my-5 text-2xl font-bold">Progress Report</div>
            <div>
                <h3 className="text-lg font-medium leading-6 text-gray-100 text-center">Last 30 days</h3>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
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
                <div className="flow-root my-10 mx-10">
                    <p className="mb-5 text-xl">Github updates</p>
                    <p className="mb-5 text-xl">
                        Merged PRs: {githubMetrics.mergedPullRequests} / Total Commits: {githubMetrics.commits}
                    </p>
                    <ul role="list" className="-mb-8">
                        {timeline.map((event, eventIdx) => (
                            <li key={event.id}>
                                <div className="relative pb-8">
                                    {eventIdx !== timeline.length - 1 ? (
                                        <span
                                            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                            aria-hidden="true"
                                        />
                                    ) : null}
                                    <div className="relative flex space-x-3">
                                        <div>
                                            <span
                                                className={classNames(
                                                    event.iconBackground,
                                                    "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                                                )}
                                            >
                                                <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                            <div>
                                                <p className="text-sm text-gray-400 mx-3">
                                                    {event.content}{" "}
                                                    <a href={event.href} className="font-medium text-gray-100">
                                                        {event.target}
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="whitespace-nowrap text-right text-sm text-gray-300">
                                                <time dateTime={event.datetime}>{event.date}</time>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flow-root my-10 mx-10">
                    <p className="mb-5 text-xl">Twitter Updates</p>
                    <div className="h-[400px] px-2 overflow-y-scroll">
                        <Timeline
                            dataSource={{ sourceType: "profile", screenName: project.twitter }}
                            options={{ width: "400" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressReport
