import { GetServerSidePropsContext, NextPage } from "next"
import { getStarknet } from "get-starknet"
import { Abi, Contract } from "starknet"
import React, { useState, useContext, useEffect } from "react"
import Header from "../../components/header"
import ProgressReport from "../../components/projects/ProgressReport"
import Roadmap from "../../components/projects/Roadmap"
import { supabase } from "../../utils/supabase"
import { apollo } from "../../utils/apollo"
import { twitter } from "../../utils/twitter"
import { TwitterV2IncludesHelper } from "twitter-api-v2"
import { gql } from "@apollo/client"
import { Project } from "../../Types/Project"
import { AppContext } from "../../components/context/AppContext"
import kickStarkAbi from "../../abis/kickStarkAbi.json"
import { kickStarkAddr } from "../../config/goerli-alpha"

type Props = {
    project: Project
    githubMetrics: object
}

const ProjectProfile: NextPage<Props> = ({ project, githubMetrics }) => {
    const [projectIsClosed, setProjectIsClosed] = useState<boolean>(true)
    const { userAddress, setAppContext } = useContext(AppContext)

    useEffect(() => {
        setProjectStatus()
    }, [])

    const setProjectStatus = async () => {
        const starknet = getStarknet()
        const kickStarkContract = new Contract(kickStarkAbi as Abi, kickStarkAddr, starknet.provider)
        const isClosed = await kickStarkContract.isClosed()
        setProjectIsClosed(isClosed)
        console.log("Project closed?", isClosed == true, isClosed, isClosed[0].negative == true)
    }

    const contribute = async (amount: number) => {
        const wallet = getStarknet()
        if (wallet.isConnected) {
            const kickStarkContract = new Contract(kickStarkAbi as Abi, kickStarkAddr, wallet.account)
            // Project needs to be started first for this to work
            return kickStarkContract.contribute(amount)
        }
    }

    const claim = async () => {
        const wallet = getStarknet()
        if (wallet.isConnected) {
            const kickStarkContract = new Contract(kickStarkAbi as Abi, kickStarkAddr, wallet.account)
            return kickStarkContract.project_claim()
        }
    }

    const withdraw = async () => {
        const wallet = getStarknet()
        if (wallet.isConnected) {
            const kickStarkContract = new Contract(kickStarkAbi as Abi, kickStarkAddr, wallet.account)
            return kickStarkContract.contributor_withdraw()
        }
    }

    return (
        <div className="w-auto h-auto circuitBoard">
            <div className="mb-12">
                <Header title={project.name} />
            </div>
            <div className="flex pl-[15%] pr-[23%] pb-16 text-lg text-brand-gray">
                <div className="w-[40%]">
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
                <div className="w-[75%] text-right">
                    <p>{project.description}</p>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <Roadmap phaseDescriptions={project.phaseDescriptions} phaseSummaries={project.phaseSummaries} />
            </div>

            <div className="flex mx-[10%] my-[5%]">
                <div className=" w-100% border-8 border-brand-orange rounded-lg mr-8 p-12">
                    <div className="my-10 text-brand-green text-2xl font-bold text-center">Invest</div>

                    <div className="justify-between p-8">
                        {!projectIsClosed && (
                            <div className="flex flex-col pb-6">
                                {userAddress !== null && <input className="py-2 rounded-md"></input>}
                                <button
                                    onClick={(e) => contribute(parseFloat((e.target as HTMLInputElement).value))}
                                    className="my-3 bg-brand-orange text-brand-darkest rounded-lg py-2 px-4"
                                    disabled={userAddress === null}
                                >
                                    {userAddress === null && "Connect to "}Deposit Funds
                                </button>
                            </div>
                        )}
                        {userAddress !== null && (
                            <>
                                <div className="flex flex-col pb-6">
                                    {/* <input className="py-2 rounded-md"></input> */}
                                    <button
                                        onClick={claim}
                                        className="my-3 bg-brand-orange text-brand-darkest rounded-lg py-2 px-4"
                                    >
                                        Builder Claim
                                    </button>
                                </div>
                                {projectIsClosed && (
                                    <div className="flex flex-col">
                                        {/* <input className="py-2 rounded-md"></input> */}
                                        <button
                                            onClick={withdraw}
                                            className="my-3 bg-brand-orange text-brand-darkest rounded-lg py-2 px-4"
                                        >
                                            Investor Refund
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
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
    let tweets

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
                  }
              }
            }`
            })

            if (project.loginType === "organization") {
                metrics = data.organization.repository
            } else if (project.loginType === "user") {
                metrics = data.user.repository
            }

            const mergedPullRequests = metrics.object.repository.pullRequests.totalCount
            const commits = metrics.object.history.totalCount

            githubMetrics = {
                mergedPullRequests: mergedPullRequests,
                commits: commits
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
