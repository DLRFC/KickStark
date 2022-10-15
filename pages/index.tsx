import type { NextPage } from 'next'
import React, { useState } from "react"
import { GiRecycle } from 'react-icons/gi'
import { DiCodeigniter } from 'react-icons/di'
import { GiTakeMyMoney } from 'react-icons/gi'
import { GoTools } from 'react-icons/go'
import { FaArrowCircleRight } from 'react-icons/fa'
import Section from '../components/Section'
import Head from 'next/head'
import Image from 'next/image'
import MenuUI from '../components/MenuUI'

const Home: NextPage = () => {
  const [Index, setIndex] = useState(1)

  const menuItems: { id: number, title: string, content: string, icon: JSX.Element }[] = [
    {
      id: 1,
      title: "Deliverable",
      content: "This is what it does, how it works, and why you want to use it. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <GiRecycle color="#db872e" fontSize="4em"/>
    },
    {
      id: 2,
      title: "catalogue",
      content: "Browse the exciting new projects being powered by Deliverable. Select any project from the catalogue below for more details or to contibute funding. Link to full catalogue page.",
      icon: <DiCodeigniter color="#db872e" fontSize="4em"/>
    },
    {
      id: 3,
      title: "builders",
      content: "Start here to create your project profile and get funded! After submitting this form you will proceed to set up your roadmap and investment terms.",
      icon: <GoTools color="#db872e" fontSize="4em"/>
    },
    {
      id: 4,
      title: "investors",
      content: "Some more detail about what to expect when you fund a project. Link to full catalogue page or connect your wallet to access your personal Investor's Dashboard.",
      icon: <GiTakeMyMoney color="#db872e" fontSize="4em"/>
    },
  ]

  return (
    <div className="relative w-screen h-screen circuitBoard">
      <div className="w-full">

      </div>
      <div className="w-screen mt-[4%] pb-[25%]">
        {menuItems.map((items) => {
          return (
            <div className="">
              <MenuUI
                title={items.title}
                Id={items.id}
                content={items.content}
                icon={items.icon}
                Index={Index}
                setIndex={setIndex}
              ></MenuUI>
            </div>
          )
        })}
      </div>

      <div className="bg-brand-orange w-full fixed bottom-0">
        <p className="text-brand-darkest text-lg text-center py-3">Powered by StarkNet</p>
        {/* <Image src="/public/starknet-logo.png" width="200px" height="50px"/> */}
      </div>
    </div>
  )
}

export default Home
