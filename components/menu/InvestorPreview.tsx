import React, { FC, useState, Fragment } from "react"
import Image from "next"
import { Tab, Listbox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"
import Activity from "../activity"
import Progress from "../progress"

// this will display a sample investor's dashboard inside
// the 'investors' heading of front page menu
const InvestorPreview: FC = () => {
    const projects: { id: number; name: string; unavailable: boolean }[] = [
        {
            id: 1,
            name: "Deliverable",
            unavailable: false
        },
        {
            id: 2,
            name: "Om",
            unavailable: false
        },
        {
            id: 3,
            name: "Emergence",
            unavailable: false
        },
        {
            id: 4,
            name: "DecentraList",
            unavailable: false
        },
        {
            id: 5,
            name: "MxTape",
            unavailable: false
        },
        {
            id: 6,
            name: "Parfait",
            unavailable: false
        }
    ]

    const [selectedProject, setSelectedProject] = useState(projects[0])

    const classNames = (...classes: any[]) => {
        return classes.filter(Boolean).join(" ")
    }

    return (
        <>
            <div className="w-[900px] ml-[15%] mb-2">
                <Listbox value={selectedProject} onChange={setSelectedProject}>
                    <div className="relative mt-1">
                        <Listbox.Button className="text-brand-gray relative w-full cursor-default rounded-lg bg-blue-200/20 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-brand-orange focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-orange sm:text-sm">
                            <span className="block truncate">
                                {selectedProject.name}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="text-xl absolute mt-1 w-full overflow-auto rounded-md bg-brand-gray py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-lg">
                                {projects.map((project, projectIdx) => (
                                    <Listbox.Option
                                        key={projectIdx}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active
                                                    ? "bg-brand-green"
                                                    : "text-gray-900"
                                            }`
                                        }
                                        value={project}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                        selected
                                                            ? "font-medium"
                                                            : "font-normal"
                                                    }`}
                                                >
                                                    <span className="text-2xl">
                                                        {project.name}
                                                    </span>
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                        <CheckIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>

            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl p-1 w-[900px] ml-[15%] bg-blue-100/20 text-brand-darkest">
                    <Tab
                        className={({ selected }) =>
                            classNames(
                                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-brand-green focus:outline-none focus:ring-2",
                                selected
                                    ? "bg-white shadow text-brand-dark"
                                    : " text-brand-gray hover:bg-white/[0.12] hover:text-white"
                            )
                        }
                    >
                        Activity
                    </Tab>
                    <Tab
                        className={({ selected }) =>
                            classNames(
                                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-brand-green focus:outline-none focus:ring-2",
                                selected
                                    ? "bg-white shadow text-brand-dark"
                                    : " text-brand-gray hover:bg-white/[0.12] hover:text-white"
                            )
                        }
                    >
                        Stages
                    </Tab>
                    <Tab
                        className={({ selected }) =>
                            classNames(
                                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-brand-green focus:outline-none focus:ring-2",
                                selected
                                    ? "bg-white shadow text-brand-dark"
                                    : " text-brand-gray hover:bg-white/[0.12] hover:text-white"
                            )
                        }
                    >
                        Feed
                    </Tab>
                </Tab.List>
                <Tab.Panels className="mt-2 mb-10 w-[900px] ml-[15%]">
                    <Tab.Panel
                        className={classNames("rounded-xl bg-brand-gray p-3")}
                    >
                        <Activity />
                    </Tab.Panel>
                    <Tab.Panel
                        className={classNames("rounded-xl bg-brand-gray p-3")}
                    >
                        <div className="flex justify-center">
                            <Progress
                                title={"Stage 1"}
                                desc="Here is the stage description"
                                percent={88}
                            />
                            <Progress
                                title={"Stage 2"}
                                desc="Impedit quo minus id quod maxime placeat facere possimus, omnis"
                                percent={67}
                            />
                            <Progress
                                title={"Stage 3"}
                                desc="Molestias excepturi sint occaecati cupiditate non provident"
                                percent={35}
                            />
                        </div>
                        <div className="flex justify-center">
                            <Progress
                                title={"Stage 4"}
                                desc="Impedit quo minus id quod maxime placeat facere possimus, omnis"
                                percent={21}
                            />
                            <Progress
                                title={"Stage 5"}
                                desc="Quo minus id quod maxime placeat facere possimus, omnis voluptas assum"
                                percent={6}
                            />
                            <Progress
                                title={"Stage 6"}
                                desc="Quibusdam et aut officiis debitis aut rerum necessitatibus "
                                percent={0}
                            />
                        </div>
                    </Tab.Panel>
                    <Tab.Panel
                        className={classNames("rounded-xl bg-brand-gray p-3")}
                    >
                        <div className="flex justify-center">
                            <img src="feed.png" alt="" />
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </>
    )
}

export default InvestorPreview
