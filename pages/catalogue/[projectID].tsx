import { GetServerSidePropsContext, NextPage } from "next"
import React from "react"
import Header from "../../components/header"
import ProgressReport from "../../components/projects/ProgressReport"
import Roadmap from "../../components/projects/Roadmap"
import { supabase } from "../../utils/supabase"
import { apollo } from "../../utils/apollo"
import { gql } from "@apollo/client"

type Props = {
    project: object
    metrics: object
}

const ProjectProfile: NextPage<Props> = (props) => {
    const { project, metrics } = props
    console.log(project, metrics)

    return (
        <div className="w-screen h-screen circuitBoard">
            <div className="mb-8">
                <Header title={"Project Name"} />
            </div>
            <div className="flex pl-[15%] pr-[23%] pb-10 text-lg text-brand-gray">
                <div className="w-[40%]">
                    <div className="text-3xl">Building on Ethereum</div>
                    <div className="text-xl">
                        <span className="text-3xl text-brand-green">
                            {" "}
                            &bull;{" "}
                        </span>
                        Category1
                    </div>
                    <div className="text-xl">
                        <span className="text-3xl text-brand-green">
                            {" "}
                            &bull;{" "}
                        </span>
                        Category2
                    </div>
                </div>
                <div className="w-[75%] text-right">
                    <p>
                        This is the project description. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <Roadmap
                    phaseDescriptions={[["Initialize project on KickStark", "Create detailed roadmap", "Begin development"], ["phase2 item1 description", "phase2 item2 description ", "phase2 item3 description"], ["phase3 item1 description", "phase3 item2 description ", "phase3 item3 description"], ["phase4 item1 description", "phase4 item2 description ", "phase4 item3 description"], ["phase5 item1 description", "phase5 item2 description ", "phase5 item3 description"]]}
                    phaseSummaries={['This is a summary of Phase1, ideally it should be about this long', 'This is a summary of Phase2, ideally it should be about this long', 'This is a summary of Phase3, ideally it should be about this long', 'This is a summary of Phase4, ideally it should be about this long', 'This is a summary of Phase5, ideally it should be about this long']}
                />
            </div>

            <div className="flex mx-[10%] mb-12 pt-10">
                <div className=" w-100% border-8 border-brand-orange rounded-lg mr-8 p-12">
                    <div className="my-10 text-brand-green text-2xl font-bold text-center">
                        Invest
                    </div>

                    <div className="justify-between p-8">
                        <div className="flex flex-col pb-6">
                            <input className="py-2 rounded-md"></input>
                            <button className="my-3 bg-brand-orange text-brand-darkest rounded-lg py-2 px-4">
                                Deposit Funds
                            </button>
                        </div>
                        <div className="flex flex-col pb-6">
                            <input className="py-2 rounded-md"></input>
                            <button className="my-3 bg-brand-orange text-brand-darkest rounded-lg py-2 px-4">
                                Builder Claim
                            </button>
                        </div>
                        <div className="flex flex-col">
                            <input className="py-2 rounded-md"></input>
                            <button className="my-3 bg-brand-orange text-brand-darkest rounded-lg py-2 px-4">
                                Investor Refund
                            </button>
                        </div>
                    </div>
                </div>

                <div className="items-center flex justify-center">
                    <ProgressReport />
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

    try {
        const result = await supabase
            .from("projects")
            .select()
            .eq("id", projectID)

        if (result.data) {
            project = result.data[0]
            console.log(project)

            const { data } = await apollo.query({
                query: gql`
            {
              ${project.loginType}(login: "${project.login}") {
                repository(name: "${project.repository}") {
                    id
                    url
                    pullRequests(last: 5) {
                      totalCount
                      edges {
                        node {
                          commits {
                            totalCount
                          }
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
        }
    } catch (error) {
        console.log("Error", error)
    }

    return {
        props: {
            project,
            metrics
        }
    }
}
