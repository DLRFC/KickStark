import Link from "next/link"
import React, { FC, useState, useContext} from "react"
import MenuItem from "./menuItem"
import ProjectPreview from "./menuItem/ProjectPreview"
import ProjectCarousel from "./menuItem/ProjectCarousel"
import BuilderForm from "./menuItem/BuilderForm"
import InvestorPreview from "./menuItem/InvestorPreview"
import { GiRecycle } from "react-icons/gi"
import { DiCodeigniter } from "react-icons/di"
import { GiTakeMyMoney } from "react-icons/gi"
import { GoTools } from "react-icons/go"

type Props = {
    userAddress: string | null
}

const Menu: FC<Props> = ({userAddress}) => {
    const [Index, setIndex] = useState(1)

    const menuItems: {
        id: number
        title: string
        content: string
        icon: JSX.Element
        link: JSX.Element
        component: JSX.Element
    }[] = [
        {
            id: 1,
            title: "KickStark",
            content:
                "KickStark connects ecosystem grant providers and individual contributors to independent builders seeking development funding. Pledged funds are automatically released to builders as they deliver on their established goals. Building with KickStart exposes promising new projects to greater community support and enables trustless cooperation to drive ecosystem growth.",
            icon: <GiRecycle color="#db872e" fontSize="7.5em" />,
            link: (
                <Link href="/catalogue">
                    <a>
                        Explore the{" "}
                        <span className="underline">full catalogue</span> of
                        active projects
                    </a>
                </Link>
            ),
            component: <ProjectPreview />
        },
        {
            id: 2,
            title: "catalogue",
            content:
                "Browse the exciting new projects being powered by KickStark! Select any project to access its details: view project deliverables, track progress, and contribute funding.",
            icon: <DiCodeigniter color="#db872e" fontSize="6em" />,
            link: (
                <Link href="/catalogue">
                    <a>
                        Explore the{" "}
                        <span className="underline">full catalogue</span> of
                        active projects
                    </a>
                </Link>
            ),
            component: <ProjectCarousel />
        },
        {
            id: 3,
            title: "builders",
            content:
                "Start here to create your project profile and get funded! Builders are required to define their project with detailed deliverables and connect their GitHub repository to provide progress accountability. Submitting this form will initialize your project and create its custom roadmap.",
            icon: <GoTools color="#db872e" fontSize="6em" />,
            link: (
                <Link href="/catalogue">
                    <a>
                        Explore the{" "}
                        <span className="underline">full catalogue</span> of
                        active projects
                    </a>
                </Link>
            ),
            component: <BuilderForm userAddress={userAddress} />
        },
        {
            id: 4,
            title: "contributors",
            content:
                "Contributors can support multiple projects and track the progress and activity of each via a personalized dashboard. If a project fails to deliver a phase of expected improvements, remaining funds will be returned to contributors.",
            icon: <GiTakeMyMoney color="#db872e" fontSize="7em" />,
            link: (
                <Link href="/catalogue">
                    <a>
                        Explore the{" "}
                        <span className="underline">full catalogue</span> of
                        active projects
                    </a>
                </Link>
            ),
            component: <InvestorPreview />
        }
    ]

    return (
        <div className="w-screen mt-[1%] pb-[25%]">
            {menuItems.map((items) => {
                return (
                    <div className="">
                        <MenuItem
                            title={items.title}
                            Id={items.id}
                            content={items.content}
                            icon={items.icon}
                            link={items.link}
                            component={items.component}
                            Index={Index}
                            setIndex={setIndex}
                        ></MenuItem>
                    </div>
                )
            })}
        </div>
    )
}

export default Menu
