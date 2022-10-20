import { NextPage } from "next";
import React, { FC } from "react";
import Header from "../../components/header";
import ProgressReport from "../../components/projects/ProgressReport";
import MapForm from "../../components/projects/MapForm";
import Roadmap from "../../components/projects/Roadmap";
import Card from "../../components/projects/Card"
import ProjectList from "../../components/projects/List"

// This page is initialized when builders sbmit the first form with profile info,
// then they arrive here to their new page to fill out roadmap building form.
// when roadmap is submitted the page displays profile card, roadmap component and progess/status component
// All contract interactions will happen from this page. 
// Will include buttons to 
// 1)deposit funds (always available),
// 2)builders submit checkpoint requirements/claim funds (diasbled unless wallet is project owner),
// 3)collect refunds (disabled unless wallet is investor).
// Each button should pop up a modal to set params of the transaction.

const ProjectProfile: NextPage = () => {
    return (
        <div className="relative w-screen h-screen circuitBoard">

            {/* learn how to receive the project id/name here */}
            <div className="mb-12">
                <Header title="[ Project Name ]" />
            </div>
            <div className="flex flex-row mx-12 justify-between">
                <div className="pl-16">
                    {/* if project is fully built, display roadmap,
                    if not, display form to create it (pop-up modal??) */}
                    {/* <MapForm /> */}
                    <Roadmap numCheckpoints={4} checkpoints={['stage1', 'stage2', 'stage3', 'stage4']}/>
                </div>
                <div className="pr-7">
                    {/* are we able to know the index we need to take from ProjectList?
                    if not, can build an individual Card here.  */}
                    {ProjectList[2]}    
                </div>   
            </div>
            <div className="flex flex-row justify-between mx-12 pt-8 px-10">
                <div className="pl-6">
                    <div>
                        <button className="my-3 bg-brand-orange text-brand-darkest rounded-lg py-2 px-4">Deposit Funds</button>
                    </div>
                    <div>
                        <button className="my-3 bg-brand-orange text-brand-darkest rounded-lg py-2 px-4">Builder Claim</button>
                    </div>
                    <div>
                        <button className="my-3 bg-brand-orange text-brand-darkest rounded-lg py-2 px-4">Investor Refund</button>
                    </div>
                </div>
                <div className="">
                    {/* if project is fully built, display progress report,
                    if not, display blank placeholder */}
                    <ProgressReport />
                </div>
            </div>            
            
        </div>
    )
}

export default ProjectProfile