import Link from "next/link"
import React, { FC, useState, useEffect } from "react"
import MenuItem from "./menuItem"
import ProjectPreview from "./menuItem/ProjectPreview"
import ProjectCarousel from "./menuItem/ProjectCarousel"
import BuilderForm from "./menuItem/BuilderForm"
import InvestorPreview from "./menuItem/InvestorPreview"
import { GiRecycle } from "react-icons/gi"
import { DiCodeigniter } from "react-icons/di"
import { GiTakeMyMoney } from "react-icons/gi"
import { GoTools } from "react-icons/go"

const Menu: FC = () => {
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
                "KickStart connects ecosystem grant providers and individual contributors to independent builders seeking development funding. Pledged funds are automatically released to builders as they deliver on their established goals. Building with KickStart exposes promising new projects to greater community support and enables trustless cooperation to drive ecosystem growth.",
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
                "Browse the exciting new projects being powered by KickStark! Select any project for details and to contribute funding.",
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
                "Start here to create your project profile and get funded! Submitting this form will initialize your project and allow you add deliverables to your project's custom roadmap.",
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
            component: <BuilderForm />
        },
        {
            id: 4,
            title: "contributors",
            content:
                "Some more detail about what to expect when you fund a project. Link to full catalogue page or connect your wallet to access your personal Contributor's Dashboard.",
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
        <div className="w-screen mt-[2%] pb-[25%]">
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
