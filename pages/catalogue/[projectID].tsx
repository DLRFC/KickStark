import { GetServerSidePropsContext, NextPage } from "next"
import { getStarknet } from "get-starknet"
import { Abi, Contract } from "starknet"
import React, { useState, useContext, useEffect } from "react"
import Header from "../../components/header"
import ProgressReport from "../../components/projects/ProgressReport"
import Roadmap from "../../components/projects/Roadmap"
import { supabase } from "../../utils/supabase"
import { apollo } from "../../utils/apollo"
// import { BigNumber } from "ethers"

import { gql } from "@apollo/client"
import { Project } from "../../Types/Project"
import { AppContext } from "../../components/context/AppContext"
import kickStarkAbi from "../../abis/kickStarkAbi.json"
import { kickStarkAddr, validatorAddr } from "../../config/goerli-alpha"

type Props = {
    project: Project
    githubMetrics: object
}

const ProjectProfile: NextPage<Props> = ({ project, githubMetrics }) => {
    const [projectIsOpen, setProjectIsOpen] = useState<boolean>(false)
    const [managerBalance, setManagerBalance] = useState<string>("0")
    const [stage, setStage] = useState<number>(0)
    const [txCount, setTxCount] = useState<number>(0) // Used to trigger page rendering after txs
    const { userAddress, setAppContext } = useContext(AppContext)

    useEffect(() => {
        fetchProjectIsOpen()
        fetchStage()
        fetchmanagerBalance()
    }, [txCount])

    // Read functions

    const fetchProjectIsOpen = async () => {
        const starknet = getStarknet()
        const kickStarkContract = new Contract(kickStarkAbi as Abi, kickStarkAddr, starknet.provider)
        const isOpen = await kickStarkContract.isOpen()
        const convertedIsOpen = isOpen == true
        setProjectIsOpen(convertedIsOpen)
        console.log("Project open?:", convertedIsOpen)
    }

    const fetchStage = async () => {
        const starknet = getStarknet()
        const kickStarkContract = new Contract(kickStarkAbi as Abi, kickStarkAddr, starknet.provider)
        const stageData = await kickStarkContract.getStage()
        setStage(stageData)
        console.log("Stage:", stageData)
    }

    const fetchmanagerBalance = async () => {
        const starknet = getStarknet()
        const kickStarkContract = new Contract(kickStarkAbi as Abi, kickStarkAddr, starknet.provider)
        const managerBalanceData = await kickStarkContract.getManagerBalance()
        const managerBalanceConverted = managerBalanceData.toString()
        setManagerBalance(managerBalanceConverted)
        console.log("Manager balance:", managerBalanceConverted)
    }

    // Validator functions

    const startProject = async () => {
        const wallet = getStarknet()
        if (wallet.isConnected) {
            const kickStarkContract = new Contract(kickStarkAbi as Abi, kickStarkAddr, wallet.account)
            setTxCount(txCount + 1)
            return kickStarkContract.start_project(validatorAddr)
        }
    }

    const nextStage = async () => {
        const wallet = getStarknet()
        if (wallet.isConnected) {
            const kickStarkContract = new Contract(kickStarkAbi as Abi, kickStarkAddr, wallet.account)
            setTxCount(txCount + 1)
            return kickStarkContract.nextStage()
        }
    }

    const closeProject = async () => {
        const wallet = getStarknet()
        if (wallet.isConnected) {
            const kickStarkContract = new Contract(kickStarkAbi as Abi, kickStarkAddr, wallet.account)
            setTxCount(txCount + 1)
            return kickStarkContract.closeProject()
        }
    }

    // Builder/owner functions

    const claim = async () => {
        const wallet = getStarknet()
        if (wallet.isConnected) {
            const kickStarkContract = new Contract(kickStarkAbi as Abi, kickStarkAddr, wallet.account)
            setTxCount(txCount + 1)
            return kickStarkContract.project_claim()
        }
    }

    // Contributor functions

    const contribute = async (amount: number) => {
        const wallet = getStarknet()
        if (wallet.isConnected) {
            const kickStarkContract = new Contract(kickStarkAbi as Abi, kickStarkAddr, wallet.account)
            setTxCount(txCount + 1)
            return kickStarkContract.contribute(amount)
        }
    }

    const withdraw = async () => {
        const wallet = getStarknet()
        if (wallet.isConnected) {
            const kickStarkContract = new Contract(kickStarkAbi as Abi, kickStarkAddr, wallet.account)
            setTxCount(txCount + 1)
            return kickStarkContract.contributor_withdraw()
        }
    }

    return (
        <div className="w-auto h-auto circuitBoard">
            <div className="mb-12">
                <Header title={project.name} />
            </div>
            <div className="flex pl-[15%] pr-[20%] pb-16 text-lg text-brand-gray">
                <div className="w-[50%]">
                    <div className="text-3xl">Building on {project.network}</div>
                    <div className="text-xl">
                        <span className="text-3xl text-brand-green"> &bull; </span>
                        {project.category1}
                    </div>
                    <div className="text-xl">
                        <span className="text-3xl text-brand-green"> &bull; </span>
                        {project.category2}
                    </div>
                </div>
                <div className="w-[75%] text-left">
                    <p>{project.description}</p>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <Roadmap phaseDescriptions={project.phaseDescriptions} phaseSummaries={project.phaseSummaries} />
            </div>

            <div className="flex items-start mx-[10%] my-[5%]">
                <div className="w-auto border-8 border-brand-orange rounded-lg mr-8 px-12">
                    {userAddress === null ? (
                        <div className="my-5 text-brand-green text-2xl font-bold text-center">
                            Connect wallet to perform actions
                        </div>
                    ) : (
                        <>
                            <div className="my-5 text-brand-green text-2xl font-bold text-center">
                                Contributor Actions
                            </div>

                            <div className="flex flex-col mb-4">
                                <input id="deposit-amt" className="py-2 rounded-md" />
                                <button
                                    onClick={(e) =>
                                        contribute(
                                            parseFloat(
                                                (document.querySelector("#deposit-amt") as HTMLInputElement).value
                                            )
                                        )
                                    }
                                    className="mt-2 bg-brand-orange text-brand-darkest rounded-lg py-2 px-4"
                                    disabled={!projectIsOpen}
                                >
                                    Deposit Funds
                                </button>
                            </div>

                            <div className="flex flex-col">
                                <button
                                    onClick={withdraw}
                                    className="bg-brand-orange text-brand-darkest rounded-lg py-2 px-4"
                                    disabled={projectIsOpen}
                                >
                                    Investor Refund
                                </button>
                            </div>

                            <div className="mt-14 mb-4 text-brand-green text-2xl font-bold text-center">
                                Builder Actions
                            </div>

                            <div className="text-brand-gray text-xl font-bold text-center">
                                Claimable: {managerBalance}
                            </div>

                            <div className="flex flex-col">
                                <button
                                    onClick={claim}
                                    className="my-3 bg-brand-orange text-brand-darkest rounded-lg py-2 px-4"
                                    disabled={!projectIsOpen}
                                >
                                    Claim Funds
                                </button>
                            </div>

                            <div className="mt-14 mb-4 text-brand-green text-2xl font-bold text-center">
                                Validator Actions
                            </div>

                            <div className="flex flex-col">
                                <button
                                    onClick={startProject}
                                    className="my-3 bg-brand-orange text-brand-darkest rounded-lg py-2 px-4"
                                    disabled={projectIsOpen}
                                >
                                    Start Project
                                </button>
                            </div>

                            <div className="flex flex-col">
                                <button
                                    onClick={nextStage}
                                    className="my-3 bg-brand-orange text-brand-darkest rounded-lg py-2 px-4"
                                    disabled={!projectIsOpen}
                                >
                                    Complete Stage
                                </button>
                            </div>

                            <div className="flex flex-col mb-8">
                                <button
                                    onClick={closeProject}
                                    className="my-3 bg-brand-orange text-brand-darkest rounded-lg py-2 px-4"
                                    disabled={!projectIsOpen}
                                >
                                    Close Project
                                </button>
                            </div>
                        </>
                    )}
                </div>

                <div className="items-center flex justify-center">
                    <ProgressReport project={project} githubMetrics={githubMetrics} />
                </div>
            </div>
        </div>
    )
}

export default ProjectProfile

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { projectID } = context.params!
    let project
    let metrics
    let githubMetrics

    try {
        const result = await supabase.from("projects").select().eq("id", projectID)

        if (result.data) {
            project = result.data[0]
            console.log(project)

            const { data } = await apollo.query({
                query: gql`
            {
              ${project.loginType}(login: "${project.login}") {
                repository(name: "${project.repository}") {
                    object(expression: "main") {
                        ... on Commit {
                          history {
                            totalCount
                          }
                        }
                        repository {
                          pullRequests(states: MERGED) {
                            totalCount
                          }
                        }
                      }
                      pullRequests(last: 5, states: MERGED) {
                        nodes {
                          id
                          title
                          closedAt
                        }
                      }
                  }
              }
            }`
            })

            if (project.loginType === "organization") {
                metrics = data.organization.repository
            } else if (project.loginType === "user") {
                metrics = data.user.repository
            }

            console.log(metrics)

            const totalPullRequests = metrics.object.repository.pullRequests.totalCount
            const commits = metrics.object.history.totalCount
            const pullRequests = metrics.pullRequests.nodes

            console.log(pullRequests)

            githubMetrics = {
                totalPullRequests: totalPullRequests,
                commits: commits,
                pullRequests: pullRequests
            }
        }
    } catch (error) {
        console.log("Error", error)
    }

    return {
        props: {
            project,
            githubMetrics
        }
    }
}
