import { GetServerSidePropsContext, NextPage } from "next"
import React from "react"
import Header from "../../components/header"
import ProgressReport from "../../components/projects/ProgressReport"
import Roadmap from "../../components/projects/Roadmap"
import { supabase } from "../../utils/supabase"
import { apollo } from "../../utils/apollo"
import { gql } from "@apollo/client"
import { Project} from "../../Types/Project"

type Props = {
    project: Project
    metrics: object
}

const ProjectProfile: NextPage<Props> = ({project, metrics}) => {
    // console.log("pages")
    // console.log(project, metrics)

    return (
        <div className="w-auto h-auto circuitBoard">
            <div className="mb-12">
                <Header title={project.name} />
            </div>
            <div className="flex pl-[15%] pr-[23%] pb-16 text-lg text-brand-gray">
                <div className="w-[40%]">
                    <div className="text-3xl">Building on {project.network}</div>
                    <div className="text-xl">
                        <span className="text-3xl text-brand-green">
                            {" "}
                            &bull;{" "}
                        </span>
                        {project.category1}
                    </div>
                    <div className="text-xl">
                        <span className="text-3xl text-brand-green">
                            {" "}
                            &bull;{" "}
                        </span>
                        {project.category2}
                    </div>
                </div>
                <div className="w-[75%] text-right">
                    <p>{project.description}
                    </p>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <Roadmap
                    phaseDescriptions={project.phaseDescriptions}
                    phaseSummaries={project.phaseSummaries}
                />
            </div>

            <div className="flex mx-[10%] my-[5%]">
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
                    <ProgressReport project={project} metrics={metrics}/>
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
