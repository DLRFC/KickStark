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
          <div className="text-3xl">Building on Ethereum</div>
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
      </div>
      <div className="w-[70%] ml-[15%] p-5 items-center rounded-lg text-lg text-brand-dark bg-brand-gray opacity-[75%]">
        <p className="pb-2">&bull; This doesn't work yet</p>
        <p className="pb-2">&bull; But it should open to display</p>
        <p>&bull; The items that describe each stage</p>
      </div>

      <div className="flex mx-[10%] mb-12 pt-10">      
        <div className=" w-100% border-8 border-brand-orange rounded-lg mr-8 p-12">
          <div className="my-10 text-brand-green text-2xl font-bold text-center">Invest</div>

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
          {/* if project is fully built, display progress report,
                    if not, display blank placeholder */}
          <ProgressReport />
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
