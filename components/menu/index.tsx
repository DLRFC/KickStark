import Link from 'next/link'
import React, { FC, useState } from "react"
import { GiRecycle } from 'react-icons/gi'
import { DiCodeigniter } from 'react-icons/di'
import { GiTakeMyMoney } from 'react-icons/gi'
import { GoTools } from 'react-icons/go'
import MenuItem from './MenuItem'
import ProjectPreview from './ProjectPreview'
import ProjectCarousel from '../carousel'
import CardForm from '../projects/CardForm'
import InvestorPreview from './InvestorPreview'

const Menu: FC = () => {
  const [Index, setIndex] = useState(1)


  const menuItems: { id: number, title: string, content: string, icon: JSX.Element, link: JSX.Element, component: JSX.Element }[] = [
    {
      id: 1,
      title: "KickStark",
      content: "This is what it does, how it works, and why you want to use it. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <GiRecycle color="#db872e" fontSize="4.5em"/>,
      link: <Link href="/catalogue"><a>Explore the <span className="underline">full catalogue</span> of active projects</a></Link>,
      component: <ProjectPreview />
    },
    {
      id: 2,
      title: "catalogue",
      content: "Browse the exciting new projects being powered by KickStark! Select any project below for more details and to contribute funding.",
      icon: <DiCodeigniter color="#db872e" fontSize="4em"/>,
      link: <Link href="/catalogue"><a>Explore the <span className="underline">full catalogue</span> of active projects</a></Link>,
      component: <ProjectCarousel />
    },
    {
      id: 3,
      title: "builders",
      content: "Start here to create your project profile and get funded! After submitting this form you will proceed to set up your roadmap and investment terms.",
      icon: <GoTools color="#db872e" fontSize="4em"/>,
      link: <Link href="/catalogue"><a>Explore the <span className="underline">full catalogue</span> of active projects</a></Link>,
      component: <CardForm />
    },
    {
      id: 4,
      title: "investors",
      content: "Some more detail about what to expect when you fund a project. Link to full catalogue page or connect your wallet to access your personal Investor's Dashboard.",
      icon: <GiTakeMyMoney color="#db872e" fontSize="5em"/>,
      link: <Link href="/catalogue"><a>Explore the <span className="underline">full catalogue</span> of active projects</a></Link>,
      component: <InvestorPreview />
    },
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