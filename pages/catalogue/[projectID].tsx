import { GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import Header from "../../components/header";
import ProgressReport from "../../components/projects/ProgressReport";
import Roadmap from "../../components/projects/Roadmap";
import ProjectList from "../../components/projects/List";
import { supabase } from "../../utils/supabase";
import { apollo } from "../../utils/apollo";
import { gql } from "@apollo/client";

// This page is initialized when builders sbmit the first form with profile info,
// then they arrive here to their new page to fill out roadmap building form.
// when roadmap is submitted the page displays profile card, roadmap component and progess/status component
// All contract interactions will happen from this page.
// Will include buttons to
// 1)deposit funds (always available),
// 2)builders submit checkpoint requirements/claim funds (diasbled unless wallet is project owner),
// 3)collect refunds (disabled unless wallet is investor).
// Each button should pop up a modal to set params of the transaction.

type Props = {
  project: object;
  metrics: object;
};

const ProjectProfile: NextPage<Props> = (props) => {
  const { project, metrics } = props;
  console.log(project, metrics);

  return (
    <div className="w-screen h-screen circuitBoard">
      {/* learn how to receive the project id/name here */}
      <div className="mb-8">
        <Header title="Project Name" />
      </div>
      <div className="flex pl-[15%] pr-[23%] pb-10 text-lg text-brand-gray">
        <div className="w-[40%]">
          <div className="text-3xl">Builing on Ethereum</div>
          <div className="text-xl"><span className="text-3xl text-brand-green"> &bull; </span>Category1</div>
          <div className="text-xl"><span className="text-3xl text-brand-green"> &bull; </span>Category2</div>
        </div>
        <div className="w-[75%] text-right">
          <p>This is the project description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[85%] bg-brand-orange opacity-[80%] rounded-lg">
          <Roadmap
            numCheckpoints={4}
            checkpoints={["stage1", "stage2", "stage3", "stage4"]}
          />
        </div>
        {/* <div className="pr-7">
          are we able to know the index we need to take from ProjectList?
                    if not, can build an individual Card here. 
          {ProjectList[2]}
        </div> */}
      </div>
      <div className="flex flex-col justify-between mx-12 pt-8 px-10">
        <div className="items-center flex justify-center mt-5">
          {/* if project is fully built, display progress report,
                    if not, display blank placeholder */}
          <ProgressReport />
        </div>
        <div className=" w-100% my-10 border-4 border-brand-orange p-5">
        <div className="my-10 text-brand-green text-2xl font-bold text-white text-center">Invest</div>

        <div className="pl-6 flex justify-between">
        
          <div className="flex flex-col">
            <input className="py-2 rounded-md"></input>
            <button className="my-3 bg-brand-orange text-brand-darkest rounded-lg py-2 px-4">
              Deposit Funds
            </button>
          </div>
          <div className="flex flex-col">
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
      </div>
    </div>
  );
};

export default ProjectProfile;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { projectID } = context.params!;
  let project;
  let metrics;

  try {
    const result = await supabase.from("projects").select().eq("id", projectID);

    if (result.data) {
      project = result.data[0];

      const { data } = await apollo.query({
        query: gql`
            {
              organization(login: "${project.organization}") {
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
            }`,
      });

      metrics = data.organization.repository;
    }
  } catch (error) {
    console.log("Error", error);
  }

  return {
    props: {
      project,
      metrics,
    },
  };
}
