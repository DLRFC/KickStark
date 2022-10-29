import type { NextPage } from "next";
import Header from "../../components/header";
import { supabase } from "../../utils/supabase";
import Card from "../../components/projects/Card";
import { Project } from "../../Types/Project"

type Props = {
  projects: Project[]
}

const FullCatalogue: NextPage<Props> = ({projects}) => {

  return (
    <div className="w-auto h-auto circuitBoard">
      <Header title="catalogue" />
      <div className="w-full text-right pr-[20%] pt-2 pb-6 text-brand-gray text-md ">
        <p>Select any project to view details. </p>
      </div>

      <div className="grid grid-cols-3 w-full px-[8%] pb-[8%] justify-items-center">
        {projects.map((project) => {
          return (
            <Card
              project={project}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FullCatalogue;

export async function getServerSideProps() {
  const { data } = await supabase.from("projects").select();

  return {
    props: {
      projects: data,
    },
  };
}
